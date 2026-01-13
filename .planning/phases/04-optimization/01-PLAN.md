# Phase 4: Optimization - Plan 01: GSAP Animations

## Objective
Install GSAP and implement pixel-perfect animations matching the original WordPress site, including the infinite ticker loop, scroll-triggered slide-in effects, and image blur effects.

## Context

### Original Implementation Analysis
The original site uses GSAP with ScrollTrigger for:
- `gsap.to` / `gsap.fromTo` - element animations
- `gsap.set` - initial state setting
- `ScrollTrigger` - scroll-based animation triggers
- `gsap.timeline` - complex animation sequences

### Current Issues
1. **Ticker**: CSS animation (`translateX(-50%)`) causes content clipping and isn't as smooth as GSAP
2. **Scroll effects**: Missing slide-in animations for elements entering viewport
3. **Blur effects**: Missing blur transitions on images

## Tasks

### Task 1: Install GSAP Dependencies
**Do:**
1. Install GSAP and ScrollTrigger:
   ```bash
   cd src && npm install gsap
   ```
2. Create `src/scripts/animations.ts` for shared animation utilities

**Output:**
- GSAP installed in package.json
- Animation utilities file ready

### Task 2: Implement Ticker GSAP Animation
**Do:**
1. Update `src/components/Ticker.astro`:
   - Remove CSS animation
   - Add `client:load` script for GSAP infinite horizontal loop
   - Use `gsap.to` with `repeat: -1` and `ease: "none"` for seamless loop

**Reference (Original CSS approach to match):**
```css
.ticker {
  display: flex;
  justify-content: flex-start;  /* Important: not center */
  overflow: hidden;
}
```

**GSAP Implementation:**
```typescript
import gsap from 'gsap';

const ticker = document.querySelector('.ticker');
const spans = ticker.querySelectorAll('span');

// Calculate total width of one set of spans
const totalWidth = Array.from(spans).slice(0, spans.length / 2)
  .reduce((acc, span) => acc + span.offsetWidth, 0);

gsap.to(ticker, {
  x: -totalWidth,
  duration: 30,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
  }
});
```

**Output:**
- Smooth infinite ticker matching original

### Task 3: Implement Scroll-Triggered Slide-In Animations
**Do:**
1. Create `src/scripts/scroll-animations.ts`:
   - Register ScrollTrigger plugin
   - Implement slide-in effect for `.slide-in-element` classes
   - Elements animate from `opacity: 0, y: 50` to `opacity: 1, y: 0`

2. Add `.slide-in-element` class to relevant components:
   - Section headings
   - Content blocks entering viewport
   - Images in grid layouts

**Reference from original:**
- Elements have `data-scroll` or similar attributes
- Animation triggers when element enters viewport

**Implementation:**
```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.slide-in-element').forEach(el => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});
```

**Output:**
- Smooth scroll-triggered animations

### Task 4: Implement Image Blur Effects
**Do:**
1. Add blur transition effect to images:
   - Images start with `filter: blur(10px)` and `opacity: 0.8`
   - On scroll into view, animate to `filter: blur(0)` and `opacity: 1`

2. Update `src/components/Image.astro` to support blur effect:
   - Add optional `blur` prop
   - Add `data-blur` attribute for script targeting

**Implementation:**
```typescript
document.querySelectorAll('[data-blur]').forEach(img => {
  gsap.from(img, {
    filter: "blur(10px)",
    opacity: 0.8,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: img,
      start: "top 90%"
    }
  });
});
```

**Output:**
- Smooth blur-to-sharp image reveals

### Task 5: Create Animation Loader Component
**Do:**
1. Create `src/components/AnimationLoader.astro`:
   - Imports and initializes all GSAP animations
   - Uses `client:idle` for non-blocking load
   - Handles page transitions (if needed)

2. Add to `BaseLayout.astro` before closing `</body>`

**Output:**
- Single entry point for all animations
- Non-blocking performance

## Verification

```bash
# Build should pass
cd src && npm run build

# Check bundle size impact
# GSAP core: ~24KB gzipped
# ScrollTrigger: ~10KB gzipped
```

**Visual checks:**
- [ ] Ticker scrolls infinitely without jumps or gaps
- [ ] Elements slide in smoothly on scroll
- [ ] Images reveal with blur effect
- [ ] No animation jank on mobile
- [ ] Lighthouse Performance score > 90

## Success Criteria

- [ ] GSAP installed and configured
- [ ] Ticker infinite loop works seamlessly
- [ ] Scroll-triggered slide-in animations active
- [ ] Image blur effects implemented
- [ ] Bundle size impact < 35KB gzipped
- [ ] No layout shift from animations
- [ ] Mobile performance maintained

## Output

- `package.json` with GSAP dependency
- `src/scripts/animations.ts` - animation utilities
- `src/scripts/scroll-animations.ts` - ScrollTrigger setup
- `src/components/AnimationLoader.astro` - loader component
- Updated `Ticker.astro` with GSAP animation
- Updated `Image.astro` with blur support

---
*Created: 2026-01-13*
