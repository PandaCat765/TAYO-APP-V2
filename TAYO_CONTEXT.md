# TAYO App Context

## Project Folder
`/Users/stephensevilla/Documents/Codex/2026-06-17/files-mentioned-by-the-user-decsci/tayo-github-pages/`

## Project Type
- Static HTML/CSS/JS prototype.
- No backend.
- No database.
- No framework.
- No build tool.
- Runs directly from `index.html`.
- Compatible with GitHub Pages.

## Main Files
- `index.html` - static HTML structure, screen containers, onboarding panels, app shell, modals.
- `styles.css` - full visual design, iPhone frame, app layout, buttons, forms, cards, modals, responsive sizing.
- `app.js` - app data, state, routing, onboarding flow, matching logic, map logic, calendar logic, event actions, and event detail modal.
- `assets/` - logo, TAYO type SVGs, event photos, place photos.

## App Concept
TAYO is an Ateneo event discovery prototype that helps students discover events based on:
- profile information
- interests
- subtags
- social/personality style
- event type
- location
- access rules

## Main User Flow
- Welcome/login/signup
- Role selection / "Sino Ka?"
- Student profile setup / "WHO YOU?"
- Interest selection
- Personality questions
- Result screen
- Tutorial/onboarding overlay
- Main app tabs

## Main App Tabs
- Home
- Map
- Quick Match
- Event Overview
- Profile

## HTML Structure
Important containers:
- `.device-stage` - outer browser staging area for the phone prototype.
- `.iphone-frame` - visual iPhone shell around the app viewport.
- `.iphone-screen` - clipped app viewport containing the fake status bar, auth flow, app shell, overlays, and modals.
- `.iphone-status` - fake iPhone status bar.
- `.dynamic-island` - fake Dynamic Island/notch.
- `#authFlow` - login/signup/onboarding flow before the app shell.
- `#appShell` - logged-in app shell for the main tabs.
- `#appContent` - route content target rendered by `renderApp()`.
- `.bottom-nav` - fixed in-phone tab navigation for Home, Map, Quick Match, Event Overview, and Profile.
- `#eventModal` - event/place detail modal surface.

Onboarding panels using `data-panel`:
- `welcome` - initial landing screen.
- `signup` - Ateneo email signup.
- `login` - returning user login.
- `role` - "Sino Ka?" user/org choice.
- `orgPasscode` - org passcode gate. The accepted demo passcode is `TAYO-ORG`.
- `organizer` - organizer preview/event card setup.
- `profileSetup` - "WHO YOU?" student basics.
- `interests` - main interests and subtags.
- `personality` - "MAY PA SOMETHING KA?" personality questions.
- `result` - TAYO type result.
- `tutorial` - app tutorial overlay.
- `firstEvent` - first-event decision / skip-or-sign-up.

## JavaScript Architecture
`app.js` is the main app controller. It owns the prototype data, local state, route rendering, event actions, and onboarding flow.

Important data/state:
- `courses` - course options for profile setup and profile editing.
- `interestGroups` - main interest categories and their subtags.
- `personalityTypes` - TAYO type metadata and matching descriptions.
- `personalityTypeImages` - TAYO type art assets.
- `places` - campus map locations, categories, directions, and metadata.
- `events` - main event dataset used across Home, Map, Quick Match, and Event Overview.
- `additionalEventSeeds` - extra event seed data used to reach the full prototype event set.
- `eventOverrides` - per-event details that override generated defaults.
- `eventMedia` - event photo mappings.
- `placeMedia` - place photo mappings.
- `state` - current user profile, route, selected filters, saved/interested events, passed events, modal state, and onboarding state.

Core functions:
- `showPanel(panel)` - swaps onboarding/auth panels.
- `showApp(route)` - exits auth flow and shows the main app shell.
- `routeTo(route)` - changes the active tab/route.
- `renderApp()` - rerenders the active app route and shared shell pieces.
- `renderHome()` - renders the Home dashboard, recommended events, and interested events.
- `renderMap()` - renders campus map filters, event/location pins, and selected place details.
- `renderQuickMatch()` - renders the recommendation queue and event actions.
- `renderEventOverview()` - renders the calendar-style event overview.
- `renderProfile()` - renders editable profile, interests, and support sections.
- `openEventDetail(eventId)` - opens the event detail modal.
- `markInterested(eventId)` - saves/interests an event and syncs Home/other views.
- `passEvent(eventId)` - archives/passes an event from the recommendation flow.
- `signupEvent(eventId)` - opens the external signup placeholder in a new tab.

## Styling System
Important design tokens:
- `--ink` - primary dark brown text/border color.
- `--paper` - cream app background.
- `--display-font` - shared display font token for TAYO headings and app typography where applied.
- Brand colors include pink, yellow, blue, brown, and cream. Existing CSS variables include `--coral-soft`, `--sun-soft`, `--blue`, `--ink`, and `--paper`.

Important warning:
`styles.css` has many later override blocks because the prototype was iterated many times. Always check the bottom of `styles.css` before adding or changing CSS because later selectors may override earlier styles.

## Onboarding / Tutorial Overlay
- `.tour-overlay` is the dim layer used during the tutorial/onboarding card flow.
- `.tour-card` is the bright, clickable tutorial card above the dim layer.
- Overlay should dim the full app behind the card.
- Card should stay bright and clickable.
- Be careful with z-index and stacking contexts.
- The fake iPhone status bar may remain clean/undimmed, but app content and bottom nav behind the tutorial should be uniformly dimmed.

## Event Date Logic
- Home should show the actual current local date.
- Recommended events should be future-only.
- Recommended events should be sorted chronologically.
- Event years should adapt dynamically:
  - non-January events use the current year
  - January events use current year + 1
- Date logic should be centralized in helper functions instead of duplicated.

## Deployment Workflow
This TAYO app has two public versions:

1. GitHub Pages
- GitHub Pages should always show the latest pushed version from the main branch.
- Normal app fixes should be committed and pushed to GitHub.
- Pushing to GitHub is allowed during normal work.
- GitHub Pages can update automatically.
- GitHub Pages should keep the same public link.

2. Vercel
- Vercel should keep the same production link.
- Vercel should NOT auto-update from every GitHub push.
- Vercel should only update when the user explicitly says: "update vercel".
- If the user does not say "update vercel", do not deploy, promote, or update Vercel production.

When the user says "update vercel", interpret it as:
Deploy the current clean committed version of the TAYO app to the existing Vercel production project/link.

Before updating Vercel:
1. Run git status.
2. Confirm the working tree is clean.
3. Show the latest commit hash and commit message.
4. Confirm that this latest commit is the version being deployed.
5. Do not change app code.
6. Do not create a new Vercel project.
7. Do not create a new Vercel link.
8. Use the existing Vercel project so the production URL stays the same.

Then update Vercel:
1. Use Vercel CLI if available and authenticated.
2. Deploy/promote to production only.
3. Keep the same production link.
4. After deployment, show:
   - deployed commit hash
   - deployed commit message
   - Vercel production URL
   - confirmation that production deployment succeeded

Important:
- Normal instruction = commit and push to GitHub only.
- "update vercel" = deploy/promote current clean committed version to Vercel production.
- Never update Vercel unless the user explicitly says "update vercel".

## Git / Version Safety Workflow
- Before every new requested change, run git status.
- If the current working state is good but uncommitted, commit it first.
- Commit every major working iteration.
- Do not create duplicate backup folders.
- Do not commit broken experiments as final checkpoints.
- If a change breaks the UI, revert to the last working commit instead of stacking messy fixes.
- Use clear commit messages.

## Rules for Future Codex Work
1. Read `TAYO_CONTEXT.md` before making changes.
2. Update `TAYO_CONTEXT.md` whenever important context changes.
3. Update `DEPLOYMENT.md` when deployment workflow changes.
4. Update `CHANGELOG.md` for meaningful changes.
5. Do not move files unless explicitly asked.
6. Do not add frameworks/build tools unless explicitly asked.
7. Do not change app logic when the request is only documentation/deployment.
8. Do not update Vercel unless the user explicitly says "update vercel".
