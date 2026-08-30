# AGENTS.md — MulliRico Web

Public marketing site for MulliRico. It has no ordering, auth, API, or database role; see the root
`AGENTS.md` service map.

## Brand

`design-system/colors_and_type.css` in this repository is the **canonical MulliRico brand** — the
palette, DM Sans, DM Mono, and Allura — and every sibling UI inherits it. Changing it changes every
surface in the estate, so treat it as a shared contract: change it here first, then propagate.

## Motion and responsive standard

This is a public, SEO-critical marketing site, not an iPad application. It is deliberately **not**
restructured iPad-first and does not depend on Motion for React; its existing responsive layout and
CSS transitions are correct for a website.

What it does share with the rest of the estate:

- Animate `transform` and `opacity` only.
- Honour `prefers-reduced-motion`. The block at the end of `src/index.css` collapses every
  transition and animation; never add motion that escapes it.
- Timing and easing come from the `--mr-dur-*` and `--mr-ease-*` tokens in the design system.

## Accessibility

The landing page is the site's entry point, so the shop name is its `<h1>`. Do not use
`display: contents` on a heading — WebKit has historically dropped such elements from the
accessibility tree, which would remove the page's only heading while leaving the markup looking
correct.

## Validation

`make ci` runs format, tests, and build. Verify rendered changes in WebKit at desktop and phone
widths, and confirm no horizontal page scroll.
