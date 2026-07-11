# TAYO Codex Fast Rules

This is a static HTML/CSS/JS prototype inside a fake iPhone frame.

Core files:
- index.html = DOM structure
- styles.css = all styling, contains many repeated late override blocks
- app.js = data, rendering, routing, event actions

Important:
- Do NOT update Vercel.
- Do NOT push.
- Do NOT commit unless explicitly asked.
- Do NOT touch map icon files unless the task specifically says map icons.
- Do NOT edit event data unless the task specifically says event data.
- Prefer the smallest possible patch.
- Do not scan the whole repo unless necessary.
- Avoid broad refactors.
- If a task takes more than 10 minutes, stop and report why.

Known app structure:
- .iphone-screen is the fake phone viewport.
- .iphone-status is fake phone status bar.
- #appShell is the logged-in app.
- .rail is the floating bottom nav.
- .view sections are tabs: #home, #map, #quickmatch, #events, #profile.
- styles.css has many repeated overrides, so inspect the latest/bottom-most matching rule before editing.

Workflow:
1. Run git status --short --branch.
2. Inspect only the exact selectors/functions needed.
3. Patch only the requested issue.
4. Run node --check app.js if app.js changed.
5. Show git diff --stat.
6. Stop. Do not continue polishing.
