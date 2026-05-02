import { InstagramIcon, MailIcon } from './Icons';

function ContactSection({ id, infoEmail, ordersEmail, instagramUrl, contactItems }) {
  return (
    <section id={id} className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">Reach MulliRico in the way that fits best.</h2>
          <p className="section-copy mt-4">
            For orders, pickup questions, or general bakery updates, use email or send a
            message on Instagram.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="paper-panel rounded-[2rem] p-7 shadow-card sm:p-8">
            <dl className="grid gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-brown/8 bg-white/70 px-5 py-5 shadow-soft"
                >
                  <dt className="text-xs uppercase tracking-[0.35em] text-brown/55">{item.label}</dt>
                  <dd className="mt-2 text-lg text-brown">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="story-link text-base sm:text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="rounded-[2rem] border border-olive/12 bg-olive/8 p-7 shadow-soft sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Quick links</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-brown">
              Orders and questions stay direct for now.
            </h3>
            <p className="mt-4 text-base leading-8 text-brown/76">
              This first site release is intentionally simple: no forms, no checkout, and no
              account flow. It keeps the experience focused on the bread and the story.
            </p>
            <div className="mt-8 grid gap-4">
              <a href={`mailto:${ordersEmail}`} className="btn-primary text-center">
                <span className="button-icon-shell" aria-hidden="true">
                  <MailIcon className="h-4 w-4" />
                </span>
                Order by Email
              </a>
              <a href={`mailto:${infoEmail}`} className="btn-secondary text-center">
                <span className="button-icon-shell" aria-hidden="true">
                  <MailIcon className="h-4 w-4" />
                </span>
                General Questions
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-olive/20 bg-white/70 px-5 py-3 text-sm font-semibold text-brown transition hover:border-olive/40 hover:bg-white"
              >
                <span className="button-icon-shell" aria-hidden="true">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                Open Instagram
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
