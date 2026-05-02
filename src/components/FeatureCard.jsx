function FeatureCard({ eyebrow, title, description }) {
  return (
    <article className="mr-card feature-card">
      <p className="mr-eyebrow">{eyebrow}</p>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__copy">{description}</p>
    </article>
  );
}

export default FeatureCard;
