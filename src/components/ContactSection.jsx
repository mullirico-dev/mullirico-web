import StampSeal from './StampSeal';
import { ArrowRightIcon, ClockIcon, InstagramIcon, MailIcon, MapPinIcon } from './Icons';

function ContactSection({ id, infoEmail, ordersEmail, instagramUrl, contactItems }) {
  return (
    <section id={id} className="site-section px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="site-container">
        <div className="section-head">
          <div>
            <p className="mr-eyebrow">Contact</p>
            <h2 className="section-title">Reach MulliRico directly.</h2>
          </div>
          <p className="section-copy">
            For orders, pickup questions, or general bakery updates, use email or send a
            message on Instagram.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-list">
            {contactItems.map((item) => (
              <article key={item.label} className="mr-card contact-card">
                <p className="mr-eyebrow">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact-card__link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-card__link">{item.value}</p>
                )}
              </article>
            ))}
          </div>

          <aside className="mr-card contact-aside">
            <StampSeal className="contact-aside__seal" />
            <div className="contact-aside__meta">
              <div className="contact-aside__row">
                <ClockIcon className="h-4 w-4" />
                <p>Orders are confirmed directly as availability opens each week.</p>
              </div>
              <div className="contact-aside__row">
                <MapPinIcon className="h-4 w-4" />
                <p>Cypress, Texas pickup. Final details are shared after confirmation.</p>
              </div>
            </div>

            <div className="contact-aside__actions">
              <a href={`mailto:${ordersEmail}`} className="mr-button-primary">
                <MailIcon className="h-4 w-4" />
                Order by Email
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${infoEmail}`} className="mr-button-secondary">
                <MailIcon className="h-4 w-4" />
                General Questions
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mr-button-secondary"
              >
                <InstagramIcon className="h-4 w-4" />
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
