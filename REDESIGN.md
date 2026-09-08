# REDESIGN.md — MulliRico Café and Bakery site

The 2026 redesign turned the site into a **single-page, scroll-driven
showcase** for the MulliRico Coffee Shop — no tabs, no full menu, no
prices. This file explains how to operate it.

## The page

One route (`/`), composed in `src/pages/Home.jsx` as scroll chapters:

1. **Hero** — full-viewport wordmark lockup, opening status, botanical
   divider, scroll cue.
2. **Camel band** — the tagline, used once as a structural break.
3. **Coffee / Sourdough / Bakery chapters** — big display headline, short
   copy, and a "sampler" line of item names. Deliberately no prices and no
   full menu.
4. **Story chapter** — family-run narrative and the "Passionately crafted."
   sign-off.
5. **Visit** (`#visit`) — address, directions buttons, hours slot, contact.
6. **Footer** — deep-roast band with the cream wordmark.

A translucent floating header (`FloatingHeader`) materializes after the
hero scrolls past; it carries only the wordmark (back to top) and a
"Plan a visit" anchor.

## Motion model

- One orchestrated hero entrance on load (`hero-rise` keyframes).
- Scroll chapters reveal through the `Reveal` component: an
  IntersectionObserver toggles `is-in` **both ways**, so chapters replay
  when scrolling up as well as down. Children stagger via `rv-d*` delay
  classes; images settle from a slight scale.
- Everything animates `transform`/`opacity` only, and the estate-wide
  reduced-motion block at the end of `src/index.css` collapses all of it.
- Reveal-hiding styles are gated behind `html.js` (set by an inline script
  in `index.html`), so prerendered content is never hidden without
  JavaScript.

## How rendering works

`npm run build` runs three steps: the client build, an SSR build of
`src/prerender.jsx`, and `node scripts/prerender.mjs`, which bakes the
page into `dist/index.html` with meta, `CafeOrCoffeeShop` JSON-LD,
`sitemap.xml`, and `robots.txt`. `src/main.jsx` hydrates the prerendered
HTML. Verify with:

```sh
npm run build && npm run preview &
curl -s http://localhost:4173/ | grep -o 'Come find us'
```

## Editing content

- **Business facts** — `src/content/site.js`: address, phone, Instagram,
  tagline, hours, and the `SITE_STATE` flag.
- **Sampler lines** — `samplers` in the same file. These are the only
  menu-like content on the site; there are intentionally no prices.
- **Chapter copy** — directly in `src/pages/Home.jsx`.

## Flipping pre-opening to open

Change `SITE_STATE` to `'open'` in `src/content/site.js` — the hero status
switches from "Opening November 2026" to "Now open". Fill in `site.hours`
to replace the "Hours coming soon" slots at the same time.

## Design tokens

`design-system/colors_and_type.css` (the canonical estate-wide brand file)
gained an additive café block; original tokens are untouched:

- `--mr-cafe-base` `#F7F1E6` — page background
- `--mr-cafe-cream` `#FBF7F0` — raised surfaces
- `--mr-cafe-camel` `#B08D62` — decorative only (2.7:1 on base — never
  text on cream); the camel band carries deep-roast text (5.6:1, AA)
- `--mr-cafe-espresso` `#3E2B20` — workhorse text (11.9:1 on base)
- `--mr-cafe-roast` `#241812` — footer band
- `--mr-cafe-sage` `#7C8A6E` — large text only (3.3:1);
  `--mr-cafe-sage-deep` `#5A654F` for small text (the samplers)
- `--mr-font-display-serif` — Cormorant Garamond, display headings only.

## Brand assets

- `src/assets/brand/wordmark-cafe-espresso.svg` / `-cream.svg` — the
  vector wordmark (script + wheat + coffee-bean "o") extracted from the
  approved signage artwork. Never recreate the wordmark in web type.
- `src/assets/brand/botanical-divider.svg` — the fine-line wheat/bean/leaf
  border, used as a horizontal divider. Do not tile it behind text.
- `public/og-cover.jpg` — generated from the wordmark + camel band.
- `public/favicon.svg` — coffee-bean mark.

## Where to drop real photography

`src/assets/cafe-interior.jpg` is the interior _render_ and appears twice:
washed to a watermark behind the hero (`.hero__bg` — the gradient overlay
in `index.css` controls how much of it shows) and as the captioned
"early look" figure in the visit section. When real interior photography
exists, replace that file and soften or remove the "early look" caption.

Product photography lives in `src/assets/products/` (AVIF, 800×600),
selected from the owner's `~/mullirico/resources/` library — see its
`manifest.csv` for the full set of 26 images (more drinks, sandwiches,
and bakery shots to choose from). Current placements in `Home.jsx`:

- Coffee chapter — `latte-cafe.avif`
- Sourdough chapter — `sourdough-boule.avif` with `turkey-swiss.avif`
  overlapping as a duo (`.chapter__media--duo`)
- Bakery chapter — `cinnamon-roll.avif`
- Story chapter — `sourdough-overhead.avif`

The original home-kitchen bread photos remain in `src/assets/` unused, in
case the family shots are wanted again. Keep images ≤1600px on the long
edge, strip metadata, and set real `width`/`height`.

## Remaining TODOs

- Business hours (`site.hours`) — pending confirmation.
- Facebook page URL — printed assets disagree on the name; not published.
- Interior/coffee photography — bread photos stand in.
- `vite.config.js` allows `host.docker.internal` in preview for
  container-based browser validation; harmless in production (static
  hosting ignores it).
