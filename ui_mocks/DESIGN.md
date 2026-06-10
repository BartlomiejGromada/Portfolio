---
name: Kinetic Syntax
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#95d3ba'
  on-tertiary: '#003829'
  tertiary-container: '#71af97'
  on-tertiary-container: '#004231'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#b0f0d6'
  tertiary-fixed-dim: '#95d3ba'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#0b513d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-inline:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system is built for high-performance technical environments, developer tools, and data-dense dashboards. The brand personality is precise, energetic, and uncompromisingly modern. By utilizing a "Kinetic Syntax" approach, the UI prioritizes clarity and speed of thought, using high-contrast accents to guide the eye through complex information hierarchies.

The aesthetic blends **Minimalism** with **Technical/Modern** influences. It utilizes deep obsidian surfaces paired with vibrant emerald highlights to create a focused, low-strain environment for long-form technical work. The emotional response should be one of mastery, efficiency, and sophisticated control.

## Colors
The color palette is anchored in a true dark mode experience. The primary **Emerald Green (#10b981)** acts as the "kinetic" element—used sparingly but impactfully for primary actions, success states, and critical paths. 

- **Primary:** Vibrant Emerald for high-visibility UI anchors.
- **Secondary:** Slate blue-greys to provide a professional, cool-toned foundation that doesn't compete with the green.
- **Neutral:** Deep Obsidian and Ink tones for backgrounds to maximize the luminescence of the emerald accents.
- **Surface Strategy:** Use nested darker-to-lighter shades of navy/charcoal to define elevation, rather than relying on heavy shadows.

## Typography
The typography system balances the humanist precision of **Geist** for core UI interactions with the technical rigor of **Space Mono** for data and metadata.

- **Headlines:** Set in Geist with tight tracking to evoke a sense of engineered density.
- **Body:** Prioritizes legibility with generous line heights to offset the dark background.
- **Labels:** Space Mono is used for all "meta" information—timestamps, status codes, and IDs—reinforcing the technical nature of the design system.
- **Emphasis:** Use emerald color tokens for text-based triggers and primary links rather than underlines.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px square rhythm, ensuring all elements align to a predictable technical scale.

- **Grid:** 12-column desktop grid with 16px gutters.
- **Density:** High information density is encouraged. Use `sm` (8px) and `md` (16px) spacing for internal component logic to maintain a compact, "instrument panel" feel.
- **Mobile Adaption:** On mobile, margins shrink to 16px and columns collapse to a single stack. Horizontal scrolling "drawers" are preferred over long vertical stacks for secondary data sets to preserve the kinetic feel.

## Elevation & Depth
In this dark-mode centric system, depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

- **Stacking:** Higher elevation elements use lighter surface colors (e.g., `#1e293b`) compared to the base background (`#020617`).
- **Borders:** Use 1px "Ghost Borders" in muted slate (`#334155`) to define containers. 
- **Emerald Glow:** For active or hovered states, apply a subtle, highly-diffused outer glow using the primary emerald color at 10-15% opacity to simulate light emission from a technical display.

## Shapes
The shape language is "Soft" (Level 1), utilizing a 0.25rem (4px) base radius. This creates a precise, geometric appearance that feels engineered rather than organic.

- **Standard Elements:** 4px radius for buttons, inputs, and small cards.
- **Containers:** Large dashboard modules or modals may use 8px (`rounded-lg`) to provide a subtle structural distinction.
- **Interactive States:** Maintain sharp internal corners for nested elements to emphasize the technical "built" quality.

## Components
Consistent implementation of components ensures the "Kinetic Syntax" remains cohesive:

- **Buttons:** Primary buttons use a solid Emerald background with black text for maximum contrast. Secondary buttons use a ghost style with Emerald borders and text.
- **Inputs:** Dark backgrounds with a 1px slate border. On focus, the border transitions to Emerald with a subtle glow.
- **Chips:** Monospaced labels inside small, low-contrast capsules. Status-specific chips (e.g., "Active") use a small Emerald dot prefix.
- **Cards:** No shadows. Use tonal shifting and a 1px border. On hover, the border color should brighten slightly.
- **Lists:** Clean rows separated by low-opacity dividers. Use Space Mono for indices or technical identifiers to the left of the primary label.
- **Progress Indicators:** Use the vibrant emerald against a deep slate track to represent "charging" or "active" processes, emphasizing the kinetic nature of the system.