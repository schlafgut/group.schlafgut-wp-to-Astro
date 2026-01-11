# Phase 3: Page Migration - Plan 03: Content Pages Migration

## Objective
Migrate all content pages to Astro for all 3 languages, preserving URL structure for SEO.

## Execution Context

**Source files to reference:**
- German: `was-uns-ausmacht/`, `unsere-historie/`, `unsere-produktion/`, `produkte-entdecken/`, `bei-uns-arbeiten/`, `interview/`
- English: `en/what-defines-us/`, `en/our-history/`, `en/our-production/`, `en/discover-products/`, `en/work-with-us/`, `en/interview/`
- Dutch: `nl/wat-ons-definieert/`, `nl/onze-geschiedenis/`, `nl/onze-productie/`, `nl/producten-ontdekken/`, `nl/bij-ons-werken/`, `nl/interview/`

**Target structure:**
```
src/src/pages/
├── was-uns-ausmacht.astro
├── unsere-historie.astro
├── unsere-produktion.astro
├── produkte-entdecken.astro
├── bei-uns-arbeiten.astro
├── interview.astro
├── en/
│   ├── what-defines-us.astro
│   ├── our-history.astro
│   ├── our-production.astro
│   ├── discover-products.astro
│   ├── work-with-us.astro
│   └── interview.astro
└── nl/
    ├── wat-ons-definieert.astro
    ├── onze-geschiedenis.astro
    ├── onze-productie.astro
    ├── producten-ontdekken.astro
    ├── bij-ons-werken.astro
    └── interview.astro

src/src/i18n/content/
├── was-uns-ausmacht.ts
├── historie.ts
├── produktion.ts
├── produkte.ts
├── arbeiten.ts
└── interview.ts
```

## Context

### URL Structure (preserve exactly for SEO)

| Page | DE | EN | NL |
|------|----|----|------|
| What defines us | /was-uns-ausmacht/ | /en/what-defines-us/ | /nl/wat-ons-definieert/ |
| Our history | /unsere-historie/ | /en/our-history/ | /nl/onze-geschiedenis/ |
| Our production | /unsere-produktion/ | /en/our-production/ | /nl/onze-productie/ |
| Discover products | /produkte-entdecken/ | /en/discover-products/ | /nl/producten-ontdekken/ |
| Work with us | /bei-uns-arbeiten/ | /en/work-with-us/ | /nl/bij-ons-werken/ |
| Interview | /interview/ | /en/interview/ | /nl/interview/ |

### Page Patterns

**Was uns ausmacht** (What defines us):
- HeroText
- FullwidthImage (video)
- ColumnsWithHeadline (multiple)
- ThreeImages
- QuoteOnBackground
- GridBlocks (fullwidth)
- FullBleedBlocks

**Unsere Historie** (Our history):
- HeroText
- FullwidthImage
- TextCentered
- CenteredImage
- ColumnsWithHeadline (multiple)
- ThreeImages (multiple)
- FullBleedBlocks

**Unsere Produktion** (Our production):
- HeroText
- FullwidthImage
- ColumnsWithHeadline (multiple)
- BigNumbers
- ThreeImages
- TextImage
- FullBleedBlocks

**Produkte entdecken** (Discover products):
- HeroText
- FullwidthImage
- ColumnsWithHeadline
- ImageGrid
- TextImage (multiple)
- FullBleedBlocks

**Bei uns arbeiten** (Work with us):
- HeroText
- FullwidthImage
- ColumnsWithHeadline (multiple)
- QuoteOnBackground
- GridBlocks
- FullBleedBlocks

**Interview**:
- HeroText
- InterviewColumns (multiple)
- InterviewQuote (multiple)
- FullBleedBlocks

## Tasks

### Task 1: Migrate "Was uns ausmacht" Pages
**Do:**
1. Create `src/i18n/content/was-uns-ausmacht.ts` - content for all 3 languages
2. Create `src/pages/was-uns-ausmacht.astro` (DE)
3. Create `src/pages/en/what-defines-us.astro` (EN)
4. Create `src/pages/nl/wat-ons-definieert.astro` (NL)

**Output:**
- Content data file + 3 page files

### Task 2: Migrate "Unsere Historie" Pages
**Do:**
1. Create `src/i18n/content/historie.ts`
2. Create `src/pages/unsere-historie.astro` (DE)
3. Create `src/pages/en/our-history.astro` (EN)
4. Create `src/pages/nl/onze-geschiedenis.astro` (NL)

**Output:**
- Content data file + 3 page files

### Task 3: Migrate "Unsere Produktion" Pages
**Do:**
1. Create `src/i18n/content/produktion.ts`
2. Create `src/pages/unsere-produktion.astro` (DE)
3. Create `src/pages/en/our-production.astro` (EN)
4. Create `src/pages/nl/onze-productie.astro` (NL)

**Output:**
- Content data file + 3 page files

### Task 4: Migrate "Produkte entdecken" Pages
**Do:**
1. Create `src/i18n/content/produkte.ts`
2. Create `src/pages/produkte-entdecken.astro` (DE)
3. Create `src/pages/en/discover-products.astro` (EN)
4. Create `src/pages/nl/producten-ontdekken.astro` (NL)

**Output:**
- Content data file + 3 page files

### Task 5: Migrate "Bei uns arbeiten" Pages
**Do:**
1. Create `src/i18n/content/arbeiten.ts`
2. Create `src/pages/bei-uns-arbeiten.astro` (DE)
3. Create `src/pages/en/work-with-us.astro` (EN)
4. Create `src/pages/nl/bij-ons-werken.astro` (NL)

**Output:**
- Content data file + 3 page files

### Task 6: Migrate "Interview" Pages
**Do:**
1. Create `src/i18n/content/interview.ts`
2. Create `src/pages/interview.astro` (DE)
3. Create `src/pages/en/interview.astro` (EN)
4. Create `src/pages/nl/interview.astro` (NL)

**Output:**
- Content data file + 3 page files

## Verification

```bash
# Build should pass
cd src && npm run build

# Check all pages render
# Visit each URL in browser/preview
```

## Success Criteria

- [ ] All 18 content pages created (6 pages × 3 languages)
- [ ] URL structure preserved exactly
- [ ] All sections render correctly
- [ ] Language switching works on all pages
- [ ] Internal links point to correct language versions
- [ ] Build passes without errors

## Output

- 6 content data files
- 18 page files (6 DE + 6 EN + 6 NL)
- Full content pages with all sections

---
*Created: 2026-01-11*
