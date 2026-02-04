import type { Lang } from './utils';

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: Record<Lang, NavItem[]> = {
  de: [
    { label: 'Lerne uns kennen', href: '/' },
    { label: 'Was uns ausmacht', href: '/was-uns-ausmacht/' },
    { label: 'Unsere Historie', href: '/unsere-historie/' },
    { label: 'Unsere Produktion', href: '/unsere-produktion/' },
    { label: 'Produkte entdecken', href: '/produkte-entdecken/' },
    { label: 'Bei uns arbeiten', href: '/bei-uns-arbeiten/' },
  ],
  en: [
    { label: 'Get to know us', href: '/en/' },
    { label: 'What defines us', href: '/en/what-defines-us/' },
    { label: 'Our history', href: '/en/our-history/' },
    { label: 'Our production', href: '/en/our-production/' },
    { label: 'Discover products', href: '/en/discover-products/' },
    { label: 'Work with us', href: '/en/work-with-us/' },
  ],
  nl: [
    { label: 'Leer ons kennen', href: '/nl/' },
    { label: 'Wat ons definieert', href: '/nl/wat-ons-definieert/' },
    { label: 'Onze geschiedenis', href: '/nl/onze-geschiedenis/' },
    { label: 'Onze productie', href: '/nl/onze-productie/' },
    { label: 'Producten ontdekken', href: '/nl/producten-ontdekken/' },
    { label: 'Bij ons werken', href: '/nl/bij-ons-werken/' },
  ],
};

export const footerColumns: Record<Lang, { title: string; links: { label: string; href: string; external?: boolean }[] }[]> = {
  de: [
    {
      title: 'Shop',
      links: [
        { label: 'Spannbettlaken', href: 'https://www.schlafgut.com/spannbettlaken/', external: true },
        { label: 'Bettwäsche', href: 'https://www.schlafgut.com/bettwaesche/', external: true },
        { label: 'Kissenbezüge', href: 'https://www.schlafgut.com/bettwaren/material-oder-typ/kissen/', external: true },
        { label: 'Für Kinder', href: 'https://www.schlafgut.com/fuer-kinder/', external: true },
        { label: 'Matratzenschutz', href: 'https://www.schlafgut.com/matratzenschutz/', external: true },
        { label: 'Bettwaren', href: 'https://www.schlafgut.com/bettwaren/', external: true },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Retoure', href: 'https://www.dhl.de/retoure/gw/rpcustomerweb/OrderEntry.action?hash=9cc90312834d3f7b2b4727b9908763bb063a3398d75f93435d41433ca35c91df', external: true },
        { label: 'Impressum', href: 'https://www.schlafgut.com/informationen/impressum/', external: true },
        { label: 'AGB', href: 'https://www.schlafgut.com/informationen/agb/', external: true },
        { label: 'Datenschutz', href: 'https://www.schlafgut.com/informationen/datenschutz/', external: true },
        { label: 'Widerruf', href: 'https://www.schlafgut.com/informationen/widerruf/', external: true },
      ],
    },
    {
      title: 'Über schlafgut',
      links: [
        { label: 'Lerne uns kennen', href: '/' },
        { label: 'Was uns ausmacht', href: '/was-uns-ausmacht/' },
        { label: 'Unsere Historie', href: '/unsere-historie/' },
        { label: 'Unsere Produktion', href: '/unsere-produktion/' },
        { label: 'Produkte entdecken', href: '/produkte-entdecken/' },
        { label: 'Bei uns arbeiten', href: '/bei-uns-arbeiten/' },
      ],
    },
    {
      title: 'Magazin',
      links: [
        { label: 'Coloursystem', href: 'https://www.schlafgut.com/unsere-farben/', external: true },
        { label: 'Größentabelle', href: 'https://www.schlafgut.com/grossensystem/', external: true },
        { label: 'Bettwäsche waschen', href: 'https://www.schlafgut.com/magazin/bettlaken-waschen/', external: true },
      ],
    },
  ],
  en: [
    {
      title: 'Shop',
      links: [
        { label: 'Fitted sheets', href: 'https://www.schlafgut.com/spannbettlaken/', external: true },
        { label: 'Bed linen', href: 'https://www.schlafgut.com/bettwaesche/', external: true },
        { label: 'Pillowcases', href: 'https://www.schlafgut.com/bettwaren/material-oder-typ/kissen/', external: true },
        { label: 'For children', href: 'https://www.schlafgut.com/fuer-kinder/', external: true },
        { label: 'Mattress protection', href: 'https://www.schlafgut.com/matratzenschutz/', external: true },
        { label: 'Bedding', href: 'https://www.schlafgut.com/bettwaren/', external: true },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Returns', href: 'https://www.dhl.de/retoure/gw/rpcustomerweb/OrderEntry.action?hash=9cc90312834d3f7b2b4727b9908763bb063a3398d75f93435d41433ca35c91df', external: true },
        { label: 'Imprint', href: 'https://www.schlafgut.com/informationen/impressum/', external: true },
        { label: 'Terms', href: 'https://www.schlafgut.com/informationen/agb/', external: true },
        { label: 'Privacy', href: 'https://www.schlafgut.com/informationen/datenschutz/', external: true },
        { label: 'Cancellation', href: 'https://www.schlafgut.com/informationen/widerruf/', external: true },
      ],
    },
    {
      title: 'About schlafgut',
      links: [
        { label: 'Get to know us', href: '/en/' },
        { label: 'What defines us', href: '/en/what-defines-us/' },
        { label: 'Our history', href: '/en/our-history/' },
        { label: 'Our production', href: '/en/our-production/' },
        { label: 'Discover products', href: '/en/discover-products/' },
        { label: 'Work with us', href: '/en/work-with-us/' },
      ],
    },
    {
      title: 'Magazine',
      links: [
        { label: 'Coloursystem', href: 'https://www.schlafgut.com/unsere-farben/', external: true },
        { label: 'Size guide', href: 'https://www.schlafgut.com/grossensystem/', external: true },
        { label: 'Washing bed linen', href: 'https://www.schlafgut.com/magazin/bettwaesche-waschen/', external: true },
      ],
    },
  ],
  nl: [
    {
      title: 'Shop',
      links: [
        { label: 'Hoeslakens', href: 'https://www.schlafgut.com/spannbettlaken/', external: true },
        { label: 'Beddengoed', href: 'https://www.schlafgut.com/bettwaesche/', external: true },
        { label: 'Kussenslopen', href: 'https://www.schlafgut.com/bettwaren/material-oder-typ/kissen/', external: true },
        { label: 'Voor kinderen', href: 'https://www.schlafgut.com/fuer-kinder/', external: true },
        { label: 'Matrasbescherming', href: 'https://www.schlafgut.com/matratzenschutz/', external: true },
        { label: 'Dekbedden', href: 'https://www.schlafgut.com/bettwaren/', external: true },
      ],
    },
    {
      title: 'Informatie',
      links: [
        { label: 'Retourneren', href: 'https://www.dhl.de/retoure/gw/rpcustomerweb/OrderEntry.action?hash=9cc90312834d3f7b2b4727b9908763bb063a3398d75f93435d41433ca35c91df', external: true },
        { label: 'Impressum', href: 'https://www.schlafgut.com/informationen/impressum/', external: true },
        { label: 'Voorwaarden', href: 'https://www.schlafgut.com/informationen/agb/', external: true },
        { label: 'Privacy', href: 'https://www.schlafgut.com/informationen/datenschutz/', external: true },
        { label: 'Herroeping', href: 'https://www.schlafgut.com/informationen/widerruf/', external: true },
      ],
    },
    {
      title: 'Over schlafgut',
      links: [
        { label: 'Leer ons kennen', href: '/nl/' },
        { label: 'Wat ons definieert', href: '/nl/wat-ons-definieert/' },
        { label: 'Onze geschiedenis', href: '/nl/onze-geschiedenis/' },
        { label: 'Onze productie', href: '/nl/onze-productie/' },
        { label: 'Producten ontdekken', href: '/nl/producten-ontdekken/' },
        { label: 'Bij ons werken', href: '/nl/bij-ons-werken/' },
      ],
    },
    {
      title: 'Magazine',
      links: [
        { label: 'Kleurensysteem', href: 'https://www.schlafgut.com/unsere-farben/', external: true },
        { label: 'Maattabel', href: 'https://www.schlafgut.com/grossensystem/', external: true },
        { label: 'Beddengoed wassen', href: 'https://www.schlafgut.com/magazin/bettwaesche-waschen/', external: true },
      ],
    },
  ],
};

export const ui: Record<Lang, Record<string, string>> = {
  de: {
    shopNow: 'Jetzt shoppen',
    b2bShop: 'ZUM B2B-SHOP',
    taxInfo: '* alle unsere angegebenen Preise verstehen sich inkl. Mwst.',
  },
  en: {
    shopNow: 'Shop now',
    b2bShop: 'TO B2B SHOP',
    taxInfo: '* all prices include VAT.',
  },
  nl: {
    shopNow: 'Nu winkelen',
    b2bShop: 'NAAR B2B SHOP',
    taxInfo: '* alle prijzen zijn inclusief BTW.',
  },
};
