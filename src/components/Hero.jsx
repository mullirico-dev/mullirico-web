import { InstagramIcon, MailIcon } from './Icons';

function Hero({ heroImage, accentImage, ordersEmail, instagramUrl }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="hero-glow absolute inset-x-0 top-0 h-[36rem]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <p className="script-accent">Organic artisan bakery</p>
          <p className="section-kicker">Handcrafted in Cypress, TX</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-brown sm:text-6xl lg:text-7xl">
            Organic Sourdough Bread, Baked Slowly and Made with Love
          </h1>
          <div className="label-rule mt-6">
            <span>Made with organic ingredients</span>
            <span>Naturally fermented</span>
            <span>Small-batch baked</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brown/80 sm:text-xl">
            Naturally fermented sourdough made with simple, real ingredients, no
            preservatives, no seed oils, and no artificial additives.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={`mailto:${ordersEmail}`} className="btn-primary text-center">
              <span className="button-icon-shell" aria-hidden="true">
                <MailIcon className="h-4 w-4" />
              </span>
              Order Now
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-center"
            >
              <span className="button-icon-shell" aria-hidden="true">
                <InstagramIcon className="h-4 w-4" />
              </span>
              Follow on Instagram
            </a>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="stat-chip">
              <dt className="text-xs uppercase tracking-[0.3em] text-brown/55">Small-batch</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">Fresh loaves</dd>
            </div>
            <div className="stat-chip">
              <dt className="text-xs uppercase tracking-[0.3em] text-brown/55">Signature size</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">800 g</dd>
            </div>
            <div className="stat-chip">
              <dt className="text-xs uppercase tracking-[0.3em] text-brown/55">Ordering</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">Email or IG</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full border border-white/70 bg-white/50 blur-3xl lg:block" aria-hidden="true" />
          <div className="price-medal absolute -right-3 -top-3 z-20 sm:right-2 sm:top-2">
            <span className="price-medal-label">Only</span>
            <strong>$12</strong>
          </div>
          <div className="paper-panel relative overflow-hidden rounded-[2rem] p-3 shadow-card">
            <img
              src={heroImage}
              alt="MulliRico artisan sourdough bread styled for the bakery hero section."
              className="h-[27rem] w-full rounded-[1.5rem] object-cover object-center sm:h-[34rem]"
            />
            <div className="vintage-outline pointer-events-none absolute inset-6 rounded-[1.5rem]" aria-hidden="true" />
            <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] bg-soft-white/92 px-5 py-4 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Premium artisan loaf</p>
              <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-brown sm:text-xl">
                Naturally fermented, richly crusted, patiently baked.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 hidden max-w-[14rem] rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-soft md:block">
            <img
              src={accentImage}
              alt="Close-up detail of a MulliRico sourdough loaf."
              className="h-40 w-full rounded-[1.25rem] object-cover"
            />
            <p className="mt-3 text-sm leading-6 text-brown/70">
              Rustic crust, warm crumb, and a bakery feel built around honest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
