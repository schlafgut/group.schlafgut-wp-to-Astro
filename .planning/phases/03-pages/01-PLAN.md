# Phase 3: Page Migration - Plan 01: Additional Section Components

## Objective
Create remaining section components needed for content page migration. These components were discovered during page analysis and must exist before pages can be migrated.

## Execution Context

**Source files to reference:**
- `was-uns-ausmacht/index.html` - columns, three-images, quote sections
- `unsere-historie/index.html` - fullwidth-image, centered-image, hero-text
- `interview/index.html` - interview-columns, interview-quote
- `aktuelle-stellen/erp-manager/index.html` - hero-text-jobs, jobs section
- `wp-content/themes/schlafgut/build/css/styles.css?ver=6.9.css` - CSS patterns

**Target structure:**
```
src/src/components/sections/
├── HeroText.astro           (41 uses)
├── HeroTextJobs.astro       (10 uses)
├── FullwidthImage.astro     (73 uses)
├── CenteredImage.astro      (6 uses)
├── ColumnsWithHeadline.astro (102 uses)
├── ThreeImages.astro        (45 uses)
├── QuoteOnBackground.astro  (13 uses)
├── BigNumbers.astro         (6 uses)
├── TextImage.astro          (18 uses)
├── ImageGrid.astro          (6 uses)
├── InterviewColumns.astro   (18 uses)
├── InterviewQuote.astro     (12 uses)
├── JobsList.astro           (4 uses)
└── JobCard.astro            (single job link)
```

## Context

### Component Patterns Discovered

**HeroText** (`<section class="section__hero-text">`)
- Large h1 heading, optional paragraph
- No background image
- Uses `.innerwrapper`

**HeroTextJobs** (`<section class="section__hero-text-jobs">`)
- Job title as h1
- Location/type info below
- No background image

**FullwidthImage** (`<section class="section__fullwidth-image">`)
- Full-width image or video
- Desktop/mobile video variants (`.only__desktop`, `.only__mobile`)
- `data-background` attribute for context
- Supports `no-margin` variant

**CenteredImage** (`<section class="section__centered-image">`)
- Centered image with max-width
- Optional caption

**ColumnsWithHeadline** (`<section class="section__columns-with-headline">`)
- Two columns: left = h2, right = paragraphs
- `data-background`: white, beige, yellow
- Multiple `.column__line` rows per section
- Links with `.cta__link` class

**ThreeImages** (`<section class="section__three-images">`)
- Three images in a row
- Each has `.slideInElement` class
- Optional `.description` below each

**QuoteOnBackground** (`<section class="section__quote-on-background">`)
- Large quote text
- Author info: image, name, title
- Optional CTA link

**BigNumbers** (`<section class="section__big-numbers">`)
- Statistics display
- Number + label pairs

**TextImage** (`<section class="section__text-image">`)
- Side-by-side text and image
- Variants: `reversed`, `full-bleed`, `no-margin`

**ImageGrid** (`<section class="section__image-grid">`)
- Grid of images (4 columns)

**InterviewColumns** (`<section class="section__interview-columns">`)
- Interview Q&A format
- Question (h4) + Answer columns

**InterviewQuote** (`<section class="section__interview-quote">`)
- Large quote from interview
- Different styling from QuoteOnBackground

**JobsList** (`<section class="section__jobs">`)
- Grid of job links
- Each job: title + "when" badge

## Tasks

### Task 1: Create Text & Heading Sections
**Do:**
1. Create `src/components/sections/HeroText.astro` - text hero without image
2. Create `src/components/sections/HeroTextJobs.astro` - job page hero
3. Create `src/components/sections/ColumnsWithHeadline.astro` - two-column with background variants
4. Create `src/components/sections/BigNumbers.astro` - statistics display

**Output:**
- `src/src/components/sections/HeroText.astro`
- `src/src/components/sections/HeroTextJobs.astro`
- `src/src/components/sections/ColumnsWithHeadline.astro`
- `src/src/components/sections/BigNumbers.astro`

### Task 2: Create Image Sections
**Do:**
1. Create `src/components/sections/FullwidthImage.astro` - full-width image/video
2. Create `src/components/sections/CenteredImage.astro` - centered image with caption
3. Create `src/components/sections/ThreeImages.astro` - three-image row
4. Create `src/components/sections/ImageGrid.astro` - image grid
5. Create `src/components/sections/TextImage.astro` - text + image side by side

**Output:**
- `src/src/components/sections/FullwidthImage.astro`
- `src/src/components/sections/CenteredImage.astro`
- `src/src/components/sections/ThreeImages.astro`
- `src/src/components/sections/ImageGrid.astro`
- `src/src/components/sections/TextImage.astro`

### Task 3: Create Quote & Interview Sections
**Do:**
1. Create `src/components/sections/QuoteOnBackground.astro` - quote with author
2. Create `src/components/sections/InterviewColumns.astro` - Q&A format
3. Create `src/components/sections/InterviewQuote.astro` - interview quote block

**Output:**
- `src/src/components/sections/QuoteOnBackground.astro`
- `src/src/components/sections/InterviewColumns.astro`
- `src/src/components/sections/InterviewQuote.astro`

### Task 4: Create Jobs Section Components
**Do:**
1. Create `src/components/sections/JobsList.astro` - job listing container
2. Create `src/components/JobCard.astro` - single job link card
3. Update `src/styles/sections.css` with job-related styles

**Output:**
- `src/src/components/sections/JobsList.astro`
- `src/src/components/JobCard.astro`
- Updated `src/src/styles/sections.css`

## Verification

```bash
# Build should pass
cd src && npm run build

# All component files exist
ls -la src/src/components/sections/*.astro
```

## Success Criteria

- [ ] HeroText renders h1 and optional paragraph
- [ ] HeroTextJobs renders job title with location info
- [ ] ColumnsWithHeadline renders with background color variants
- [ ] FullwidthImage supports both image and video (desktop/mobile)
- [ ] ThreeImages renders 3-column grid with descriptions
- [ ] QuoteOnBackground shows quote with author info
- [ ] InterviewColumns renders Q&A format
- [ ] JobsList displays job cards in grid
- [ ] Build passes without errors
- [ ] 14 new section components created

## Output

- 14 new section components
- Updated section CSS
- Ready for page migration

---
*Created: 2026-01-11*
