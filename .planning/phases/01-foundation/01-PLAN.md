# Phase 1: Foundation Setup

## Objective
Set up working Astro 4.x project with TypeScript, Tailwind CSS design tokens, self-hosted fonts, and i18n routing structure.

## Execution Context

**Source files to reference:**
- `wp-content/themes/schlafgut/build/css/styles.css?ver=6.9.css` — design tokens (lines 25-82)
- `wp-content/themes/schlafgut/build/fonts/` — font files (4 need renaming)
- `index.html` — language switcher pattern, hreflang structure

**Target structure:**
```
src/
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro          # DE homepage (placeholder)
│   ├── en/
│   │   └── index.astro      # EN homepage (placeholder)
│   └── nl/
│       └── index.astro      # NL homepage (placeholder)
├── styles/
│   ├── fonts.css            # @font-face declarations
│   └── global.css           # Design tokens + base styles
└── i18n/
    └── utils.ts             # i18n helpers
public/
└── fonts/                   # Fixed font files
```

## Context

### Design Tokens (from existing CSS)
```css
:root {
  /* Typography - 26 font sizes */
  --fontSize7: 0.411rem;
  --fontSize8: 0.470rem;
  /* ... through --fontSize150: 8.823rem */

  /* Spacing */
  --sideSpacing: 3.6rem;
  --sideSpacingWide: 10.3rem;
  --sectionSpacing: 9.2rem;
  --gutterSpacing: 2.4rem;

  /* Colors */
  --colorBlack: #0D0900;
  --colorWhite: #FFFFFF;
  --colorGrey: rgba(0,0,0,0.5);
  --colorGreyLight: rgba(0,0,0,0.05);
  --colorBeigeLight: rgba(232, 227, 223, 0.3);
  --colorBeige: rgba(232, 227, 223, 0.5);
  --colorBlue: #1B31F8;
  --colorRed: #d60a2e;
  --colorYellow: #FBF3B1;

  /* Layout */
  --borderRadius: 0.6rem;
  --headerHeight: 12.5rem;
  --tickerHeight: 2.235rem;
}
```

### Font Families
| Family | Weights | Files |
|--------|---------|-------|
| Agrandir | 400, 500 | agrandir-regular, agrandir-medium |
| AgrandirWide | 900 | PPAgrandir-WideBlack |
| PlantinMTPro | 300 | PlantinMTPro-Light |

### Font Files to Fix
```
RENAME: agrandir-regular.woff2.html → agrandir-regular.woff2
RENAME: agrandir-medium.woff2.html → agrandir-medium.woff2
RENAME: PPAgrandir-WideBlack.woff2.html → PPAgrandir-WideBlack.woff2
RENAME: PlantinMTPro-Light.woff2.html → PlantinMTPro-Light.woff2
```

### Responsive Approach
- Base: `font-size: 0.87vw` (desktop)
- Mobile (≤768px): `font-size: 4.45vw`
- Max clamp: `15px` at 1725px, `18px` at 2049px+

### i18n URL Structure
| Language | Code | Root | Example |
|----------|------|------|---------|
| German | de | `/` | `/unsere-historie/` |
| English | en | `/en/` | `/en/our-history/` |
| Dutch | nl | `/nl/` | `/nl/onze-geschiedenis/` |

## Tasks

### Task 1: Initialize Astro Project
**Do:**
1. Create new Astro project with `npm create astro@latest` (empty template)
2. Add TypeScript strict mode
3. Install Tailwind CSS integration
4. Configure `astro.config.mjs` with site URL and integrations

**Output:**
- `package.json` with Astro 4.x, @astrojs/tailwind
- `astro.config.mjs` configured
- `tsconfig.json` with strict mode

### Task 2: Set Up Design System
**Do:**
1. Copy and fix font files to `public/fonts/`
2. Create `src/styles/fonts.css` with @font-face declarations
3. Create `src/styles/global.css` with design tokens (copy from source CSS)
4. Configure `tailwind.config.mjs` to extend with design tokens
5. Set up fluid typography system (0.87vw base)

**Output:**
- `public/fonts/` with 8 working font files
- `src/styles/fonts.css` with 4 @font-face rules
- `src/styles/global.css` with CSS custom properties
- `tailwind.config.mjs` with extended theme

### Task 3: Create Base Layout with i18n
**Do:**
1. Create `src/i18n/utils.ts` with language detection and URL helpers
2. Create `src/layouts/BaseLayout.astro` with:
   - HTML lang attribute
   - hreflang links
   - Font and global CSS imports
   - Meta viewport
3. Create placeholder pages for all 3 languages
4. Verify routing works: `/`, `/en/`, `/nl/`

**Output:**
- `src/i18n/utils.ts`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro` (DE)
- `src/pages/en/index.astro` (EN)
- `src/pages/nl/index.astro` (NL)

## Verification

```bash
# Build should pass
npm run build

# Dev server should run
npm run dev

# Routes should work
curl -s http://localhost:4321/ | grep 'lang="de'
curl -s http://localhost:4321/en/ | grep 'lang="en'
curl -s http://localhost:4321/nl/ | grep 'lang="nl'

# Fonts should load (check network tab manually)
```

## Success Criteria

- [ ] Astro 4.x project builds without errors
- [ ] TypeScript strict mode enabled
- [ ] Tailwind CSS configured with design tokens
- [ ] All 4 font families load correctly (no 404s)
- [ ] Routes work: `/`, `/en/`, `/nl/`
- [ ] hreflang tags present in HTML head
- [ ] Fluid typography system matches original (0.87vw desktop, 4.45vw mobile)

## Output

- Working Astro project in `src/` directory
- Design system ready for component development
- i18n routing structure matching original URLs

---
*Created: 2026-01-11*
