# Astral Genetics

Landing page for [Astral Genetics](https://astralgen.tech) — a biotech startup building an RNA All-in-One platform for next-generation genetic medicine.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts a local dev server with hot reload. Open the URL shown in terminal (usually `http://localhost:4321`).

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. This is what gets deployed — plain HTML, CSS, and minimal JS.

## Preview

```bash
npm run preview
```

Preview the production build locally before deploying.

## Deployment

The `dist/` folder can be deployed to any static hosting provider:

- **Vercel** — connect the repo and it auto-detects Astro
- **Netlify** — same, or drag-and-drop the `dist/` folder
- **GitHub Pages** — push `dist/` contents to a `gh-pages` branch

## Project Structure

```
src/
  layouts/Layout.astro   — base HTML shell (head, fonts, meta)
  pages/index.astro      — the full landing page
public/
  jane.png               — founder photo
  space1.png             — space background image
  favicon.svg            — favicon
tailwind.config.mjs      — colors, fonts, palette options
astro.config.mjs         — Astro config
```

## Changing the Color Palette

All colors are in `tailwind.config.mjs`. The active palette is the `brand` object. Several alternatives (ocean, sage, indigo, rose, coral, amber, stellar) are defined below it — copy any into `brand` to switch the entire site.

## Tech

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS
- [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — heading font
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — body font
