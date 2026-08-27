# Project initialization

This document records how `kiosos-web` was bootstrapped.

## What was done

A Next.js 16 app was created in this repository with `create-next-app`, using the App Router, TypeScript, Tailwind CSS v4, ESLint, Turbopack, and a `src/` directory. A project `.gitignore` was filled in for Next.js/Node, and this `docs/` folder was added.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Linting | ESLint 9 + `eslint-config-next` |
| Dev server | Turbopack (`next dev`) |
| Package manager | npm |

## File structure

```text
kiosos-web/
├── docs/                      # project documentation
│   └── 001-project-initialization.md
├── public/                    # static assets served from /
├── src/
│   └── app/                   # App Router routes, layouts, and pages
│       ├── globals.css
│       ├── layout.tsx         # root layout (fonts, metadata, html/body)
│       └── page.tsx           # home route (`/`)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json              # `@/*` maps to `./src/*`
```

This is the current Next.js default: routes live under `src/app/`, shared UI can go in `src/components/`, and helpers in `src/lib/` when those folders are needed.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## `.gitignore`

The ignore file covers:

- Dependencies (`node_modules`, Yarn/pnpm store files)
- Next.js output (`.next`, `out`)
- Build artifacts (`build`, `dist`)
- Test output (`coverage`, Playwright reports)
- Env files (all `.env*` except `.env.example`)
- TypeScript build info and generated `next-env.d.ts`
- Vercel, caches, logs, OS junk, and editor files

Secrets and local env values stay out of git. Add a committed `.env.example` later if the app needs documented env vars.

## How to run

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
