export type BrandKey =
  | 'jinzo'
  | 'shakencake'
  | 'ktown'
  | 'haret'
  | 'stravo'
  | 'tokyotreats';

export interface BrandConfig {
  key: BrandKey;
  slug: string;
  accent: string;
  bgFrom: string;
  bgTo: string;
  image?: string;
  heroImage?: string;
  gallery?: string[];
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export const BRANDS: BrandConfig[] = [
  {
    key: 'shakencake',
    slug: 'shake-n-cake',
    accent: '#ff2d87',
    bgFrom: '#ffeaf4',
    bgTo: '#fff0f7',
    image: '/images/shakencake/sc-14.webp',
    heroImage: '/images/shakencake/sc-20.webp',
    gallery: [
      '/images/shakencake/sc-01.webp',
      '/images/shakencake/sc-03.webp',
      '/images/shakencake/sc-04.webp',
      '/images/shakencake/sc-06.webp',
      '/images/shakencake/sc-09.webp',
      '/images/shakencake/sc-11.webp',
      '/images/shakencake/sc-12.webp',
      '/images/shakencake/sc-15.webp',
      '/images/shakencake/sc-16.webp',
      '/images/shakencake/sc-17.webp',
      '/images/shakencake/sc-18.webp',
      '/images/shakencake/sc-21.webp'
    ],
    instagram: 'https://www.instagram.com/crazyshakencake?igsh=MTV6dHpnc2pveG5hbA==',
    facebook: 'https://www.facebook.com/share/1B5KUSPRtq/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@shake.n.cake?_r=1&_t=ZS-95qEC1WFoKA'
  },
  {
    key: 'stravo',
    slug: 'stravo',
    accent: '#e3392e',
    bgFrom: '#fff0ee',
    bgTo: '#fff5ed',
    image: '/images/stravo/02.webp',
    heroImage: '/images/stravo/02.webp',
    gallery: [
      '/images/stravo/01.webp',
      '/images/stravo/02.webp',
      '/images/stravo/03.webp',
      '/images/stravo/04.webp',
      '/images/stravo/05.webp',
      '/images/stravo/06.webp'
    ],
    instagram: 'https://www.instagram.com/stravo_eg?igsh=dHVocXI0ZjR0OTl2',
    facebook: 'https://www.facebook.com/share/1D7f9pye3R/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@stravo_eg?_r=1&_t=ZS-95qE9O9G4NL'
  },
  {
    key: 'jinzo',
    slug: 'jinzo',
    accent: '#c4382b',
    bgFrom: '#fff2ea',
    bgTo: '#fff6eb',
    image: '/images/jinzo/img-p6-01.webp',
    heroImage: '/images/jinzo/img-p10-02.webp',
    gallery: [
      '/images/jinzo/img-p6-01.webp',
      '/images/jinzo/img-p6-02.webp',
      '/images/jinzo/img-p7-01.webp',
      '/images/jinzo/img-p8-01.webp',
      '/images/jinzo/img-p9-01.webp',
      '/images/jinzo/img-p9-02.webp',
      '/images/jinzo/img-p10-01.webp',
      '/images/jinzo/img-p10-02.webp'
    ],
    instagram: 'https://www.instagram.com/jinzoeg?igsh=YWF5aHIxc215NDRh',
    facebook: 'https://www.facebook.com/share/1AALBasCbA/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@jinzoeg?_r=1&_t=ZS-95qE8Ezc7jb'
  },
  {
    key: 'ktown',
    slug: 'k-town',
    accent: '#dc2626',
    bgFrom: '#fff4ef',
    bgTo: '#fff8f0',
    image: '/images/ktown/korian-fried-chicken.webp',
    heroImage: '/images/ktown/chicken-wings.webp',
    gallery: [
      '/images/ktown/classic-korian.webp',
      '/images/ktown/mitty-crunchy.webp',
      '/images/ktown/ranch-king.webp',
      '/images/ktown/smoky-becan.webp',
      '/images/ktown/tender-crispy.webp',
      '/images/ktown/double-crunchy-cheese.webp'
    ],
    instagram: 'https://www.instagram.com/ktowneg?igsh=MW5qYnlnbXNlemRtMw==',
    facebook: 'https://www.facebook.com/share/18TV7akN9f/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@ktown.egypt?_r=1&_t=ZS-95qE77zMLFS'
  },
  {
    key: 'haret',
    slug: 'haret-alyasmina',
    accent: '#b5533c',
    bgFrom: '#f8f2e0',
    bgTo: '#fbf7ea',
    image: '/images/haret/img-p11-01.webp',
    heroImage: '/images/haret/img-p14-01.webp',
    gallery: [
      '/images/haret/img-p11-01.webp',
      '/images/haret/img-p14-01.webp',
      '/images/haret/img-p13-01.webp',
      '/images/haret/img-p13-02.webp',
      '/images/haret/img-p12-01.webp',
      '/images/haret/img-p17-01.webp',
      '/images/haret/img-p9-01.webp',
      '/images/haret/img-p2-01.webp'
    ],
    instagram: 'https://www.instagram.com/harat.alyasmina?igsh=MTNlN2xjc2d3dXAyeQ=='
  },
  {
    key: 'tokyotreats',
    slug: 'tokyo-treats',
    accent: '#dc2626',
    bgFrom: '#0a0a0a',
    bgTo: '#1a1a1a',
    image: '/images/tokyotreats/tokyo-01.webp',
    heroImage: '/images/tokyotreats/tokyo-02.webp',
    gallery: [
      '/images/tokyotreats/tokyo-01.webp',
      '/images/tokyotreats/tokyo-02.webp',
      '/images/tokyotreats/tokyo-03.webp',
      '/images/tokyotreats/tokyo-04.webp',
      '/images/tokyotreats/tokyo-05.webp',
      '/images/tokyotreats/tokyo-06.webp',
      '/images/tokyotreats/tokyo-07.webp',
      '/images/tokyotreats/tokyo-08.webp',
      '/images/tokyotreats/tokyo-09.webp',
      '/images/tokyotreats/tokyo-10.webp',
      '/images/tokyotreats/tokyo-11.webp',
      '/images/tokyotreats/tokyo-12.webp'
    ],
    instagram: 'https://www.instagram.com/tokyotreats_eg?igsh=emlzdTEycGw4cnRt',
    facebook: 'https://www.facebook.com/share/1DfELQFQAS/?mibextid=wwXIfr'
  }
];

export function getBrand(slug: string): BrandConfig | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
