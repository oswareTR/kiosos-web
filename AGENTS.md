# kiosos-web — agent context

Marketing site only (**kiosos.com**). Product definition: **kiosos-vault**. Spot app: separate **kiosos-spot** repo (future).

## Stack

- **Astro 7** on **Vite**, **TypeScript** strict
- Static build → **GitHub Pages** via `.github/workflows/deploy-pages.yml`
- Do not add Next.js, API routes, or engine dependencies here unless vault scope changes

## SEO

- New pages: use `src/layouts/BaseLayout.astro` with `title`, `description`, `path`
- Site constants: `src/lib/site.ts`
- Run `npm run build` to verify sitemap generation

## Docs

- [docs/001-stack-and-local-dev.md](docs/001-stack-and-local-dev.md)
- [Astro docs](https://docs.astro.build)

## Development

```bash
npm run dev
```

Use background dev if your environment supports it: `astro dev --background` (see Astro CLI).
