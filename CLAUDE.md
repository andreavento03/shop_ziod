# Solino Mare — Project Guide for Claude

## What this is
A static boutique website for **Solino Mare**, a clothing shop in Gaeta owned by Domenico Solino.
Mediterranean/Positano aesthetic. Built with Astro 5 + Tailwind CSS v4.

## Stack
- **Astro 5** (static site generator, zero JS by default)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no tailwind.config file — theme defined in CSS)
- **Google Fonts**: Playfair Display (headings, serif) + Lato (body)
- No framework, no backend, no e-commerce

## Running the project
Node is at a non-standard path. Always prefix commands:
```bash
export PATH="/Users/andreavento/anaconda3/envs/claude-env/bin:$PATH"
npm run dev      # dev server → http://localhost:4321
npm run build    # static build to dist/
```

## Project structure
```
shop_ziod/
├── public/
│   ├── clothes/
│   │   ├── abiti/        ← Abiti & Vestiti (40 photos)
│   │   ├── camicie/      ← Camicie & Top (40 photos)
│   │   ├── pantaloni/    ← Pantaloni & Gonne (30 photos)
│   │   └── accessori/    ← Accessori (36 photos)
│   └── favicon.svg
├── src/
│   ├── styles/
│   │   └── global.css        ← Tailwind import + custom @theme tokens
│   ├── layouts/
│   │   └── Layout.astro      ← Base HTML shell, imports fonts + global CSS
│   ├── components/
│   │   ├── Header.astro      ← Sticky nav, transparent→white on scroll, mobile hamburger
│   │   ├── Hero.astro        ← Full-viewport navy gradient, wave SVG transition
│   │   ├── About.astro       ← Brand story, quote card
│   │   ├── Gallery.astro     ← Tabbed sections + masonry grid + lightbox
│   │   ├── Contact.astro     ← 3 icon cards (address, email, owner)
│   │   └── Footer.astro      ← Minimal dark footer
│   └── pages/
│       └── index.astro       ← Assembles all components
├── astro.config.mjs
├── package.json
└── CLAUDE.md                 ← this file
```

## Design system
Defined in `src/styles/global.css` via Tailwind v4 `@theme`:

| Token | Class | Value |
|---|---|---|
| Navy | `bg-navy` / `text-navy` | `#1B3A6B` |
| Turquoise | `bg-turquoise` / `text-turquoise` | `#5CE5CB` |
| Sand | `bg-sand` | `#F5F0E8` |

## Gallery system
- Photos live in `public/clothes/<category>/` as `item-NNN.jpeg`
- `Gallery.astro` reads each subfolder at build time using `readdirSync` from Node.js `fs`
- Tab bar (Tutti / Abiti / Camicie / Pantaloni / Accessori) filters sections via JS
- Lightbox navigates across all 146 photos with arrow keys and keyboard Escape
- **To add/rearrange photos**: drop files into the right subfolder, then `npm run build`
- **To add a new category**: create a subfolder, add an entry to the `categories` array in `Gallery.astro`

## Contact info (hardcoded in components)
- Owner: Domenico Solino
- Email: domenico.solino@gmail.com
- Address: Via Indipendenza 5, Gaeta (LT)

## GitHub
- Repo: https://github.com/andreavento03/shop_ziod
- Branch: `main`
- SSH auth works for user `andreavento03`
