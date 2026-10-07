import type { Locale } from './locales';

export type RouteId =
  | 'home'
  | 'about'
  | 'product'
  | 'mission'
  | 'products'
  | 'spot'
  | 'contact';

export const routePaths: Record<RouteId, string> = {
  home: '/',
  about: '/about',
  product: '/product',
  mission: '/mission',
  products: '/products',
  spot: '/spot',
  contact: '/contact',
};

type PageCopy = {
  title: string;
  description: string;
  heading: string;
  lead: string;
};

type Messages = {
  site: { title: string; description: string };
  nav: {
    site: string;
    otherMenu: string;
    productsMenu: string;
    home: string;
    about: string;
    product: string;
    mission: string;
    products: string;
    spot: string;
    contact: string;
  };
  theme: { toggle: string; toLight: string; toDark: string };
  locale: { switch: string; en: string; tr: string };
  logo: { home: string };
  pages: Record<Exclude<RouteId, 'home'>, PageCopy>;
};

export const messages: Record<Locale, Messages> = {
  en: {
    site: {
      title: 'Kiosos — here to help you sell',
      description:
        'Kiosos is a vector sales-engine SaaS: smart upsell and cross-sell recommendations — a unified API between your catalog and commerce.',
    },
    nav: {
      site: 'Site',
      otherMenu: 'Other',
      productsMenu: 'Products',
      home: 'Home',
      about: 'About',
      product: 'What is Kiosos?',
      mission: 'Mission',
      products: 'Products',
      spot: 'Kiosos Spot',
      contact: 'Contact',
    },
    theme: {
      toggle: 'Toggle theme',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    locale: {
      switch: 'Language',
      en: 'English',
      tr: 'Türkçe',
    },
    logo: { home: 'Kiosos — home' },
    pages: {
      about: {
        title: 'About',
        description: 'About Kiosos — coming soon.',
        heading: 'About us',
        lead: 'Who we are — content coming soon.',
      },
      product: {
        title: 'What is Kiosos?',
        description: 'Vector sales-engine — coming soon.',
        heading: 'What is Kiosos?',
        lead: 'Sales-engine API — content coming soon.',
      },
      mission: {
        title: 'Mission',
        description: 'Kiosos mission — coming soon.',
        heading: 'Mission',
        lead: 'Here to help you sell — content coming soon.',
      },
      products: {
        title: 'Products',
        description: 'Kiosos products — coming soon.',
        heading: 'Products',
        lead: 'Engine, Spot, and integrations — content coming soon.',
      },
      spot: {
        title: 'Kiosos Spot',
        description: 'QR menu and loyalty — coming soon.',
        heading: 'Kiosos Spot',
        lead: 'QR menu and loyalty program — content coming soon.',
      },
      contact: {
        title: 'Contact',
        description: 'Contact Kiosos — coming soon.',
        heading: 'Contact',
        lead: 'contact@kiosos.com — form coming soon.',
      },
    },
  },
  tr: {
    site: {
      title: 'Kiosos — satışta yardım',
      description:
        'Kiosos, katalog satışları için vektörel satış motoru SaaS. Upsell ve cross-sell için akıllı öneriler — katalog ile ticaret arasında birleşik API.',
    },
    nav: {
      site: 'Site',
      otherMenu: 'Diğer',
      productsMenu: 'Ürünler',
      home: 'Ana sayfa',
      about: 'Hakkımızda',
      product: 'Kiosos nedir?',
      mission: 'Misyon',
      products: 'Ürünler',
      spot: 'Kiosos Spot',
      contact: 'İletişim',
    },
    theme: {
      toggle: 'Tema değiştir',
      toLight: 'Açık temaya geç',
      toDark: 'Koyu temaya geç',
    },
    locale: {
      switch: 'Dil',
      en: 'English',
      tr: 'Türkçe',
    },
    logo: { home: 'Kiosos — ana sayfa' },
    pages: {
      about: {
        title: 'Hakkımızda',
        description: 'Kiosos hakkında — yakında.',
        heading: 'Hakkımızda',
        lead: 'Biz kimiz — içerik yakında.',
      },
      product: {
        title: 'Kiosos nedir?',
        description: 'Vektörel satış motoru — yakında.',
        heading: 'Kiosos nedir?',
        lead: 'Satış motoru API’si — içerik yakında.',
      },
      mission: {
        title: 'Misyon',
        description: 'Kiosos misyonu — yakında.',
        heading: 'Misyon',
        lead: 'Satışta yardım — içerik yakında.',
      },
      products: {
        title: 'Ürünler',
        description: 'Kiosos ürünleri — yakında.',
        heading: 'Ürünler',
        lead: 'Motor, Spot ve entegrasyonlar — içerik yakında.',
      },
      spot: {
        title: 'Kiosos Spot',
        description: 'QR menü ve sadakat — yakında.',
        heading: 'Kiosos Spot',
        lead: 'QR menü ve sadakat programı — içerik yakında.',
      },
      contact: {
        title: 'İletişim',
        description: 'Kiosos ile iletişim — yakında.',
        heading: 'İletişim',
        lead: 'contact@kiosos.com — form yakında.',
      },
    },
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
