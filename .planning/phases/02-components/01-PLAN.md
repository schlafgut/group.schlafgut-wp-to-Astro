# Phase 2: Component Library - Plan 01: Layout Components

## Objective
Create the foundational layout components that wrap every page: Ticker banner, Header with navigation, Footer, and Language Switcher.

## Execution Context

**Source files to reference:**
- `index.html` — lines 66-146 (ticker, header, nav structure)
- `index.html` — lines 361-433 (footer structure)
- `wp-content/themes/schlafgut/build/css/styles.css?ver=6.9.css` — lines 374-700 (header/footer/ticker CSS)

**Target structure:**
```
src/src/
├── components/
│   ├── Ticker.astro
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── Footer.astro
│   ├── LanguageSwitcher.astro
│   ├── Logo.astro
│   └── Button.astro
├── layouts/
│   └── BaseLayout.astro (update to include layout components)
└── styles/
    └── components.css (component-specific styles)
```

## Context

### Component Patterns Discovered

**Ticker Banner** (`<a class="topticker">`)
- Full-width animated announcement bar
- Marquee effect with duplicated spans
- Links to jobs page
- Uses `--tickerHeight` CSS variable
- Color variants: black bg (default), yellow bg (jobs pages)

**Header** (`<header>`)
- Fixed height `--headerHeight` (12.5rem desktop, 2.9rem mobile)
- Contains: logo, language switcher, B2B shop link, nav menu
- Burger menu for mobile
- Two language switcher instances (desktop position, mobile position)

**Navigation** (`<nav>`)
- Horizontal nav inside header
- Separate sticky `<div class="fixed__nav">` for scroll
- Menu items are simple anchor links
- Current page marked with `current-menu-item` class

**Footer** (`<footer>`)
- 4-column layout with link lists
- Payment logos
- Tax disclaimer
- Footer logo (heart SVG)

**Language Switcher** (`<div class="language_switcher_holder">`)
- Dropdown on hover
- Current language shown, others in `<ul>`
- Desktop + mobile variants

### CSS Variables Used
```css
--tickerHeight: 2.235rem (mobile: 1.7rem)
--headerHeight: 12.5rem (mobile: 2.9rem)
--sideSpacing: 3.6rem (mobile: 0.9rem)
--sideSpacingWide: 10.3rem (mobile: 0.9rem)
--colorBlack, --colorWhite, --colorYellow
--fontSize12, --fontSize9
```

### i18n Considerations
- Navigation items need translation
- Language switcher needs current language detection
- Menu structure same across languages

## Tasks

### Task 1: Create Atomic Components (Button, Logo)
**Do:**
1. Create `src/components/Button.astro` - CTA button with variants
2. Create `src/components/Logo.astro` - inline SVG logo
3. Add component styles to `src/styles/components.css`

**Output:**
- `src/src/components/Button.astro`
- `src/src/components/Logo.astro`
- `src/src/styles/components.css`

### Task 2: Create Layout Components (Ticker, Header, Nav, Footer)
**Do:**
1. Create `src/components/Ticker.astro` - animated announcement banner
2. Create `src/components/LanguageSwitcher.astro` - language dropdown
3. Create `src/components/Navigation.astro` - horizontal nav menu
4. Create `src/components/Header.astro` - full header with logo, nav, language
5. Create `src/components/Footer.astro` - footer with columns

**Output:**
- `src/src/components/Ticker.astro`
- `src/src/components/LanguageSwitcher.astro`
- `src/src/components/Navigation.astro`
- `src/src/components/Header.astro`
- `src/src/components/Footer.astro`

### Task 3: Integrate with BaseLayout
**Do:**
1. Update `src/layouts/BaseLayout.astro` to include Ticker, Header, Footer
2. Add i18n navigation data structure
3. Verify all 3 language routes render correctly with layout

**Output:**
- Updated `src/src/layouts/BaseLayout.astro`
- `src/src/i18n/navigation.ts` (optional - nav data)

## Verification

```bash
# Build should pass
cd src && npm run build

# Check HTML output has all layout components
cat dist/index.html | grep -E "(topticker|header|footer|language_switcher)"

# Verify all 3 routes have same structure
diff <(cat dist/index.html | grep -oE "class=\"[^\"]*\"" | sort) \
     <(cat dist/en/index.html | grep -oE "class=\"[^\"]*\"" | sort)
```

## Success Criteria

- [ ] Ticker component renders with animation
- [ ] Header displays logo, nav, language switcher
- [ ] Navigation items link correctly per language
- [ ] Footer renders 4-column layout
- [ ] Language switcher shows current language and alternatives
- [ ] Mobile responsive (burger menu visible on mobile)
- [ ] Build passes without errors

## Output

- 7 Astro components in `src/components/`
- Updated BaseLayout with full page structure
- Component CSS matching original styles

---
*Created: 2026-01-11*
