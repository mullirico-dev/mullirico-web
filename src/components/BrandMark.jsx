function BrandMark({ compact = false }) {
  return (
    <div className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`}>
      <div className="brand-mark-badge" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="brand-mark-icon"
          aria-hidden="true"
        >
          {/* Stem */}
          <path
            d="M12 21V14"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Top grain */}
          <path
            d="M12 14C11.5 12 10.8 9.5 12 7C13.2 9.5 12.5 12 12 14Z"
            fill="currentColor"
          />
          {/* Upper left grain */}
          <path
            d="M12 14.8C10.2 13.6 8 13.5 7.5 15C9.2 15.4 10.8 15 12 14.8Z"
            fill="currentColor"
          />
          {/* Upper right grain */}
          <path
            d="M12 14.8C13.8 13.6 16 13.5 16.5 15C14.8 15.4 13.2 15 12 14.8Z"
            fill="currentColor"
          />
          {/* Lower left grain */}
          <path
            d="M12 17.5C10.2 16.3 8 16.2 7.5 17.7C9.2 18.1 10.8 17.7 12 17.5Z"
            fill="currentColor"
          />
          {/* Lower right grain */}
          <path
            d="M12 17.5C13.8 16.3 16 16.2 16.5 17.7C14.8 18.1 13.2 17.7 12 17.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div>
        <p className="brand-wordmark">MulliRico</p>
        <p className="brand-subtitle">Handcrafted in Cypress, TX</p>
      </div>
    </div>
  );
}

export default BrandMark;
