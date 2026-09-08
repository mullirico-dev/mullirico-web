import { useEffect, useState } from 'react';
import wordmarkEspresso from '../assets/brand/wordmark-cafe-espresso.svg';

// Translucent chrome that materializes once the hero has scrolled by,
// like content sliding under a toolbar. It carries no tabs — just the
// wordmark (back to top) and one anchor into the visit section.
function FloatingHeader() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShown(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`floating-header${shown ? ' floating-header--shown' : ''}`}
      aria-hidden={shown ? undefined : 'true'}
    >
      <a
        className="floating-header__brand"
        href="#top"
        aria-label="Back to top"
        tabIndex={shown ? 0 : -1}
      >
        <img
          src={wordmarkEspresso}
          alt="MulliRico"
          width="131"
          height="32"
          loading="lazy"
        />
      </a>
      <a
        className="floating-header__cta"
        href="#visit"
        tabIndex={shown ? 0 : -1}
      >
        Plan a visit
      </a>
    </header>
  );
}

export default FloatingHeader;
