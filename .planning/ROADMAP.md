# Schlafgut Astro Migration Roadmap

## Milestone 1: MVP Launch

**Goal**: Pixel-perfect Astro site matching WordPress original with Lighthouse scores > 95

### Phase 1: Foundation Setup ✅
**Goal**: Working Astro project with design system infrastructure

**Status**: Completed (1 plan executed)

**Scope**:
- Initialize Astro 4.x with TypeScript
- Configure Tailwind CSS with design tokens from existing CSS
- Fix and set up self-hosted fonts (correct .woff2.html → .woff2)
- Create base CSS reset and typography system
- Set up i18n routing structure (DE root, /en/, /nl/)

**Research**: No - standard Astro setup

---

### Phase 2: Component Library
**Goal**: Reusable component system matching existing design

**Scope**:
- Atomic components: Button, Link, Heading, Text, Image
- Section components: Hero, Grid, Teaser, ContentBlock
- Layout components: Header, Footer, Navigation
- Ticker/Announcement banner component
- Language switcher component

**Research**: No - extract patterns from existing HTML/CSS

---

### Phase 3: Page Migration
**Goal**: All content pages migrated with full i18n support

**Scope**:
- Homepage (3 languages)
- Content pages: Was uns ausmacht, Historie, Produktion, Produkte, Bei uns arbeiten
- Interview page
- Job listings overview + 5 individual job pages
- Jobs as Markdown Content Collections
- URL structure preserved (SEO requirement)

**Research**: No - 1:1 content migration

---

### Phase 4: Optimization
**Goal**: Performance and accessibility targets met

**Scope**:
- Replace jQuery interactions with Vanilla JS
- Image optimization (WebP, responsive sizes)
- Add alt texts to 475+ images
- Lazy loading implementation
- Core Web Vitals optimization (LCP < 2s, FCP < 1s)
- Bundle size target: < 100KB

**Research**: Yes - need to analyze which jQuery features are used

---

### Phase 5: Polish & Launch
**Goal**: Production-ready site with SEO parity

**Scope**:
- SEO meta tags migration (Open Graph, Schema.org)
- Robots.txt and sitemap generation
- Final cross-browser testing
- Accessibility audit (target: 95+ score)
- Remove unused WordPress artifacts
- Production build and deployment config

**Research**: No - standard finishing tasks

---

## Success Criteria

- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility > 95
- [ ] FCP < 1s, LCP < 2s
- [ ] Bundle size < 100KB (excl. images)
- [ ] All 3 languages working
- [ ] URL structure preserved
- [ ] Pixel-perfect visual match

---
*Created: 2026-01-11*
