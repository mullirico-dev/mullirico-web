/**
 * StampSeal — inline SVG so DM Sans + Allura (loaded by colors_and_type.css) render correctly.
 * Using <img src="*.svg"> blocks external font loads; inline SVG shares the document's fonts.
 */
function StampSeal({ className = '' }) {
  const ink = '#1A1714';

  const sans = "'DM Sans', sans-serif";
  const script = "'Allura', cursive";

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="MulliRico stamp seal"
    >
      <defs>
        <path id="topArc" d="M 30,120 A 90,90 0 0 1 210,120" fill="none" />
        <path id="botArc" d="M 36,130 A 84,84 0 0 0 204,130" fill="none" />
      </defs>

      {/* Double-ring border */}
      <circle
        cx="120"
        cy="120"
        r="112"
        fill="none"
        stroke={ink}
        strokeWidth="1.5"
      />
      <circle
        cx="120"
        cy="120"
        r="104"
        fill="none"
        stroke={ink}
        strokeWidth="0.6"
      />

      {/* Top arc label */}
      <text
        style={{
          fill: ink,
          fontFamily: sans,
          fontSize: '10px',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ARTISAN SOURDOUGH
        </textPath>
      </text>

      {/* Bottom arc label */}
      <text
        style={{
          fill: ink,
          fontFamily: sans,
          fontSize: '8px',
          fontWeight: '400',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        <textPath href="#botArc" startOffset="50%" textAnchor="middle">
          CYPRESS · TEXAS · EST 2024
        </textPath>
      </text>

      {/* Centre wordmark */}
      <text
        x="120"
        y="135"
        textAnchor="middle"
        style={{
          fill: ink,
          fontFamily: script,
          fontSize: '34px',
          fontWeight: '400',
        }}
      >
        MulliRico
      </text>

      {/* Hairline divider */}
      <line x1="60" y1="155" x2="180" y2="155" stroke={ink} strokeWidth="0.5" />

      {/* Tagline */}
      <text
        x="120"
        y="172"
        textAnchor="middle"
        style={{
          fill: ink,
          fontFamily: sans,
          fontSize: '8px',
          fontWeight: '400',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        SLOW · NATURAL · SMALL BATCH
      </text>
    </svg>
  );
}

export default StampSeal;
