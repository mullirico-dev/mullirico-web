# AGENTS.md — MulliRico Web

Public marketing site for the MulliRico Café and Bakery coffee shop (opening
November 2026, Houston TX). It has no ordering, auth, API, or database role;
see the root `AGENTS.md` service map. It is a showcase site: menu, story, and
visit information only.

## Brand

`design-system/colors_and_type.css` in this repository is the **canonical
MulliRico brand** — the palette, DM Sans, DM Mono, Allura, plus the café
block (the `--mr-cafe-*` colors and Cormorant Garamond as
`--mr-font-display-serif`) — and every sibling UI inherits it. Changing it
changes every surface in the estate, so treat it as a shared contract: change
it here first, then propagate.

Brand rules enforced in this repo:

- The script face appears only inside the wordmark SVGs
  (`src/assets/brand/wordmark-cafe-*.svg`). Never recreate the wordmark in
  web type, and never use Allura for headings, buttons, or body copy.
- Camel (`--mr-cafe-camel`) is decorative on the cream base — it fails AA as
  text there. The camel band carries deep-roast text.
- The camel tagline band and the botanical divider mark real structure; use
  the band at most once per page and never tile the divider behind text.

## Architecture

A **single page** (`/`), prerendered to static HTML; there is no
client-side router and no secondary pages — navigation is scrolling, plus
in-page anchors (`#visit`, `#top`). `npm run build` runs the client build,
an SSR build of `src/prerender.jsx`, and `scripts/prerender.mjs`, which
bakes the page HTML, meta, JSON-LD, `sitemap.xml`, and `robots.txt` into
`dist/`. The page must keep shipping its real content in the initial HTML
response — verify with `curl` against `npm run preview` after build
changes.

Product constraints, per the owner: the site is a showcase — **no full
menu, no prices, no ordering**. Offerings appear only as short sampler
lines. Business facts (address, phone, socials, hours, the `SITE_STATE`
pre-opening flag) and the sampler lines live in `src/content/site.js`;
the structured-data generator in `src/seo.js` reads from it — never
hardcode an address, handle, or price in a component. See `REDESIGN.md`
for operations.

Scroll reveals use the `Reveal` component (IntersectionObserver toggling
`is-in` in both scroll directions). The styles that hide un-revealed
content are gated behind `html.js`, set by an inline script in
`index.html` — keep that gate, or content disappears for no-JS visitors
and crawlers that don't execute scripts.

## Motion and responsive standard

This is a public, SEO-critical marketing site, not an iPad application. It is
deliberately **not** restructured iPad-first and does not depend on Motion
for React; its existing responsive layout and CSS transitions are correct for
a website. Mobile-first: test at 375px with no horizontal page scroll.

What it does share with the rest of the estate:

- Animate `transform` and `opacity` only.
- Honour `prefers-reduced-motion`. The block at the end of `src/index.css`
  collapses every transition and animation; never add motion that escapes it.
- Timing and easing come from the `--mr-dur-*` and `--mr-ease-*` tokens in
  the design system.

## Accessibility

Each page's `<h1>` is its subject; on the home page that is the shop name
(the wordmark image with `alt="MulliRico"`). Do not use `display: contents`
on a heading — WebKit has historically dropped such elements from the
accessibility tree. Keep visible keyboard focus (`:focus-visible` styles in
`src/index.css`) and give every image explicit dimensions to prevent layout
shift.

## Validation

`make ci` runs format, tests, and build (which includes prerendering).
Verify rendered changes in WebKit at desktop and phone widths, and confirm no
horizontal page scroll.
