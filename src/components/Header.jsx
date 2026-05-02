import { useState } from 'react';
import BrandMark from './BrandMark';
import { MailIcon } from './Icons';

function Header({ navLinks, ordersEmail }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-brown transition hover:text-gold">
          <BrandMark compact />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="story-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={`mailto:${ordersEmail}`} className="btn-primary">
            <span className="button-icon-shell" aria-hidden="true">
              <MailIcon className="h-4 w-4" />
            </span>
            Order by Email
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/10 bg-white text-brown shadow-soft lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-brown/10 bg-soft-white px-4 py-4 shadow-soft lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-brown transition hover:bg-parchment"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${ordersEmail}`}
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-olive px-5 py-3 text-sm font-semibold text-soft-white transition hover:bg-olive/90"
              onClick={() => setIsOpen(false)}
            >
              <span className="button-icon-shell button-icon-shell-inverse" aria-hidden="true">
                <MailIcon className="h-4 w-4" />
              </span>
              Order by Email
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
