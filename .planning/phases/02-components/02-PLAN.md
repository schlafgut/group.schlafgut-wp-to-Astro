# Phase 2: Component Library - Plan 02: Section Components

## Objective
Create the reusable section components used throughout the site: Hero, Grid blocks, Teaser blocks, Full-bleed blocks, and content sections.

## Execution Context

**Source files to reference:**
- `index.html` — lines 154-358 (all section types on homepage)
- `wp-content/themes/schlafgut/build/css/styles.css?ver=6.9.css` — section CSS classes

**Target structure:**
```
src/src/components/
├── sections/
│   ├── Hero.astro
│   ├── TextCentered.astro
│   ├── GridBlocks.astro
│   ├── GridBlock.astro (single block)
│   ├── TeaserBlocks.astro
│   ├── Teaser.astro (single teaser)
│   ├── FullBleedBlocks.astro
│   ├── FullBleedBlock.astro (single)
│   └── Spacer.astro
└── Image.astro (lazy loading image)
```

## Context

### Section Patterns Discovered

**Hero Section** (`<section class="section__hero">`)
- Full-width heading with background image
- H1 text over image
- Image uses lazy loading with placeholder SVG

**Text Centered** (`<section class="section__text-centered">`)
- Centered paragraph text
- Uses `.innerwrapper.smaller` for narrower width

**Grid Blocks** (`<section class="section__grid-blocks boxed">`)
- Grid of content blocks (1-3 columns)
- Each block has:
  - Variant: `default` (portrait) or `wide` (landscape)
  - `data-headline`: `agrandir_wide` or `plantin` (font choice)
  - `data-position`: `top` or `middle` (content position)
  - `data-color`: `black`, `white`, or `yellow` (text color)
  - Background: image or video
  - Content: h4 (kicker), h3 (headline), optional CTA link

**Teaser Blocks** (`<section class="section__teaser-blocks">`)
- Horizontal row of linked teasers
- Each teaser: image + h4 + h3
- Links to internal/external pages

**Full Bleed Blocks** (`<section class="section__full-bleed-blocks">`)
- Large linked blocks
- Each has h4 title + background image
- Slide-in animation class

**Spacer** (`<section class="spacer large">`)
- Empty section for vertical spacing
- Variants: `small`, `medium`, `large`

### Image Pattern
```html
<img class="lazyload"
     width="..." height="..."
     src="data:image/svg+xml,..." <!-- placeholder -->
     data-src="..."              <!-- actual src -->
     data-srcset="..."           <!-- responsive -->
     data-sizes="auto"
     title="..." alt="..." />
```

### CSS Variables Used
```css
--sectionSpacing: 9.2rem (mobile: 2.4rem)
--gutterSpacing: 2.4rem (mobile: 1.8rem)
--fontSize17, --fontSize30, --fontSize44, etc.
```

## Tasks

### Task 1: Create Base Components (Image, Spacer)
**Do:**
1. Create `src/components/Image.astro` - lazy loading image with placeholder
2. Create `src/components/sections/Spacer.astro` - vertical spacing section
3. Add section styles to `src/styles/sections.css`

**Output:**
- `src/src/components/Image.astro`
- `src/src/components/sections/Spacer.astro`
- `src/src/styles/sections.css`

### Task 2: Create Content Sections (Hero, TextCentered, GridBlocks)
**Do:**
1. Create `src/components/sections/Hero.astro` - hero with heading and image
2. Create `src/components/sections/TextCentered.astro` - centered paragraph
3. Create `src/components/sections/GridBlock.astro` - single grid block
4. Create `src/components/sections/GridBlocks.astro` - grid container

**Output:**
- `src/src/components/sections/Hero.astro`
- `src/src/components/sections/TextCentered.astro`
- `src/src/components/sections/GridBlock.astro`
- `src/src/components/sections/GridBlocks.astro`

### Task 3: Create Link Sections (Teaser, FullBleed)
**Do:**
1. Create `src/components/sections/Teaser.astro` - single teaser card
2. Create `src/components/sections/TeaserBlocks.astro` - teaser row
3. Create `src/components/sections/FullBleedBlock.astro` - single full-bleed
4. Create `src/components/sections/FullBleedBlocks.astro` - full-bleed container

**Output:**
- `src/src/components/sections/Teaser.astro`
- `src/src/components/sections/TeaserBlocks.astro`
- `src/src/components/sections/FullBleedBlock.astro`
- `src/src/components/sections/FullBleedBlocks.astro`

## Verification

```bash
# Build should pass
cd src && npm run build

# Create test page with all section types
# Verify HTML output matches original structure
```

## Success Criteria

- [ ] Hero section renders with heading and lazy-loaded image
- [ ] TextCentered section renders centered paragraph
- [ ] GridBlocks render with correct variants (default/wide, colors)
- [ ] GridBlock supports both image and video backgrounds
- [ ] TeaserBlocks render horizontally with images
- [ ] FullBleedBlocks render with slide-in animation class
- [ ] Spacer creates correct vertical spacing
- [ ] Image component handles lazy loading pattern
- [ ] Build passes without errors

## Output

- 10 section components in `src/components/sections/`
- Reusable Image component
- Section CSS matching original styles

---
*Created: 2026-01-11*
