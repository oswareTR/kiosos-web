/** Canonical marketing site config (kiosos.com). */
export const site = {
  name: 'Kiosos',
  title: 'Kiosos — satışta yardım',
  description:
    'Kiosos, katalog satışları için vektörel satış motoru SaaS. Upsell ve cross-sell için akıllı öneriler — işletmeniz ile ticaret arasında birleşik API.',
  url: 'https://kiosos.com',
  locale: 'tr_TR',
  language: 'tr',
} as const;

export type PageMeta = {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
};

export function pageTitle(title?: string): string {
  if (!title) return site.title;
  return `${title} · ${site.name}`;
}

export function canonicalUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, site.url).href;
}
