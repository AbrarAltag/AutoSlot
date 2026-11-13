# Instructions for AI coding agents (and teammates)

Project: AutoSlot booking PWA for ISZ Auto Exhaust. Stack: responsive web app (PWA) with Firebase. [FILL: framework, e.g. React / plain JS]

## Before you write any UI code

1. Read `design/README.md` and `design/DESIGN.md`.
2. Open the PNG for the screen you are building from `design/screens/`.
3. Check the screen's status in `DESIGN.md`. Build only screens marked **Approved** whose sprint has started. If it is Draft or Later, stop and ask.
4. Use the tokens (colours, fonts, spacing) and the exact interface text from `DESIGN.md`. Do not invent colours, wording or components.
5. If the image and `DESIGN.md` disagree, or something is missing, do not guess. Ask the design owner and list what is unclear.

## How to work

- Build one screen at a time. After building, compare your result with the PNG at 360 px width and list every difference you see.
- Build every state in the components table (default, error, disabled, taken, loading, and so on), not only the happy path.
- Keep the behaviour rules in section 5 of `DESIGN.md`: for example, never show a stale slot as Available, never show other customers' details to customers, and block double bookings in the database rules, not only in the interface.
- Mobile first. Must work on mobile data with no Wi-Fi. Minimum tap target 44 x 44 px.
- Do not edit files in `design/` unless the task is a design update, and then follow the rules in `design/README.md`.

## Safety

- Use fictional names, phone numbers and plate numbers in all code, tests and screenshots.
- Never commit service-account keys, private keys, `.env` files or real customer data.
- Do not add features outside the current sprint. See section 8 of `DESIGN.md`.

## Pull requests

- One story or screen per pull request. Use the PR template. Name the story ID (US01 and so on) and the screen IDs (S01 and so on).
- Attach evidence as the checklist asks (screenshot or short recording, fictional data).
- A second person reviews before merging.
