// Server entry for the prerender step. Built with `vite build --ssr` and
// invoked by scripts/prerender.mjs to bake the page into static HTML.
import { renderToString } from 'react-dom/server';
import App from './App';
import { pages, jsonLdForPage } from './seo';

export function render(page) {
  const html = renderToString(<App />);
  const meta = pages[page];
  const jsonLd = jsonLdForPage(page);
  return { html, meta, jsonLd };
}

export { pages };
