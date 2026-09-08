// Metadata and structured data for the single-page site. The prerender
// script injects these into the initial HTML.

import { site } from './content/site.js';

export const pages = {
  home: {
    path: '/',
    title: 'MulliRico Café and Bakery | Coffee shop in Cypress, Houston TX',
    description:
      'MulliRico is a family-run café and bakery opening November 2026 at 9522 Huffmeister Rd, Houston TX. Specialty coffee, artisan sourdough, and homemade bakery — crafted from scratch.',
  },
};

export function cafeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: site.name,
    url: site.url,
    telephone: '+1-346-563-8998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    servesCuisine: ['Coffee', 'Bakery', 'Sandwiches', 'Desserts'],
    priceRange: '$',
    sameAs: [site.instagram.url],
    foundingDate: site.openingDate,
    slogan: site.tagline,
  };
}

export function jsonLdForPage() {
  return [cafeJsonLd()];
}
