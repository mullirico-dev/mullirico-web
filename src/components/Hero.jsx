import LogoWordmark from './LogoWordmark';
import { ArrowRightIcon, InstagramIcon, MailIcon } from './Icons';

function Hero({ heroImage, accentImage, ordersEmail, instagramUrl }) {
  return (
    <section id="home" className="site-hero">
      <div className="site-container hero-grid">
        <div>
          <p className="mr-eyebrow">Cypress, Texas · Organic sourdough</p>
          <LogoWordmark className="hero-wordmark" />
          <h1 className="hero-title">
            Naturally fermented bread, baked slowly each week.
          </h1>
          <p className="hero-lede">
            Small-batch sourdough made with simple, real ingredients. No
            preservatives. No seed oils. No artificial additives. Orders are
            handled directly by email or Instagram.
          </p>

          <div className="hero-actions">
            <a href={`mailto:${ordersEmail}`} className="mr-button-primary">
              <MailIcon className="h-4 w-4" />
              Order by Email
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mr-button-secondary"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow on Instagram
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt className="mr-eyebrow">Bake rhythm</dt>
              <dd>Weekly small batches</dd>
            </div>
            <div>
              <dt className="mr-eyebrow">Signature loaf</dt>
              <dd>800 g · $12</dd>
            </div>
            <div>
              <dt className="mr-eyebrow">Ordering</dt>
              <dd>Email or Instagram</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <figure className="photo-plate hero-plate">
            <img
              src={heroImage}
              alt="MulliRico artisan sourdough bread styled for the hero section."
              className="hero-photo"
            />
            <div className="hero-watermark">
              <LogoWordmark inverse className="hero-watermark__image" alt="" />
            </div>
            <figcaption className="photo-caption">
              Country loaf · handcrafted in Cypress, TX
            </figcaption>
          </figure>

          <figure className="photo-plate hero-detail">
            <img
              src={accentImage}
              alt="Close detail of crust and scoring on a MulliRico sourdough loaf."
              className="hero-detail__image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
