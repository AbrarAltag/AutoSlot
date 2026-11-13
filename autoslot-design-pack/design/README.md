# AutoSlot design folder

Single source of truth for how AutoSlot looks and behaves. Developers and AI agents build from this folder, not from memory or chat messages.

| Item | Value |
|---|---|
| Figma file (view link) | https://www.figma.com/design/VF5Qm2wXgBoiyhfgDxH7MK/Untitled?node-id=1-3 (check sharing is set to "anyone with the link can view") |
| Figma edit access | [FILL: names of the people who may edit] |
| Design owner | [FILL: name] |
| Last exported from Figma | [FILL: date, e.g. 2026-11-10] |
| Figma page and frame | Frame node-id 1-3, "Book your car service" landing and booking card, 1280 x 1080 (desktop). Mobile frame still to add. |

## Folder contents

```
design/
  README.md     this file: links, export rules, how to update
  DESIGN.md     the written spec (colours, components, screens, copy, behaviour)
  screens/      PNG exports of every screen (names in the table in DESIGN.md)
  assets/       SVG icons and logo
```

## Status legend

- **Approved**: build exactly this.
- **Draft**: do not build yet; ask the design owner.
- **Later**: planned for a later sprint; do not build now.

## How to export from Figma

1. Select a frame. In the right panel, under **Export**, choose **PNG** at **2x** for screens, **SVG** for icons and the logo.
2. Name the file exactly as in the screens table in `DESIGN.md` (for example `S01-slot-picker.png`). Do not add spaces.
3. Put screens in `design/screens/` and icons in `design/assets/`.
4. Update the **Status** column and the **Last exported** date above.
5. Commit the images and the `DESIGN.md` change together, in one pull request.

## How to change the design

1. Change the Figma file first.
2. Re-export the affected frames and replace the files in this folder.
3. Update `DESIGN.md` so the text matches the images (colours, copy, states).
4. Open a pull request titled `Design: <what changed>`. A second person checks it before merging.
5. Tell the team in the group chat what changed and which story IDs it touches.

## Rules

- Use fictional names, phone numbers and plate numbers in every mockup. Never real customer data.
- Do not commit screenshots of private WhatsApp chats with names or numbers visible.
- Figma is the source for how it looks. `DESIGN.md` is the source for what it says and does. If they disagree, stop and ask the design owner.
