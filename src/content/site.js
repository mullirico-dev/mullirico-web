// Site-wide facts and the pre-opening switch. Everything a section or the
// structured-data generator needs about the business lives here, once.

// Flip to 'open' on opening day. Nothing else needs to change.
export const SITE_STATE = 'preopening'; // 'preopening' | 'open'

export const site = {
  name: 'MulliRico Café and Bakery',
  shortName: 'MulliRico',
  tagline: 'Crafted from scratch · Real ingredients · No shortcuts',
  descriptor: 'Artisan sourdough · Specialty coffee · Homemade goodness',
  openingText: 'Opening November 2026',
  openingDate: '2026-11',
  url: 'https://mullirico.com',
  phone: '346-563-8998',
  phoneHref: 'tel:+13465638998',
  email: 'info@mullirico.com',
  instagram: {
    handle: '@mullirico',
    url: 'https://www.instagram.com/mullirico',
  },
  address: {
    street: '9522 Huffmeister Rd, Suite 700',
    city: 'Houston',
    region: 'TX',
    zip: '77095',
    area: 'Cypress area',
  },
  // Hours are not yet set. Keep null until confirmed; the UI shows a
  // "Hours coming soon" slot wherever hours would appear.
  hours: null,
  directionsUrl:
    'https://maps.google.com/?q=9522+Huffmeister+Rd+Suite+700+Houston+TX+77095',
  appleMapsUrl:
    'https://maps.apple.com/?address=9522+Huffmeister+Rd,+Houston,+TX+77095',
};

// The showcase deliberately shows no full menu and no prices — just a
// taste of each craft. Edit these sampler lines freely.
export const samplers = {
  coffee: [
    'Espresso',
    'Cappuccino',
    'Flat white',
    'Cold brew',
    'Matcha latte',
    'Chai',
  ],
  sourdough: [
    'Classic country',
    'Cheddar jalapeño',
    'Roasted garlic parmesan',
    'Cinnamon raisin',
  ],
  bakery: [
    'Cinnamon rolls',
    'Custard cream bread',
    'Flan',
    'Tres leches',
    'Custom cakes',
  ],
};
