# Technology Stack

## Overview
Static HTML export of a WordPress corporate website for Schlafgut (German bedding company).

## Core Platform
| Technology | Version | Notes |
|------------|---------|-------|
| WordPress | 6.9 | Original CMS (this is a static copy) |
| Static HTML | - | Exported/mirrored site |

## Frontend Technologies

### JavaScript
| Library | Version | Purpose |
|---------|---------|---------|
| jQuery | 3.6.0 | DOM manipulation, events |
| Custom App JS | 3.6 | Site-specific functionality (minified) |
| Lazysizes | Bundled | Lazy loading images |
| WP Rocket LCP Beacon | - | Performance monitoring |

### CSS
- Custom CSS architecture (no framework)
- CSS Custom Properties (design tokens)
- Responsive breakpoint: 768px
- WordPress Block Editor global styles

### Fonts (Self-hosted)
| Font Family | Weights | Format |
|-------------|---------|--------|
| Agrandir | 400 (Regular), 500 (Medium) | WOFF, WOFF2 |
| AgrandirWide | 900 (Black) | WOFF, WOFF2 |
| PlantinMTPro | 300 (Light) | WOFF, WOFF2 |

## WordPress Plugins (Detected)

### Performance
- **WP Rocket** - Caching, lazy loading, LCP beacon, prefetching

### Multilingual
- **Polylang** - 3 languages (DE, EN, NL)

### SEO
- **All in One SEO (AIOSEO)** v4.9.3 - Meta tags, Schema.org, Open Graph

## Build Tools
- Asset versioning (ver=6.9, ver=3.6)
- Minification applied to JS/CSS
- Build directory: `/wp-content/themes/schlafgut/build/`

## Browser Support
- Modern browsers (ES5+ JavaScript)
- Responsive design (mobile-first)
- No IE11-specific polyfills detected
