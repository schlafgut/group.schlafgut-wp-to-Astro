# Testing

## Overview
This is a **static HTML site** (not an application codebase), so traditional automated testing is not applicable.

## Current Testing Status
- **Unit Tests**: None (static HTML)
- **Integration Tests**: None
- **E2E Tests**: None
- **Visual Regression**: None

## Recommended Testing Approaches

### 1. Link Validation
Manual or automated checking of all internal and external links:
- Internal page links
- Asset references (CSS, JS, images, fonts)
- External links (B2B shop, consumer shop, DHL)

### 2. Accessibility Testing
```
Tools to use:
- WAVE (wave.webaim.org)
- axe DevTools
- Lighthouse Accessibility audit
- Screen reader testing (VoiceOver, NVDA)
```

**Known Issues to Test**:
- 475+ images missing alt text
- Limited ARIA labels
- Keyboard navigation

### 3. Cross-Browser Testing
```
Browsers to test:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)
```

### 4. Responsive Testing
```
Breakpoints to test:
- Desktop: > 768px
- Mobile: <= 768px

Key elements to verify:
- Navigation menu collapse
- Grid layouts single-column on mobile
- Font sizing adjustments
- Image sizing
```

### 5. Performance Testing
```
Tools:
- Lighthouse Performance audit
- WebPageTest.org
- GTmetrix

Metrics to check:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Total page weight
- Number of requests
```

### 6. SEO Validation
```
Tools:
- Google Search Console
- Screaming Frog SEO Spider
- Lighthouse SEO audit

Items to verify:
- Meta tags present
- Schema.org markup valid
- hreflang tags correct
- Canonical URLs
- robots.txt
```

### 7. Multilingual Testing
```
Languages to verify:
- German (DE) - root level
- English (EN) - /en/
- Dutch (NL) - /nl/

Check:
- Language switcher functionality
- Correct translations displayed
- hreflang tag accuracy
- URL structure consistency
```

## Manual Testing Checklist

### Navigation
- [ ] Header navigation links work
- [ ] Language switcher changes pages
- [ ] Mobile burger menu opens/closes
- [ ] Footer links functional
- [ ] Ticker banner clickable

### Content Display
- [ ] Images load (including lazy-loaded)
- [ ] Videos play (if present)
- [ ] Fonts render correctly
- [ ] Colors/styling consistent
- [ ] Text readable at all sizes

### Forms/Interactive Elements
- [ ] CTA buttons clickable
- [ ] External links open correctly
- [ ] No JavaScript errors in console

### Cross-Language Consistency
- [ ] Same layout across DE/EN/NL
- [ ] Equivalent pages exist in all languages
- [ ] Job listings match language
