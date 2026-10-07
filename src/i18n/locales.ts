export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

/** Default for kiosos.com URLs and engine-facing work (see vault). */
export const defaultLocale: Locale = 'en';

export const localeOg: Record<Locale, string> = {
  en: 'en_US',
  tr: 'tr_TR',
};

export const localeHtml: Record<Locale, string> = {
  en: 'en',
  tr: 'tr',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Prefix path for a locale (`en` → `/about`, `tr` → `/tr/about`). */
export function localePath(path: string, locale: Locale): string {
  const normalized = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return '/tr/';
  return `/tr${normalized}`;
}
