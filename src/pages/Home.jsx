import wordmarkEspresso from '../assets/brand/wordmark-cafe-espresso.svg';
import BotanicalDivider from '../components/BotanicalDivider';
import CamelBand from '../components/CamelBand';
import Reveal from '../components/Reveal';
import { site, samplers, SITE_STATE } from '../content/site';
import cafeInterior from '../assets/cafe-interior.jpg';
import lattePhoto from '../assets/products/latte-cafe.avif';
import boulePhoto from '../assets/products/sourdough-boule.avif';
import bouleOverhead from '../assets/products/sourdough-overhead.avif';
import cinnamonRoll from '../assets/products/cinnamon-roll.avif';
import turkeySwiss from '../assets/products/turkey-swiss.avif';

// Small line-art icons in the brand's fine-line vocabulary.
function CupIcon() {
  return (
    <svg viewBox="0 0 48 48" className="craft-icon" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M10 18h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10V18Z" />
        <path d="M34 20h4a5 5 0 0 1 0 10h-4" />
        <path d="M17 12c0-2 2-2 2-4M24 12c0-2 2-2 2-4" />
      </g>
    </svg>
  );
}

function WheatIcon() {
  return (
    <svg viewBox="0 0 48 48" className="craft-icon" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M24 42V12" />
        <path d="M24 16c-5-2-7-6-7-10 4 1 6 5 7 10Z" />
        <path d="M24 16c5-2 7-6 7-10-4 1-6 5-7 10Z" />
        <path d="M24 25c-5-2-8-6-8-11 4 1 7 6 8 11Z" />
        <path d="M24 25c5-2 8-6 8-11-4 1-7 6-8 11Z" />
        <path d="M24 34c-5-2-8-6-8-11 4 1 7 6 8 11Z" />
        <path d="M24 34c5-2 8-6 8-11-4 1-7 6-8 11Z" />
      </g>
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="craft-icon" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M10 38h28v-8c0-3-2-5-5-5H15c-3 0-5 2-5 5v8Z" />
        <path d="M10 31c3 3 6 3 9 0 3 3 7 3 10 0 3 3 6 3 9 0" />
        <path d="M24 25v-5" />
        <path d="M24 16c-1.5-1.5-1.5-3.5 0-5 1.5 1.5 1.5 3.5 0 5Z" />
      </g>
    </svg>
  );
}

function Sampler({ items }) {
  return (
    <p className="sampler">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span aria-hidden="true"> · </span>}
          {item}
        </span>
      ))}
    </p>
  );
}

function Home() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        {/* The interior render, washed with cream so it reads as a
            watermark behind the lockup, never competing with it. */}
        <div className="hero__bg" aria-hidden="true">
          <img src={cafeInterior} alt="" width="1312" height="1199" />
        </div>
        <div className="hero__lockup">
          <h1 id="hero-title" className="hero__wordmark hero-rise">
            <img
              src={wordmarkEspresso}
              alt="MulliRico"
              width="640"
              height="157"
              fetchPriority="high"
            />
          </h1>
          <p className="hero__subline hero-rise hero-rise--2">
            <span className="hero__rule" aria-hidden="true" />
            Café and bakery
            <span className="hero__rule" aria-hidden="true" />
          </p>
          <p className="hero__est hero-rise hero-rise--2" aria-hidden="true">
            · Est. 2026 ·
          </p>
          <p className="hero__status hero-rise hero-rise--3">
            {SITE_STATE === 'preopening' ? site.openingText : 'Now open'} ·{' '}
            {site.address.area === 'Cypress area'
              ? 'Cypress area, Houston, TX'
              : `${site.address.city}, ${site.address.region}`}
          </p>
        </div>
        <BotanicalDivider className="hero__divider hero-rise hero-rise--4" />
        <a
          className="hero__scroll-cue hero-rise hero-rise--5"
          href="#coffee"
          aria-label="Scroll to see what we make"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 9l7 7 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      <CamelBand />

      <Reveal
        as="section"
        className="chapter chapter--split"
        id="coffee"
        aria-labelledby="coffee-title"
      >
        <div className="chapter__inner chapter__inner--split">
          <CupIcon />
          <h2 id="coffee-title" className="chapter__title rv rv-d1">
            Specialty coffee,
            <br />
            pulled with patience.
          </h2>
          <p className="chapter__copy rv rv-d2">
            Espresso on a La Marzocco Linea Classic — hot, iced, and everything
            in between. Matcha, chai, Thai iced coffee, and hot chocolate for
            everyone else at the table.
          </p>
          <div className="rv rv-d3">
            <Sampler items={samplers.coffee} />
          </div>
        </div>
        <div className="chapter__media rv-img">
          <img
            src={lattePhoto}
            alt="A latte with a heart poured in the foam, on a café table"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="chapter chapter--split"
        id="sourdough"
        aria-labelledby="sourdough-title"
      >
        <div className="chapter__media chapter__media--duo rv-img">
          <img
            src={boulePhoto}
            alt="A rustic sourdough boule with a deep scored crust in soft café light"
            width="800"
            height="600"
            loading="lazy"
          />
          <img
            className="chapter__media-secondary"
            src={turkeySwiss}
            alt="A turkey and swiss sandwich on toasted sourdough"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
        <div className="chapter__inner chapter__inner--split">
          <WheatIcon />
          <h2 id="sourdough-title" className="chapter__title rv rv-d1">
            It all began
            <br />
            with sourdough.
          </h2>
          <p className="chapter__copy rv rv-d2">
            Naturally fermented for 24 hours and baked in small batches. Four
            signature loaves, and sandwiches built on bread that came out of the
            oven the same morning.
          </p>
          <div className="rv rv-d3">
            <Sampler items={samplers.sourdough} />
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="chapter chapter--split"
        id="bakery"
        aria-labelledby="bakery-title"
      >
        <div className="chapter__inner chapter__inner--split">
          <CakeIcon />
          <h2 id="bakery-title" className="chapter__title rv rv-d1">
            Homemade,
            <br />
            from our kitchen.
          </h2>
          <p className="chapter__copy rv rv-d2">
            Cinnamon rolls, custard cream bread, banana bread, cookies — and a
            cake case of flan, tres leches, crepe cakes, and whole cakes
            designed and made to order in-house.
          </p>
          <div className="rv rv-d3">
            <Sampler items={samplers.bakery} />
          </div>
        </div>
        <div className="chapter__media rv-img">
          <img
            src={cinnamonRoll}
            alt="A glazed cinnamon roll photographed from above"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="chapter chapter--split chapter--story"
        id="story"
        aria-labelledby="story-title"
      >
        <div className="chapter__inner chapter__inner--split">
          <h2 id="story-title" className="chapter__title rv rv-d1">
            Family-run,
            <br />
            from scratch.
          </h2>
          <p className="chapter__copy rv rv-d2">
            MulliRico started in a home kitchen with flour, water, and a
            sourdough starter we still feed every day. She bakes and designs the
            cakes; he keeps everything else running. In November 2026 we open
            our own café in the Cypress area of Houston.
          </p>
          <p className="chapter__signoff rv rv-d3">Passionately crafted.</p>
        </div>
        <div className="chapter__media rv-img">
          <img
            src={bouleOverhead}
            alt="A flour-dusted sourdough boule seen from above"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </Reveal>

      <BotanicalDivider className="page-divider" />

      <Reveal
        as="section"
        className="visit"
        id="visit"
        aria-labelledby="visit-title"
      >
        <h2 id="visit-title" className="chapter__title rv rv-d1">
          Come find us.
        </h2>
        <p className="visit__address rv rv-d2">
          {site.address.street}
          <br />
          {site.address.city}, {site.address.region} {site.address.zip}
        </p>
        <p className="visit__hours rv rv-d2">
          {site.hours ?? 'Hours coming soon'}
        </p>
        <div className="visit__actions rv rv-d3">
          <a
            className="button button--primary"
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Directions in Google Maps
          </a>
          <a
            className="button button--quiet"
            href={site.appleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in Apple Maps
          </a>
        </div>
        <p className="visit__contact rv rv-d4">
          <a href={site.phoneHref}>{site.phone}</a>
          <span aria-hidden="true"> · </span>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram {site.instagram.handle}
          </a>
        </p>
        <figure className="visit__space rv-img">
          <img
            src={cafeInterior}
            alt="Rendering of the MulliRico café interior: a cream stone counter with a pastry case and espresso bar, an arched pass-through, pendant lights, and a tufted banquette with small round tables"
            width="1312"
            height="1199"
            loading="lazy"
          />
          <figcaption>
            An early look at the space we are building — see you in November.
          </figcaption>
        </figure>
      </Reveal>
    </>
  );
}

export default Home;
