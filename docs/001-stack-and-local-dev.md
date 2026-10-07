# Stack and local development

Product context lives in **kiosos-vault**. This repo is the static marketing site for [kiosos.com](https://kiosos.com).

## Why Astro (on Vite)

Vault decision [0011](https://github.com/oswareTR/kiosos-vault/blob/main/decisions/0011-kiosos-web-vite-github-pages.md) requires **Vite** output and **GitHub Pages**. We use **[Astro](https://astro.build/)** because it:

- Runs on **Vite** (same dev/build toolchain).
- Ships **static HTML by default** — strong baseline for **SEO** (crawlable content, minimal client JS).
- Uses **`.astro` + TypeScript** — easy for AI-assisted edits and predictable layouts.
- Supports **optional React/Vue/Svelte islands** later via `astro add` without rewriting the site.

## SEO conventions

- **`src/lib/site.ts`** — canonical URL, default title/description, `tr` locale.
- **`src/layouts/BaseLayout.astro`** — `<title>`, meta description, canonical, Open Graph, Twitter.
- **`@astrojs/sitemap`** — sitemap at build time (`site` set in `astro.config.mjs`).
- **`public/robots.txt`** — allows indexing; points at sitemap.

Add JSON-LD and per-page meta via layout props as pages grow.

## Languages

- **English (default):** unprefixed routes (`/`, `/about`, …)
- **Turkish:** `/tr/`, `/tr/about`, …
- Strings: `src/i18n/messages.ts` — add both locales when introducing copy
- **EN / TR** switcher top-right; `hreflang` + `x-default` (English) in `BaseLayout`
- Engine-facing documentation priority is **English** (see kiosos-vault `product/localization.md`)

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
npm run preview  # serve dist locally
```

Node **≥ 22.12** (see `package.json` `engines`).

## Deploy

Push to **`main`**: [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) builds with `npm run build` and publishes **`dist`** to **GitHub Pages**.

### GitHub Pages (configured)

| Setting | Value |
| --- | --- |
| **Build** | GitHub Actions (`Deploy to GitHub Pages`) |
| **Default URL** | https://oswaretr.github.io/kiosos-web/ |
| **Custom domain** | `kiosos.com` (`public/CNAME`) |
| **Repo visibility** | **Public** (required for Pages on the org’s free plan) |

Settings UI: https://github.com/oswareTR/kiosos-web/settings/pages

### DNS for kiosos.com

At your DNS host, point the apex domain at GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)):

- **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Or **ALIAS/ANAME** `@` → `oswaretr.github.io` if your provider supports apex CNAME flattening

After DNS propagates, enable **Enforce HTTPS** on the Pages settings page once the domain shows as verified.
