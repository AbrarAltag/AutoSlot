# AutoSlot design spec

Product: AutoSlot booking PWA for ISZ Auto Exhaust (Group G01-Apex, Section 03).
Spec status: **TEMPLATE. Replace every [FILL] and every value marked "starting value" with the real value from Figma before building.**

Read order for developers and agents: `design/README.md`, this file, then the PNG for the screen you are building.

## 1. Product rules from the partner interviews (do not change without asking)

| Rule | Source |
|---|---|
| Slots are fixed 1-hour slots between 10:30 AM and 6:00 PM (last slot starts 4:30 PM). | INT04 |
| The shop is closed on Friday. Show "Closed" and no slots. | INT04 |
| Customers can book from today up to 1 week ahead. Past dates and times cannot be selected. | INT04 |
| Customers need no account or password to book (they enter name and phone). Do not show the words "No login or account required" in the interface until the team confirms it can be delivered. | INT02, team decision |
| A booking shows a booking number at once on screen. | INT02, INT04 |
| Required fields: name, phone number, plate number, car model, service. Notes are optional. | INT04 |
| A privacy notice and a consent tick box must be ticked before sending. | INT04 |
| The customer view never shows other customers' names or phone numbers. | US01 |
| Services: exhaust repair, muffler replacement, flexi pipe or catalytic converter replacement, custom exhaust work, general inspection. | INT04 |
| Staff mostly use phones. There is no Wi-Fi in the workshop, so the app must work on mobile data. | INT04 |
| Phone and WhatsApp bookings stay available as a backup. | INT02, INT04 |

## 2. Design tokens

Starting values come from the concept demo. **Replace them with the values from Figma.**

### Colours

| Token | Use | Value |
|---|---|---|
| `color-bg` | Page background | #F3F3EE (starting value) |
| `color-surface` | Cards | #FFFFFF (starting value) |
| `color-ink` | Main text | #1A2420 (starting value) |
| `color-muted` | Secondary text | #6B7570 (starting value) |
| `color-line` | Borders | #DDE0DA (starting value) |
| `color-primary` | Selected, live, success | #1F8A63 (starting value) |
| `color-primary-soft` | Selected background | #E8F3EE (starting value) |
| `color-taken` | Taken or disabled slot | #E9E9E4 (starting value) |
| `color-error` | Errors | #B3261E (starting value) |
| `color-warning` | Notices (closed, offline) | #FFF3D6 (starting value) |
| `color-button` | Main button | #1A2420 (starting value) |

Dark mode: [FILL: yes or no. If yes, list the dark values.]

### Typography

| Token | Value |
|---|---|
| Font family | DM Sans (starting value), fallback: system-ui, sans-serif |
| Page heading | [FILL: size / weight / line height] |
| Body | [FILL, starting value 15px / 400 / 1.45] |
| Label | [FILL, starting value 13px / 700] |
| Button | [FILL, starting value 16px / 700] |

### Spacing, shape, size

| Token | Value |
|---|---|
| Spacing scale | [FILL, starting value 4, 8, 12, 16, 20, 24] |
| Card radius | [FILL, starting value 22px] |
| Field and chip radius | [FILL, starting value 12px] |
| Minimum tap target | 44 x 44 px (do not go smaller) |
| Design width | 360 px mobile first. Max content width on desktop: [FILL] |

## 3. Components and states

Every component must be built in **all** the states listed.

| Component | States | Notes |
|---|---|---|
| Primary button | default, pressed, disabled, loading | [FILL: label rules] |
| Text field | default, focus, filled, error (message under the field) | Error text sits next to the field, not in a pop-up. |
| Select (service) | default, focus, error | [FILL] |
| Date chip | default, selected, closed (Friday) | Shows weekday and day number. |
| Slot chip | available, selected, taken, passed | Taken and passed must say "Taken" or "Passed" in words, not only grey. |
| Consent checkbox | unticked, ticked, error | Error: "Tick the box to agree before booking." |
| Message box | success, error, notice | Used for confirmation, "slot just taken", closed day, offline. |
| Booking card (staff) | normal, new (highlighted for a few seconds) | Shows time, name, plate, service, status, type tag. |
| Status chip | Booked (Sprint 1). Later: arrived, in progress, completed, no-show | Only "Booked" is needed in Sprint 1. |
| Problem description box | default, focus, filled, over limit (counter turns red) | Optional multi-line box, max 300 characters, with a live counter. Label: "Describe the problem (optional)". |
| Manual link card | default, pressed, unavailable | Document icon, title, file type and size. Opens the manual in a new tab. If it cannot open, show "The manual could not open. Try again later." |

## 4. Screens

Build only screens with status **Approved** and a sprint that has started.

| ID | Screen | Story | Sprint | Figma frame name | Export file | Status |
|---|---|---|---|---|---|---|
| S01 | Slot picker (date chips and slot list) | US01 | 1 | node-id 1-3 (desktop frame) | `S01-slot-picker.png` | Draft: needs changes, see section 9 |
| S02 | Slot list: load error with Retry | US01 | 1 | shown inside node-id 1-3; needs its own frame | `S02-load-error.png` | Draft |
| S03 | Booking form with problem description and privacy tick box | US02 | 1 | [FILL] | `S03-booking-form.png` | [FILL] |
| S04 | Confirmation with booking number | US02 | 1 | [FILL] | `S04-confirmation.png` | [FILL] |
| S05 | "Slot just taken" with nearest free slots | US02 | 1 | [FILL] | `S05-slot-taken.png` | [FILL] |
| S06 | Save failed with Retry | US02 | 1 | [FILL] | `S06-save-failed.png` | [FILL] |
| S07 | Staff access code (temporary) | US03 | 1 | [FILL] | `S07-staff-code.png` | [FILL] |
| S08 | Staff daily calendar | US03 | 1 | [FILL] | `S08-staff-calendar.png` | [FILL] |
| S09 | Staff calendar: no bookings / Friday closed | US03 | 1 | [FILL] | `S09-staff-empty.png` | [FILL] |
| S10 | Add walk-in or phone booking | US04 | 2 | [FILL] | `S10-add-walkin.png` | Later |
| S11 | Staff sign-in | US05 | 2 | [FILL] | `S11-staff-signin.png` | Later |
| S12 | Cancel booking (reference and phone) | US06 | 2 | [FILL] | `S12-cancel.png` | Later |
| S13 | Attendance status on a booking | US07 | 3 | [FILL] | `S13-attendance.png` | Later |
| S14 | Owner monthly summary | US08 | 4 | [FILL] | `S14-summary.png` | Later |
| S15 | Car care manual link card | [FILL: maintenance story ID, suggested Could in Sprint 4] | 4 | [FILL] | `S15-maintenance-tips.png` | Later |

Add rows if you add screens. Keep the IDs stable once used.

## 5. Behaviour by story

Copied from the acceptance criteria in the Product Backlog and MVP Plan. If the plan changes, change it here too.

### US01: see free slots
1. Opening the page on a phone shows free slots with no sign-in.
2. Only today up to 1 week ahead can be chosen. Friday shows as closed. Past times cannot be selected.
3. Each slot is Available or Taken, from live data.
4. A Taken slot cannot be selected. Weekend dates behave like other days.
5. If data cannot load, show an error with a Retry button. Never show a stale slot as Available.
6. Never show other customers' names or phone numbers.

### US02: book a slot
1. Pick an available slot and a service, fill name, phone, plate and car model, optionally describe the problem (max 300 characters), and tick the consent box.
2. If a required field is empty or invalid, or the box is unticked, do not send, and show a message next to that field.
3. On success show booking number, date, time and service at once. The slot becomes Taken for others.
4. If another customer just took the slot, only one booking is saved. The second person sees "slot just taken" and the nearest free slots, and keeps their details. The database rules also reject a booking for a taken slot.
5. If saving fails, show an error with Retry. Retrying must not create a duplicate booking.

### US03: staff calendar
1. Shows today by default. Staff can choose another date. Friday shows as closed. An empty day shows "No bookings".
2. Each booking shows time, customer name, plate number, service and status ("Booked" for now).
3. A booking made on a customer's phone appears within 5 seconds without refreshing. Until staff sign-in (US05), the page needs a temporary access code. Trials use fictional data only.

### US04: add walk-in or phone booking (Sprint 2)
1. Staff choose Walk-in or Phone or WhatsApp, a free time, a name, a plate number and a service, and add it in one step.
2. The new entry appears on the calendar at once with its type shown, and the slot shows as Taken for customers.
3. A time that is already taken cannot be added.

## 6. Interface text (use these exact words)

| Where | Text |
|---|---|
| Closed day | The workshop is closed on Fridays. Choose another day. |
| Taken slot | Taken |
| Past slot | Passed |
| Slot just taken | Slot just taken. Your details are kept. Pick another time: |
| Load error | Slots could not load. Check your connection and retry. |
| Save error | Your booking was not saved. Nothing was booked. |
| Confirmation | Booked. Your booking number is [number]. |
| Consent error | Tick the box to agree before booking. |
| Privacy notice | We use your details only to manage your booking and do not share them. |
| Empty day (staff) | No bookings for this day. |
| Offline (staff) | Offline, data may be out of date. |
| Footer note | Phone and WhatsApp bookings stay available. |
| Problem box label | Describe the problem (optional) |
| Problem box hint | For example: loud noise from the exhaust, smoke, a warning light. |
| Problem box counter | [number] / 300 |
| Manual link title | Basic car care manual |
| Manual link details | PDF, [FILL] pages. Opens in a new tab. |
| Manual unavailable | The manual could not open. Try again later. |
| Hero text (replaces the WhatsApp and no-account wording) | Choose a service and a time. You will see your booking number straight away. |
| [FILL] | [FILL: add any other strings from Figma] |

## 7. Accessibility and quality checks

- Text contrast at least 4.5 to 1 against its background. Check in Figma before approving.
- Never use colour alone to show state: "Taken", "Passed", "Closed" and errors are written in words.
- Every field has a visible label. Errors appear next to the field.
- Tap targets at least 44 x 44 px. No sideways scrolling at 360 px width.
- Respect reduced-motion settings. The highlight on a new staff booking must not depend on animation.

## 8. Not in scope right now

Reminders, "vehicle ready" notices, online payment, SMS or WhatsApp Business messages, maintenance information (screen S15 is designed but Later), owner insight reports. Do not build these unless the backlog changes and this file is updated.

## 9. Gaps between the current Figma design (node-id 1-3) and the plan

The current frame was checked against the backlog and the interview rules. Fix these in Figma, re-export, then set the screen status to Approved.

| # | Item | In the current design | Needed (source) | Action |
|---|---|---|---|---|
| 1 | Form fields | Year, Make, Model, Mileage | Name, phone number, plate number, car model, service; notes optional (US02, INT04) | Add the missing fields. Year, Make and Mileage are not required; if kept, make them optional and show mileage in km |
| 2 | Privacy consent | None | Privacy notice and a tick box that must be ticked (US02, INT04) | Add notice, checkbox and its error state |
| 3 | Service choice | None | Choose one of the 5 services (INT04) | Add a service select |
| 4 | Confirmation wording | "We'll send your confirmation on WhatsApp" | On-screen booking number at once (US02). WhatsApp messages are US16, "Won't now" | Change the wording, or agree with the team and owner to add WhatsApp to scope |
| 5 | Times shown | 9:00 AM, 10:30 AM, 1:00 PM, 3:30 PM | Hourly slots 10:30 AM to 4:30 PM only (INT04). 9:00 AM is before opening | Show the seven real slots |
| 6 | Dates | Mon 12 to Thu 15, June 2025 | Today to 1 week ahead; Friday chip shows Closed (INT04) | Use real 2026 dates and add a Closed state |
| 7 | "New owner basics" tips box | On the booking card | Maintenance information is not in Sprint 1 (Could, later story) | Decided: it appears as a later screen (S15, status Later) and becomes a manual link card instead of text. Move it out of S01 into its own frame. Sprint 1 screens must not show it |
| 8 | Missing screens | Only the booking card | S03 to S09 (form, confirmation, slot just taken, save failed, staff code, staff calendar, empty or Friday) | Design them |
| 9 | Frame size | 1280 x 1080 desktop | 360 px mobile first; staff mostly use phones (INT04) | Add a 360 px mobile frame first |
| 10 | Step labels | Add your car, Choose a time, Get confirmed | Flow is choose a time, enter details, get booking number | Reword to match the flow |
| 11 | "No login or account required" and "No account needed" | Under the Book button and in the hero text | Do not promise it until the team confirms it can be delivered | Remove both lines. Use the new hero text from section 6. The booking itself needs no login (customers enter name and phone); staff sign-in (US05) is separate |
| 12 | Tips box | Text only | A link to the car care manual | Replace with the Manual link card (document icon, "Basic car care manual", "PDF, [FILL] pages, opens in a new tab"). Link: [FILL: URL of the owner-reviewed manual]. Add "Reviewed by the workshop owner" only after he approves it |
| 13 | Describe the problem | Not present | An optional box where owners describe the car problem (extends the notes field in US02) | Add a multi-line box with hint text and a 300-character counter, after the details and before the consent tick box |

Keep as they are: the Available and Taken legend with words, the Retry error message, the Live badge, and the overall look.

## 10. Open decisions

| # | Decision | Needed from | Effect on the plan |
|---|---|---|---|
| 1 | Should staff see the problem description on the calendar booking card (suggested: one line, tap to read all)? | Team and owner | Adds to US03 criterion 2 and the staff booking card (S08). The text is already saved with the booking, so the extra work is small |
| 2 | Where is the manual file hosted (view-only Google Drive link, or a PDF in the app)? Who writes it and who reviews it? | Team and owner | The manual is assumption A04 until the owner reviews it. Keep the S15 link as Later |
| 3 | Is the "no account" promise delivered? | Team | If not, update US01 and US02 criteria 1 and the product rule in section 1 |
