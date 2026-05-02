/**
 * LogoWordmark — inline SVG so Allura (loaded by colors_and_type.css) renders correctly.
 * Using <img src="*.svg"> blocks external font loads; inline SVG shares the document's fonts.
 */
function LogoWordmark({ inverse = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={className}
      role="img"
      aria-label="MulliRico"
      style={{ overflow: 'visible' }}
    >
      <text
        x="300"
        y="140"
        textAnchor="middle"
        style={{
          fill: inverse ? '#F5F1E8' : '#1A1714',
          fontFamily: "'Allura', cursive",
          fontSize: '118px',
          fontWeight: '400',
        }}
      >
        MulliRico
      </text>
    </svg>
  );
}

export default LogoWordmark;
