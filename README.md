# schlafgut Corporate Website

Static website for schlafgut Group, migrated from WordPress to Astro.

## Projektübersicht / Project Overview

### Was wurde gemacht? / What was done?

Die schlafgut WordPress-Website wurde vollständig auf Astro migriert. Der ursprüngliche Zustand war eine WordPress-Installation mit dynamischem PHP-Backend. Jetzt ist es eine vollständig statische Website, die als reine HTML/CSS-Dateien ausgeliefert wird.

**Von (WordPress):**
- Dynamisches PHP-Backend
- MySQL-Datenbank für Inhalte
- WordPress Theme mit komplexer Asset-Pipeline
- Server-Side Rendering bei jedem Request

**Zu (Astro):**
- Statische HTML-Generierung zur Build-Zeit
- Kein Server erforderlich - nur statisches Hosting
- Keine Datenbank
- Alle Inhalte in TypeScript-Dateien

### Warum wurde das gemacht? / Why was this done?

1. **Performance**: Statische Seiten laden schneller als dynamisch generierte
2. **Sicherheit**: Keine PHP/MySQL-Angriffsfläche
3. **Kosten**: Einfaches Static-Hosting statt WordPress-Server
4. **Wartung**: Kein WordPress-Update-Aufwand mehr
5. **Developer Experience**: Moderner Component-based Workflow

### Der Migrations-Prozess / The Migration Process

1. **Extraktion mit HTTrack/wget**
   - Komplette WordPress-Seite wurde mit HTTrack als statische HTML-Dateien heruntergeladen
   - Alle Assets (Bilder, Fonts, CSS) wurden gespeichert
   - Verzeichnisstruktur wurde erstellt

2. **Analyse**
   - HTML-Struktur der extrahierten Seiten analysiert
   - CSS-Klassen und Styles identifiziert
   - Wiederverwendbare Komponenten erkannt
   - Content-Struktur dokumentiert

3. **Astro-Implementation**
   - Komponenten-basierte Architektur erstellt
   - Styles 1:1 übernommen
   - i18n-System für Deutsch/Englisch implementiert
   - Content in TypeScript-Dateien strukturiert

### Warum Astro? / Why Astro?

Astro ist die beste Wahl für diesen Use Case weil:

- **100% statischer Content**: Keine dynamischen Features nötig
- **Zero JavaScript by Default**: Seiten werden als reines HTML/CSS ausgeliefert
- **Component Islands**: Falls später JS benötigt wird, kann es selektiv hinzugefügt werden
- **Exzellente Build-Performance**: Schnelle Builds mit Vite
- **TypeScript Native**: Typsichere Inhalte und Komponenten
- **Optimierte Bilder**: Automatische Bildoptimierung durch @astrojs/image

---

## Projektstruktur / Project Structure

```
src/
├── components/           # Wiederverwendbare UI-Komponenten
│   ├── Button.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Image.astro       # Responsive image wrapper
│   ├── JobCard.astro
│   ├── LanguageSwitcher.astro
│   ├── Logo.astro
│   ├── Navigation.astro
│   ├── Ticker.astro
│   └── sections/         # Seiten-Abschnitte (Section Components)
│       ├── BigNumbers.astro
│       ├── CenteredImage.astro
│       ├── ColumnsWithHeadline.astro
│       ├── FullBleedBlock.astro
│       ├── FullBleedBlocks.astro
│       ├── FullwidthImage.astro
│       ├── GridBlock.astro
│       ├── GridBlocks.astro
│       ├── Hero.astro
│       ├── HeroText.astro
│       ├── HeroTextJobs.astro
│       ├── ImageGrid.astro
│       ├── InterviewColumns.astro
│       ├── InterviewQuote.astro
│       ├── JobListing.astro
│       ├── JobsList.astro
│       ├── QuoteOnBackground.astro
│       ├── SectionTicker.astro
│       ├── Spacer.astro
│       ├── Teaser.astro
│       ├── TeaserBlocks.astro
│       ├── TextCentered.astro
│       ├── TextImage.astro
│       └── ThreeImages.astro
│
├── i18n/                 # Internationalisierung
│   ├── content/          # Alle Seiteninhalte als TypeScript
│   │   ├── aktuelle-stellen.ts
│   │   ├── bei-uns-arbeiten.ts
│   │   ├── homepage.ts
│   │   ├── interview.ts
│   │   ├── jobs.ts       # Job-Detail-Seiten
│   │   ├── produkte-entdecken.ts
│   │   ├── unsere-historie.ts
│   │   ├── unsere-produktion.ts
│   │   └── was-uns-ausmacht.ts
│   ├── navigation.ts     # Navigation pro Sprache
│   └── utils.ts          # i18n Helper-Funktionen
│
├── layouts/              # Seiten-Layouts
│   └── BaseLayout.astro  # Haupt-Layout mit Head, Header, Footer
│
├── pages/                # Seiten (= Routes)
│   ├── index.astro                    # Startseite (DE)
│   ├── aktuelle-stellen.astro         # Jobs-Übersicht (DE)
│   ├── aktuelle-stellen/              # Job-Detail-Seiten (DE)
│   │   ├── ecommerce-manager.astro
│   │   ├── erp-manager.astro
│   │   ├── marketplace-manager.astro
│   │   ├── paid-social-marketer.astro
│   │   └── werkstudenten-it.astro
│   ├── bei-uns-arbeiten.astro
│   ├── interview.astro
│   ├── produkte-entdecken.astro
│   ├── unsere-historie.astro
│   ├── unsere-produktion.astro
│   ├── was-uns-ausmacht.astro
│   ├── en/                            # English pages
│   │   ├── index.astro
│   │   ├── current-openings.astro
│   │   ├── discover-products.astro
│   │   ├── interview.astro
│   │   ├── our-history.astro
│   │   ├── our-production.astro
│   │   ├── what-defines-us.astro
│   │   └── work-with-us.astro
│   └── nl/                            # Dutch pages
│       ├── index.astro
│       └── onze-geschiedenis.astro
│
├── styles/               # Globale Styles
│   ├── global.css        # CSS Custom Properties, Resets, Base-Styles
│   ├── fonts.css         # @font-face Definitionen
│   ├── components.css    # Allgemeine Komponenten-Styles
│   └── sections.css      # Section-spezifische Styles
│
└── public/               # Statische Assets (werden 1:1 kopiert)
    └── wp-content/
        └── uploads/      # Alle Bilder aus WordPress
```

---

## Entwicklung / Development

### Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (localhost:4321)
npm run dev

# Produktions-Build erstellen
npm run build

# Build-Ergebnis lokal testen
npm run preview
```

### Neue Seite hinzufügen

1. **Content-Datei erstellen** in `src/i18n/content/`:
   ```typescript
   // src/i18n/content/neue-seite.ts
   export interface NeueSeiteContent {
     meta: { title: string; description: string };
     heroText: { title: string };
     // ... weitere Sections
   }

   export const neueSeiteContent: Record<'de' | 'en', NeueSeiteContent> = {
     de: { /* ... */ },
     en: { /* ... */ }
   };
   ```

2. **Astro-Seite erstellen** in `src/pages/`:
   ```astro
   ---
   // src/pages/neue-seite.astro
   import BaseLayout from '../layouts/BaseLayout.astro';
   import HeroText from '../components/sections/HeroText.astro';
   import { neueSeiteContent } from '../i18n/content/neue-seite';

   const content = neueSeiteContent.de;
   ---

   <BaseLayout title={content.meta.title} description={content.meta.description}>
     <HeroText title={content.heroText.title} />
     <!-- weitere Sections -->
   </BaseLayout>
   ```

3. **Englische Version** in `src/pages/en/` erstellen

### Komponenten-Patterns

**Section-Komponenten** (in `src/components/sections/`):
- Erhalten Props für Content
- Haben eigene scoped Styles
- Werden auf Seiten zusammengestellt

```astro
---
interface Props {
  title: string;
  image: { src: string; alt?: string; width: number; height: number };
}

const { title, image } = Astro.props;
---

<section class="my-section">
  <h2>{title}</h2>
  <img src={image.src} alt={image.alt ?? ''} />
</section>

<style>
  .my-section {
    /* Scoped styles - nur für diese Komponente */
  }
</style>
```

**Wichtig bei Child-Komponenten:**
Wenn du Styles auf Child-Komponenten anwenden willst (z.B. Image-Komponente), nutze `:global()`:

```astro
<style>
  .wrapper :global(.child-class) {
    /* Styles für Kinder von .wrapper */
  }
</style>
```

---

## Styling-System

### CSS Custom Properties

Alle Design-Tokens sind in `src/styles/global.css` definiert:

```css
:root {
  /* Farben */
  --yellow: #FFEA00;
  --beige: #f2f0eb;
  --black: #1a1a1a;
  --white: #FFFFFF;

  /* Schriftgrößen */
  --fontSize12: 0.75rem;
  --fontSize14: 0.875rem;
  --fontSize16: 1rem;
  --fontSize18: 1.125rem;
  --fontSize24: 1.5rem;
  --fontSize32: 2rem;
  --fontSize40: 2.5rem;
  --fontSize52: 3.25rem;
  --fontSize72: 4.5rem;

  /* Border-Radius */
  --borderRadius: 10px;
}
```

### Fonts

Drei Schriftarten werden verwendet (definiert in `src/styles/fonts.css`):

- **AgrandirWide**: Headlines (bold, uppercase)
- **Plantin**: Serifen-Headlines
- **Soehne**: Body-Text

Fonts liegen in `/public/wp-content/themes/flavor-theme/fonts/`

### Globale Heading-Styles

```css
h1 {
  font-size: var(--fontSize52);
  font-family: "AgrandirWide", sans-serif;
  text-transform: uppercase;
}

h2 {
  font-size: var(--fontSize40);
  font-family: "AgrandirWide", sans-serif;
  text-transform: uppercase;
}

h3 {
  font-size: var(--fontSize24);
  font-family: "Plantin", serif;
}
```

---

## i18n / Mehrsprachigkeit

Das Projekt unterstützt Deutsch (DE), Englisch (EN) und Niederländisch (NL).

### Struktur

- **Deutsche Seiten**: `src/pages/*.astro` (Root)
- **Englische Seiten**: `src/pages/en/*.astro`
- **Niederländische Seiten**: `src/pages/nl/*.astro`

### Content-Dateien

Jede Content-Datei exportiert ein Objekt mit Sprach-Keys:

```typescript
export const homepageContent: Record<'de' | 'en', HomepageContent> = {
  de: {
    meta: { title: 'Startseite | schlafgut', description: '...' },
    // ...
  },
  en: {
    meta: { title: 'Home | schlafgut', description: '...' },
    // ...
  }
};
```

### Navigation

Die Navigation pro Sprache ist in `src/i18n/navigation.ts` definiert.

---

## Build & Deployment

### Build erstellen

```bash
npm run build
```

Das Build-Ergebnis liegt in `./dist/` und enthält:
- Alle HTML-Seiten
- Optimierte CSS-Dateien
- Kopierte statische Assets aus `/public/`

### Deployment

Der `dist/`-Ordner kann auf jedem statischen Hosting deployed werden:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Beliebiger Webserver (nginx, Apache)

---

## Seiten-Übersicht

| Route (DE) | Route (EN) | Content-Datei |
|------------|-----------|---------------|
| `/` | `/en/` | homepage.ts |
| `/unsere-historie/` | `/en/our-history/` | unsere-historie.ts |
| `/unsere-produktion/` | `/en/our-production/` | unsere-produktion.ts |
| `/produkte-entdecken/` | `/en/discover-products/` | produkte-entdecken.ts |
| `/was-uns-ausmacht/` | `/en/what-defines-us/` | was-uns-ausmacht.ts |
| `/bei-uns-arbeiten/` | `/en/work-with-us/` | bei-uns-arbeiten.ts |
| `/interview/` | `/en/interview/` | interview.ts |
| `/aktuelle-stellen/` | `/en/current-openings/` | aktuelle-stellen.ts |
| `/aktuelle-stellen/[job]/` | - | jobs.ts |

---

## Mitwirkende

Migriert mit Claude Code (Anthropic).
