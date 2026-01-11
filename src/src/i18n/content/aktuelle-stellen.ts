/**
 * Jobs listing page content
 */

export interface Job {
  href: string;
  title: string;
  when: string;
}

export interface AktuelleStellenContent {
  meta: {
    title: string;
    description: string;
  };
  heroText: {
    title: string;
  };
  jobs: Job[];
  gridBlock: {
    variant: 'default' | 'wide';
    headline: 'agrandir_wide' | 'plantin';
    position: 'top' | 'middle';
    color: 'black' | 'white' | 'yellow';
    title: string;
    link?: {
      href: string;
      label: string;
    };
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

export const aktuelleStellenContent: Record<'de' | 'en', AktuelleStellenContent> = {
  de: {
    meta: {
      title: 'Aktuelle Stellen | schlafgut',
      description: 'Aktuell offene Stellen bei schlafgut. Wir bieten einen attraktiven Arbeitsplatz mit langfristiger Jobsicherheit in einem erfolgreichen Familienunternehmen.',
    },
    heroText: {
      title: 'aktuell offene stellen<br />bei schlafgut',
    },
    jobs: [
      {
        href: '/aktuelle-stellen/marketplace-manager/',
        title: 'Marketplace Manager<br />(m/w/d)',
        when: 'sofort',
      },
      {
        href: '/aktuelle-stellen/paid-social-marketer/',
        title: 'Paid Social Marketer<br />(m/w/d)',
        when: 'sofort',
      },
      {
        href: '/aktuelle-stellen/erp-manager/',
        title: 'ERP Manager (m/w/d)',
        when: 'sofort',
      },
      {
        href: '/aktuelle-stellen/ecommerce-manager/',
        title: 'eCommerce Manager (m/w/d)',
        when: 'sofort',
      },
      {
        href: '/aktuelle-stellen/werkstudenten-it/',
        title: 'Werkstudenten IT (m/w/d)',
        when: 'sofort',
      },
    ],
    gridBlock: {
      variant: 'wide',
      headline: 'plantin',
      position: 'top',
      color: 'black',
      title: 'Work-Life-Balance ist bei uns keine Phrase.',
      link: { href: '/bei-uns-arbeiten/', label: 'schlafgut als arbeitgeber' },
      image: {
        src: '/wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg',
        alt: '',
        width: 1680,
        height: 925,
        srcset: '/wp-content/uploads/2023/04/work_life_wide-1920x1057.jpeg 1920w, /wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg 1680w',
      },
    },
    fullBleedBlocks: [
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
    ],
  },
  en: {
    meta: {
      title: 'Current Openings | schlafgut',
      description: 'Currently open positions at schlafgut. We offer an attractive workplace with long-term job security in a successful family business.',
    },
    heroText: {
      title: 'current openings<br />at schlafgut',
    },
    jobs: [
      {
        href: '/en/current-openings/marketplace-manager/',
        title: 'Marketplace Manager<br />(m/f/d)',
        when: 'immediately',
      },
      {
        href: '/en/current-openings/paid-social-marketer/',
        title: 'Paid Social Marketer<br />(m/f/d)',
        when: 'immediately',
      },
      {
        href: '/en/current-openings/erp-manager/',
        title: 'ERP Manager (m/f/d)',
        when: 'immediately',
      },
      {
        href: '/en/current-openings/ecommerce-manager/',
        title: 'eCommerce Manager (m/f/d)',
        when: 'immediately',
      },
      {
        href: '/en/current-openings/it-working-students/',
        title: 'IT Working Students (m/f/d)',
        when: 'immediately',
      },
    ],
    gridBlock: {
      variant: 'wide',
      headline: 'plantin',
      position: 'top',
      color: 'black',
      title: 'Work-life balance is not just a phrase for us.',
      link: { href: '/en/work-with-us/', label: 'schlafgut as employer' },
      image: {
        src: '/wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg',
        alt: '',
        width: 1680,
        height: 925,
        srcset: '/wp-content/uploads/2023/04/work_life_wide-1920x1057.jpeg 1920w, /wp-content/uploads/2023/04/work_life_wide-1680x925.jpeg 1680w',
      },
    },
    fullBleedBlocks: [
      {
        href: '/en/our-history/',
        title: 'Our History',
        image: {
          src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-3-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/en/our-production/',
        title: 'Our Production',
        image: {
          src: '/wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/DSC2016-7-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/DSC2016-7-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/en/discover-products/',
        title: 'Discover Products',
        image: {
          src: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg',
          alt: '',
          width: 1680,
          height: 2249,
          srcset: '/wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1920x2571.jpg 1920w, /wp-content/uploads/2023/04/Bildschirmfoto-2021-01-26-um-14.17-5-1-1680x2249.jpg 1680w',
        },
      },
      {
        href: '/en/what-defines-us/',
        title: 'What Defines Us',
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
};
