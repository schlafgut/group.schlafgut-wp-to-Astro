# Phase 3: Page Migration - Plan 02: Homepage Migration

## Objective
Migrate the homepage to Astro for all 3 languages (DE, EN, NL) using existing section components.

## Execution Context

**Source files to reference:**
- `index.html` - German homepage
- `en/index.html` - English homepage
- `nl/index.html` - Dutch homepage

**Target structure:**
```
src/src/pages/
├── index.astro          (DE homepage)
├── en/
│   └── index.astro      (EN homepage)
└── nl/
    └── index.astro      (NL homepage)

src/src/i18n/
└── content/
    └── homepage.ts      (i18n content data)
```

## Context

### Homepage Structure (from index.html analysis)

1. **Hero** - Full-width hero with title and background image
2. **TextCentered** - Intro paragraph
3. **GridBlocks (boxed)** - 3 blocks (2 default + 1 wide)
4. **TextCentered** - Second paragraph
5. **GridBlocks (boxed)** - 3 blocks (1 wide + 2 default)
6. **Spacer (large)**
7. **TeaserBlocks** - 3 teasers
8. **FullBleedBlocks** - 4 linked blocks

### URL Structure (preserve for SEO)
- DE: `/` (root)
- EN: `/en/`
- NL: `/nl/`

## Tasks

### Task 1: Extract Homepage Content
**Do:**
1. Create `src/i18n/content/homepage.ts` with content for all 3 languages:
   - Hero title and image
   - TextCentered paragraphs
   - GridBlocks data (all blocks with titles, kickers, images, videos, links)
   - TeaserBlocks data
   - FullBleedBlocks data
2. Export typed content structure

**Output:**
- `src/src/i18n/content/homepage.ts`

### Task 2: Create German Homepage
**Do:**
1. Create `src/pages/index.astro`:
   - Import all required section components
   - Import homepage content for 'de'
   - Compose page with all sections in correct order
   - Use BaseLayout with proper title/description

**Output:**
- `src/src/pages/index.astro` (updated with full homepage)

### Task 3: Create English & Dutch Homepages
**Do:**
1. Create `src/pages/en/index.astro`:
   - Import homepage content for 'en'
   - Same structure as German
2. Create `src/pages/nl/index.astro`:
   - Import homepage content for 'nl'
   - Same structure as German

**Output:**
- `src/src/pages/en/index.astro`
- `src/src/pages/nl/index.astro`

## Verification

```bash
# Build should pass
cd src && npm run build

# Preview all 3 homepages
cd src && npm run preview
# Check /, /en/, /nl/

# Verify HTML structure matches original
```

## Success Criteria

- [ ] German homepage renders at `/`
- [ ] English homepage renders at `/en/`
- [ ] Dutch homepage renders at `/nl/`
- [ ] All sections render correctly:
  - [ ] Hero with background image
  - [ ] TextCentered paragraphs
  - [ ] GridBlocks with images/videos
  - [ ] TeaserBlocks with 3 teasers
  - [ ] FullBleedBlocks with 4 links
- [ ] Language switching works between homepages
- [ ] Build passes without errors

## Output

- 3 homepage files
- Homepage content data file
- Fully functional multilingual homepage

---
*Created: 2026-01-11*
