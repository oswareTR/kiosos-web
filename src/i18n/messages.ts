import type { Locale } from './locales';

export type RouteId =
  | 'home'
  | 'about'
  | 'product'
  | 'mission'
  | 'spot'
  | 'contact';

export const routePaths: Record<RouteId, string> = {
  home: '/',
  about: '/about',
  product: '/product',
  mission: '/mission',
  spot: '/spot',
  contact: '/contact',
};

type PageCopy = {
  title: string;
  description: string;
  heading: string;
  lead: string;
};

type NotFoundCopy = {
  title: string;
  description: string;
  heading: string;
  lead: string;
  cta: string;
};

type Messages = {
  site: { title: string; description: string };
  notFound: NotFoundCopy;
  nav: {
    site: string;
    otherMenu: string;
    productsMenu: string;
    home: string;
    about: string;
    product: string;
    mission: string;
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
      product: 'Kiosos Engine',
      mission: 'Mission',
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
    notFound: {
      title: 'Page not found',
      description: 'The page you requested does not exist.',
      heading: '404',
      lead: 'This page doesn’t exist or was moved.',
      cta: 'Back to home',
    },
    pages: {
      about: {
        title: 'About',
        description: 'About Kiosos — coming soon.',
        heading: 'About us',
        lead: 'Who we are — content coming soon.',
      },
      product: {
        title: 'Kiosos Engine',
        description: 'Vector sales-engine — coming soon.',
        heading: 'Kiosos Engine',
        lead: 'Sales-engine API — content coming soon.',
      },
      mission: {
        title: 'Mission',
        description: 'Kiosos mission — coming soon.',
        heading: 'Mission',
        lead: 'Here to help you sell — content coming soon.',
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
      product: 'Kiosos Engine',
      mission: 'Misyon',
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
    notFound: {
      title: 'Sayfa bulunamadı',
      description: 'İstediğiniz sayfa mevcut değil.',
      heading: '404',
      lead: 'Bu sayfa yok veya taşınmış olabilir.',
      cta: 'Ana sayfaya dön',
    },
    pages: {
      about: {
        title: 'Hakkımızda',
        description: 'Kiosos hakkında — yakında.',
        heading: 'Hakkımızda',
        lead: 'Biz kimiz — içerik yakında.',
      },
      product: {
        title: 'Kiosos Engine',
        description: 'Vektörel satış motoru — yakında.',
        heading: 'Kiosos Engine',
        lead: 'Satış motoru API’si — içerik yakında.',
      },
      mission: {
        title: 'Misyon',
        description: 'Kiosos misyonu — yakında.',
        heading: 'Misyon',
        lead: 'Satışta yardım — içerik yakında.',
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
