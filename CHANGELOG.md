# Changelog

## 2026-07-10

### Map category filters
- Map: Added SVG icons to category filter chips with text fallbacks for categories without exported icons.
- Map: Reused category SVG icons inside map pins while preserving text fallbacks for missing icons.

## 2026-07-06

### Persistent project context
- Changed screen/component: project documentation and future Codex handoff.
- What changed: Added `TAYO_CONTEXT.md` with project structure, app flow, HTML containers, JavaScript architecture, styling notes, tutorial overlay guidance, event date logic, deployment rules, and Git safety workflow.
- Why it changed: Future Codex sessions need a single source of truth before editing the prototype.
- Known issues: None.

## 2026-07-05

### Profile setup typography
- Changed screen/component: `WHO YOU?` profile setup screen.
- What changed: Added `--display-font` as the shared TAYO font token and forced the profile setup panel, labels, form controls, and buttons to inherit it.
- Why it changed: The profile screen was visually close, but native controls could fall back to browser typography and feel separate from the rest of TAYO.
- Known issues: The font stack still depends on the browser having `Helvetica World`; if unavailable, it falls back to Helvetica/system sans.

### Onboarding dim overlay
- Changed screen/component: onboarding demo overlay.
- What changed: Added a `tour-active` layer contract so app content and bottom nav stay under the scrim, the fake iPhone status bar stays clean, and the tour card remains above the dim layer.
- Why it changed: The overlay was already rendered directly inside `.iphone-screen`, but repeated z-index rules and the bottom nav layer made the Home header/stat area appear brighter than the rest of the dimmed app.
- Known issues: None found in code review; visual QA should confirm in the browser.
