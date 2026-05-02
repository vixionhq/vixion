---
name: VIXION Architectural Intelligence
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e4e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e4e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121314'
  on-background: '#e4e2e2'
  surface-variant: '#343535'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  technical-sm:
    fontFamily: monospace
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  grid-gutter: 1px
---

## Brand & Style

The brand personality is analytical, precise, and uncompromisingly technical. This design system treats the user interface as a living blueprint—a high-fidelity schematic for AI-driven automation. It evokes the feeling of peering into the "brain" of a machine where every element exists with mathematical intent.

The aesthetic blends **Minimalism** with **Technical Brutalism**. It prioritizes structural clarity over decorative flourishes, using a rigid grid to organize complex information into digestible, high-tech modules. The emotional response should be one of trust in precision, clarity of purpose, and futuristic sophistication.

## Colors

The palette is strictly monochromatic to emphasize form and structure. 

- **Primary (White):** Used for text, essential icons, and primary structural lines. It represents the "ink" on the blueprint.
- **Secondary (Deep Black):** The foundation of the interface, providing a void-like depth that allows thin white lines to pop.
- **Tertiary (Dark Gray):** Used for surface elevation and container backgrounds to differentiate nested modules.
- **Neutral (Mid Gray):** Reserved for non-interactive data, auxiliary grid lines, and secondary labels to maintain visual hierarchy.

All colors are applied with high contrast in mind, ensuring that the "High-Tech" feel is never muddied by unnecessary gradients or blurs.

## Typography

Typography is used as a structural element. **Space Grotesk** serves as the primary typeface for headlines, providing a geometric, futuristic edge that feels engineered. **Inter** is used for body copy to ensure maximum readability within dense data environments.

A **Monospace** font (system default such as Source Code Pro or JetBrains Mono) is introduced for technical data, coordinates, and automation logs. This reinforces the "blueprint" aesthetic. All labels should be set in uppercase with increased letter spacing to mimic architectural notations.

## Layout & Spacing

This design system utilizes a **Fixed Modular Grid**. The layout is dictated by a 12-column structure where every element is bounded by 1px or 0.5px "blueprint lines." 

Instead of traditional margins, the layout uses visible divider lines to separate sections. Content should feel "locked" into the grid cells. Elements should snap to a 4px baseline rhythm. Spacing is intentional and generous within the modules, but the modules themselves are packed tightly against the grid lines to create a sense of mechanical density.

## Elevation & Depth

Depth is conveyed through **Structural Layering** and **Bold Borders** rather than shadows or blurs. 

1.  **Level 0 (Background):** Pure Black (#000000).
2.  **Level 1 (Grid):** 0.5px Mid-Gray lines defining the global workspace.
3.  **Level 2 (Containers):** 1px White borders with a slightly lightened background (#0A0A0A).
4.  **Level 3 (Active/Hover):** High-contrast White fills with Black text.

This design system avoids ambient shadows entirely. Hierarchy is achieved by increasing the border-weight of an active module or by "nesting" modules within larger grid frames.

## Shapes

The shape language is strictly **Sharp (0px)**. Every button, card, input field, and container must have 90-degree angles. This reinforces the blueprint aesthetic and the precision of the AI agency. There are no exceptions for rounded corners, as they would soften the high-tech, engineered feel of the interface.

## Components

- **Buttons:** 1px white borders, sharp corners, and uppercase Space Grotesk text. On hover, the button should invert (White background, Black text).
- **Inputs:** Simple bottom-border lines (blueprint style) or fully enclosed boxes. Labels sit outside the box in the top-left, using the `technical-sm` typography style.
- **Data Cards:** Modules defined by thin 1px borders. Each card should feature a small "coordinate" or "ID number" in the top right corner in monospace to maintain the schematic look.
- **Lists:** Separated by horizontal 0.5px lines that extend to the edges of the container.
- **Chips/Status:** Rectangular boxes with 1px borders. For "Active" status, use a solid white fill. For "Inactive," use a dashed border.
- **Grid Background:** A persistent, low-opacity background grid should be visible across the entire viewport to ground the components in the "blueprint" space.
- **Dividers:** Used aggressively to separate content. Every major section change must be marked by a horizontal or vertical 1px line.