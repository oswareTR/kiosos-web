import { defaultLocale, localeHtml, localeOg, localePath, type Locale } from '../i18n/locales';
import { getMessages, type RouteId, routePaths } from '../i18n/messages';

export const site = {
  name: 'Kiosos',
  url: 'https://kiosos.com',
} as const;

export type PageMeta = {
  title?: string;
  description?: string;
  /** Logical route for hreflang alternates. */
  route?: RouteId;
  noindex?: boolean;
};

export function resolveLocale(raw: string | undefined): Locale {
  return raw === 'tr' ? 'tr' : defaultLocale;
}

export function pageTitle(locale: Locale, title?: string): string {
  const base = getMessages(locale).site.title;
  if (!title) return base;
  return `${title} · ${site.name}`;
}

export function defaultDescription(locale: Locale): string {
  return getMessages(locale).site.description;
}

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, site.url).href;
}

export function alternateUrls(route: RouteId): { locale: Locale; href: string }[] {
  const locales: Locale[] = ['en', 'tr'];
  return locales.map((locale) => ({
    locale,
    href: canonicalUrl(localePath(routePaths[route], locale)),
  }));
}
