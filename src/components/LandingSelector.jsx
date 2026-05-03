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
          type="button"
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
        <div className="landing-panel landing-panel--bakes">

          {/* State A — tap prompt (hidden once tapped) */}
          {!bakesToast && (
            <button
              className="landing-panel__button"
              type="button"
              onClick={() => setBakesToast(true)}
              aria-label="Mully Bakes — tap to see more"
            >
              <div className="landing-panel__content">
                <div className="landing-panel__text">
                  <p className="landing-panel__eyebrow landing-panel__eyebrow--quiet">
                    Custom bakes
                  </p>
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
          )}

          {/* State B — toast (replaces the button entirely, no overlap) */}
          {bakesToast && (
            <div className="bakes-toast bakes-toast--visible" aria-live="polite">
              <p className="bakes-toast__heading">Coming soon</p>
              <p className="bakes-toast__line">
                Mully Bakes is on its way — custom cakes designed for you.
                Follow us on Instagram for updates.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bakes-toast__link"
              >
                <InstagramIcon className="h-4 w-4" />
                Follow @mullirico
              </a>
              <button
                type="button"
                className="bakes-toast__dismiss"
                onClick={() => setBakesToast(false)}
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default LandingSelector;
