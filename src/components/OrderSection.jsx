import { InstagramIcon, MailIcon } from './Icons';

function OrderSection({ orderSteps, ordersEmail, instagramUrl }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-brown px-6 py-10 text-soft-white shadow-card sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold/80">How to Order</p>
            <p className="script-accent script-accent-light mt-4">Made with love. Baked for you.</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Direct, personal, and simple.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-soft-white/78">
              At this moment, orders are handled directly by email or Instagram DM. That
              keeps communication personal while the first version of the site stays static.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${ordersEmail}?subject=Sourdough%20Bread%20Order`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-gold/90"
              >
                <span className="button-icon-shell button-icon-shell-inverse" aria-hidden="true">
                  <MailIcon className="h-4 w-4" />
                </span>
                Email Orders
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-white/8"
              >
                <span className="button-icon-shell button-icon-shell-dark" aria-hidden="true">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                Message on Instagram
              </a>
            </div>
          </div>

          <ol className="grid gap-4">
            {orderSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-soft backdrop-blur-sm"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-soft-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-soft-white/82">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
