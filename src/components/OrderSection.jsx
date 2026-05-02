import { ArrowRightIcon, CheckIcon, InstagramIcon, MailIcon } from './Icons';

function OrderSection({ orderSteps, ordersEmail, instagramUrl }) {
  return (
    <section className="site-section px-4 py-16 sm:px-6 lg:px-8">
      <div className="site-container">
        <div className="section-head">
          <div>
            <p className="mr-eyebrow">How to order</p>
            <h2 className="section-title">Direct, personal, and simple.</h2>
          </div>
          <p className="section-copy">
            Orders are still handled directly by email or Instagram DM. That
            keeps the first site release simple while making pickup details easy
            to confirm.
          </p>
        </div>

        <div className="order-grid">
          <div className="order-actions">
            <a
              href={`mailto:${ordersEmail}?subject=Sourdough%20Bread%20Order`}
              className="mr-button-primary"
            >
              <MailIcon className="h-4 w-4" />
              Email orders
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mr-button-secondary"
            >
              <InstagramIcon className="h-4 w-4" />
              Message on Instagram
            </a>
          </div>

          <ol className="order-steps">
            {orderSteps.map((step, index) => (
              <li key={step} className="mr-card order-step">
                <span className="order-step__number">{index + 1}</span>
                <div>
                  <p className="mr-eyebrow">Step {index + 1}</p>
                  <p className="order-step__copy">{step}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="mr-card order-note">
            <div className="order-note__row">
              <CheckIcon className="h-4 w-4" />
              <p>Pickup details are confirmed directly after each request.</p>
            </div>
            <div className="order-note__row">
              <CheckIcon className="h-4 w-4" />
              <p>
                Best for small-batch releases, repeat buyers, and weekly
                availability updates.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
