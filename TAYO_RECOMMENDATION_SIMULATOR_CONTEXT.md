# TAYO Recommendation Simulator Context

## Goal
We are building a Google Sheets-first panelist/demo simulator for the TAYO recommendation engine. The final sheet should let panelists choose a profile, select interests/subtags, answer personality questions, and see ranked event recommendations with match percentages and scoring explanations. The final scoring logic should later be portable back into app.js.

## Visible sheets
Only these tabs should be visible:
1. Simulator
2. Computation

Backend/reference tabs may exist but should be hidden:
- Events_Data
- Reference_Data
- Scoring_Rules

## Profile dropdown order
1. Custom Profile
2. Nikki Santos Default
3. Chill Freshie
4. Sporty Connector
5. Creative Org Explorer

## Simulator tab section order
1. Choose profile
2. Applied user profile
3. Interest / subtag selections
4. Personality questionnaire
5. User interpretation
6. Quantitative summary
7. Ranked matched events

Interest/subtag selection must come before the personality questionnaire.

## Interest and subtag logic
- Main tags come from app.js interestGroups.
- Each main tag should allow multiple subtags.
- Use three subtag dropdowns per main tag slot: Subtag 1, Subtag 2, Subtag 3.
- Main tag alone should not count toward scoring.
- A main tag only counts if at least one paired subtag is selected.
- If dependent dropdowns are fragile, prioritize scoring correctness over fancy validation.

## Personality logic
Personality must be based on the questionnaire.

Personality types:
- Independent Explorer
- High-Energy Connector
- Balanced Participant

Questionnaire should calculate:
- Independent pts
- Connector pts
- Balanced pts

Highest score wins. If tied, use Balanced Participant.

Manual override should exist but must be clearable.

Manual override dropdown:
- Use calculated result
- Independent Explorer
- High-Energy Connector
- Balanced Participant

If manual override is "Use calculated result", final personality uses calculated personality. Otherwise it uses the override.

## User interpretation
User interpretation must never be blank.

Based on final personality, show:
- User type
- Qualitative profile
- Best-fit event types
- Demo talking point

Use personalityTypes from app.js if possible.

## Ranked matched events
Show all 40 events.

Columns:
- Rank
- Match %
- Event
- Date / Time
- Type
- Energy
- Location
- Status
- Sheet-only match explanation

Rules:
- Match % and Event columns must not be switched.
- Rank should be clean 1-40, not tied rank.
- Match % should show whole numbers only.
- If event is out of date/not applicable, show Match % = N/A and Status = Not applicable.
- Otherwise Status = Available.
- Available events should be sorted by match score descending.
- Not applicable events should appear lower or be clearly marked.

## Date/time
Date/time should show the same actual event date/date-time used by the event data.
Do not show decimal times.
Do not show only Mon/Tue/Wed unless it is part of a clear full date label.

## Computation tab
Show personality questionnaire scoring at the top:
- Question
- Selected answer
- Independent pts
- Connector pts
- Balanced pts
- Calculated personality
- Manual override
- Final personality used
- Year used
- School used
- Selected main tags
- Selected subtags

Then show event scoring rows:
- Event #
- Event
- Match %
- Event date/time
- Type
- Energy
- Location
- Status
- Sheet-only match explanation
- Base
- Year pts
- Interest pts
- Subtag pts
- Personality pts
- School pts
- Alone pts
- Raw score
- Notes

## Scoring logic
Use the app.js scoring model:
- Base score = 44
- Beginner-friendly for 1st year = +10
- Beginner-friendly for non-1st year = +5
- Each matching selected main tag = +8
- Each matching selected subtag = +6
- Personality fit = +12
- School match = +5
- Alone-friendly = +4
- Cap score at 98

## Prior Apps Script errors to avoid
Avoid:
- getActiveSpreadsheet() null in standalone Apps Script
- uneven setValues row lengths
- Range not found
- freeze column errors caused by merged cells
- columns out of bounds
- swapped Match % and Event columns
- decimal percentages
- manual override that cannot be cleared
- blank user interpretation
- date/time decimals
- only showing 12 events instead of all 40

## Next expected task
Next task will be to create:
TAYO_Google_Sheets_builder_FINAL.gs

It should work from standalone script.google.com/home, create a new spreadsheet, log the URL, and keep only Simulator and Computation visible.
