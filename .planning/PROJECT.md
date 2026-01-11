# Schlafgut Astro Migration

## Vision

Migration des statischen WordPress-Mirrors zu einem modernen Astro.build Projekt. Die Seite soll 1:1 wie das Original aussehen, aber schneller laden, besser wartbar sein und ohne WordPress-Overhead funktionieren.

**Kern-Priorität**: Performance (maximale Lighthouse-Scores, schnellste Ladezeiten)

## Context

### Was existiert
- Statischer HTML-Mirror der group.schlafgut.com Website
- 175 Dateien über 3 Sprachen (DE/EN/NL)
- Corporate Website für B2B Bettwäsche-Unternehmen
- Custom BEM-CSS mit Design Tokens
- jQuery 3.6.0 für Interaktivität
- Lazy Loading für Bilder
- Responsive Design (Breakpoint 768px)

### Bekannte Probleme (aus Codebase-Analyse)
- 4 Font-Dateien mit falscher Endung (.woff2.html statt .woff2)
- 475+ Bilder ohne Alt-Text
- jQuery-Abhängigkeit (veraltet)
- WordPress-Overhead (wp-json, wp-content Struktur)

## Requirements

### Validated (bestehende Funktionalität)

- ✓ 3-Sprachen-Support (DE/EN/NL) — existing
- ✓ Homepage pro Sprache — existing
- ✓ Content-Seiten: Was uns ausmacht, Historie, Produktion, Produkte, Bei uns arbeiten — existing
- ✓ Job-Listings mit Einzelseiten (5 aktuelle Stellen) — existing
- ✓ Interview-Seite — existing
- ✓ Responsive Design (Desktop/Mobile) — existing
- ✓ Ticker/Announcement Banner — existing
- ✓ Language Switcher — existing
- ✓ Sticky Navigation — existing
- ✓ Custom Typography (Agrandir, AgrandirWide, PlantinMTPro) — existing
- ✓ Externe Links zu B2B-Shop und Consumer-Shop — existing
- ✓ Footer mit Kontaktdaten und Links — existing
- ✓ Lazy Loading für Bilder — existing
- ✓ Video-Hintergründe — existing

### Active (neue Anforderungen)

- [ ] Astro 4.x Framework Setup mit TypeScript
- [ ] Tailwind CSS Integration
- [ ] Natives Astro i18n-Routing für DE/EN/NL
- [ ] Atomare Komponenten (Button, Card, Heading, etc.)
- [ ] Sektions-Komponenten (Hero, Grid, Teaser, etc.)
- [ ] Globales Layout mit Header/Footer Komponenten
- [ ] jQuery entfernen → Vanilla JS
- [ ] Font-Dateien korrigieren (.woff2.html → .woff2)
- [ ] Alt-Texte für alle 475+ Bilder ergänzen
- [ ] Jobs als Markdown/JSON Content Collections
- [ ] Bildoptimierung (WebP, optimierte Größen)
- [ ] SEO-Metadaten (Open Graph, Schema.org) migrieren
- [ ] Performance-Optimierung (Core Web Vitals)

### Out of Scope

- Kontaktformular — Keine Backend-Logik in v1
- Headless CMS — Jobs bleiben statisch als Markdown
- wp-json API Endpoints — Nicht mehr benötigt
- oEmbed Support — Nicht mehr benötigt
- WP Rocket Features — Astro hat eigene Optimierungen

## Technical Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro + Tailwind | Modern, performant, gute DX | Pending |
| Atomare + Sektions-Komponenten | Wiederverwendbarkeit + Pragmatismus | Pending |
| Jobs als Markdown | Einfach zu pflegen, kein CMS-Overhead | Pending |
| Vanilla JS statt jQuery | Kleiner Bundle, moderner | Pending |
| Astro i18n-Routing | Native Lösung, kein Plugin nötig | Pending |

## Constraints

- Pixel-perfekte Optik wie Original
- Keine Breaking Changes an URLs (SEO)
- Self-hosted Fonts (keine Google Fonts)

## Success Metrics

- Lighthouse Performance Score > 95
- Lighthouse Accessibility Score > 95
- First Contentful Paint < 1s
- Largest Contentful Paint < 2s
- Total Bundle Size < 100KB (ohne Bilder)

## Source Material

- `.planning/codebase/` — 7 Dokumente zur bestehenden Struktur
- Original HTML-Dateien im Root-Verzeichnis
- `wp-content/themes/schlafgut/` — CSS, JS, Fonts, Bilder

---
*Last updated: 2026-01-11 after initialization*
