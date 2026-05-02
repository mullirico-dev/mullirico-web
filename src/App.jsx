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
import crumbImage from './assets/crumb.jpg';
import labelImage from './assets/label.jpg';

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
    icon: 'ferment',
    title: 'Naturally Fermented',
    description:
      'Slow fermentation with wild yeast for deeper flavor and better texture.',
  },
  {
    icon: 'ingredients',
    title: 'Real Ingredients',
    description:
      'Made with organic flour, water, sourdough starter, organic honey, extra virgin olive oil, and Himalayan salt.',
  },
  {
    icon: 'preservative-free',
    title: 'No Preservatives',
    description: 'Clean, simple bread baked in small batches.',
  },
];

const productDetails = {
  name: 'Organic Sourdough Bread',
  price: 'Only $12',
  weight: 'Net wt. 800 g',
  location: 'Handcrafted in Cypress, TX',
  note: 'Keep at room temperature for up to 2 days. Refrigerate or freeze for longer freshness.',
  ctaLabel: 'Order by Email',
  ctaHref: 'mailto:orders@mullirico.com',
  description:
    'A golden-crusted, naturally leavened loaf with a tender crumb and balanced tang, shaped for everyday tables and slow weekend breakfasts.',
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
  {
    src: crumbImage,
    alt: 'Interior crumb texture of MulliRico sourdough bread.',
    caption: 'Open crumb',
  },
  {
    src: labelImage,
    alt: 'MulliRico bread packaging and label-inspired bakery branding.',
    caption: 'Label details',
  },
];

const orderSteps = [
  'Send us a message by email or Instagram DM.',
  'Tell us the quantity you want and your preferred pickup date.',
  'We confirm availability and share pickup details.',
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
  return (
    <div className="min-h-screen bg-cream text-brown">
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
          className="section-shell px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-2xl">
                <p className="section-kicker">Why MulliRico</p>
                <h2 id="brand-promise-title" className="section-title">
                  Honest bread, shaped with patience.
                </h2>
                <p className="section-copy">
                  The first MulliRico collection centers on one loaf done well: warm flavor,
                  clean ingredients, and the kind of texture that rewards slow fermentation.
                </p>
              </div>

              <aside className="paper-panel rounded-[1.75rem] p-6 shadow-soft">
                <p className="script-accent">Baked slowly.</p>
                <div className="label-rule mt-5">
                  <span>Organic ingredients</span>
                  <span>Small-batch loaves</span>
                  <span>Cypress, TX</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-brown/72">
                  MulliRico is designed to feel calm, premium, and bread-first, with the
                  warmth of a vintage bakery label and a more refined modern layout.
                </p>
              </aside>
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
