# External Integrations

## Overview
The Schlafgut corporate site integrates with several external services for e-commerce, shipping, and analytics.

## E-Commerce Integrations

### B2B Shop
| Property | Value |
|----------|-------|
| URL | `https://business.schlafgut.com` |
| Login Path | `/account/login` |
| Purpose | Business-to-business ordering portal |
| Integration Type | External link (header) |

### Consumer Shop
| Property | Value |
|----------|-------|
| URL | `https://www.schlafgut.com` |
| Purpose | Direct-to-consumer e-commerce |
| Integration Type | External link (CTA buttons) |

## Shipping Integration

### DHL Returns
| Property | Value |
|----------|-------|
| Purpose | Order returns processing |
| Integration Type | External link |
| Location | Footer links |

## Analytics & Verification

### Google Site Verification
```html
<meta name="google-site-verification"
      content="8Np5ZZkUO0d1bOssIZcm2Y93Qh4Mop7BzM8yS9n1GLw" />
```
- Enables Google Search Console access
- Validates site ownership

### WP Rocket LCP Beacon
```
File: wp-content/plugins/wp-rocket/assets/js/lcp-beacon.min.js
Purpose: Monitors Largest Contentful Paint for performance optimization
```

## API Endpoints (Mirrored)

### WordPress REST API
```
/wp-json/                    # API root
/wp-json/wp/v2/pages/{id}    # Page data
/wp-json/oembed/1.0/embed    # oEmbed support
```

**Available Page IDs**:
2, 12, 14, 16, 18, 20, 118, 224, 481, 495-501, 576, 581, 582, 594, 596, 599, 602, 608, 651, 660, 720

### oEmbed Support
```
/wp-json/oembed/1.0/embed?url={page_url}&lang={de|en|nl}
/wp-json/oembed/1.0/embed?url={page_url}&format=xml&lang={de|en|nl}
```
- Supports JSON and XML formats
- Language-specific embeds

## SEO Integrations

### All in One SEO (AIOSEO) v4.9.3
Provides:
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card metadata
- Schema.org structured data (JSON-LD)
- Breadcrumb schema
- Organization schema

### Structured Data (Schema.org)
```json
{
  "@type": "Organization",
  "name": "Schlafgut",
  "description": "Spannbettlaken und Bettwäsche",
  "url": "https://group.schlafgut.com/",
  "telephone": "+497161800267",
  "logo": { "@type": "ImageObject", "url": "..." }
}
```

## CDN & External Resources

### No External CDNs Detected
- jQuery: Self-hosted (`wp-content/themes/schlafgut/build/js/jquery-3.6.0.min.js`)
- Fonts: Self-hosted (no Google Fonts, Adobe Fonts)
- CSS Frameworks: None (custom CSS)

### External Protocols
```html
<link rel="profile" href="http://gmpg.org/xfn/11" />  <!-- XFN profile -->
<prefix="og: https://ogp.me/ns#">                     <!-- Open Graph -->
```

## Multilingual Support

### Polylang Integration
- Cookie: `pll_language` (1-year expiration)
- Languages: DE (default), EN, NL
- URL Structure: Directory-based (`/en/`, `/nl/`)

### hreflang Tags
```html
<link rel="alternate" href="index.html" hreflang="de" />
<link rel="alternate" href="en/index.html" hreflang="en" />
<link rel="alternate" href="nl/index.html" hreflang="nl" />
```

## Security Considerations

### Exposed Endpoints
- XML-RPC: Referenced (`/xmlrpc.php`) - security consideration
- REST API: Publicly accessible

### Cookie Security
```
SameSite=Lax; Secure; path=/
```
Applied to language preference cookie.
