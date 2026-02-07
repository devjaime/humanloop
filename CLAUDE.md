# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HumanLoop.cl is a **proof-of-concept** landing page for a Human-in-the-Loop (HITL) orchestration platform. It is a bilingual (EN/ES) marketing site built with Next.js 15 App Router — there is no backend, API, or database. The app is a single-page site deployed to Vercel.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (standalone output)
npm run start    # Start production server
npm run lint     # Run Next.js linting
```

Node version: 20 (see `.nvmrc`)

## Tech Stack

- **Next.js 15** with App Router and `output: "standalone"`
- **React 19**
- **TypeScript 5.7+** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (no `tailwind.config.js` — theme is defined with `@theme` in `globals.css`)
- Deployed to **Vercel** (`vercel.json` sets region `gru1` and security headers)

## Architecture

This is a single-route landing page with client-side i18n:

### Page Structure
`src/app/page.tsx` composes the full page from section components in order: Navbar, Hero, HowItWorks, Services, Scenarios, MCPSection, EthicsFramework, Pricing, ConceptBanner, Footer.

### i18n System
- `src/context/LanguageContext.tsx` — React Context provider with `useLanguage()` hook. Wraps the app in `layout.tsx`. Defaults to English.
- `src/content/en.ts` and `src/content/es.ts` — Translation dictionaries. Both export a `content` object with identical keys. The type is inferred from `en.ts`.
- Components access translations via `const { t } = useLanguage()` and render `t.section.key`.
- All components that use translations must be `"use client"` components.

### Tailwind v4 Theme
Custom colors are defined in `src/app/globals.css` using `@theme { --color-*: ... }`. Key colors: `primary`, `secondary`, `surface`, `electric`, `accent`, `text-primary/secondary/muted`. Custom animations (float, pulse-glow, shimmer, etc.) are also defined there.

### Path Alias
`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Claude Code Skills
`skills/` directory contains HITL skill definitions (`business-consultant`, `iot-security-installer`) as `SKILL.md` files. These are Claude Code skills invocable via `/business-consultant` and `/iot-security-installer`.

## Key Conventions

- Components are in `src/components/` as default exports, one per file, PascalCase named.
- All section components follow the same pattern: `"use client"` directive, `useLanguage()` hook for translations, Tailwind for styling, no external UI libraries.
- Translations must be added to **both** `en.ts` and `es.ts` with matching keys when adding/modifying any user-visible text.
- No test framework is currently configured.
