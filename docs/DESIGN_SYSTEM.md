# ATELIER 01 — Design System

This document is the visual source of truth for the landing implementation.

**Design source:** Figma file `K7D1XM9KoJRSB9qoVO1Ayv`, system/page node `67:54`.
**Primary QA viewport:** 1920 × 1080.
**Code tokens:** `styles/tokens.css`.

Figma is authoritative for visual language and component geometry. One deliberate code override is approved: desktop section H2 is **72px**, replacing the 73–74px values present in the design file so headings fit consistently across sections.

## 1. Principles

- Dark premium automotive studio, not a flat black website.
- Photography/background remains perceptible beneath transparent tone layers.
- Gold is an accent and action color, not a general text color.
- Large typography creates hierarchy; UI typography stays restrained.
- Section content shares one outer grid through `Container`.
- New sections reuse system roles before introducing local values.

## 2. Typography

### Families

- **Gotham Pro** — display typography and section headings. Code: `--font-display`.
- **Golos Text** — body, navigation, labels, controls, buttons and most UI. Code: `--font-body`.
- Do not substitute Inter in landing UI. Inter instances found in the Figma source belong to embedded/product-interface content, not the landing's core typography.

### Approved roles — Full HD

| Role | Family | Weight | Size | Line height | Tracking |
| --- | --- | ---: | ---: | ---: | ---: |
| Hero H1 | Gotham Pro | 500 | up to 111px | 0.95 | -0.02em |
| Section H2 | Gotham Pro | 700 | **72px** | 1.26 | -1px |
| Section kicker | Golos Text | 500 | 20px | 1 | 4px |
| Body XL | Golos Text | 400 | 32px | 1.25 | default |
| Body L | Golos Text | 400 | 24px | 1.375 | default |
| Body M | Golos Text | 400 | 22px | 1.2 | default |
| Body S / UI | Golos Text | 400–600 | 18px | ~1.35 | default |
| Card title | Gotham Pro | 500 | 40px | 1.15 | default |
| Card body | Golos Text | 400 | 27px | 1.2 | default |
| Primary large button | Golos Text | 600 | 22px | 24px | default |
| Header button | Golos Text | 500–600 | 18px | normal | default |

The Figma file contains local sizes for specialized content (13–31px, 42px, 44px, 57px, 64px, 68px, 78px, 82px). These are **not automatically global tokens**. Promote a value only when the same semantic role repeats.

### Responsive typography

1920 is the exact desktop reference. Below Full HD, headings may interpolate down with `clamp()`/fluid rules, but the semantic role and hierarchy stay unchanged. H2 must never exceed 72px. Mobile/tablet values are implementation adaptations unless a dedicated Figma breakpoint exists.

## 3. Core colors

The recurring Figma palette is normalized into semantic code tokens.

| Role | Token | Value |
| --- | --- | --- |
| Page background | `--color-bg` | #050708 |
| Elevated dark | `--color-bg-elevated` | #080B0D |
| Primary gold | `--color-accent` | #D9BC89 |
| Bright gold / heading accent | `--color-accent-bright` | #FFD795 |
| Soft gold | `--color-accent-soft` | #E7C17F |
| CTA fill | `--color-accent-fill` | #F3CE8A |
| Muted gold | `--color-accent-muted` | #9E8256 |
| Primary text | `--color-text` | #F4F4F2 |
| Soft text | `--color-text-soft` | #F5F4F1 |
| Secondary text | `--color-text-secondary` | #C3C3C3 |
| Muted text | `--color-text-muted` | #B8B8B7 |
| Tertiary text | `--color-text-tertiary` | #858585 |
| Text on gold | `--color-text-on-accent` | #080B0D |
| Border | `--color-border` | #5B513F |
| Soft border | `--color-border-soft` | #555047 |

Figma includes nearby shades used by individual photography/cards. Keep those local unless they become a repeated semantic role.

## 4. Grid and spacing

- Page max width: **1920px**.
- Shared horizontal gutter: `--container-pad`, max **64px** on Full HD.
- Every main section aligns content through `Container`.
- A section may have unique internal geometry, but may not establish a competing outer gutter.
- Breakpoint model: default mobile → 768 tablet → 1024 laptop → 1280 desktop interpolation → 1920 Full HD reference.
- Test desktop in this order: 1920, 1600, 1440, 1366.

Spacing in Figma is intentionally compositional rather than a strict 4/8px scale. Do not create a huge spacing-token library from every measured gap. Promote repeated layout spacing only after it appears across components.

## 5. Background system

Every full-bleed studio section follows the same layer model:

`base background → studio image → global transparent tone → local veil/vignette → content`

Rules:

- Base dark is fallback only; it must not visually erase the studio.
- Studio image is full bleed and uses cover unless Figma specifies otherwise.
- Global tone controls mood while retaining visible photographic structure.
- Local veil is allowed behind copy/media only for readability.
- Adjacent sections should feel like one continuous studio world.
- Never solve contrast by replacing the image with an opaque black layer.

## 6. Buttons and controls

### Header primary
Figma baseline: 273×66px, radius 7px, gold #D9BC89, Golos Text Semibold 18px, 30px horizontal padding, 16px icon gap.

### Header outline
Figma baseline: 266×66px, radius 7px, 1.5px gold border, Golos Text Medium 18px, muted text, 14px icon gap.

### Hero / large primary
Figma baseline: 494×92px, radius 7px, gold fill, Golos Text Semibold 22px, 24px icon gap. Shared code component: `Button size="lg"`.

### Circular/video controls
Use pill/circle radius `999px`. Figma video play control baseline is 82×82px. Preserve reduced-motion behavior and only apply hover motion to fine pointers.

## 7. Radius and borders

- Service/media card: **2px** — `--radius-card`.
- Standard controls/buttons: **7px** — `--radius-sm`.
- Secondary surfaces: 8–10px only when the Figma component calls for them.
- Pills/circles: **999px** — `--radius-pill`.
- Standard outlined button border: **1.5px**.

Do not round automotive imagery generically; radius is component-specific.

## 8. Cards and media

- Photography is primary; gradients/tone support text rather than become decoration.
- Card title baseline: Gotham Pro Medium 40/1.15 where this role is used in Figma.
- Card body baseline: Golos Text Regular 27/1.2.
- Product/video placeholders must occupy their media viewport without artificial zoom.
- Video UI belongs to the media component, not to embedded placeholder content.

## 9. Motion

- Native document scrolling only.
- Motion uses the shared `--ease-out` and duration tokens.
- Hover states must not disturb the layout grid.
- Hover interactions only under `(hover: hover) and (pointer: fine)`.
- Always respect `prefers-reduced-motion`.

## 10. Source-of-truth workflow

Before implementing a new section:

1. Read this document, `docs/ARCHITECTURE.md`, and `styles/tokens.css`.
2. Inspect the exact Figma node via Figma MCP.
3. Reuse shared roles/components/tokens.
4. Keep only truly unique geometry inside the section module.
5. QA at 1920×1080 first.
6. Then test 1600/1440/1366 and responsive breakpoints.
7. If a new repeated visual rule appears, add it here and to tokens; do not silently invent a parallel system.

When code and Figma disagree, Figma wins **except for explicitly approved overrides documented here**. Current approved override: section H2 = 72px.
