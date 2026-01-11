# Directory Structure

## Root Overview
```
group.schlafgut.com/
├── .planning/              # Planning documentation (this folder)
├── index.html              # German homepage
├── index.html?p=*.html     # Query parameter pages (25 files)
├── robots.txt              # SEO robots file
│
├── aktuelle-stellen/       # Job listings (DE)
│   ├── index.html
│   ├── ecommerce-manager/
│   ├── erp-manager/
│   ├── marktplatzmanager/
│   ├── paid-social-marketer/
│   └── werkstudent-it/
│
├── bei-uns-arbeiten/       # Work with us (DE)
├── interview/              # Interview page (DE)
├── produkte-entdecken/     # Products (DE)
├── unsere-historie/        # History (DE)
├── unsere-produktion/      # Production (DE)
├── was-uns-ausmacht/       # What defines us (DE)
│
├── en/                     # English pages
│   ├── index.html
│   ├── discover-products/
│   ├── interview/
│   ├── our-history/
│   ├── our-production/
│   ├── recent-job-offers/
│   ├── what-defines-us/
│   └── work-with-us/
│
├── nl/                     # Dutch pages
│   ├── index.html
│   ├── bij-ons-werken/
│   ├── interview/
│   ├── onze-geschiedenis/
│   ├── onze-productie/
│   ├── producten-ontdekken/
│   └── wat-ons-definieert/
│
├── wp-content/             # WordPress assets
│   ├── themes/
│   ├── plugins/
│   └── uploads/
│
└── wp-json/                # REST API mirror
    ├── index.html
    ├── wp/v2/pages/
    └── oembed/
```

## Asset Structure
```
wp-content/
├── themes/schlafgut/
│   ├── style.css?ver=6.9.css      # Theme stylesheet
│   └── build/
│       ├── css/
│       │   └── styles.css?ver=6.9.css
│       ├── js/
│       │   ├── app-min.js?ver=3.6
│       │   └── jquery-3.6.0.min.js
│       ├── fonts/
│       │   ├── agrandir-regular.woff
│       │   ├── agrandir-medium.woff
│       │   ├── PlantinMTPro-Light.woff
│       │   └── PPAgrandir-WideBlack.woff
│       └── images/
│           └── paylogos.png
│
├── plugins/wp-rocket/
│   └── assets/js/lcp-beacon.min.js
│
└── uploads/2023/
    ├── 03/                 # March 2023
    │   ├── cropped-heart-*.png (favicons)
    │   ├── loop_side.png
    │   ├── the_reader.png
    │   └── *.jpg (product images)
    └── 04/                 # April 2023
        ├── DSC2016-*.jpg
        ├── SCHG_Colorsystem-Black.gif
        └── MATHEIS_ABK-*.jpg
```

## File Statistics
| Category | Count |
|----------|-------|
| Total Files | 175 |
| HTML Pages | ~52 |
| CSS Files | 2 |
| JS Files | 3 |
| Font Files | 8 (4 families x 2 formats) |
| Images | ~25+ |
| JSON (API) | ~50 |

## Naming Conventions
- **Pages**: Lowercase, hyphenated slugs (e.g., `unsere-historie`)
- **Assets**: Kebab-case with version parameters
- **Languages**: ISO codes as directories (`en/`, `nl/`)
- **WP Uploads**: Year/month organization (`2023/03/`)
