import { useState } from 'react';
import LogoWordmark from './LogoWordmark';
import { ArrowRightIcon, InstagramIcon } from './Icons';
import breadHero from '../assets/sourdough-hero.jpg';

const instagramUrl =
  'https://www.instagram.com/mullirico?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

function LandingSelector({ onEnterBread }) {
  const [isExiting, setIsExiting] = useState(false);
  const [bakesToast, setBakesToast] = useState(false);

  function handleBreadClick() {
    setIsExiting(true);
    setTimeout(onEnterBread, 420);
  }

  function handleBakesClick() {
    setBakesToast(true);
  }

  return (
    <div
      className={`landing${isExiting ? ' landing--exiting' : ''}`}
      aria-label="MulliRico — choose a section"
    >
      {/* Shared header */}
      <header className="landing-header">
        <LogoWordmark className="landing-wordmark" />
        <p className="landing-location">Handcrafted in Cypress, Texas</p>
      </header>

      <div className="landing-panels">

        {/* ── Left: Sourdough Bread ── */}
        <button
          className="landing-panel landing-panel--bread"
          onClick={handleBreadClick}
          aria-label="Enter Sourdough Bread section"
        >
          <img
            src={breadHero}
            alt=""
            className="landing-panel__photo"
            aria-hidden="true"
          />
          <div className="landing-panel__content">
            <div className="landing-panel__text">
              <p className="landing-panel__eyebrow">Artisan sourdough</p>
              <h2 className="landing-panel__title">
                Sourdough<br />Bread
              </h2>
              <hr className="landing-panel__rule" aria-hidden="true" />
              <p className="landing-panel__sub">800 g · $12 · Small-batch</p>
            </div>
            <span className="landing-panel__cta">
              Explore
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </button>

        {/* ── Divider ── */}
        <div className="landing-divider" aria-hidden="true" />

        {/* ── Right: Mully Bakes ── */}
        <button
          className="landing-panel landing-panel--bakes"
          onClick={handleBakesClick}
          aria-label="Mully Bakes — coming soon"
        >
          <div className="landing-panel__content">
            {/* Toast notification */}
            <div className={`bakes-toast${bakesToast ? ' bakes-toast--visible' : ''}`} aria-live="polite">
              <p className="bakes-toast__line">Coming soon.</p>
              <p className="bakes-toast__line">Follow us for updates.</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bakes-toast__link"
                onClick={(e) => e.stopPropagation()}
              >
                <InstagramIcon className="h-4 w-4" />
                @mullirico
              </a>
            </div>

            <div className="landing-panel__text">
              <p className="landing-panel__eyebrow landing-panel__eyebrow--quiet">Custom bakes</p>
              <h2 className="landing-panel__title landing-panel__title--quiet">
                Mully<br />Bakes
              </h2>
              <hr className="landing-panel__rule landing-panel__rule--quiet" aria-hidden="true" />
              <p className="landing-panel__sub landing-panel__sub--quiet">
                Cakes designed for you
              </p>
            </div>

            <p className="landing-panel__soon">Coming soon</p>
          </div>
        </button>

      </div>
    </div>
  );
}

export default LandingSelector;
