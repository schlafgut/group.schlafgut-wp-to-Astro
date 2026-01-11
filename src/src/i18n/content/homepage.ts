/**
 * Homepage content for all languages
 * DE: Full homepage with Hero, GridBlocks, Teasers, FullBleed sections
 * NL: Different structure with HeroText, FullwidthImage, ColumnsWithHeadline, etc.
 * EN: Empty in original WordPress (placeholder)
 */

export interface HomepageContent {
  meta: {
    title: string;
    description: string;
  };
  hero?: {
    title: string;
    image: {
      src: string;
      alt?: string;
      width: number;
      height: number;
      srcset?: string;
    };
  };
  heroText?: {
    title: string;
    paragraph?: string;
  };
  textCentered?: string[];
  gridBlocksSections?: {
    variant: 'boxed' | 'fullwidth';
    blocks: {
      variant: 'default' | 'wide';
      headline: 'agrandir_wide' | 'plantin';
      position: 'top' | 'middle';
      color: 'black' | 'white' | 'yellow';
      kicker?: string;
      title?: string;
      link?: {
        href: string;
        label: string;
      };
      image?: {
        src: string;
        alt?: string;
        width: number;
        height: number;
        srcset?: string;
      };
      video?: {
        src: string;
        width: number;
        height: number;
      };
    }[];
  }[];
  fullwidthImage?: {
    video?: {
      desktop?: { src: string; width: number; height: number };
      mobile?: { src: string; width: number; height: number };
    };
  };
  columnsWithHeadline?: {
    background?: 'white' | 'beige' | 'yellow';
    lines: {
      headline: string;
      content: string;
      image?: {
        src: string;
        style?: string;
      };
    }[];
  }[];
  threeImages?: {
    src: string;
    alt?: string;
    width: number;
    height: number;
    srcset?: string;
    description?: string;
  }[];
  quote?: {
    text: string;
    author: {
      name: string;
      title?: string;
      image?: {
        src: string;
        width: number;
        height: number;
      };
      link?: {
        href: string;
        label: string;
      };
    };
  };
  teasers?: {
    href: string;
    target?: '_blank' | '_self';
    kicker: string;
    title: string;
    image: {
      src: string;
      alt?: string;
      width: number;
      height: number;
      srcset?: string;
    };
  }[];
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

export const homepageContent: Record<'de' | 'en' | 'nl', HomepageContent> = {
  de: {
    meta: {
      title: 'schlafgut | Spannbettlaken und Bettwäsche',
      description: 'schlafgut produziert umweltfreundliche und kreativ gestaltete Textilien und Accessoires für das Schlafzimmer - in stolzer Familientradition seit 1952.',
    },
    hero: {
      title: 'perfekt seit generationen:<br />schlafgut definiert schlafkultur.',
      image: {
        src: '/wp-content/uploads/2023/04/DSC2016-2-1680x779.jpg',
        alt: '',
        width: 1680,
        height: 779,
        srcset: '/wp-content/uploads/2023/04/DSC2016-2-1920x890.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-2-1680x779.jpg 1680w',
      },
    },
    textCentered: [
      'Unser halbes Leben verbringen wir im Bett. Zeit, in der sich unser Körper erholen kann und unser Kopf wieder frei wird. Dafür bietet schlafgut mit seinen Sleeping Essentials die besten Voraussetzungen: umweltfreundlich produzierte und hellwach gestaltete Textilien und Accessoires für das Schlafzimmer – in stolzer Familientradition seit 1952.',
      'schlafgut steht für eine neue Art der Schlafkultur. Und für eine Haltung, die weit über die Ästhetik und Funktionalität unserer Produkte hinaus geht. Wir lieben guten Schlaf, wir lieben gutes Design und wir wollen Gutes bewirken – vom super Gefühl beim Schlafen über den Look unserer Sleeping Essentials bis hin zur Verantwortung für Menschen und den Planeten. Deswegen verwenden wir Bio-Baumwolle, produzieren in unseren eigenen Fabriken unter fairen Bedingungen, haben die Zero-Waste-Verpackung erfunden und sind ständig dabei, unseren Fußabdruck kleiner und die Freude am Schlafen größer zu machen.',
    ],
    gridBlocksSections: [
      {
        variant: 'boxed',
        blocks: [
          {
            variant: 'default',
            headline: 'agrandir_wide',
            position: 'top',
            color: 'black',
            kicker: 'innovation aus tradition',
            title: 'Wir haben das<br />Spannbettlaken<br />erfunden.',
            link: { href: '/unsere-historie/', label: 'unsere geschichte' },
            video: {
              src: '/wp-content/uploads/2023/04/SCHG_WebsiteCorporate_Illustrationen_780x1000-1.mp4#t=0.001',
              width: 780,
              height: 1000,
            },
          },
          {
            variant: 'default',
            headline: 'plantin',
            position: 'top',
            color: 'white',
            kicker: 'nachhaltig und fair',
            title: '"Einfach gesunder<br />Menschenverstand<br />statt Greenwashing."',
            link: { href: '/was-uns-ausmacht/', label: 'mehr über uns' },
            image: {
              src: '/wp-content/uploads/2023/03/nachhaltig_fair-1680x2232.jpg',
              alt: '',
              width: 1680,
              height: 2232,
              srcset: '/wp-content/uploads/2023/03/nachhaltig_fair-1920x2551.jpg 1920w, /wp-content/uploads/2023/03/nachhaltig_fair-1680x2232.jpg 1680w',
            },
          },
          {
            variant: 'wide',
            headline: 'plantin',
            position: 'middle',
            color: 'white',
            kicker: 'wir definieren<br />schlafkultur',
            title: 'Sleeping Essentials<br />in bester Qualität.',
            link: { href: '/produkte-entdecken/', label: 'entdecke unsere produktwelt' },
            image: {
              src: '/wp-content/uploads/2023/03/sleeping_essentials-1680x865.jpg',
              alt: '',
              width: 1680,
              height: 865,
              srcset: '/wp-content/uploads/2023/03/sleeping_essentials-1920x989.jpg 1920w, /wp-content/uploads/2023/03/sleeping_essentials-1680x865.jpg 1680w',
            },
          },
        ],
      },
      {
        variant: 'boxed',
        blocks: [
          {
            variant: 'wide',
            headline: 'agrandir_wide',
            position: 'middle',
            color: 'yellow',
            kicker: 'Join us!!!',
            title: 'Werde teil unseres Teams<br />und definiere mit uns<br />Schlafkul­tur neu!',
            link: { href: '/bei-uns-arbeiten/', label: 'Offene Stellen' },
            image: {
              src: '/wp-content/uploads/2023/03/join_us-1680x865.jpg',
              alt: '',
              width: 1680,
              height: 865,
              srcset: '/wp-content/uploads/2023/03/join_us-1920x989.jpg 1920w, /wp-content/uploads/2023/03/join_us-1680x865.jpg 1680w',
            },
          },
          {
            variant: 'default',
            headline: 'agrandir_wide',
            position: 'top',
            color: 'white',
            kicker: 'zero-waste und Bio-Qualität',
            title: 'nachhaltige<br />Produkte und<br />Verpackungen.',
            link: { href: '/unsere-produktion/', label: 'unsere Produktion' },
            video: {
              src: '/wp-content/uploads/2023/04/SCHG_WebsiteCorporate_ProduktionTeaser_780x1000.mp4#t=0.001',
              width: 780,
              height: 1000,
            },
          },
          {
            variant: 'default',
            headline: 'plantin',
            position: 'top',
            color: 'black',
            kicker: 'people first',
            title: 'Work-Life-Balance ist<br />bei uns keine Phrase',
            link: { href: '/bei-uns-arbeiten/', label: 'schlafgut als Arbeitgeber' },
            image: {
              src: '/wp-content/uploads/2023/03/work_life-1680x2231.jpg',
              alt: '',
              width: 1680,
              height: 2231,
              srcset: '/wp-content/uploads/2023/03/work_life-1920x2550.jpg 1920w, /wp-content/uploads/2023/03/work_life-1680x2231.jpg 1680w',
            },
          },
        ],
      },
    ],
    teasers: [
      {
        href: '/jobs/',
        target: '_self',
        kicker: 'aktuelle stellenausschreibung',
        title: 'Hier bewerben!',
        image: {
          src: '/wp-content/uploads/2023/03/Bildschirmfoto-2024-08-19-um-08.31.01.png',
          alt: '',
          width: 982,
          height: 682,
        },
      },
      {
        href: '/unsere-historie/',
        target: '_self',
        kicker: 'Unsere Historie',
        title: 'Innovation und qualität',
        image: {
          src: '/wp-content/uploads/2023/03/55001-00002000-000-011-4_1920x1920-3-1680x1680.jpg',
          alt: '',
          width: 1680,
          height: 1680,
          srcset: '/wp-content/uploads/2023/03/55001-00002000-000-011-4_1920x1920-3-1920x1920.jpg 1920w, /wp-content/uploads/2023/03/55001-00002000-000-011-4_1920x1920-3-1680x1680.jpg 1680w',
        },
      },
      {
        href: 'https://schlafgut.com/',
        target: '_blank',
        kicker: 'knitted jersey & woven satin',
        title: 'Coming soon: neue Bettwäsche in zwei Qualitäten und 26 Farben',
        image: {
          src: '/wp-content/uploads/2023/03/Group-973-1680x1178.jpg',
          alt: '',
          width: 1680,
          height: 1178,
          srcset: '/wp-content/uploads/2023/03/Group-973-1920x1346.jpg 1920w, /wp-content/uploads/2023/03/Group-973-1680x1178.jpg 1680w',
        },
      },
    ],
    fullBleedBlocks: [
      {
        href: '/unsere-historie/',
        title: 'Unsere Geschichte',
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
        title: 'Was uns ausmacht',
        image: {
          src: '/wp-content/uploads/2023/04/DSC2016-8-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/DSC2016-8-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-8-1680x2249.jpg 1680w',
        },
      },
    ],
  },

  en: {
    meta: {
      title: 'schlafgut | Fitted Sheets and Bed Linen',
      description: 'schlafgut produces eco-friendly and creatively designed textiles and accessories for the bedroom - in proud family tradition since 1952.',
    },
    // English homepage is empty in original WordPress - redirect to DE or show minimal content
    fullBleedBlocks: [],
  },

  nl: {
    meta: {
      title: 'Leer ons kennen | schlafgut',
      description: 'schlafgut produceert milieuvriendelijk en creatief ontworpen textiel en accessoires voor de slaapkamer - in trotse familietraditie sinds 1952.',
    },
    heroText: {
      title: 'vroege vogels als het gaat om slaap –<br />innovatie sinds 1952',
      paragraph: 'schlafgut is een echt familiebedrijf met een rijke traditie. Sinds 1952 creëren we iconen en zetten we standaarden: voor een goede nachtrust, duurzaamheid in productie en eerlijkheid tegenover onze medewerkers.',
    },
    fullwidthImage: {
      video: {
        desktop: {
          src: '/wp-content/uploads/2023/04/SCHG_WebsiteCorporate_Bella-Produktion_1950x920.mp4#t=0.001',
          width: 1950,
          height: 920,
        },
        mobile: {
          src: '/wp-content/uploads/2023/04/SCHG_WebsiteCorporate_Bella-Produktion_650x920.mp4#t=0.001',
          width: 650,
          height: 920,
        },
      },
    },
    columnsWithHeadline: [
      {
        background: 'white',
        lines: [
          {
            headline: 'heldere ideeën, generaties lang –<br />wij hebben het hoeslaken uitgevonden.',
            content: `<p>Adam Matheis had zich in 1920 waarschijnlijk niet kunnen voorstellen dat zijn kleine wasserij zou uitgroeien tot een van de meest gerenommeerde beddengoedfabrikanten van heel Europa. In die tijd trok hij samen met zijn moeder en tantes van huis tot huis in Göppingen, waar ze hoogwaardig textiel verkochten voor bruidsuitzetten. Een paar jaar later opende hij een winkel, en in 1952 richtte hij samen met een van zijn zonen de eerste familie-eigen wasserijfabriek op. Deze werd een groot succes, met dagelijks meer dan 15.000 lakens die de fabriek verlieten. En de reis ging met grote sprongen verder. In 1963 deed schlafgut een revolutionaire uitvinding: het hoeslaken! Daarna volgden de ene na de andere innovatieve ideeën, tot op de dag van vandaag.</p><p><a href="/unsere-historie/" class="cta__link">ons verhaal</a></p>`,
            image: {
              src: '/wp-content/uploads/2023/03/invisible.png',
              style: '--width: 12rem;',
            },
          },
          {
            headline: 'De textiel industrie belast ons milieu – met onze productie, werken we er actief tegen.',
            content: `<p>De productie van textiel verbruikt veel waardevolle grondstoffen. Om lage prijzen te behalen en winst te maximaliseren, kiezen veel fabrikanten voor de weg van de minste weerstand: onrijpe, inferieure katoen, goedkope productiefaciliteiten, onwaardige arbeidsomstandigheden, het gebruik van chemicaliën en slecht of niet-recycleerbare verpakkingen. Het resultaat is producten vol gifstoffen tegen spotprijzen, die een zware belasting vormen voor mens en milieu en ook snel achteruitgaan. schlafgut bewandelt in elk opzicht een ander pad – voor echte duurzaamheid, voorbij trends en greenwashing.</p><p><a href="/unsere-produktion/" class="cta__link">meer over onze productie</a></p>`,
          },
        ],
      },
      {
        background: 'white',
        lines: [
          {
            headline: 'Kwaliteitsvolle slaapbenodigdheden in 27 kleuren en zero-waste verpakking.',
            content: `<p>Hoeklakens en beddengoed die altijd fris en glad blijven? Een eenvoudig maat systeem en supergemakkelijk aan- en uit te trekken? Materiaal dat aanvoelt als het perfecte T-shirt op je huid? Bij Schlafgut herontwerpen we producten voor een betere nachtrust en maken we wat we zelf graag gebruiken. Van onze legendarische hoeslakens in drie kwaliteiten voor elke situatie, tot kussens, dekens en accessoires, tot luxe geweven satijnen of casual gebreide jersey beddengoed: Ons productassortiment definieert slaapcultuur en is altijd een paar stappen voor. Vanaf de uitvinding van het hoeslaken hebben we voortdurend nieuwe innovatieve ideeën ontwikkeld, ook voor onze verpakkingen. Onze nieuwste prestatie? De schlafgut Zero-Waste Verpakking.</p><p>Bij Schlafgut streven we naar esthetiek en dagelijks gebruiksgemak, hoogste kwaliteit en duurzaamheid, en ja – bruikbaarheid. En voor lange tijd. Want een goed ontworpen product betekent voor ons dat het jarenlang plezier biedt. Daarom gebruiken we de hoogste kwaliteit biologisch katoen voor al onze slaapbenodigdheden en hebben we een geheel nieuw kleursysteem ontwikkeld. Van zonnig geel tot rustgevend diepblauw: ons palet van eigentijdse effen kleuren in drie intensiteiten is geïnspireerd door de natuur en uitstekend combineerbaar.</p><p><a href="/produkte-entdecken/" class="cta__link">meer over onze producten</a></p>`,
          },
        ],
      },
    ],
    threeImages: [
      {
        src: '/wp-content/uploads/2023/03/Group973-1680x1680.jpg',
        alt: '',
        width: 1680,
        height: 1680,
        srcset: '/wp-content/uploads/2023/03/Group973-1920x1920.jpg 1920w, /wp-content/uploads/2023/03/Group973-1680x1680.jpg 1680w',
        description: 'schlafgut staat voor kwaliteit, duurzaamheid, en eerlijke arbeidsomstandigheden.',
      },
      {
        src: '/wp-content/uploads/2023/03/Group821-1680x1680.jpg',
        alt: '',
        width: 1680,
        height: 1680,
        srcset: '/wp-content/uploads/2023/03/Group821-1920x1920.jpg 1920w, /wp-content/uploads/2023/03/Group821-1680x1680.jpg 1680w',
        description: 'Voor al onze producten: buitenkant gemaakt van gerecycleerde materialen, binnenkant voornamelijk van biologisch katoen.',
      },
      {
        src: '/wp-content/uploads/2023/03/Group975-1680x1680.jpg',
        alt: '',
        width: 1680,
        height: 1680,
        srcset: '/wp-content/uploads/2023/03/Group975-1920x1920.jpg 1920w, /wp-content/uploads/2023/03/Group975-1680x1680.jpg 1680w',
        description: 'Schlafgut-producten zijn officieel erkend en bekroond – van OEKO-TEX tot SA 8000.',
      },
    ],
    quote: {
      text: '"Eenvoudig gezond verstand in plaats van greenwashing"',
      author: {
        name: 'Max Moedinger',
        title: 'Head of Business Development en achterkleinkind van de oprichter van schlafgut',
        image: {
          src: '/wp-content/uploads/2023/03/max.png',
          width: 628,
          height: 628,
        },
        link: {
          href: '/das-interview/',
          label: 'naar het interview',
        },
      },
    },
    gridBlocksSections: [
      {
        variant: 'fullwidth',
        blocks: [
          {
            variant: 'wide',
            headline: 'plantin',
            position: 'top',
            color: 'black',
            title: 'Work-Life-Balance is voor ons meer dan zomaar een term.',
            link: { href: '/bei-uns-arbeiten/', label: 'schlafgut als werkgever' },
            image: {
              src: '/wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg',
              alt: '',
              width: 1680,
              height: 925,
              srcset: '/wp-content/uploads/2023/04/work_life_wide-1920x1057.jpeg 1920w, /wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg 1680w',
            },
          },
        ],
      },
    ],
    fullBleedBlocks: [
      {
        href: '/produkte-entdecken/',
        title: 'ontdek onze producten',
        image: {
          src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/unsere-produktion/',
        title: 'onze productie',
        image: {
          src: '/wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/DSC2016-7-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/unsere-historie/',
        title: 'onze geschiedenis',
        image: {
          src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/bei-uns-arbeiten/',
        title: 'werk met ons',
        image: {
          src: '/wp-content/uploads/2023/04/olga-serjantu-tqkDGqPW8Vo-unsplash-1-scaled-e1681825101897-1680x2248.jpg',
          alt: '',
          width: 1680,
          height: 2248,
          srcset: '/wp-content/uploads/2023/04/olga-serjantu-tqkDGqPW8Vo-unsplash-1-1920x2560.jpg 1920w, /wp-content/uploads/2023/04/olga-serjantu-tqkDGqPW8Vo-unsplash-1-scaled-e1681825101897-1680x2248.jpg 1680w',
        },
      },
    ],
  },
};
