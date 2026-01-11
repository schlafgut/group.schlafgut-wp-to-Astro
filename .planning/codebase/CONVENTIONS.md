# Code Conventions

## CSS Naming Convention

### BEM Variant (Block__Element)
The site uses a custom BEM variant with double underscores for elements:

```css
/* Block + Element */
.header__top          /* Header block, top element */
.header__left         /* Header block, left section */
.section__hero        /* Section block, hero variant */
.section__grid-blocks /* Section block, grid layout */
.single__block        /* Single item block */
.footer__columns      /* Footer block, columns element */
.cta__button          /* Call-to-action button */

/* Wrapper patterns */
.innerwrapper         /* Inner content container */
.outerwrapper         /* Outer full-width wrapper */
.innerwrapper.smaller /* Narrower variant */
```

### State & Utility Classes
```css
.is-active            /* Active state (menus, modals) */
.only__mobile         /* Mobile-only visibility */
.only__desktop        /* Desktop-only visibility */
.current-menu-item    /* Active navigation state */
.lazyload             /* Lazy-loaded image flag */
```

## Data Attributes for Styling

Extensive use of data attributes as CSS selectors:

```html
<!-- Typography control -->
<div data-headline="agrandir_wide">  <!-- AgrandirWide font -->
<div data-headline="plantin">        <!-- PlantinMTPro font -->

<!-- Position control -->
<div data-position="top">            <!-- Top-aligned content -->
<div data-position="middle">         <!-- Center-aligned content -->

<!-- Color theming -->
<div data-color="black">             <!-- Black text theme -->
<div data-color="white">             <!-- White text theme -->
<div data-color="yellow">            <!-- Yellow background theme -->
<div data-background="yellow">       <!-- Section background -->

<!-- Lazy loading -->
<img data-src="path/to/image.jpg">   <!-- Deferred image source -->
<img data-srcset="...">              <!-- Responsive images -->
```

## CSS Custom Properties (Design Tokens)

```css
:root {
  /* Typography Scale (rem-based) */
  --fontSize7: 0.7rem;
  --fontSize10: 1.0rem;
  --fontSize14: 1.4rem;
  /* ... through --fontSize150 */

  /* Spacing */
  --sideSpacing: 3.6rem;
  --sideSpacingWide: 10.3rem;
  --sectionSpacing: 9.2rem;
  --gutterSpacing: 2.4rem;

  /* Colors */
  --colorBlack: #0D0900;
  --colorWhite: #FFFFFF;
  --colorGrey: rgba(0,0,0,0.5);
  --colorGreyLight: rgba(0,0,0,0.05);
  --colorBeigeLight: rgba(232, 227, 223, 0.3);
  --colorBeige: rgba(232, 227, 223, 0.5);
  --colorBlue: #1B31F8;
  --colorRed: #d60a2e;
  --colorYellow: #FBF3B1;

  /* Layout */
  --borderRadius: 0.6rem;
  --headerHeight: 12.5rem;
  --tickerHeight: 2.235rem;
}
```

## HTML Structure Patterns

### Page Wrapper
```html
<body class="page-template-default page page-id-[ID] wp-theme-schlafgut frontend">
```

### Section Pattern
```html
<section class="section__hero default">
  <div class="innerwrapper">
    <h1>Title</h1>
  </div>
  <div class="image">
    <img class="lazyload" data-src="..." alt="" />
  </div>
</section>
```

### Content Block Pattern
```html
<div class="single__block default"
     data-headline="agrandir_wide"
     data-position="top"
     data-color="black">
  <div class="content">
    <h4>Sub-heading</h4>
    <h3>Main heading</h3>
  </div>
  <a class="cta__link">Link text</a>
  <img class="background_image" ... />
</div>
```

## Typography Hierarchy

| Element | Font | Weight | Use Case |
|---------|------|--------|----------|
| H1, H2 | PlantinMTPro | 300 (Light) | Main headings |
| H3 | AgrandirWide or PlantinMTPro | 900/300 | Section headings |
| H4 | Agrandir | 500 (Medium) | Subheadings, labels |
| Body | Agrandir | 400 (Regular) | Paragraphs |
| Buttons | Agrandir | - | Uppercase, tracked |

## Responsive Approach

- **Primary breakpoint**: `@media (max-width: 768px)`
- **Strategy**: Desktop-first with mobile overrides
- **Fluid sizing**: `0.87vw` desktop, `4.45vw` mobile

## File Naming

| Type | Convention | Example |
|------|------------|---------|
| Pages | lowercase-hyphenated | `unsere-historie/` |
| CSS | kebab-case + version | `styles.css?ver=6.9` |
| JS | kebab-case + version | `app-min.js?ver=3.6` |
| Images | descriptive-size | `DSC2016-2-1680x779.jpg` |
