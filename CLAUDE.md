# Astral Genetics Landing Page

## Stack
- **Astro** — static site framework, outputs plain HTML with zero JS by default
- **Tailwind CSS v3** — utility-first CSS
- No client-side framework (yet); Astro supports adding Svelte/React components later if needed

## Project Structure
- `src/layouts/Layout.astro` — base HTML layout with fonts, meta tags
- `src/pages/index.astro` — single-page landing site (all sections)
- `tailwind.config.mjs` — custom colors (`brand-*`, `midnight-*`), fonts
- `public/` — static assets (images, favicon, etc.)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

## Notes
- This is a personal project for a biotech startup landing page
- Content is provided by the founder; copy changes should preserve scientific accuracy
- Email addresses in the contact section are placeholders
- Logo is a placeholder "AG" box — swap when a real logo is available
