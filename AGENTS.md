# kiosos-web — agent context

Marketing site only (**kiosos.com**). Product definition: **kiosos-vault**. Spot app: separate **kiosos-spot** repo (future).

## Stack

- **Astro 7** on **Vite**, **TypeScript** strict
- Static build → **GitHub Pages** via `.github/workflows/deploy-pages.yml`
- Do not add Next.js, API routes, or engine dependencies here unless vault scope changes

## i18n (EN + TR)

- **Default English:** `/about` — **Turkish:** `/tr/about`
- Copy: nav/site strings in `src/i18n/messages.ts`; page bodies in `src/i18n/pageCopy.ts`; nav: `src/i18n/nav.ts`
- New route: add `RouteId` + paths in `messages.ts`, EN page under `src/pages/`, TR mirror under `src/pages/tr/`
- **Engine-related site copy:** write English first, then Turkish in `messages.ts`
- Vault policy: [localization](https://github.com/oswareTR/kiosos-vault/blob/main/product/localization.md)

## SEO

- Pages use `BaseLayout` with `route` for `hreflang` alternates
- Site URL helpers: `src/lib/site.ts`
- Run `npm run build` to verify sitemap generation

## Docs

- [docs/001-stack-and-local-dev.md](docs/001-stack-and-local-dev.md)
- [Astro docs](https://docs.astro.build)

## Development

```bash
npm run dev
```

Use background dev if your environment supports it: `astro dev --background` (see Astro CLI).
