# Technical Concerns & Issues

## Critical Issues

### 1. Font File Naming Error
**Severity**: HIGH

**Issue**: WOFF2 font files have incorrect `.woff2.html` extensions:
```
wp-content/themes/schlafgut/build/fonts/
├── agrandir-regular.woff2.html      ❌ Should be .woff2
├── agrandir-medium.woff2.html       ❌ Should be .woff2
├── PlantinMTPro-Light.woff2.html    ❌ Should be .woff2
└── PPAgrandir-WideBlack.woff2.html  ❌ Should be .woff2
```

**Impact**:
- Incorrect MIME type served (text/html instead of font/woff2)
- Browser caching issues
- Potential loading failures on strict browsers

**Fix**: Rename files to remove `.html` extension.

---

### 2. Missing Image Alt Text
**Severity**: HIGH

**Issue**: 475+ images have empty `alt=""` attributes across 52 pages.

**Examples**:
```html
<img class="lazyload" alt="" data-src="..." />  <!-- No alt text -->
```

**Impact**:
- WCAG 2.1 Level A violation
- Screen readers cannot describe images
- Lost SEO value for image search
- Poor accessibility score

**Fix**: Audit all images and add descriptive alt text.

---

## Medium Issues

### 3. URL Encoding in Filenames
**Severity**: MEDIUM

**Issue**: 25+ HTML files use query parameters in filenames:
```
index.html?p=12.html
index.html?p=14.html
index.html?p=224.html
...
```

**Impact**:
- Non-standard file naming
- SEO tools may flag as suspicious
- Potential issues with some servers/CDNs
- Difficult to maintain

**Recommendation**: Consider restructuring to directory-based URLs.

---

### 4. Limited ARIA Accessibility
**Severity**: MEDIUM

**Issue**: Only 42 ARIA attributes across entire site.

**Missing**:
- Navigation `role="navigation"`
- Menu ARIA labels
- Button accessible names
- Ticker banner `aria-live` region

**Fix**: Add comprehensive ARIA attributes to interactive elements.

---

### 5. Image Optimization
**Severity**: MEDIUM

**Large Files**:
| File | Size | Issue |
|------|------|-------|
| SCHG_Colorsystem-Black.gif | 1.2MB | Should be WebP/PNG |
| MATHEIS_ABK-*.jpg | 443KB | Needs compression |
| the_reader.png | 338KB | Needs optimization |

**Missing Formats**:
- No WebP versions (modern compression)
- No AVIF versions (next-gen format)

**Fix**: Convert GIF to WebP, compress images, provide modern formats.

---

## Low Issues

### 6. HTTP Protocol in Profile Link
**Severity**: LOW

**Issue**:
```html
<link rel="profile" href="http://gmpg.org/xfn/11" />
```

**Fix**: Change to `https://gmpg.org/xfn/11`

---

### 7. Missing Video Assets
**Severity**: UNKNOWN

**Referenced but possibly missing**:
```
SCHG_WebsiteCorporate_Illustrationen_780x1000-1.mp4
SCHG_WebsiteCorporate_ProduktionTeaser_780x1000.mp4
SCHG_WebsiteCorporate_Matheis-History-Header-1950x920-1.mp4
```

**Action**: Verify these videos are present and accessible.

---

## Technical Debt

### WordPress Artifacts
- XML-RPC endpoint exposed (security consideration)
- REST API endpoints publicly accessible
- Multiple legacy query parameter URLs

### Code Quality
- Inline CSS could be consolidated
- jQuery dependency (could use vanilla JS)
- Multiple stylesheet includes

---

## Summary Table

| Issue | Severity | Count | Effort |
|-------|----------|-------|--------|
| Font file naming | HIGH | 4 files | Low |
| Missing alt text | HIGH | 475+ images | Medium |
| URL encoding in filenames | MEDIUM | 25 files | High |
| Limited ARIA | MEDIUM | Site-wide | Medium |
| Image optimization | MEDIUM | 5+ files | Low |
| HTTP protocol | LOW | 1 | Low |
| Missing videos | UNKNOWN | 3 | Unknown |

---

## Immediate Action Items

1. **Rename font files** - Remove `.html` from WOFF2 filenames
2. **Add alt text** - Audit all 475+ images
3. **Add ARIA labels** - Enhance navigation and interactive elements
4. **Optimize images** - Convert GIF, compress large files
5. **Fix HTTP link** - Update to HTTPS
6. **Verify videos** - Confirm presence and accessibility
