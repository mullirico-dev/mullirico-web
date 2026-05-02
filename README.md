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

The UI is intentionally built around two visual references:

1. Vintage artisan bread label language
2. Cleaner geometric monogram/logo styling

The resulting system is not a generic bakery template. It combines:

- Warm parchment and cream surfaces
- Deep brown editorial typography
- Olive green badges and ribbons
- Gold highlights for pricing and emphasis
- Rounded paper-like cards
- Elegant serif headlines
- A restrained script accent for brand moments only
- A minimal `MR` monogram treatment inspired by the uploaded logo exploration PDF

### Key visual decisions

- `Hero`: combines editorial type, a label-style ingredient strip, and a circular `$12` price medal inspired by the provided label reference.
- `Brand mark`: the header and product sections use a simplified `MR` monogram plus script wordmark to echo the uploaded logo concepts without depending on a final vector logo file.
- `Product card`: styled like a premium bakery label instead of a plain ecommerce card.
- `Order section`: remains simple and direct because there is no backend yet.

## Project Structure

```text
mullirico-web/
├── public/
│   └── og-cover.jpg
├── src/
│   ├── assets/
│   │   ├── README.md
│   │   ├── bread-1.jpg
│   │   ├── bread-2.jpg
│   │   ├── bread-3.jpg
│   │   ├── bread-4.jpg
│   │   ├── crumb.jpg
│   │   ├── label.jpg
│   │   └── sourdough-hero.jpg
│   ├── components/
│   │   ├── BrandMark.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── IngredientsSection.jsx
│   │   ├── OrderSection.jsx
│   │   └── ProductSection.jsx
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

Core design tokens and reusable visual classes live in:

- `src/index.css`

That file includes:

- Font imports
- Color tokens
- Button styles
- Section titles and copy styles
- Badge and ribbon styles
- Brand mark styling
- Hero label strip styling

## Image Management

The working images are stored in:

- `src/assets/`

See:

- `src/assets/README.md`

Important notes:

- The root `/assets` folder contains the original bread images added to the repo.
- The app uses copies inside `src/assets/` so Vite can bundle them cleanly.
- `sourdough-hero.jpg`, `crumb.jpg`, and `label.jpg` are temporary placeholders created from the existing photos.
- These should be replaced with stronger dedicated brand shots when available.

## Design Review Summary

The first version was functional, but there were a few quality gaps that were tightened:

- The original README was too minimal for maintainability.
- The brand language needed to align more closely with the shared label and logo references.
- The header mark needed a more intentional identity treatment.
- The hero needed a stronger focal point and better pricing presentation.
- The product section benefited from a more editorial, label-inspired layout.

These improvements are now implemented in code.

## Recommended Next Improvements

Good next steps after this version:

- Replace the temporary hero, crumb, and label images with dedicated photography
- Finalize an official vector logo and replace the CSS-based monogram
- Add a favicon and touch icons
- Add a real social share image designed specifically for Open Graph
- Optimize image sizes further once final photography is selected
- Add basic analytics after deployment
- Add a simple pickup schedule or availability notice if needed

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
