# Phase 4: Optimization - Plan 03: Accessibility & SEO

## Objective
Fix all accessibility issues to pass WCAG AA audit and ensure SEO best practices with absolute hreflang URLs.

## Context

### Issues to Fix
1. **SEO**: Relative hreflang URLs → absolute
2. **Contrast**: `.tax-information` and footer links insufficient contrast
3. **Link Labels**: Logo link missing accessible name
4. **Headings**: h4 "INNOVATION AUS TRADITION" skips levels
5. **Video**: Missing captions/aria-labels
6. **Images**: Many missing alt texts

### Already Fixed (previous sessions)
- Logo `aria-label` added ✓
- Video `aria-label` added to GridBlock ✓
- Some contrast improvements ✓

## Tasks

### Task 1: Fix Absolute hreflang URLs
**Problem:** hreflang links are relative, should be absolute for SEO.

**Do:**
1. Verify `astro.config.mjs` has `site` configured:
   ```javascript
   export default defineConfig({
     site: 'https://group.schlafgut.com',
     // ...
   });
   ```

2. Update `src/layouts/BaseLayout.astro` hreflang tags:
   ```astro
   <link rel="alternate" href={new URL('/', Astro.site).href} hreflang="de" />
   <link rel="alternate" href={new URL('/en/', Astro.site).href} hreflang="en" />
   <link rel="alternate" href={new URL('/nl/', Astro.site).href} hreflang="nl" />
   ```

   Or use `Astro.site` with path:
   ```astro
   <link rel="alternate" href={`${Astro.site}${deUrl}`} hreflang="de" />
   ```

**Output:**
- All hreflang URLs are absolute (https://group.schlafgut.com/...)

### Task 2: Fix Contrast Issues
**Problem:** `.tax-information` and footer links don't meet WCAG AA (4.5:1 ratio).

**Do:**
1. Current `--colorGrey: rgba(0,0,0,0.5)` = 50% opacity = ~3:1 contrast

2. Update to 65%+ opacity for WCAG AA compliance:
   ```css
   /* In global.css or design tokens */
   --colorGrey: rgba(0,0,0,0.65);
   ```

   Or component-specific:
   ```css
   .tax-information {
     color: rgba(0,0,0,0.65); /* WCAG AA compliant */
   }
   ```

3. Verify contrast with tool:
   - Background: #FFFFFF (white)
   - Foreground: rgba(0,0,0,0.65) → ~#595959
   - Contrast ratio: ~5.9:1 ✓

**Output:**
- All text meets WCAG AA 4.5:1 contrast ratio

### Task 3: Fix Logo Link Accessibility
**Problem:** Logo link (`a.logo`) missing accessible name.

**Status:** Already fixed in Header.astro with `aria-label="Schlafgut Homepage"`

**Verify:**
```astro
<a href={homeHref} class="logo" aria-label="Schlafgut Homepage">
  <Logo variant="full" />
</a>
```

**Output:**
- Logo link has accessible name ✓

### Task 4: Fix Heading Hierarchy
**Problem:** `h4` for kickers like "INNOVATION AUS TRADITION" skips heading levels.

**Do:**
1. Update `GridBlock.astro`:
   - Change `<h4 class="kicker">` to `<span class="kicker">`
   - Maintain visual styling

   ```astro
   <!-- Before -->
   {kicker && <h4 class="kicker" set:html={kicker} />}
   {title && <h3 class="title" set:html={title} />}

   <!-- After -->
   {kicker && <span class="kicker" set:html={kicker} />}
   {title && <h2 class="title" set:html={title} />}
   ```

2. Update other components with similar issues:
   - `ColumnsWithHeadline.astro`
   - `TeaserBlocks.astro`
   - Any component using h4 for kickers

3. Ensure CSS targets class not element:
   ```css
   .kicker { /* styles */ }
   .title { /* styles */ }
   ```

**Output:**
- Heading hierarchy is semantic (h1 → h2 → h3, no skips)
- Visual appearance unchanged

### Task 5: Fix Video Accessibility
**Problem:** `<video>` elements missing captions.

**Do:**
1. For decorative/background videos, add:
   ```html
   <video muted aria-label="Dekoratives Hintergrundvideo">
   ```

2. Verify all videos in components have:
   - `muted` attribute (already present for autoplay)
   - `aria-label` describing content

**Components to check:**
- `GridBlock.astro` ✓ (already has aria-label)
- `FullwidthImage.astro`
- `Hero.astro`
- Any component with `<video>`

**Output:**
- All videos have accessibility attributes

### Task 6: Add Alt Texts to Images
**Problem:** Many images missing alt attributes.

**Do:**
1. Audit all image usage in pages:
   - `src/pages/index.astro` (homepage)
   - All content pages

2. For each `<Image>` or `<img>`:
   - Add descriptive alt text
   - Use empty alt="" for purely decorative images

3. Update homepage content in `src/i18n/content/homepage.ts`:
   ```typescript
   hero: {
     image: {
       src: '/images/hero.jpg',
       alt: 'Schlafgut Bettwäsche auf einem gemachten Bett', // Add alt
     }
   }
   ```

**Alt text guidelines:**
- Describe the image content, not the file name
- Keep under 125 characters
- Use empty alt="" for decorative images
- For product images: describe the product

**Common images to fix:**
- Hero images: describe scene
- Product images: describe product
- Team photos: describe who/what
- Background images: can use aria-hidden or empty alt

**Output:**
- All meaningful images have descriptive alt text
- Decorative images have empty alt=""

## Verification

```bash
# Run Lighthouse audit
cd src && npm run build && npm run preview
# Open http://localhost:4321 in Chrome
# Run Lighthouse Accessibility audit
```

**Accessibility checklist:**
- [ ] Lighthouse Accessibility score > 95
- [ ] No contrast errors in DevTools
- [ ] Heading outline shows logical hierarchy
- [ ] All images have alt or are aria-hidden
- [ ] All videos have aria-label

**SEO checklist:**
- [ ] hreflang URLs are absolute
- [ ] No broken links
- [ ] Meta descriptions present

## Success Criteria

- [ ] Lighthouse Accessibility > 95
- [ ] WCAG AA contrast compliance
- [ ] Heading hierarchy semantic
- [ ] All videos accessible
- [ ] All images have alt texts
- [ ] hreflang URLs absolute
- [ ] No accessibility errors in audit

## Output

- Updated `astro.config.mjs` - site URL confirmed
- Updated `BaseLayout.astro` - absolute hreflang
- Updated CSS/tokens - contrast fix
- Updated `GridBlock.astro` - heading hierarchy
- Updated `ColumnsWithHeadline.astro` - heading hierarchy
- Updated content files - alt texts
- Updated video components - aria-labels

---
*Created: 2026-01-13*
