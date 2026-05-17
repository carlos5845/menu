---
name: Coastal Zest
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
  on-surface-variant: '#e0c0b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88b7e'
  outline-variant: '#594237'
  surface-tint: '#ffb694'
  primary: '#ffb694'
  on-primary: '#571f00'
  primary-container: '#ff7425'
  on-primary-container: '#5e2200'
  inverse-primary: '#a14000'
  secondary: '#ffb4ab'
  on-secondary: '#690005'
  secondary-container: '#a0010d'
  on-secondary-container: '#ffa99f'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#00b653'
  on-tertiary-container: '#003f18'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Anybody
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built to evoke the sun-drenched energy of a coastal cevicheria. The brand personality is unapologetically vibrant, appetizing, and high-energy, moving away from the clinical "minimalist" seafood trend toward a bold, character-driven aesthetic. 

The visual style is **High-Contrast / Bold** with a **Tactile** influence. It draws inspiration from mid-century surf culture and modern pop-art illustration, characterized by heavy outlines, saturated color blocks, and "squishy," organic UI elements that feel as fresh and bouncy as the seafood itself. The emotional response should be one of immediate hunger and communal joy.

## Colors

The palette is derived directly from the coastline and the kitchen. The **Primary Orange** represents the fresh shrimp and the heat of the sun; it is the main action color for buttons and critical highlights. The **Deep Red** provides a grounded, savory contrast, used for secondary accents and seasonal alerts. 

**Tropical Green** acts as a refreshing counterpoint, used for health-related tags, "fresh" indicators, and success states. The default mode is **Dark**, utilizing a deep black background to make the vibrant primary colors "pop" with neon-like intensity, mirroring the lively atmosphere of a late-night seafood shack.

## Typography

The typography strategy balances expressive character with high-performance readability. 

**Anybody** is used for headlines; its variable widths and bold weights capture the kinetic energy of the logo's script and the urgency of a busy kitchen. Headlines should use tight tracking and heavy weights to dominate the visual hierarchy.

**Plus Jakarta Sans** provides a friendly, approachable contrast for body copy and labels. Its soft curves complement the roundedness of the UI elements while maintaining the professional clarity required for menu descriptions and pricing.

## Layout & Spacing

The design system utilizes a **Fluid Grid** model to accommodate the varied content of a restaurant platform—from sprawling photo galleries to dense menus. 

- **Desktop (1440px+):** 12-column grid with 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid with 24px gutters and 32px side margins.
- **Mobile (Below 768px):** 4-column grid with 16px gutters and 20px side margins.

The spacing rhythm follows a strict 8px baseline, but "Impact Sections" (like hero banners) should utilize **Extra Large (xl)** padding to create moments of visual relief amidst the high-contrast colors.

## Elevation & Depth

Hierarchy is established through **Bold Borders** and **Hard Shadows** rather than realistic blurs. This mimics the illustrative style of the shrimp character in the logo.

1.  **Level 0 (Background):** Solid #000000.
2.  **Level 1 (Cards/Containers):** #1A1A1A surface with a 2px solid border (#333333).
3.  **Level 2 (Interactive):** Elements that are interactive use a "Hard Pop" shadow—a 4px offset shadow with 0 blur, using the Primary Orange or Deep Red color at 40% opacity.
4.  **Overlays:** High-contrast modals use a solid black backdrop at 80% opacity to ensure the "vibrant" content remains the focal point.

## Shapes

The shape language is **Rounded**, reflecting the organic, plump forms of fresh seafood and the "bubbly" script of the typography. 

- **Standard Elements:** 0.5rem (8px) radius for cards and input fields.
- **Interactive Elements:** Buttons and Chips utilize the **Pill-shaped** (Full Rounded) aesthetic to make them feel "touchable" and friendly.
- **Iconography:** Icons should feature rounded terminals and thick strokes (2px minimum) to match the weight of the headline typography.

## Components

### Buttons
Primary buttons are solid Primary Orange with black text and a "Hard Pop" shadow. They should feel substantial and clickable. Secondary buttons use a Deep Red outline with no fill, turning solid on hover.

### Chips
Used for food categories (e.g., "Spicy," "Gluten-Free"). These are pill-shaped with a Tropical Green background and black text to denote freshness and health.

### Menu Cards
Cards should be image-forward with a 0.5rem radius. The price should be anchored in a Primary Orange pill in the top-right corner to ensure it is the first thing seen after the food photography.

### Input Fields
Inputs use the Surface color with a 2px border. Upon focus, the border transitions to Primary Orange, and the label floats upward using the `label-sm` style.

### Navigation
The navigation bar should be persistent and dark, utilizing the script-inspired logo on the left and high-contrast white text for menu items to ensure accessibility against the dark background.