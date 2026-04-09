# Astral Genetics Landing Page

## Stack
- **Astro** — static site framework, outputs plain HTML with zero JS by default
- **Tailwind CSS v3** — utility-first CSS
- No client-side framework (yet); Astro supports adding Svelte/React components later if needed

## Project Structure
- `src/layouts/Layout.astro` — base HTML layout with fonts, meta tags
- `src/pages/index.astro` — single-page landing site (all sections)
- `tailwind.config.mjs` — custom colors (`brand-*`, `warm-*`), fonts, palette options
- `public/` — static assets (images, favicon, etc.)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

## Design Direction
- **Elegant, warm, and approachable** — not dark/techy. This is a medicine company, not a hacker tool.
- Light theme with warm off-white backgrounds (`warm-*` palette) and sage green accents (`brand-*`)
- **Typography:** Instrument Serif for headings (thin, editorial), DM Sans for body text
- Inspired by Isomorphic Labs — clean, confident, lots of whitespace, merged-border grids, editorial layouts
- Avoid the generic "YC AI startup" card-grid template look — layouts should be asymmetric and varied
- Sections use different layout patterns (two-column splits, editorial lists, merged grids, dark contrast sections) to avoid repetition
- Custom inline SVG illustrations for molecular/RNA visuals; real images go in `public/` when available
- Scroll-triggered fade-in animations on sections
- Multiple color palettes available in tailwind config (ocean, sage, indigo, rose, coral, amber) — swap into `brand` to change site-wide

## Notes
- Content is provided by the founder; copy changes should preserve scientific accuracy
- Contact emails: info@astralgen.tech, partnering@astralgen.tech
- Logo is a placeholder "AG" box — swap when a real logo is available
