# TAYO GitHub Pages Prototype

This is the local GitHub Pages-ready version of the TAYO prototype. Edit this folder first, then sync it into the real cloned GitHub repo when you are ready to publish.

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

For the real GitHub repo, sync this folder into `/Users/stephensevilla/Documents/TAYO-App/` with:

```bash
rsync -av --delete --exclude=".git" "/Users/stephensevilla/Documents/Codex/2026-06-17/files-mentioned-by-the-user-decsci/tayo-github-pages/" "/Users/stephensevilla/Documents/TAYO-App/"
```

Then commit and push only from `/Users/stephensevilla/Documents/TAYO-App/`.
