# MulliRico Web

Static React marketing website for the MulliRico artisan sourdough brand.

## Overview

This repository contains the first frontend for `mullirico.com`.

Current scope:

- Static marketing website only
- No backend
- No checkout
- No forms processing
- No database
- Contact and ordering via email or Instagram only

Brand context:

- Brand: `MulliRico`
- Location: `Cypress, Texas`
- Core product: `Organic sourdough bread`

## Tech Stack

- React
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Static asset bundling through Vite

## Design Direction

The current UI follows the quieter MulliRico design system generated from the Claude design kit.

The site is now intentionally:

- Typography-first
- Beige and ink based
- Minimal rather than decorative
- Square-edged instead of SaaS-like rounded
- Photography-led rather than ornament-led
- Calm and editorial instead of sales-heavy

### Design system summary

- Default surface is warm beige, not white.
- Primary text color is warm near-black (`--mr-ink`), not pure black.
- The MulliRico wordmark uses a script treatment.
- Body and UI typography use DM Sans.
- Meta details use DM Mono.
- Cards are white paper surfaces with thin borders and very soft shadows.
- Buttons are simple rectangular label-style actions.
- Icons are restrained Lucide-style line icons and only used where necessary.

### Design system files

The repo now includes a local version of the Claude kit in:

- `design-system/README.md`
- `design-system/SKILL.md`
- `design-system/colors_and_type.css`
- `design-system/assets/`

These files document the brand system and provide the source assets used to redesign the current implementation.

## Project Structure

```text
mullirico-web/
├── design-system/
│   ├── assets/
│   │   ├── logo-wordmark-white.svg
│   │   ├── logo-wordmark.svg
│   │   ├── monogram-mr.svg
│   │   └── stamp-circular.svg
│   ├── colors_and_type.css
│   ├── README.md
│   └── SKILL.md
├── public/
│   └── og-cover.jpg
├── src/
│   ├── assets/
│   │   ├── README.md
│   │   ├── bread-1.jpg
│   │   ├── bread-2.jpg
│   │   ├── bread-3.jpg
│   │   ├── bread-4.jpg
│   │   ├── brand/
│   │   │   ├── logo-wordmark-white.svg
│   │   │   ├── logo-wordmark.svg
│   │   │   ├── monogram-mr.svg
│   │   │   └── stamp-circular.svg
│   │   ├── crumb.jpg
│   │   ├── label.jpg
│   │   └── sourdough-hero.jpg
│   ├── components/
│   │   ├── ContactSection.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── IngredientsSection.jsx
│   │   ├── Icons.jsx
│   │   ├── LogoWordmark.jsx
│   │   ├── OrderSection.jsx
│   │   ├── ProductSection.jsx
│   │   └── StampSeal.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Main Sections

The landing page currently includes:

- Sticky header and responsive navigation
- Hero section
- Brand promise / feature cards
- Signature product section
- Ingredients section
- Gallery
- How to order section
- Contact section
- Footer

## Local Development

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Vite usually starts on:

```text
http://localhost:5173/
```

### Build for production

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Deployment Notes

The Vite config currently sets:

```js
base: './'
```

This keeps the generated asset paths friendly for static deployment and avoids broken root-relative asset loading in many GitHub Pages-style scenarios.

If you later deploy under a dedicated production path strategy, revisit `vite.config.js`.

## SEO and Metadata

The app currently includes:

- Title tag
- Meta description
- Open Graph tags
- Twitter card tags
- Theme color

Files involved:

- `index.html`
- `public/og-cover.jpg`

## Content Maintenance

### Contact details

Most brand content and links currently live in:

- `src/App.jsx`

That includes:

- Instagram URL
- Orders email
- Info email
- Navigation items
- Product details
- Ingredients list
- Gallery data
- Order steps
- Contact items

### Styling and brand system

Core design tokens live in:

- `design-system/colors_and_type.css`

Project-specific implementation styles live in:

- `src/index.css`

The relationship is:

- `design-system/colors_and_type.css` defines the brand primitives
- `src/index.css` applies those primitives to the React marketing site

## Image Management

The working bread images are stored in:

- `src/assets/`

See:

- `src/assets/README.md`

Important notes:

- The root `/assets` folder contains the original bread images added to the repo.
- The app uses copies inside `src/assets/` so Vite can bundle them cleanly.
- The brand SVG assets are available in both `design-system/assets/` and `src/assets/brand/`.
- `sourdough-hero.jpg`, `crumb.jpg`, and `label.jpg` are temporary placeholders created from the existing photos.
- These should be replaced with stronger dedicated brand shots when available.

## Design Review Summary

The original version was functional, but visually it drifted toward a generic premium landing page. This pass corrected that by:

- Replacing the old decorative beige gradient system with the flatter beige/ink Claude kit
- Swapping the improvised monogram treatment for the supplied wordmark and stamp assets
- Removing oversized rounded cards and converting the UI to square paper-like surfaces
- Reworking CTAs to match the kit's simple rectangular button language
- Simplifying the hero into a wordmark-first editorial composition
- Keeping icon usage restrained and limited to practical UI needs

These improvements are now implemented in code.

## Recommended Next Improvements

Good next steps after this version:

- Replace the temporary hero, crumb, and label images with a dedicated product shoot
- Decide whether the supplied script SVG wordmark is final or still a temporary stand-in
- Add a favicon derived from the wordmark or monogram
- Add a proper Open Graph share image designed in the new beige/ink system
- Confirm exact pickup cadence and any public-facing schedule copy
- Optimize image sizes further once final photography is selected

## Verification

Verified locally:

- `npm run build`
- `npm run dev -- --host 127.0.0.1 --port 4173`

## Notes for Future Work

This repo is intentionally frontend-only for now.

Do not add yet unless requirements change:

- Backend APIs
- Payment processing
- Auth
- Database
- Dynamic order flow
