import { site } from '../content/site';

// The signature camel bar from our cups and bags. Used exactly once per
// page flow, as a structural break — not repeated as decoration.
function CamelBand() {
  return (
    <aside className="camel-band" aria-label="Our promise">
      <p>{site.tagline}</p>
    </aside>
  );
}

export default CamelBand;
