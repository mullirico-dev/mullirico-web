import LogoWordmark from './LogoWordmark';

function Footer({ instagramUrl, infoEmail, ordersEmail }) {
  return (
    <footer className="site-footer-wrap px-4 py-10 sm:px-6 lg:px-8">
      <div className="site-footer">
        <div>
          <LogoWordmark className="site-footer__wordmark" />
          <p className="site-footer__tag">
            Artisan sourdough bread · Cypress, Texas
          </p>
        </div>

        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <a href={`mailto:${ordersEmail}`}>orders@mullirico.com</a>
            </li>
            <li>
              <a href={`mailto:${infoEmail}`}>info@mullirico.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h5>Social</h5>
          <ul>
            <li>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5>Availability</h5>
          <ul>
            <li>Weekly small-batch bakes</li>
            <li>Pickup by confirmation</li>
          </ul>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} MulliRico</span>
          <span>Made with care. Baked in Cypress, Texas.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
