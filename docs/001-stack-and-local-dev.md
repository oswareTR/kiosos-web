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

In GitHub repo settings: **Pages** → source **GitHub Actions**; set custom domain **kiosos.com** (DNS + `public/CNAME`).
