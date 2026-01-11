/**
 * Job detail pages content
 */

export interface JobDetailContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle?: string;
    taglines?: string[];
  };
  sections: {
    headline: string;
    content: string;
  }[];
  whyUs: {
    headline: string;
    content: string;
  };
  gridBlock: {
    title: string;
    image: {
      src: string;
      alt?: string;
      width: number;
      height: number;
      srcset?: string;
    };
  };
  fullBleedBlocks: {
    href: string;
    title: string;
    image: {
      src: string;
      alt?: string;
      width: number;
      height: number;
      srcset?: string;
    };
  }[];
}

const sharedGridBlock = {
  title: 'Work-Life-Balance ist bei uns keine Phrase.',
  image: {
    src: '/wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg',
    alt: '',
    width: 1680,
    height: 925,
    srcset: '/wp-content/uploads/2023/04/work_life_wide-1920x1057.jpeg 1920w, /wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg 1680w',
  },
};

const sharedFullBleedBlocks = [
  {
    href: '/unsere-historie/',
    title: 'Unsere Historie',
    image: {
      src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg',
      alt: '',
      width: 1680,
      height: 2249,
      srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg 1680w',
    },
  },
  {
    href: '/unsere-produktion/',
    title: 'Unsere Produktion',
    image: {
      src: '/wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg',
      alt: '',
      width: 1680,
      height: 2249,
      srcset: '/wp-content/uploads/2023/04/DSC2016-7-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg 1680w',
    },
  },
  {
    href: '/produkte-entdecken/',
    title: 'Produkte entdecken',
    image: {
      src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg',
      alt: '',
      width: 1680,
      height: 2249,
      srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg 1680w',
    },
  },
  {
    href: '/was-uns-ausmacht/',
    title: 'was uns ausmacht',
    image: {
      src: '/wp-content/uploads/2023/04/DSC2016-8-1680x2249.jpg',
      alt: '',
      width: 1680,
      height: 2249,
      srcset: '/wp-content/uploads/2023/04/DSC2016-8-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-8-1680x2249.jpg 1680w',
    },
  },
];

export const jobsContent: Record<string, JobDetailContent> = {
  'marketplace-manager': {
    meta: {
      title: 'Marketplace Manager | schlafgut',
      description: 'Marketplace Manager (m/w/d) gesucht! Übernimm Verantwortung für Amazon & Co., gestalte Wachstum aktiv mit und werde Teil eines innovativen E-Commerce-Teams bei schlafgut.',
    },
    hero: {
      title: 'Marketplace Manager<br />(m/w/d)',
      subtitle: 'Vollzeit | Standort: München | Start: ab sofort',
      taglines: [
        'Du kennst die wichtigsten E-Commerce-Marktplätze nicht nur als Käufer:in, sondern als Profi?',
        'Dann bist du bei uns richtig.',
      ],
    },
    sections: [
      {
        headline: 'Deine Aufgaben:',
        content: `<ul>
<li>Du übernimmst die operative und strategische Verantwortung für unsere Marktplatzkanäle. Im Fokus stehen Amazon und Otto, ergänzt um Plattformen wie Westwing, Zalando, XXXLutz, Galaxus und weitere.</li>
<li>Du erstellst, pflegst und optimierst Produktlistings inklusive Content, Keywords, Preisen, Kategorien und Bestandssteuerung.</li>
<li>Du überwachst alle relevanten KPIs. Von Klickrate bis Conversion und sorgst dafür, dass wir jederzeit die Buy Box sichern und halten.</li>
<li>Du entwickelst pro Marktplatz passende Wachstumsstrategien. Dazu gehören gezielte Werbeaktionen, Sortimentssteuerung, Amazon PPC-Kampagnen oder neue Partnerschaften.</li>
<li>Du bist erste Ansprechperson für Plattform-Partner und pflegst den regelmäßigen Austausch mit deren Account Management.</li>
<li>Du arbeitest eng mit den Teams aus Marketing, Logistik und Kundenservice zusammen. Dabei denken wir pragmatisch und packen an, wenn es nötig ist.</li>
</ul>`,
      },
      {
        headline: 'Was bringst du mit?',
        content: `<ul>
<li>Du hast eine kaufmännische Ausbildung oder ein Studium im Bereich E-Commerce, Wirtschaft oder Marketing abgeschlossen.</li>
<li>Du bringst Erfahrung in der Betreuung von Marktplätzen wie Amazon, Otto oder ähnlichen Plattformen mit.</li>
<li>Du kennst dich mit Amazon Seller Central (und idealerweise Amazon Ads) aus.</li>
<li>Du arbeitest datenbasiert, strukturiert und lösungsorientiert.</li>
<li>Du fühlst dich wohl im Austausch mit Partnern, Dienstleistern und internen Teams.</li>
<li>Du sprichst sehr gutes Deutsch und gutes Englisch, jede weitere Sprache ist gern gesehen.</li>
</ul>`,
      },
    ],
    whyUs: {
      headline: 'Warum wir?',
      content: `<ul>
<li>Eine verantwortungsvolle Aufgabe und Gestaltungsspielraum um etwas verändern und bewegen zu können.</li>
<li>Ein hybrides Arbeitsmodell mit Sitz in München sowie Home-Office.</li>
<li>Wir bieten flache Hierachien sowie ein angenehmes und wertschätzendes Arbeitsklima.</li>
<li>Wir bieten Dir eine faire Vergütung, 30 Tage Urlaub sowie Sonderurlaubstage<br />
Gemeinsam erarbeiten wir einen Weiterentwicklungsplan, der Dich fachlich wie auch persönlich auf das nächste Level hebt.</li>
</ul>
<p>Interesse? Dann bewirb Dich und sende deine Unterlagen an:<br />
<a href="mailto:bewerbung@schlafgut.com">bewerbung@schlafgut.com</a></p>
<p><a href="mailto:bewerbung@matheis-textilgruppe.de" class="cta__button">jetzt bewerben</a></p>`,
    },
    gridBlock: sharedGridBlock,
    fullBleedBlocks: sharedFullBleedBlocks,
  },

  'paid-social-marketer': {
    meta: {
      title: 'Paid Social Marketer | schlafgut',
      description: 'Paid Social Marketer (m/w/d) gesucht! Entwickle und steuere Social Ads für eine wachsende Marke bei schlafgut.',
    },
    hero: {
      title: 'Paid Social Marketer<br />m/w/d',
      subtitle: 'Vollzeit, München oder Eislingen',
    },
    sections: [
      {
        headline: 'Deine Aufgaben',
        content: `<ul>
<li>Erstellung &amp; Steuerung von Paid Social Ads (Struktur, Budgets, Bidding, Audiences, Creatives)</li>
<li>Entwicklung &amp; Umsetzung von Wachstumsstrategien zur Markenbekanntheit und Kundengewinnung (Prospecting, Retargeting, Offer-Tests)</li>
<li>Growth Hacking: Schnell testen, lernen, iterieren von Hooks bis Landing-Page-Angles</li>
<li>Erstellung &amp; Gestaltung von Creatives gemeinsam mit unserem Brand Team</li>
<li>Analyse der Marketing-KPIs und Anpassung der Strategien auf Basis der Ergebnisse</li>
<li>Enge Zusammenarbeit mit internen &amp; externen Teams (Brand Marketing, Grafik, Agenturen, etc.)</li>
</ul>`,
      },
      {
        headline: 'Was bringst du mit?',
        content: `<ul>
<li>Unternehmerisch denkender Paid Social Marketing Spezialist mit Hands-on-Mentalität</li>
<li><strong>Growth-Mindset</strong><br />Vertriebserfahrung im E-Commerce, Drive und Cases sind uns dabei wichtiger als Berufsjahre</li>
<li><strong>Organisationstalent</strong><br />Erfahrung im Steuern von Dienstleistern &amp; Agenturen</li>
<li><strong>Data-driven</strong><br />Starke analytische Fähigkeiten und Erfahrung mit Marketing-Analyse-Tools (z.&nbsp;B. Triple Whale oder vergleichbar), GA4 von Vorteil</li>
<li><strong>Open-minded</strong><br />Innovatives Denken und Motivation, neue Strategien und Technologien zu testen &amp; umzusetzen</li>
<li><strong>People-Focus</strong><br />Hervorragende Kommunikationsfähigkeiten in Wort &amp; Schrift, auf Deutsch und Englisch</li>
<li><strong>Cutting-edge</strong><br />Begeisterung für KI, Technologien und Tools sowie deren Einsatz im Marketing</li>
</ul>`,
      },
    ],
    whyUs: {
      headline: 'Warum wir?',
      content: `<ul>
<li><strong>Verantwortung &amp; Impact</strong><br />Du sorgst mit deinem Konzept unmittelbar für Erfolg</li>
<li><strong>KI-unterstütztes Arbeiten</strong><br />Wir nutzen ChatGPT, Artlist, Claude und weitere Tools für maximale Effizienz &amp; Kreativität</li>
<li><strong>Early-Stage Ownership</strong><br />Sei von Beginn an Teil eines ambitionierten Projektes und wachse mit ihm mit</li>
<li><strong>Lernen von den Besten</strong><br />Du lernst von und arbeitest mit Chris Erthel (Meller, HelloBody, etc.)</li>
<li><strong>Team &amp; Kultur</strong><br />Flache Hierarchien und ein junges, dynamisches Team in den modernen Offices in München &amp; Eislingen</li>
<li><strong>Fairness &amp; Benefits</strong><br />Faire Vergütung &amp; 32 Tage Urlaub</li>
<li><strong>Entwicklung &amp; Wachstum</strong><br />Gemeinsame Erarbeitung eines individuellen Weiterentwicklungsplans</li>
</ul>
<p>Interesse? Dann bewirb Dich und sende deine Unterlagen an:<br />
<a href="mailto:bewerbung@schlafgut.com">bewerbung@schlafgut.com</a></p>
<p><a href="mailto:bewerbung@matheis-textilgruppe.de" class="cta__button">jetzt bewerben</a></p>`,
    },
    gridBlock: sharedGridBlock,
    fullBleedBlocks: sharedFullBleedBlocks,
  },

  'erp-manager': {
    meta: {
      title: 'ERP Manager | schlafgut',
      description: 'ERP Manager (m/w/d) gesucht! Betreue und entwickle unser ERP-System weiter bei schlafgut.',
    },
    hero: {
      title: 'ERP Manager<br />m/w/d',
      subtitle: 'Vollzeit, München oder Eislingen',
    },
    sections: [
      {
        headline: 'Deine Aufgaben',
        content: `<ul>
<li><strong>ERP-Systembetreuung</strong><br />Du betreust und entwickelst unser bestehendes ERP-System „Business Express (BE)" von Dontenwill weiter und spielst dabei eine zentrale Rolle in der digitalen Prozessoptimierung.</li>
<li><strong>Prozessanalyse &amp; Optimierung</strong><br />Du analysierst, dokumentierst und verbesserst Geschäftsprozesse in den Bereichen Supply Chain Management, Warenwirtschaft, Fakturierung und Stammdatenpflege.</li>
<li><strong>EDI-Entwicklung</strong><br />Du entwickelst und pflegst EDI-Strecken zu Kunden, Lieferanten und Partnern und sorgst für reibungslose Datenflüsse.</li>
<li><strong>Anforderungsmanagement</strong><br />In enger Abstimmung mit Fachabteilungen übersetzt du Anforderungen in funktionale Konzepte und sorgst für deren erfolgreiche Umsetzung.</li>
<li><strong>Projektmanagement</strong><br />Du planst und leitest Projekte rund um Systemanpassungen, Updates und Erweiterungen.</li>
<li><strong>ERP-Zukunft &amp; Integration</strong><br />Perspektivisch übernimmst du die stellvertretende Leitung des ERP-Projekts zur Auswahl, Implementierung und Integration eines neuen Systems mit Fokus auf SCM, Logistik, Einkauf und Vertrieb.</li>
<li><strong>Support &amp; Schulungen</strong><br />Du unterstützt unsere Teams als kompetente Ansprechperson, führst Schulungen durch und begleitest den Wandel aktiv mit.</li>
</ul>`,
      },
      {
        headline: 'Was bringst du mit?',
        content: `<ul>
<li><strong>Erfahrung &amp; Qualifikation</strong><br />Du hast ein Studium der Wirtschaftsinformatik, BWL, Informatik oder eine vergleichbare Qualifikation abgeschlossen und bringst mehrjährige ERP-Erfahrung mit, idealerweise im Handelswarengeschäft.</li>
<li><strong>ERP-Expertise</strong><br />ERP-Transformationen wie Systemwechsel, Rollouts oder Migrationen sind dir vertraut, und du kennst dich gut mit Tools wie BE, SAP, MS BC und/oder Infor aus.</li>
<li><strong>Prozessverständnis</strong><br />Du verfügst über fundierte Kenntnisse betrieblicher Abläufe – z.&nbsp;B. in Lager, Logistik, Einkauf oder Vertrieb – und kannst Prozesse sicher analysieren und optimieren.</li>
<li><strong>Arbeitsweise &amp; Tools</strong><br />Tools wie Microsoft 365 oder Monday setzt du routiniert zur Organisation und Dokumentation deiner Arbeit ein.</li>
<li><strong>Mindset</strong><br />Du hast Lust, in einem dynamischen Umfeld zu arbeiten, und begreifst Veränderung als Chance zur stetigen Verbesserung.</li>
<li><strong>Sprachkenntnisse</strong><br />Du verfügst über gute Deutsch- und Englischkenntnisse in Wort und Schrift.</li>
</ul>`,
      },
    ],
    whyUs: {
      headline: 'Warum wir?',
      content: `<ul>
<li><strong>Gestaltungsspielraum &amp; Verantwortung</strong><br />Eine verantwortungsvolle Aufgabe mit Freiraum, um etwas zu verändern und zu bewegen.</li>
<li><strong>Strategische Buchhaltung</strong><br />Wir verstehen die Buchhaltung nicht nur als Mittel zum Zweck, sondern sehen darin die Basis, unser Unternehmenswachstum bestmöglich planen zu können.</li>
<li><strong>Arbeitskultur</strong><br />Wir bieten flache Hierarchien mit kurzen Entscheidungswegen sowie ein angenehmes und wertschätzendes Arbeitsklima.</li>
<li><strong>Benefits</strong><br />Wir bieten dir eine faire Vergütung, 30 Tage Urlaub sowie Sonderurlaubstage.</li>
<li><strong>Entwicklung</strong><br />Gemeinsam erarbeiten wir einen Weiterentwicklungsplan, der dich fachlich wie auch persönlich auf das nächste Level hebt.</li>
</ul>
<p>Interesse? Dann bewirb Dich und sende deine Unterlagen an:<br />
<a href="mailto:bewerbung@schlafgut.com">bewerbung@schlafgut.com</a></p>
<p><a href="mailto:bewerbung@matheis-textilgruppe.de" class="cta__button">jetzt bewerben</a></p>`,
    },
    gridBlock: sharedGridBlock,
    fullBleedBlocks: sharedFullBleedBlocks,
  },

  'ecommerce-manager': {
    meta: {
      title: 'eCommerce Manager | schlafgut',
      description: 'eCommerce Manager (m/w/d) gesucht! Optimiere unseren Online-Shop und steigere die Conversion Rate bei schlafgut.',
    },
    hero: {
      title: 'E-Commerce Manager<br />m/w/d',
      subtitle: 'Vollzeit, München oder Eislingen',
    },
    sections: [
      {
        headline: 'Deine Aufgaben',
        content: `<p>Optimierung der Usability und User Experience:</p>
<ul>
<li>Steigerung der Conversion-Rate und des durchschnittlichen Bestellwerts durch datenbasierte Optimierung des Shops</li>
<li>Durchführung von Performance-Analysen, Identifikation von Hindernissen im Bestellprozess und deren Beseitigung</li>
<li>Verbesserung der Suchfunktion, Ladezeiten sowie Implementierung von Cross-Selling-Strategie</li>
<li>Regelmäßige Markt- und Konkurrenzanalysen zur Erkennung und Umsetzung neuer E-Commerce Trends</li>
<li>Erstellung und Optimierung von Produktfeeds und Landingpages, um die Performance und Nutzerfreundlichkeit zu verbessern</li>
</ul>
<p>Margen-Optimierung:</p>
<ul>
<li>Steigerung des Customer Lifetime Values und des durchschnittlichen Bestellwerts durch gezielte Projekte</li>
<li>Durchführung von effektiven Newsletter-Kampagnen und Umsetzung von Onsite-Marketingmaßnahmen</li>
<li>Implementierung von Marketing Automatisierungsmaßnahmen, um Kundenbindung und Umsatz zu fördern</li>
</ul>
<p>Überwachung und Optimierung der KPIs:</p>
<ul>
<li>Entwicklung von Strategien zur Traffic-Steigerung und Verbesserung der Zugriffe in Zusammenarbeit mit unserem SEO/SEA Team</li>
<li>Analyse und Reduzierung von Kaufabbrüchen, Absprungraten und Retourenquoten, um die Verweildauer zu erhöhen</li>
</ul>`,
      },
      {
        headline: 'Was bringst du mit?',
        content: `<ul>
<li>Idealerweise hast Du ein abgeschlossenes Studium im Bereich E-Commerce, Wirtschaftsinformatik, Marketing oder eine vergleichbare Qualifikation</li>
<li>Du bringst mehrjährige Berufserfahrung im E-Commerce Bereich mit, idealerweise mit Shopware</li>
<li>Fundierte Kenntnisse in Conversion Rate Optimierung, Onsite-Marketing und technischen Shoplösungen</li>
<li>Ausgeprägtes analytisches Denken und eine datengetriebene Arbeitsweise</li>
<li>Erfahrung im Projektmanagement und der Zusammenarbeit mit externen Dienstleistern</li>
<li>Sehr gute Deutsch- und Englischkenntnisse (in Wort und Schrift)</li>
</ul>`,
      },
    ],
    whyUs: {
      headline: 'Warum wir?',
      content: `<ul>
<li>Eine verantwortungsvolle Aufgabe und Gestaltungsspielraum um etwas verändern und bewegen zu können</li>
<li>Ein hybrides Arbeitsmodell mit Sitz in München oder Eislingen sowie Home-Office</li>
<li>Wir bieten flache Hierachien sowie ein angenehmes und wertschätzendes Arbeitsklima</li>
<li>Wir bieten Dir eine faire Vergütung, 30 Tage Urlaub sowie Sonderurlaubstage</li>
<li>Gemeinsam erarbeiten wir einen Weiterentwicklungsplan, der Dich fachlich wie auch persönlich auf das nächste Level hebt</li>
</ul>
<p>Interesse? Dann bewirb Dich und sende deine Unterlagen an:</p>
<p><a href="mailto:bewerbung@schlafgut.com">bewerbung@schlafgut.com</a></p>
<p><a href="mailto:bewerbung@matheis-textilgruppe.de" class="cta__button">jetzt bewerben</a></p>`,
    },
    gridBlock: sharedGridBlock,
    fullBleedBlocks: sharedFullBleedBlocks,
  },

  'werkstudenten-it': {
    meta: {
      title: 'Werkstudent IT | schlafgut',
      description: 'Werkstudent IT (m/w/d) gesucht! Unterstütze unser IT-Team bei der Administration und Entwicklung bei schlafgut.',
    },
    hero: {
      title: 'Werkstudent IT<br />m/w/d',
      subtitle: 'Vollzeit in Eislingen',
    },
    sections: [
      {
        headline: 'Deine Aufgaben',
        content: `<ul>
<li><strong>IT-Administration</strong><br />Unterstützung bei der Administration und Betreuung von IT-Systemen (Server, Netzwerk, Benutzerverwaltung, etc.)</li>
<li><strong>ERP-Unterstützung</strong><br />Mitwirkung bei der Pflege und Weiterentwicklung unseres ERP-Systems.</li>
<li><strong>Benutzerverwaltung</strong><br />Einrichtung von Benutzerkonten, Rechten und Workflows.</li>
<li><strong>Support &amp; Problemlösung</strong><br />Unterstützung im First-Level-Support sowie Analyse und Lösung von IT-Problemen im Tagesgeschäft.</li>
<li><strong>Dokumentation</strong><br />Dokumentation von Prozessen und Systemanpassungen.</li>
<li><strong>IT-Projekte (optional)</strong><br />Mitarbeit bei spannenden IT-Projekten, z.&nbsp;B. Automatisierungen, Schnittstellen oder Rollouts.</li>
</ul>`,
      },
      {
        headline: 'Was bringst du mit?',
        content: `<ul>
<li><strong>Studienhintergrund</strong><br />Eingeschriebener Student (m/w/d) im Bereich Informatik, Wirtschaftsinformatik, IT-Management oder einem ähnlichen Studiengang.</li>
<li><strong>Technisches Verständnis</strong><br />Grundkenntnisse in Windows-Systemen, Netzwerken oder ERP-Software.</li>
<li><strong>Interessen &amp; Schwerpunkte</strong><br />Interesse an Systemadministration, Prozessoptimierung und digitalen Tools.</li>
<li><strong>Arbeitsweise</strong><br />Analytisches Denken, strukturierte Arbeitsweise und Eigeninitiative.</li>
<li><strong>Mindset</strong><br />Freude daran, Verantwortung zu übernehmen und Lösungen zu finden, statt Probleme zu suchen.</li>
</ul>`,
      },
    ],
    whyUs: {
      headline: 'Warum wir?',
      content: `<ul>
<li><strong>Gestaltungsspielraum &amp; Verantwortung</strong><br />Eine verantwortungsvolle Aufgabe mit Freiraum, um etwas zu verändern und zu bewegen.</li>
<li><strong>Strategische Buchhaltung</strong><br />Wir verstehen die Buchhaltung nicht nur als Mittel zum Zweck, sondern sehen darin die Basis, unser Unternehmenswachstum bestmöglich planen zu können.</li>
<li><strong>Arbeitskultur</strong><br />Wir bieten flache Hierarchien mit kurzen Entscheidungswegen sowie ein angenehmes und wertschätzendes Arbeitsklima.</li>
<li><strong>Benefits</strong><br />Wir bieten dir eine faire Vergütung, 30 Tage Urlaub sowie Sonderurlaubstage.</li>
<li><strong>Entwicklung</strong><br />Gemeinsam erarbeiten wir einen Weiterentwicklungsplan, der dich fachlich wie auch persönlich auf das nächste Level hebt.</li>
</ul>
<p>Interesse? Dann bewirb Dich und sende deine Unterlagen an:<br />
<a href="mailto:bewerbung@schlafgut.com">bewerbung@schlafgut.com</a></p>
<p><a href="mailto:bewerbung@matheis-textilgruppe.de" class="cta__button">jetzt bewerben</a></p>`,
    },
    gridBlock: sharedGridBlock,
    fullBleedBlocks: sharedFullBleedBlocks,
  },
};
