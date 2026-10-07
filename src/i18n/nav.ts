import type { Locale } from './locales';
import { localePath } from './locales';
import { getMessages, type RouteId, routePaths } from './messages';

export type NavItem = {
  href: string;
  label: string;
  route: RouteId;
};

const primaryRoutes: RouteId[] = ['about', 'product', 'contact'];
const allRoutes: RouteId[] = ['home', 'about', 'product', 'mission', 'products', 'spot', 'contact'];

function labelForRoute(route: RouteId, locale: Locale): string {
  const nav = getMessages(locale).nav;
  return nav[route];
}

export function getPrimaryNav(locale: Locale): NavItem[] {
  return primaryRoutes.map((route) => ({
    route,
    href: localePath(routePaths[route], locale),
    label: labelForRoute(route, locale),
  }));
}

export function getAllPagesNav(locale: Locale): NavItem[] {
  return allRoutes.map((route) => ({
    route,
    href: localePath(routePaths[route], locale),
    label: labelForRoute(route, locale),
  }));
}

export function getPagesMenuLabel(locale: Locale): string {
  return getMessages(locale).nav.pages;
}

export function getSiteNavLabel(locale: Locale): string {
  return getMessages(locale).nav.site;
}
