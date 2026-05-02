import { useState } from 'react';
import LandingSelector from './components/LandingSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import IngredientsSection from './components/IngredientsSection';
import Gallery from './components/Gallery';
import OrderSection from './components/OrderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import breadHero from './assets/sourdough-hero.jpg';
import breadOne from './assets/bread-1.jpg';
import breadTwo from './assets/bread-2.jpg';
import breadThree from './assets/bread-3.jpg';
import breadFour from './assets/bread-4.jpg';

const instagramUrl =
  'https://www.instagram.com/mullirico?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
const ordersEmail = 'orders@mullirico.com';
const infoEmail = 'info@mullirico.com';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Bread', href: '#our-bread' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const featureCards = [
  {
    eyebrow: 'Process',
    title: 'Naturally fermented',
    description:
      'Slow fermentation with wild yeast for deeper flavor, better texture, and a loaf that keeps well.',
  },
  {
    eyebrow: 'Ingredients',
    title: 'Real ingredients',
    description:
      'Made with organic flour, water, sourdough starter, organic honey, extra virgin olive oil, and Himalayan salt.',
  },
  {
    eyebrow: 'Bake',
    title: 'No preservatives',
    description:
      'Clean, simple bread baked in small batches in Cypress, Texas.',
  },
];

const productDetails = {
  name: 'Artisan Sourdough Bread',
  price: 'Only $12',
  weight: 'Net wt. 800 g',
  location: 'Handcrafted in Cypress, TX',
  note: 'Keep at room temperature for up to 2 days. Refrigerate or freeze for longer freshness.',
  ctaLabel: 'Order by Email',
  ctaHref: 'mailto:orders@mullirico.com',
  description:
    'Country-style sourdough with a caramel crust, balanced tang, and a soft everyday crumb made for toast, soup, and the center of the table.',
};

const ingredients = [
  { name: 'Organic all-purpose flour', icon: 'flour' },
  { name: 'Water', icon: 'water' },
  { name: 'Sourdough starter (organic flour, water)', icon: 'starter' },
  { name: 'Organic honey', icon: 'honey' },
  { name: 'Organic extra virgin olive oil', icon: 'oil' },
  { name: 'Himalayan salt', icon: 'salt' },
];

const galleryItems = [
  {
    src: breadOne,
    alt: 'Freshly baked artisan sourdough loaf with a deep caramel crust.',
    caption: 'Signature loaf',
  },
  {
    src: breadTwo,
    alt: 'Sourdough bread photographed in warm natural light on a rustic surface.',
    caption: 'Golden crust',
  },
  {
    src: breadThree,
    alt: 'Handcrafted MulliRico sourdough bread with artisanal scoring detail.',
    caption: 'Scored by hand',
  },
  {
    src: breadFour,
    alt: 'Premium small-batch sourdough loaf styled for bakery presentation.',
    caption: 'Small-batch baked',
  },
];

const orderSteps = [
  'Send us a message by email or Instagram DM.',
  'Tell us how many loaves you want and your preferred pickup day.',
  'We confirm availability and share the final pickup details.',
];

const contactItems = [
  {
    label: 'Orders',
    value: ordersEmail,
    href: `mailto:${ordersEmail}`,
  },
  {
    label: 'General questions',
    value: infoEmail,
    href: `mailto:${infoEmail}`,
  },
  {
    label: 'Instagram',
    value: '@mullirico',
    href: instagramUrl,
  },
  {
    label: 'Location',
    value: 'Cypress, TX',
  },
];

function App() {
  const [siteEntered, setSiteEntered] = useState(false);

  if (!siteEntered) {
    return <LandingSelector onEnterBread={() => setSiteEntered(true)} />;
  }

  return (
    <div className="site-shell">
      <Header navLinks={navLinks} ordersEmail={ordersEmail} />

      <main>
        <Hero
          heroImage={breadHero}
          accentImage={breadFour}
          ordersEmail={ordersEmail}
          instagramUrl={instagramUrl}
        />

        <section
          aria-labelledby="brand-promise-title"
          className="site-section px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="site-container">
            <div className="section-head">
              <div>
                <p className="mr-eyebrow">Why MulliRico</p>
                <h2 id="brand-promise-title" className="section-title">
                  Small-batch bread. Quietly made.
                </h2>
              </div>
              <p className="section-copy">
                One loaf, done well. Slow fermentation, honest ingredients, and
                the kind of crust that comes from patience — not shortcuts.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featureCards.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <ProductSection
          id="our-bread"
          product={productDetails}
          productImage={breadTwo}
          detailImage={breadThree}
        />

        <IngredientsSection id="ingredients" ingredients={ingredients} />

        <Gallery id="gallery" items={galleryItems} />

        <OrderSection
          orderSteps={orderSteps}
          ordersEmail={ordersEmail}
          instagramUrl={instagramUrl}
        />

        <ContactSection
          id="contact"
          infoEmail={infoEmail}
          ordersEmail={ordersEmail}
          instagramUrl={instagramUrl}
          contactItems={contactItems}
        />
      </main>

      <Footer
        instagramUrl={instagramUrl}
        infoEmail={infoEmail}
        ordersEmail={ordersEmail}
      />
    </div>
  );
}

export default App;
