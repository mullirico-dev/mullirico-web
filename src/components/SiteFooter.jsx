import wordmarkCream from '../assets/brand/wordmark-cafe-cream.svg';
import { site } from '../content/site';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src={wordmarkCream}
            alt="MulliRico"
            width="204"
            height="50"
            loading="lazy"
          />
          <p className="site-footer__descriptor">{site.descriptor}</p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h2 className="site-footer__heading">Find us</h2>
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.zip}
            </p>
            <p className="site-footer__muted">Hours coming soon</p>
          </div>
          <div>
            <h2 className="site-footer__heading">Say hello</h2>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram {site.instagram.handle}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="site-footer__legal">
        Café and bakery · Est. 2026 · {site.openingText}
      </p>
    </footer>
  );
}

export default SiteFooter;
