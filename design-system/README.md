# MulliRico Design System

> Artisan sourdough bakery — Cypress, Texas
> Small-batch, naturally fermented bread. Clean ingredients, slow process, premium handmade feel.

This system codifies MulliRico's typography-first, minimal, naturally-toned identity. It is built for a brand that lives mainly on bread packaging labels (thermal printed), stickers and stamps, website, and social media watermarks on product photos.

There is no existing codebase or Figma file — the system was built from the brief alone. Everything here is original.

## Index

| Path                  | What it holds                                                              |
| --------------------- | -------------------------------------------------------------------------- |
| `README.md`           | This file. Brand context, content, visual and iconography rules.           |
| `SKILL.md`            | Front-matter for Claude Skills compatibility.                              |
| `colors_and_type.css` | All design tokens — colors, fonts, scale, spacing, radii, shadows, motion. |
| `assets/`             | Logos (wordmark, monogram, circular stamp). All SVG, monochrome.           |

## Brand Personality

- Minimal, clean, modern — negative space does the work.
- Artisan and handcrafted — the only flourish is the script wordmark itself.
- Premium but approachable — not luxury; quietly considered.
- Calm, natural, trustworthy — the system never shouts.
- Subtle Asian-modern influence — restrained, balanced composition; generous margins; centered, paper-like layouts.

If a design element feels decorative, remove it. The brand is what's left after you've taken everything else away.

## Content Fundamentals

Voice. Quiet confidence. We say what we do and let the bread speak. We do not market — we describe.

Tone. Warm, plain, unhurried. A baker explaining their process at the counter, not a copywriter selling lifestyle.

Person. First-person plural for the bakery (`we bake`, `our starter`). Second-person sparingly and never imperative-pushy. Most copy is third-person about the bread itself (`Country loaf. 36-hour cold ferment.`).

Casing. Sentence case for everything readable. ALL-CAPS only for small wide-tracked labels. Never ALL-CAPS for paragraphs or long buttons.

Punctuation. Periods are welcome. Em-dashes are welcome. Exclamation points are not. Ellipses are not.

Length. Short. A loaf description is one sentence plus a list of ingredients. A homepage hero is a noun phrase, not a sentence.

Numbers. Spell zero through nine; numerals from 10 up. Times in 24h on labels, 12h elsewhere. Weights metric (`850 g`).

Emoji. No.

Examples — write like this:

> Country loaf. Stone-milled white wheat, sea salt, water, levain. 36-hour cold ferment. 850 g.
>
> Open Saturdays, 8 to noon. Or until we sell out.
>
> We bake on Wednesday and Saturday. Pickup the same day.

Not like this:

> OUR AMAZING ARTISAN BREAD. Order yours today.

## Visual Foundations

### Colors

The palette is two black/white anchors plus three natural tones.

| Token             | Hex       | Use                                              |
| ----------------- | --------- | ------------------------------------------------ |
| `--mr-black`      | `#000000` | Primary ink. Logo. Stamps.                       |
| `--mr-white`      | `#FFFFFF` | Surface. Negative space.                         |
| `--mr-beige`      | `#F5F1E8` | Default page surface. Warm cream.                |
| `--mr-beige-deep` | `#EDE6D3` | Layered surface, card backgrounds against beige. |
| `--mr-brown`      | `#8B5E3C` | Accent — crust, sparingly.                       |
| `--mr-olive`      | `#6B705C` | Accent — sage/herbal, sparingly.                 |
| `--mr-ink`        | `#1A1714` | Body text — softer than pure black on beige.     |
| `--mr-line`       | `#D9D2C2` | Hairline dividers on beige.                      |

Rules:

- Beige is the default surface, not white.
- White is reserved for cards, label stock, or photographic plates.
- Brown and olive are accents only.
- Black is the workhorse.

### Typography

Two families.

- Allura (script) — the wordmark. Used only for the MulliRico logo and rare display moments.
- DM Sans (sans) — everything else.
- DM Mono (mono) — batch numbers, weights, dates on labels.

Substitution flag: the brief calls for a custom handwritten script logotype. Allura is a Google Fonts stand-in chosen for the closest match. Replace with the final custom wordmark when ready.

Rules:

- Body never below 14px on screen, never below 9pt on print.
- Headings set in DM Sans 300/400 weight with tight tracking.
- Eyebrows ALL-CAPS, +0.28em tracked.
- Line length 60–70 characters max for body.

### Spacing

4px grid. Layouts breathe. When in doubt, double the spacing.

### Backgrounds

- Default: flat warm beige (`--mr-beige`). No gradients.
- Imagery: warm-toned, slight grain acceptable, never illustrated.
- Patterns: none.
- Gradients: none in UI.

### Animation

Restrained.

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Duration: 140ms for state changes; 240ms for layout; 420ms for page transitions
- Effects: opacity fades and short translates only

### Hover and press states

- Hover (links, type-buttons): color shifts from `--mr-ink` to `--mr-brown`
- Hover (filled buttons): background lightens by around 6 percent
- Hover (cards): no movement, no shadow change. A 1px border appears in `--mr-line-strong`
- Press: element holds position; opacity drops to 0.85 briefly
- Focus: 1.5px outline in `--mr-ink`, 2px offset

### Borders

Always 1px, never thicker, except for stamp outlines (1.5px).

### Shadows

Used sparingly and softly.

- `--mr-shadow-1` — paper lift on tags
- `--mr-shadow-2` — cards
- `--mr-shadow-3` — modal/lifted
- `--mr-shadow-stamp` — inset outline for label boxes and circular seals

No outer glows. No colored shadows.

### Layout

- Centered and paper-like
- Asymmetry is allowed but quiet
- Fixed elements are minimal
- Grid: 12-column on desktop with 32px gutters; single-column on mobile with 24px outer margin

### Transparency and blur

Almost never used. The brand is opaque — like paper.

### Imagery

When photography is used:

- Tone: warm, natural daylight
- Subject: crust closeups, flour-dusted surfaces, cross-section crumb shots, hands
- Composition: centered or rule-of-thirds, never busy
- Color: muted
- No black and white unless explicitly stylized

### Corner radii

Radii are mostly 0. Square edges. Pills used only for tiny eyebrow tags. Never round cards with 16px+ radii.

### Cards

A card is:

- White surface on beige page
- 1px `--mr-line` border
- 0 or 2px radius
- `--mr-shadow-1` or no shadow
- Generous internal padding

## Iconography

The brand uses almost no icons.

Where iconography is unavoidable, use Lucide-style line icons:

- thin 1.5px stroke
- no fill
- monochrome
- set in `--mr-ink`

Allowed icon concepts:

- menu
- x
- arrow-right
- arrow-left
- chevron-down
- instagram
- mail
- map-pin
- clock
- check

No emoji. No decorative Unicode symbols. No SVG illustrations.

Logos in `assets/`:

- `logo-wordmark.svg`
- `logo-wordmark-white.svg`
- `monogram-mr.svg`
- `stamp-circular.svg`

## Primary Use Cases

This system is tuned for:

1. Thermal-printed bread labels
2. Stickers and stamps
3. Website
4. Social media watermark overlays

## Open questions

- Custom wordmark. Allura is a substitution.
- Photography library. Add a proper `assets/photography/` folder once available.
- Tagline. `Slow · Natural · Small batch` is still placeholder copy.
- Address and hours. Exact street address and bake-day hours still need confirmation.
