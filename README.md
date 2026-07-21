# TAYO GitHub Pages Prototype

This folder is the active TAYO V2 Git repository:

`/Users/stephensevilla/Documents/Projects/TAYO/app`

Edit and manage the prototype directly here.

## Files

- `index.html` controls the page structure, filters, buttons, and visible text.
- `styles.css` controls the visual design.
- `app.js` controls the event data, filters, matching logic, details modal, map pins, saved/interested state, archive state, and onboarding demo.
- `assets/events/` and `assets/places/` store the local photos used by the live site.

## How to Preview

Open `index.html` in a browser.

For a more realistic preview, run a local server from this folder:

```bash
python3 -m http.server 8788
```

Then open:

```text
http://127.0.0.1:8788/
```

## Where to Edit Events

Edit the `events` array in `app.js`.

Each event uses:

- `type`: `social` or `org`
- `energy`: `chill`, `outgoing`, or `both`
- `area`: `north`, `central`, `south`, or `outside`
- `interests`: tags used by the filters and match score

The current prototype includes 40 events synced across Home, Quick Match, Events, and Map.

When an event is marked Interested or Pass, it leaves the recommendation queue. Passed events move to Archive and can be restored.

## Publish Flow

The real GitHub repo is this folder: `/Users/stephensevilla/Documents/Projects/TAYO/app`.

Commit and push only from `/Users/stephensevilla/Documents/Projects/TAYO/app`.
