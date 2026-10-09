import type { Locale } from './locales';

export type RouteId =
  | 'home'
  | 'about'
  | 'product'
  | 'mission'
  | 'spot'
  | 'kiosk'
  | 'contact';

export const routePaths: Record<RouteId, string> = {
  home: '/',
  about: '/about',
  product: '/product',
  mission: '/mission',
  spot: '/spot',
  kiosk: '/kiosk',
  contact: '/contact',
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
    kiosk: string;
    contact: string;
  };
  theme: { toggle: string; toLight: string; toDark: string };
  locale: { switch: string; en: string; tr: string };
  logo: { home: string };
};

export const messages: Record<Locale, Messages> = {
  en: {
    site: {
      title: 'Kiosos — to help you sell',
      description:
        'Kiosos helps you sell the next product — in the shop, at the table, and at the counter.',
    },
    nav: {
      site: 'Site',
      otherMenu: 'Other',
      productsMenu: 'Products',
      home: 'Home',
      about: 'About',
      product: 'Sales help',
      mission: 'Mission',
      spot: 'Spot',
      kiosk: 'Kiosk',
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
  },
  tr: {
    site: {
      title: 'Kiosos — satışta yardım',
      description:
        'Kiosos satışta yardım eder — mağazada, masada ve tezgâhta sıradaki ürün.',
    },
    nav: {
      site: 'Site',
      otherMenu: 'Diğer',
      productsMenu: 'Ürünler',
      home: 'Ana sayfa',
      about: 'Hakkımızda',
      product: 'Satış yardımı',
      mission: 'Misyon',
      spot: 'Spot',
      kiosk: 'Kiosk',
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
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
