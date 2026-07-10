# TAYO Phone Restructure Plan

## Current Problems

The TAYO prototype is a mobile app displayed inside a fake iPhone frame, but the current shell mixes device chrome, app content, scrolling, navigation, and overlays in ways that make small fixes risky.

The main fragile areas are:

- `.iphone-screen` contains the fake status bar, auth flow, app shell, event detail overlay, tutorial overlay, and home indicator as sibling layers, but their responsibilities are not clearly separated.
- `.auth-flow` and `.app` both behave like full phone-sized scroll containers. Individual screens and later CSS overrides also add their own scroll behavior, so there is no single trusted scroll owner.
- The bottom navigation is currently represented by `.rail`, even though project context refers to `.bottom-nav`. It lives inside the app shell while also being positioned like a fixed phone control.
- Tutorial and event overlays are direct children of `.iphone-screen`, which is conceptually good, but their z-index relationship with `.iphone-status`, `.rail`, and later override blocks is inconsistent.
- `.iphone-status` currently has its own high z-index, so overlays can dim app content while leaving the status area visually too bright.
- `styles.css` has many later override blocks from iterative fixes. A selector that looks correct earlier in the file may be overwritten much later.
- App state and visual shell state are coupled in `app.js`: functions like `showPanel()`, `showApp()`, `openTutorial()`, and `closeTutorial()` directly toggle auth, app, route, and overlay layers.

The result is that fixes to one screen can accidentally affect the fake phone frame, bottom nav, modal layering, or scroll limits on another screen.

## Proposed Layer Architecture

The browser page should only center the fake phone. The fake phone should own all app UI layers.

Recommended structure:

```html
<body>
  <div class="device-stage">
    <div class="iphone-frame">
      <div class="iphone-screen">
        <div class="phone-status-layer">
          <span class="iphone-time">9:41</span>
          <span class="dynamic-island"></span>
          <span class="iphone-system-icons">...</span>
        </div>

        <div class="app-layer">
          <div class="app-scroll" id="appScroll">
            <section class="auth-flow" id="authFlow">
              <!-- onboarding panels -->
            </section>

            <div class="app" id="appShell">
              <main id="appContent">
                <!-- active app page -->
              </main>
            </div>
          </div>

          <nav class="bottom-nav">
            <!-- Home, Map, Quick Match, Events, Profile -->
          </nav>
        </div>

        <div class="overlay-layer" id="overlayLayer"></div>

        <div class="modal-layer" id="modalLayer">
          <div class="tour-overlay" id="tourOverlay">
            <article class="tour-card">...</article>
          </div>

          <div class="detail-overlay" id="eventDetail">
            <!-- event modal -->
          </div>
        </div>

        <div class="iphone-home-indicator"></div>
      </div>
    </div>
  </div>
</body>
```

Migration note: the current `.rail` does not need to be renamed immediately. It can first be treated as the bottom nav layer through CSS aliases or by adding a `.bottom-nav` class to the existing element. Avoid changing every JS selector at once.

Layer responsibilities:

- Browser page: no app UI responsibility; only page background.
- `.device-stage`: centers the phone mockup.
- `.iphone-frame`: visual shell only, including border, shadow, and side buttons.
- `.iphone-screen`: real app viewport; `position: relative`; `overflow: hidden`.
- `.phone-status-layer`: fake iPhone status bar and dynamic island only.
- `.app-layer`: app runtime surface below status bar.
- `.app-scroll`: only normal scroll container for auth and app pages.
- `.bottom-nav`: fixed phone nav inside the app viewport, not part of document flow.
- `.overlay-layer`: scrim/dim layer that covers phone UI when needed.
- `.modal-layer`: highest interactive layer for tutorial cards, event detail modals, and future dialogs.

## Scroll Rules

Only one normal page scroll container should exist inside the phone:

```css
.app-scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
```

Rules:

- Browser `body` should not be used to scroll through app screens.
- `.device-stage` should only center the phone and should not contain app scroll logic.
- `.iphone-frame` should not scroll.
- `.iphone-screen` should be `overflow: hidden` so content never escapes the rounded phone viewport.
- `.phone-status-layer` should never scroll.
- `.bottom-nav` should never scroll and should not take up document flow space.
- `.app-scroll` should own vertical scrolling for Home, Map, Quick Match, Event Overview, Profile, and onboarding panels.
- `.app-scroll` top padding should account for `--phone-status-height`.
- `.app-scroll` bottom padding should account for `--bottom-nav-height`, `--home-indicator-height`, and `--phone-safe-bottom`.
- Screen content should stop naturally when the last useful element is visible above the bottom nav.
- Modals can have internal scrolling if their content is taller than the modal, but background app scrolling should be disabled or visually inactive while a modal is open.

Important implementation detail:

`window.scrollTo(0, 0)` should not be relied on for internal phone navigation. Route changes should reset `.app-scroll.scrollTop = 0`.

## Z-Index Rules

Use a clear z-index scale so overlays do not fight the fake status bar or bottom nav.

Recommended scale:

```css
:root {
  --z-app-content: 10;
  --z-bottom-nav: 30;
  --z-status: 40;
  --z-overlay: 70;
  --z-modal: 80;
  --z-phone-hardware: 90;
}
```

Normal state:

- App content: `var(--z-app-content)`
- Bottom nav: `var(--z-bottom-nav)`
- Status bar: `var(--z-status)`
- Home indicator and hardware decorations can stay visually above app content.

Modal or tutorial state:

- Overlay: `var(--z-overlay)`
- Tutorial/event modal card: `var(--z-modal)`
- Bottom nav must be below the overlay during tutorial.
- Status bar should be dimmed if the tutorial is meant to dim the whole phone screen.
- If a future design wants the fake hardware/status area clean, use an explicit overlay top offset instead of relying on accidental stacking.

Suggested comment to keep in CSS:

```css
/* Phone layer order: app content < bottom nav/status < overlay < modal card.
   The tutorial overlay must cover nav/status too so no bright strip remains. */
```

## CSS Variables

Introduce phone shell variables before changing layout rules:

```css
:root {
  --phone-status-height: 64px;
  --bottom-nav-height: 78px;
  --home-indicator-height: 20px;
  --phone-safe-top: 16px;
  --phone-safe-bottom: 16px;
  --app-horizontal-padding: 28px;
}
```

Optional companion variables:

```css
:root {
  --phone-screen-radius: 52px;
  --phone-frame-radius: 66px;
  --z-app-content: 10;
  --z-bottom-nav: 30;
  --z-status: 40;
  --z-overlay: 70;
  --z-modal: 80;
}
```

These variables should replace hardcoded repeated values across auth panels, app pages, bottom nav spacing, modal offsets, and route containers.

## Migration Plan

1. Document current selectors

Capture the current shell selectors and screenshots before changing layout. Focus on `.device-stage`, `.iphone-frame`, `.iphone-screen`, `.iphone-status`, `.auth-flow`, `#appShell`, `#appContent`, `.rail`, `.tour-overlay`, `.tour-card`, `.detail-overlay`, and `.iphone-home-indicator`.

2. Introduce CSS variables

Add the phone shell variables without changing behavior yet. Replace obvious repeated constants only where the replacement is mechanically safe.

3. Wrap and standardize the app scroll container

Introduce `.app-scroll` as the single scroll owner. Keep existing `#authFlow` and `#appShell` IDs, but place their scrolling responsibility under the new scroll layer. Update route changes to reset `.app-scroll.scrollTop`.

4. Stabilize bottom nav

Treat the current `.rail` as the bottom nav layer. Either add a `.bottom-nav` class to the existing element or create an alias selector. Make it absolute inside `.iphone-screen`, outside normal page flow, and ensure app content bottom padding accounts for it.

5. Stabilize overlays and modals

Move or standardize tutorial and event modal rendering into explicit overlay/modal layers. Make overlay coverage relative to `.iphone-screen`, not browser body and not only `#appContent`. Make z-index order explicit.

6. Test each screen

Test Welcome, Signup, Login, Sino Ka, Org Passcode, Organizer Preview, WHO YOU, Interests, Personality, Result, First Event, Home, Map, Quick Match, Event Overview, Profile, tutorial overlay, and event detail modal.

7. Remove obsolete overrides only after confirming

After screenshots confirm the shell works, remove or consolidate old bottom-of-file overrides. Do not delete broad override blocks blindly; check which screens still depend on them.

## Risk Assessment

Onboarding risk:

Auth panels currently depend on full phone height and custom panel centering. Moving scroll ownership may shift vertical alignment on Welcome, Sino Ka, WHO YOU, personality, and first-event screens.

Home risk:

Home uses fixed-looking cards and tutorial overlay behavior. Z-index changes can affect whether the tutorial dims the status bar and bottom nav correctly.

Map risk:

Map has sticky/filter-like areas, a tall custom map, and card details. It is likely to expose scroll and clipping bugs first.

Quick Match risk:

Quick Match combines a large feature card, filters, actions, small event list, and event detail navigation. Bottom nav spacing and scroll reset need careful testing.

Event Overview risk:

Calendar grids are height-sensitive. Changing scroll padding can hide the last calendar rows or selected-day event lists behind the nav.

Profile risk:

Profile expands interests and subtags. If the scroll container changes, expanded editors may open behind the bottom nav unless bottom padding is correct.

Tutorial overlay risk:

The current bug is a layering problem. Refactoring layers should fix it, but only if overlay, status, bottom nav, and card z-index are tested together.

Event modal risk:

The event detail modal needs its close button below the notch/dynamic island and its content scrollable without leaking behind the bottom nav or home indicator.

## Safer Alternative

If the demo deadline is close, do not do the full shell refactor immediately. Stabilize the worst problems with a smaller path:

- Add the phone shell variables.
- Add explicit z-index variables and comments.
- Keep current DOM structure.
- Treat `.rail` as the bottom nav layer through CSS aliasing.
- Make `.tour-overlay` cover the full `.iphone-screen` and sit above both `.iphone-status` and `.rail`.
- Ensure `.tour-card` sits above the overlay.
- Consolidate only the final conflicting overlay/status/nav rules.
- Avoid moving auth flow, app shell, or modals until after the demo.

This would reduce risk while fixing the most visible phone-shell issue: overlays and bottom nav layering.

## Recommendation

I recommend **B. small stabilization fixes first**.

Reason: the app is already close enough for panel testing, but the shell has many accumulated CSS overrides. A full phone shell refactor now would improve long-term maintainability, but it risks breaking onboarding, map, profile, and modal behavior right before submission.

Best path:

1. First, stabilize z-index, overlay coverage, bottom nav spacing, and scroll padding using the current DOM.
2. Commit that working state.
3. After the demo or deadline, do the full phone shell refactor in a dedicated pass with screenshots for every screen.

Do **not** choose A unless there is enough time to test every screen carefully. Choose C only if the current build is already being submitted and no more UI risk is acceptable.
