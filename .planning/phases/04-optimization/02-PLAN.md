# Phase 4: Optimization - Plan 02: Visual Polish

## Objective
Fix all spacing, font size, and visual styling differences between Astro and the original WordPress site to achieve pixel-perfect parity.

## Context

### Reference Files
- **Original CSS:** `wp-content/themes/schlafgut/build/css/styles.css?ver=6.9.css`
- **Original HTML:** Root folder `.html` files

### Issues to Fix
1. Header navigation spacing to logo
2. "Unser halbes Leben..." text block spacing
3. Card font sizes (GridBlocks)
4. White text block spacing
5. Footer: uppercase text + divider line

## Tasks

### Task 1: Fix Header Navigation Spacing
**Problem:** Navigation has less spacing to logo than original.

**Do:**
1. Compare original CSS header values:
   ```css
   /* Original */
   header { height: var(--headerHeight); } /* 12.5rem */
   .header__top { ... }
   nav { padding-top: X; }
   ```

2. Update `src/components/Header.astro` and `src/components/Navigation.astro`:
   - Adjust `padding-top` or `margin-top` on navigation
   - Ensure `.innerwrapper.smaller` matches original width calculation

**Reference values from original:**
- `--headerHeight: 12.5rem` (desktop)
- `--headerHeight: 2.9rem` (mobile)
- Nav should have proper vertical spacing within header

**Output:**
- Navigation spacing matches original

### Task 2: Fix Text Block Spacing ("Unser halbes Leben...")
**Problem:** Standalone text sections have incorrect padding/margin.

**Do:**
1. Identify the component (likely `TextCentered.astro` or `ColumnsWithHeadline.astro`)

2. Check original CSS for section spacing:
   ```css
   /* Original uses */
   --sectionSpacing: 9.2rem;  /* desktop */
   --sectionSpacing: 2.4rem;  /* mobile */
   ```

3. Update component with correct values:
   - Section padding top/bottom
   - Inner text container margins
   - Line-height and letter-spacing

**Output:**
- Text block spacing matches original

### Task 3: Fix Card Font Sizes in GridBlocks
**Problem:** Font sizes in right and bottom cards are too large.

**Do:**
1. Identify affected elements in `GridBlock.astro`:
   - `.kicker` (h4) font size
   - `.title` (h3) font size

2. Compare with original CSS:
   ```css
   /* Original GridBlock styles */
   .single__block .content .kicker { font-size: var(--fontSize10); }
   .single__block .content .title { font-size: var(--fontSize32); }

   /* Wide variant may differ */
   .single__block.wide .content .title { font-size: var(--fontSize52); }
   ```

3. Update `GridBlock.astro` styles to match

**Original font size references:**
```css
--fontSize10: 0.588rem;
--fontSize32: 1.8823rem;
--fontSize52: 3.058rem;
```

**Output:**
- Card text sizes match original

### Task 4: Fix White Text Block Spacing
**Problem:** White background text blocks have incorrect spacing.

**Do:**
1. Identify component (likely a variant of content section)

2. Check original for:
   - Container padding
   - Text margins
   - Background color application

3. Update relevant component with correct spacing values

**Output:**
- White text block spacing matches original

### Task 5: Fix Footer Styling
**Problem:**
- Footer text not uppercase
- Divider line missing

**Do:**
1. Update `src/components/Footer.astro`:

   **Add uppercase to text:**
   ```css
   .footer__bottom .column ul li {
     text-transform: uppercase;
     font-size: var(--fontSize12);
     letter-spacing: 0.3em;
   }

   .footer__bottom .column ul li:first-child {
     font-size: var(--fontSize10);
   }
   ```

   **Add divider line:**
   ```css
   .footer__bottom {
     border-top: 1px solid var(--colorBlack);
     padding-top: 1.9rem;
   }
   ```

2. Ensure `.footer__top` section exists if needed (newsletter area)

**Original footer structure:**
```html
<footer>
  <div class="innerwrapper smaller">
    <div class="footer__top"><!-- newsletter --></div>
    <div class="footer__bottom">
      <!-- border-top divider -->
      <div class="footer__columns">...</div>
    </div>
  </div>
</footer>
```

**Output:**
- Footer matches original exactly

## Verification

```bash
# Build should pass
cd src && npm run build

# Visual comparison
# Open original and Astro side-by-side at same viewport width
```

**Visual checklist:**
- [ ] Header logo-to-nav spacing matches
- [ ] Standalone text blocks have correct spacing
- [ ] GridBlock card fonts are correct size
- [ ] White text blocks spacing is correct
- [ ] Footer has uppercase text
- [ ] Footer has divider line

## Success Criteria

- [ ] All spacing issues resolved
- [ ] All font size issues resolved
- [ ] Footer divider line present
- [ ] Footer text uppercase
- [ ] Visual comparison passes pixel-perfect test
- [ ] Mobile responsive behavior preserved

## Output

- Updated `Header.astro` - navigation spacing
- Updated `Navigation.astro` - positioning
- Updated `TextCentered.astro` - section spacing
- Updated `GridBlock.astro` - font sizes
- Updated `Footer.astro` - uppercase + divider

---
*Created: 2026-01-13*
