import { useEffect, useRef } from 'react';

// Scroll-driven reveal. The observer toggles `is-in` both ways, so
// chapters play as you scroll down and again when you scroll back up.
// The styles that hide un-revealed content are gated behind `html.js`
// (set inline in index.html), so prerendered HTML stays fully visible
// when JavaScript is unavailable — and the estate-wide reduced-motion
// block collapses the transitions to an instant final state.
function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('is-in', entry.isIntersecting);
      },
      { rootMargin: '-10% 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
