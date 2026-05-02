import { useState } from 'react';
import LogoWordmark from './LogoWordmark';
import { ArrowRightIcon, MailIcon } from './Icons';

function Header({ navLinks, ordersEmail }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <a
          href="#home"
          className="site-header__brand"
          aria-label="MulliRico home"
        >
          <LogoWordmark className="site-header__wordmark" />
        </a>

        <nav className="site-nav hidden lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={`mailto:${ordersEmail}`} className="mr-button-primary">
            <MailIcon className="h-4 w-4" />
            Order by Email
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="site-menu-toggle lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav aria-label="Mobile" className="site-mobile-nav lg:hidden">
          <div className="site-mobile-nav__inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="site-mobile-nav__link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${ordersEmail}`}
              className="mr-button-primary mt-2"
              onClick={() => setIsOpen(false)}
            >
              <MailIcon className="h-4 w-4" />
              Order by Email
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
