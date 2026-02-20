# CLAUDE.md

## Project Overview

Personal portfolio website for Cesar Lahoud showcasing skills, work experience, education, and certificates.
This project will have three sections:

1. **My Resume:** This will include my education and work experience. The resume section will look like a world map with pins on the locations of the companies and universities I have worked at and attended. Each pin will have a pop-up with more information about my experience at that location. The pop-up will include the company/university logo, my title, timeline, and bullet points describing my responsibilities and achievements.
   There will be two ways of navigating the map, either the user can click on the pins to see the pop-ups, or they can scroll through a timeline at the bottom of the page that will highlight the corresponding pins on the map as they scroll.
1. **My Skills**: This will include my technical and soft skills. This will look like a skill tree with branches for different categories of skills (e.g. software skils, soft skills, languages, hobbies). Each branch will have leaves representing individual skills, and hovering over a leaf will show a tooltip with more information about that skill (e.g. proficiency level, years of experience, etc.).
1. **My Projects**: This will include my personal projects.

## Commands

- **Dev server:** `npm run dev` (Next.js on localhost:3000)
- **Build:** `npm run build` (ESLint is disabled during builds via `next.config.mjs`)
- **Lint:** `npm run lint`

## Tech Stack

- **Framework:** Next.js 14 (App Router, React 18, TypeScript)
- **Styling:** Tailwind CSS v3 with `darkMode: "class"` (body has `dark` class by default), `tailwindcss-animate`
- **UI Components:** shadcn/ui (default style, slate base color, CSS variables, RSC-enabled)
- **Animations:** Framer Motion / Motion
- **Icons:** Lucide React, Tabler Icons, React Icons
- **Fonts:** Geist Sans & Geist Mono (local woff files)

## Architecture

- **Single-page app:** `src/app/page.tsx` is the main entry point (currently a placeholder being rebuilt)
- **Layout:** `src/app/layout.tsx` — dark mode enabled via `dark` class on `<body>`
- **Resume data:** `src/data/resume.tsx` — exports `JOBS`, `EDUCATION`, `CERTIFICATES` arrays with structured data including JSX logo components

### Data Signatures

**JOBS:**

```ts
{ location: string, name: string, logo: JSX.Element, positions: [{ id: string, title: string, points: string[], timeline: string }] }
```

**EDUCATION:**

```ts
{ location: string, name: string, logo: JSX.Element, positions: [{ id: string, title: string, timeline: string }] }
```

**CERTIFICATES:**

```ts
{ name: string, logo: JSX.Element, provider: string, timeline: string }
```

- **Logo components:** `src/components/logos.tsx` — inline SVG components (CitiLogo, SGLogo, McGillLogo, etc.) used in resume data
- **Utilities:** `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## shadcn/ui

Add new components with: `npx shadcn@latest add <component-name>`

Aliases configured in `components.json`:

- `@/components` → components, `@/components/ui` → UI primitives
- `@/lib` → library utils, `@/hooks` → custom hooks

## Conventions

- Path alias: `@/*` maps to `./src/*`
- Tailwind custom plugin in `tailwind.config.ts` exposes all Tailwind colors as CSS variables (e.g., `var(--gray-200)`)
- Background is pure black (`#000000`) set in `globals.css`
- Remote images allowed from `assets.aceternity.com`
- ESLint extends `next/core-web-vitals` and `next/typescript` with `no-explicit-any` turned off
