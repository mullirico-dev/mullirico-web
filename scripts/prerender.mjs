// Bakes every route into static HTML after the client build.
// Usage (via npm run build):
//   vite build && vite build --ssr src/prerender.jsx --outDir dist-ssr
//   node scripts/prerender.mjs
// Home, Menu, Visit, and Our Story all ship their real content in the
// initial HTML response — verify with:
//   curl -s http://localhost:4173/menu/ | grep -o 'Cold Brew'

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const siteUrl = 'https://mullirico.com';

const { render, pages } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/prerender.js')).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

for (const [page, meta] of Object.entries(pages)) {
  const { html, jsonLd } = render(page);
  const canonical = `${siteUrl}${meta.path}`;

  const headExtras = [
    `<link rel="canonical" href="${canonical}" />`,
    ...jsonLd.map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
    ),
  ].join('\n    ');

  // Prettier may wrap a <meta> tag's attributes onto separate lines, so
  // every pattern allows arbitrary whitespace between attributes.
  const metaPattern = (attr, name) =>
    new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`);

  let out = template
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      metaPattern('name', 'description'),
      `$1${escapeAttr(meta.description)}$2`,
    )
    .replace(
      metaPattern('property', 'og:title'),
      `$1${escapeAttr(meta.title)}$2`,
    )
    .replace(
      metaPattern('property', 'og:description'),
      `$1${escapeAttr(meta.description)}$2`,
    )
    .replace(metaPattern('property', 'og:url'), `$1${canonical}$2`)
    .replace(
      metaPattern('name', 'twitter:title'),
      `$1${escapeAttr(meta.title)}$2`,
    )
    .replace(
      metaPattern('name', 'twitter:description'),
      `$1${escapeAttr(meta.description)}$2`,
    )
    .replace('<!--app-head-->', headExtras)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outFile =
    meta.path === '/'
      ? resolve(dist, 'index.html')
      : resolve(dist, meta.path.replace(/^\/|\/$/g, ''), 'index.html');
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, out);
  console.log(`prerendered ${meta.path} -> ${outFile.replace(root + '/', '')}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(pages)
  .map(
    (meta) => `  <url>
    <loc>${siteUrl}${meta.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);

writeFileSync(
  resolve(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log('wrote sitemap.xml and robots.txt');
