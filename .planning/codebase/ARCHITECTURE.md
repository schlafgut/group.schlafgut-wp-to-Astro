# System Architecture

## Overview
Static HTML mirror of a multilingual WordPress corporate website with 175 files across 3 languages.

## Site Type
- **Original**: WordPress CMS with custom theme
- **Current State**: Static HTML export (no server-side processing)
- **Purpose**: Corporate/brand website for B2B bedding company

## Content Delivery Model
```
Static Files (HTML/CSS/JS/Images)
         │
         ├── German (root level) ──────────────┐
         ├── English (/en/) ───────────────────┼── Same structure
         └── Dutch (/nl/) ─────────────────────┘
```

## URL Structure

### Clean URLs (Directory-based)
```
/                           # German homepage
/produkte-entdecken/        # Products page (DE)
/unsere-historie/           # History page (DE)
/aktuelle-stellen/          # Job listings (DE)
  └── /marktplatzmanager/   # Individual job (DE)

/en/                        # English homepage
/en/our-history/            # History page (EN)

/nl/                        # Dutch homepage
/nl/onze-geschiedenis/      # History page (NL)
```

### Query Parameter URLs (Legacy)
```
index.html?p=12.html        # WP page ID format
index.html?p=224.html       # Redirects/alternate access
```

## Page Template Structure
```html
<body class="page-template-default page page-id-[ID]">
  1. <a class="topticker">     <!-- Animated announcement banner -->
  2. <header>                  <!-- Navigation, logo, language switcher -->
  3. <div class="fixed__nav">  <!-- Sticky navigation menu -->
  4. <div class="outerwrapper">
       <section class="section__*"> <!-- Multiple content sections -->
     </div>
  5. <footer>                  <!-- Footer with links, contact -->
</body>
```

## Data Flow

### Static Content
```
HTML Files → Browser → Rendered Page
     │
     └── CSS/JS Assets → Styling/Interactivity
```

### External Integrations
```
Static Site ──→ business.schlafgut.com (B2B Shop)
           ──→ www.schlafgut.com (Consumer Shop)
           ──→ DHL Returns System
```

## API Endpoints (Mirrored)
```
/wp-json/
  ├── index.html              # API root
  ├── wp/v2/pages/{id}        # Page data (27 pages)
  └── oembed/1.0/embed        # Embed endpoints
```

## Content Organization

### Page Types
| Type | Count | Description |
|------|-------|-------------|
| Homepage | 3 | One per language |
| Content Pages | 18+ | About, History, Production, etc. |
| Job Listings | 5 | Individual job postings |
| Index/Archives | 3 | Job listing overview pages |

### Language Distribution
- German (DE): Primary, root level
- English (EN): /en/ subdirectory
- Dutch (NL): /nl/ subdirectory
