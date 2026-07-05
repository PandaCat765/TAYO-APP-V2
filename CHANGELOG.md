# Changelog

## 2026-07-05

### Profile setup typography
- Changed screen/component: `WHO YOU?` profile setup screen.
- What changed: Added `--display-font` as the shared TAYO font token and forced the profile setup panel, labels, form controls, and buttons to inherit it.
- Why it changed: The profile screen was visually close, but native controls could fall back to browser typography and feel separate from the rest of TAYO.
- Known issues: The font stack still depends on the browser having `Helvetica World`; if unavailable, it falls back to Helvetica/system sans.

### Onboarding dim overlay
- Changed screen/component: onboarding demo overlay.
- What changed: Raised the onboarding scrim above app content and bottom nav, started it below the fake iPhone status bar, and kept the tour card above the scrim.
- Why it changed: The demo modal was bright, but parts of the app behind it were not consistently dimmed because later CSS lowered the overlay z-index.
- Known issues: None found in code review; visual QA should confirm in the browser.
