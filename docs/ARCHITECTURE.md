# Autodetailing Landing — implementation architecture

This file is the engineering source of truth for section composition. Visual rules are documented in `docs/DESIGN_SYSTEM.md`; reusable machine values live in `styles/tokens.css`. Figma remains the upstream design source.

## Reference order

When implementing a section, use sources in this order:

1. `docs/DESIGN_SYSTEM.md` and shared code tokens/components.
2. Approved Figma frame for the section.
3. Existing approved sections for implementation patterns.
4. Local section CSS only for geometry unique to that section.

Do not invent a new layout system inside a section.

## Desktop reference

- Primary visual QA viewport: **1920 × 1080**.
- Figma desktop frames are evaluated against 1920 × 1080 first.
- After Full HD matches, verify interpolation at 1600, 1440 and 1366.
- Never treat a 1920 × 1080 Figma frame as a reason to blindly use `100vh`; section height follows its approved composition.

## Layout

- All content aligns through the shared `Container`.
- Maximum page width: `--page-max: 1920px`.
- Horizontal page padding comes from `--container-pad`; sections must not create a competing page gutter.
- Breakpoint model: mobile default, 768 tablet, 1024 laptop, 1280 desktop interpolation, 1920 Full HD target.
- Desktop geometry may use local section variables/clamps when needed, but must preserve the shared outer grid.

## Background architecture

Backgrounds are compositional layers, not flat section colors:

1. **Base** — `--color-bg` fallback.
2. **Studio media** — full-bleed background image.
3. **Tone** — transparent full-section dimming; the studio must remain perceptible.
4. **Local veil/vignette** — only where copy or foreground media needs contrast.
5. **Content** — always above media layers.

Adjacent sections should feel like one continuous dark studio environment. Do not hide the studio image under an opaque overlay. Local veils must solve readability, not replace the background.

## Typography

- Gotham Pro (`--font-display`) — display/headings.
- Golos Text (`--font-body`) — body, UI, kickers.
- Reuse approved heading/kicker/body roles before adding local font sizes.
- Approved reusable type roles are defined in `docs/DESIGN_SYSTEM.md` and `styles/tokens.css`.

## Media / product demo

- Product demo is a replaceable media slot: today it can contain the CarKviz placeholder; later it can contain final video without changing section composition.
- Media viewport geometry comes from the approved Figma frame.
- Placeholder content must fit the viewport without artificial zoom/crop.
- Controls/play overlay belong to the media component, not to the embedded placeholder.

## Motion

- Native document scroll only; no scroll hijacking.
- Hover interactions only under `(hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion`.
- Motion should reinforce automotive/premium character without moving the layout grid.

## Workflow

For every new section:

1. Read this file and `styles/tokens.css`.
2. Inspect the approved Figma node.
3. Inspect adjacent approved section CSS.
4. Implement on the current feature branch.
5. QA at 1920 × 1080 first.
6. After approval, test smaller desktop/tablet/mobile.
7. Promote genuinely reusable decisions into tokens/components; keep unique geometry local.
