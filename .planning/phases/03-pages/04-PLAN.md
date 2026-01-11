# Phase 3: Page Migration - Plan 04: Jobs System

## Objective
Create a content collection-based jobs system with listing page and individual job pages.

## Execution Context

**Source files to reference:**
- `aktuelle-stellen/index.html` - Job listings page (DE)
- `en/recent-job-offers/index.html` - Job listings page (EN)
- `aktuelle-stellen/erp-manager/index.html` - Individual job page example
- `aktuelle-stellen/*/index.html` - All 5 job pages

**Target structure:**
```
src/src/
├── content/
│   ├── config.ts                    (Content collection config)
│   └── jobs/
│       ├── erp-manager.md
│       ├── marktplatzmanager.md
│       ├── paid-social-marketer.md
│       ├── ecommerce-manager.md
│       └── werkstudent-it.md
├── pages/
│   ├── aktuelle-stellen/
│   │   ├── index.astro              (DE listings)
│   │   └── [...slug].astro          (DE job detail)
│   └── en/
│       └── recent-job-offers/
│           └── index.astro          (EN listings)
└── i18n/content/
    └── jobs.ts                      (UI strings for jobs)
```

## Context

### Job Page Structure (from analysis)

**Job Listing Page:**
- HeroText - "Aktuell offene stellen bei schlafgut"
- JobsList - Grid of job cards with title + "sofort" badge
- GridBlocks (fullwidth) - Work-Life-Balance CTA
- FullBleedBlocks - Navigation to other pages

**Individual Job Page:**
- HeroTextJobs - Job title, "(m/w/d)", location
- ColumnsWithHeadline (beige) - "Deine Aufgaben" (responsibilities)
- ColumnsWithHeadline (beige) - "Was bringst du mit?" (requirements)
- ColumnsWithHeadline (yellow) - "Warum wir?" (benefits) + apply button
- GridBlocks - Work-Life-Balance banner
- FullBleedBlocks - Navigation

### Job Content Fields
```typescript
interface Job {
  title: string;           // "ERP Manager"
  slug: string;            // "erp-manager"
  gender: string;          // "(m/w/d)"
  location: string;        // "Vollzeit, München oder Eislingen"
  availability: string;    // "sofort"
  tasks: {                 // "Deine Aufgaben"
    title: string;
    items: string[];
  };
  requirements: {          // "Was bringst du mit?"
    title: string;
    items: string[];
  };
  benefits: {              // "Warum wir?"
    title: string;
    items: string[];
    cta: string;
  };
  email: string;           // Application email
}
```

### URL Structure
- DE Listing: `/aktuelle-stellen/`
- DE Job: `/aktuelle-stellen/[slug]/`
- EN Listing: `/en/recent-job-offers/`
- (No individual EN job pages - only DE)

## Tasks

### Task 1: Set Up Content Collection
**Do:**
1. Create `src/content/config.ts` with job collection schema
2. Create job markdown files with frontmatter:
   - `erp-manager.md`
   - `marktplatzmanager.md`
   - `paid-social-marketer.md`
   - `ecommerce-manager.md`
   - `werkstudent-it.md`
3. Extract content from WordPress HTML files

**Output:**
- `src/src/content/config.ts`
- 5 job markdown files in `src/src/content/jobs/`

### Task 2: Create Job Listing Pages
**Do:**
1. Create `src/i18n/content/jobs.ts` - UI strings for both languages
2. Create `src/pages/aktuelle-stellen/index.astro`:
   - Query all jobs from collection
   - Render HeroText, JobsList, GridBlocks, FullBleedBlocks
3. Create `src/pages/en/recent-job-offers/index.astro`:
   - Same structure with EN content
   - Links to DE job detail pages (or no links if EN-only listing)

**Output:**
- `src/src/i18n/content/jobs.ts`
- `src/src/pages/aktuelle-stellen/index.astro`
- `src/src/pages/en/recent-job-offers/index.astro`

### Task 3: Create Job Detail Page Template
**Do:**
1. Create `src/pages/aktuelle-stellen/[...slug].astro`:
   - Dynamic route for all job slugs
   - Query job by slug from collection
   - Render full job page structure:
     - HeroTextJobs
     - ColumnsWithHeadline (tasks, requirements, benefits)
     - GridBlocks, FullBleedBlocks
2. Export `getStaticPaths()` for all jobs

**Output:**
- `src/src/pages/aktuelle-stellen/[...slug].astro`

## Verification

```bash
# Build should pass
cd src && npm run build

# Check generated pages
ls -la src/dist/aktuelle-stellen/

# Verify job pages render
# /aktuelle-stellen/ - listings
# /aktuelle-stellen/erp-manager/ - detail
# /en/recent-job-offers/ - EN listings
```

## Success Criteria

- [ ] Content collection configured for jobs
- [ ] 5 job markdown files created with all content
- [ ] Job listing page renders at `/aktuelle-stellen/`
- [ ] EN listing page renders at `/en/recent-job-offers/`
- [ ] 5 individual job pages render at `/aktuelle-stellen/[slug]/`
- [ ] Job cards link to correct detail pages
- [ ] Apply button/email works
- [ ] Build passes without errors

## Output

- Content collection config
- 5 job markdown files
- 3 page files (DE listing, EN listing, DE detail template)
- 7 total generated pages (2 listings + 5 jobs)

---
*Created: 2026-01-11*
