import BrandMark from './BrandMark';
import { MailIcon } from './Icons';

function ProductSection({ id, product, productImage, detailImage }) {
  return (
    <section id={id} className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="paper-panel overflow-hidden rounded-[2rem] p-3 shadow-card">
            <img
              src={productImage}
              alt="MulliRico signature sourdough loaf presented on a bakery table."
              className="h-[29rem] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-6 hidden w-48 rounded-[1.5rem] border border-white/80 bg-white/90 p-3 shadow-soft sm:block">
            <img
              src={detailImage}
              alt="Close detail of the crust and scoring on MulliRico sourdough bread."
              className="h-32 w-full rounded-[1rem] object-cover"
            />
            <p className="mt-3 text-sm text-brown/70">Rustic scoring and golden bake finish.</p>
          </div>
        </div>

        <div>
          <p className="section-kicker">Our Bread</p>
          <h2 className="section-title mt-4">Our Signature Sourdough</h2>
          <p className="section-copy mt-4 max-w-2xl">{product.description}</p>

          <article className="vintage-card mt-8 overflow-hidden rounded-[2rem]">
            <div className="border-b border-brown/10 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="script-accent script-accent-sm">Organic</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-olive">Signature product</p>
                  <h3 className="mt-2 font-display text-4xl font-semibold text-brown">
                    {product.name}
                  </h3>
                </div>
                <span className="inline-flex self-start rounded-full bg-gold px-4 py-2 text-sm font-semibold text-soft-white shadow-soft">
                  {product.price}
                </span>
              </div>
            </div>

            <div className="grid gap-6 px-6 py-6 sm:px-8 md:grid-cols-2">
              <div className="space-y-4 text-brown/78">
                <BrandMark compact />
                <p>
                  <span className="product-label">Net weight</span>
                  <br />
                  {product.weight}
                </p>
                <p>
                  <span className="product-label">Baked locally</span>
                  <br />
                  {product.location}
                </p>
              </div>
              <div className="space-y-4 text-brown/78">
                <p>
                  <span className="product-label">Freshness note</span>
                  <br />
                  {product.note}
                </p>
              </div>
            </div>

            <div className="olive-ribbon px-6 py-3 text-center text-sm sm:px-8">
              Naturally fermented • Naturally leavened with wild yeast • No preservatives
            </div>

            <div className="border-t border-brown/10 bg-white/60 px-6 py-5 sm:px-8">
              <a href={product.ctaHref} className="btn-primary">
                <span className="button-icon-shell" aria-hidden="true">
                  <MailIcon className="h-4 w-4" />
                </span>
                {product.ctaLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
