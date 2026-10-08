import type { Locale } from './locales';
import { localePath } from './locales';
import { getMessages, type RouteId, routePaths } from './messages';

export type NavItem = {
  href: string;
  label: string;
  route: RouteId;
};

/** Engine, Spot (Group 1), Kiosk (Group 2), and product overview. */
const productMenuRoutes: RouteId[] = ['product', 'spot', 'kiosk'];

/** About, mission, contact — under Other menu. */
const otherMenuRoutes: RouteId[] = ['about', 'mission', 'contact'];

function labelForRoute(route: RouteId, locale: Locale): string {
  const nav = getMessages(locale).nav;
  return nav[route];
}

function itemsForRoutes(routes: RouteId[], locale: Locale): NavItem[] {
  return routes.map((route) => ({
    route,
    href: localePath(routePaths[route], locale),
    label: labelForRoute(route, locale),
  }));
}

export function getHomeNavItem(locale: Locale): NavItem {
  return {
    route: 'home',
    href: localePath(routePaths.home, locale),
    label: labelForRoute('home', locale),
  };
}

export function getProductsNav(locale: Locale): NavItem[] {
  return itemsForRoutes(productMenuRoutes, locale);
}

export function getOtherNav(locale: Locale): NavItem[] {
  return itemsForRoutes(otherMenuRoutes, locale);
}

export function getProductsMenuLabel(locale: Locale): string {
  return getMessages(locale).nav.productsMenu;
}

export function getOtherMenuLabel(locale: Locale): string {
  return getMessages(locale).nav.otherMenu;
}

export function getSiteNavLabel(locale: Locale): string {
  return getMessages(locale).nav.site;
}

export function isProductRoute(route: RouteId): boolean {
  return productMenuRoutes.includes(route);
}
