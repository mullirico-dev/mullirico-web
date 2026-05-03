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
- Core product: `Artisan sourdough bread`

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

## Deployment Flow

This repository now supports two deployment targets:

### `dev` branch → GitHub Pages

- Every push or merge to `dev` triggers the GitHub Actions workflow:
  - `.github/workflows/deploy-dev-pages.yml`
- That workflow builds the Vite app with a GitHub Pages base path and deploys the `dist/` output to GitHub Pages.
- The expected URL format is:
  - `https://<github-username>.github.io/mullirico-web/`

### `main` branch → Vercel production

- Vercel should track `main` as the Production Branch.
- Every push or merge to `main` creates the live production deployment used by:
  - `https://www.mullirico.com`

### Branch-aware Vite base path

The app uses `VITE_BASE_PATH` in `vite.config.js`.

- Default local/Vercel behavior:
  - `base: /`
- GitHub Pages workflow behavior:
  - `base: /mullirico-web/`

This allows the same app to work correctly in both environments without maintaining separate branches or configs.

## Versioning Flow

This repository now uses semantic versioning starting at:

```text
v1.0.0
```

### Version bump rules

Only pull requests merged from feature branches into `dev` should trigger a version bump.

The label convention used in this repo is:

- `semver:patch`
- `semver:minor`
- `semver:major`

Examples:

- `v1.0.0` + `semver:patch` → `v1.0.1`
- `v1.0.0` + `semver:minor` → `v1.1.0`
- `v1.0.0` + `semver:major` → `v2.0.0`

### Branch behavior

- `feature/*` → `dev`
  - must include exactly one semver label
  - must pass formatting, unit tests, and build checks
  - after merge, GitHub Actions bumps `package.json` and `package-lock.json`
  - after merge, GitHub Actions creates and pushes the matching git tag
- `dev` → `main`
  - no semver label required
  - no automatic version bump
  - used only to promote already validated changes to production

### Release workflows

The repo includes:

- `.github/workflows/ci.yml`
  - runs format check, tests, and build on PRs to `dev` and `main`
- `.github/workflows/pr-semver-label.yml`
  - requires exactly one semver label on PRs into `dev` from feature branches
- `.github/workflows/release-dev-version.yml`
  - bumps version and creates a git tag after merge into `dev`
- `.github/workflows/publish-tag-release.yml`
  - publishes a GitHub Release for each new `v*` tag
  - generates release notes automatically from merged pull requests
  - groups changes using `.github/release.yml`

### GitHub release history

Every version tag is also published as a GitHub Release so you can browse:

- the exact version number
- the merged pull requests included in that version
- the grouped change summary based on `semver:major`, `semver:minor`, and `semver:patch`
- the full compare link between releases

This gives you a repo-level release history directly in GitHub under the `Releases` tab, while the underlying git tags remain available in the `Tags` view.

### Local commands

You can run the same checks locally with:

```bash
make format-check
make test
make build
make ci
```

## Deployment Notes

The Vite base path is branch-aware through `VITE_BASE_PATH`:

- local and Vercel production default to `/`
- the GitHub Pages workflow sets `/mullirico-web/`

The repo also includes `vercel.json`, which disables automatic Vercel deployments for the `dev` branch so the environment split stays clean:

- `dev` → GitHub Pages
- `main` → Vercel production

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
