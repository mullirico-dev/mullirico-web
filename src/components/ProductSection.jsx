import StampSeal from './StampSeal';
import { ArrowRightIcon, MailIcon } from './Icons';

function ProductSection({ id, product, productImage, detailImage }) {
  return (
    <section
      id={id}
      className="site-section px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="site-container product-grid">
        <div className="product-visual">
          <figure className="photo-plate product-plate">
            <img
              src={productImage}
              alt="MulliRico signature sourdough loaf presented on a bakery table."
              className="product-photo"
            />
          </figure>
          <figure className="photo-plate product-detail">
            <img
              src={detailImage}
              alt="Close detail of the crust and scoring on MulliRico sourdough bread."
              className="product-detail__image"
            />
            <figcaption className="photo-caption">
              Scored by hand · baked to a deep crust
            </figcaption>
          </figure>
        </div>

        <div>
          <div className="section-head section-head--compact">
            <div>
              <p className="mr-eyebrow">Our bread</p>
              <h2 className="section-title">Our signature sourdough</h2>
            </div>
            <p className="section-copy">{product.description}</p>
          </div>

          <article className="mr-card product-card">
            <div className="product-card__top">
              <div>
                <p className="mr-eyebrow">Country loaf</p>
                <h3 className="product-card__name">{product.name}</h3>
              </div>
              <p className="product-card__price">{product.price}</p>
            </div>

            <div className="product-card__body">
              <div className="product-card__seal">
                <StampSeal className="product-card__seal-image" />
              </div>
              <div className="product-card__copy">
                <p className="product-meta">
                  <span>Net wt.</span>
                  {product.weight}
                </p>
                <p className="product-meta">
                  <span>Baked in</span>
                  {product.location}
                </p>
                <p className="product-note">{product.note}</p>
              </div>
            </div>

            <div className="product-card__actions">
              <a href={product.ctaHref} className="mr-button-primary">
                <MailIcon className="h-4 w-4" />
                {product.ctaLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
