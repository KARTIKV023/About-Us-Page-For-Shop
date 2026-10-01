# Vijyapana — About page

The marketing site for **Vijyapana**, a branding and advertising agency in Kanpur.
This repo holds the `/about` page: a single long-scroll page built with Next.js
(App Router) and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000/about
```

```bash
npm run build && npm start   # production
npm run lint                 # eslint
```

Node 20.9 or newer. The version we develop against is in `.nvmrc`.

## Editing the copy

All text for the page lives in [`content/about.ts`](content/about.ts). The
components in `components/about/` only decide layout and style, so copy changes
should only ever need that one file.

Headlines are arrays of lines. Mark a line `accent: true` to paint it in brand
blue:

```ts
title: [{ text: "WE DON'T JUST" }, { text: "DO MARKETING.", accent: true }]
```

Icons are imported from `lucide-react` at the top of the same file.

## Layout

```
app/about/page.tsx      page shell: fonts, SEO metadata, JSON-LD, section order
content/about.ts       every heading, paragraph, icon and image path
content/site.ts        header and footer copy
components/about/      one file per section, in page order
components/about/ui.tsx shared bits: SectionIntro, Headline, Container, Bg
components/about/motion/  Reveal + HeroScroll, the only client-side animation code
components/site/       header, footer, reading-progress bar
```

Sections are rendered in the order they're imported in `app/about/page.tsx`.
Reordering those imports reorders the page.

## Images

Photos are WebP, capped at 2400px on the long edge, and served through
`next/image`. Drop a new file in `public/images/about/` and point the `src` in
`content/about.ts` at it.

`og-about.jpg` stays a JPEG on purpose — OpenGraph and Twitter cards don't
reliably accept WebP.

Originals live in `public/images/source/`, which is gitignored, so re-encoding
doesn't require hunting down the full-resolution files.

## Scroll animation

Reveals are framer-motion. `Reveal` wraps a chunk of content and fades it in as
it enters the viewport; `RevealSection` does the same at section level and
renders a real `<section>` so anchors and the document outline are unaffected.
Sibling chunks are staggered with `staggerDelay(n)` from
`components/about/motion/stagger.ts`.

The hero uses `HeroScroll` and `ScrollLayer` for scroll-scrubbed movement. The
hero photo is deliberately left outside those layers — it's the Largest
Contentful Paint element, and LCP only counts visible elements.

Two details worth knowing before you touch this:

- **Reveals are hidden before hydration by a CSS rule** in `app/globals.css`,
  scoped to `html.js-motion`. Without JavaScript the class is never added, so
  the page renders visible rather than blank.
- **`animate` stays `undefined` until mounted**, because framer-motion writes
  the `animate` value into the server HTML as an inline style. A hidden target
  there would ship the whole page below the hero as `opacity:0`.

`prefers-reduced-motion` is respected throughout: content stays static and the
progress bar is removed.

## Colour and type

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0b1b33` | body headings, dark panels |
| `--color-brand` | `#00b4f0` | accents, links, CTAs |

Defined once in `app/globals.css` under `@theme`. Anton for headings, Poppins
for body, both loaded via `next/font`.

## Deploying

Builds to static output — the page is fully prerendered, so any Node host or
CDN works. `npm run build` produces `.next/`, served by `npm start`.