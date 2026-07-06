# TAYO Deployment Notes

Last updated: July 6, 2026

## Version History

GitHub stores the project history through Git commits. Each commit acts as a rollback checkpoint, so a previous working version can be restored if a later change breaks the prototype.

## GitHub Pages

GitHub Pages should publish from the `main` branch and the repository root folder (`/`). The app is static, so `index.html` must stay at the root with `styles.css`, `app.js`, and `assets/` kept in their current relative structure.

GitHub Pages keeps the same public link and shows the latest pushed version from the configured branch and folder.

## Vercel

Vercel automatic Git deployments are disabled through `vercel.json`:

```json
{
  "git": {
    "deploymentEnabled": false
  }
}
```

Vercel keeps the same production link, but it should only update when a chosen version is manually deployed or promoted.

## Update Flow

1. Make changes locally.
2. Commit the working version with a clear message.
3. Push to GitHub when ready for GitHub Pages to update.
4. Manually deploy or promote on Vercel only when that version should become the Vercel production version.
