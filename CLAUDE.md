# Astral Genetics Landing Page

## Stack
- **Astro** — static site framework, outputs plain HTML with zero JS by default
- **Tailwind CSS v3** — utility-first CSS
- No client-side framework (yet); Astro supports adding Svelte/React components later if needed

## Project Structure
- `src/layouts/Layout.astro` — base HTML layout with fonts, meta tags, SEO, favicon
- `src/pages/index.astro` — single-page landing site (all sections)
- `tailwind.config.mjs` — custom colors (`brand-*`, `warm-*`, `night-*`), fonts, palette options
- `public/` — static assets (images, favicon, etc.)
  - `jane.png` — founder photo
  - `space1.png` — space background used in dark validation section
  - `favicon.svg` — AG logo favicon

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

## Design Direction
- **Elegant, warm, and approachable** — not dark/techy. This is a medicine company, not a hacker tool.
- Light theme with warm off-white backgrounds (`warm-*` palette) and soft steel blue accents (`brand-*`, centered around `#5e8ac7`)
- **Typography:** Instrument Serif for headings (thin, editorial), DM Sans for body text
- Inspired by Isomorphic Labs — clean, confident, lots of whitespace, merged-border grids, editorial layouts
- Avoid the generic "YC AI startup" card-grid template look — layouts should be asymmetric and varied
- Sections use different layout patterns (two-column splits, editorial lists, merged grids, dark contrast sections) to avoid repetition
- **Astral/celestial cues:** twinkling 4-point diamond stars scattered across sections, constellation-style SVG illustrations (RNA helix with star map), space background image in dark section
- Dark validation section uses `night-900` (deep navy), not brown
- Scroll-triggered fade-in animations on sections
- Multiple color palettes available in tailwind config (ocean, sage, indigo, rose, coral, amber, stellar) — swap into `brand` to change site-wide
- Founder section with personal photo and quote — this is key for warmth/friendliness

## Notes
- Content is provided by the founder (Jane Qin); copy changes should preserve scientific accuracy
- Contact emails: info@astralgen.tech, partnering@astralgen.tech
- Logo is a placeholder "AG" box — swap when a real logo is available
- Founder quote is real, provided by Jane
- OG/Twitter meta tags are in the layout but may need `og:image` added when a social preview image is available
