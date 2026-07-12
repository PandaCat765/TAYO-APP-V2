# CODEX CURRENT TASK CONTEXT

Use this file first. Do not read long context files unless the task specifically requires it.

## Project
TAYO is a static HTML/CSS/JS prototype inside a fake iPhone frame.

Core files:
- index.html = DOM structure
- styles.css = styling
- app.js = app data, routing, rendering, recommendation logic, event modal

## Hard rules
- Do NOT deploy to Vercel.
- Do NOT run vercel.
- Do NOT push unless explicitly asked.
- Do NOT refactor the whole app.
- Keep changes small and scoped.
- If a task takes more than 15 minutes, stop and report the blocker.
- Avoid reading the whole repo.
- Inspect only the functions/selectors needed for the task.
- Always run node --check app.js if app.js changes.
- End with git diff --stat.

## Current priority
We are preparing for another tester round on Vercel soon.

Current feature to fix:
Event Overview calendar clickable dates.

Desired behavior:
- Calendar dates should be visibly clickable.
- Clicking a date selects it.
- Selected date is highlighted.
- Events below the calendar update to show only events for that date.
- Events for the selected date should be chronological.
- If no events exist for a date, show: "No events for this date yet."
- Event cards should be clickable and open the existing event detail modal.
- Do not break Quick Match, Archive, Interested/Saved, Map, or Profile.

Likely files:
- app.js
- styles.css

Likely app.js areas:
Search for:
- renderEvents
- renderCalendar
- eventDateTimeValue
- eventDateLabel
- monthMeta
- dateNumber
- selected date
- event modal

## Known Codex issue
Codex has been compacting repeatedly when prompts are too broad or when it reads long docs.
For this task:
- Start from CODEX_CURRENT_TASK.md only.
- Do not read TAYO_CONTEXT.md unless absolutely necessary.
- Do not inspect unrelated files.
