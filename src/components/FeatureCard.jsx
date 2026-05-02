const icons = {
  ferment: (
    <path
      d="M12 3c2.5 3 3.75 5.64 3.75 7.92 0 3.13-2.25 5.58-5.25 5.58s-5.25-2.45-5.25-5.58C5.25 8.64 6.5 6 9 3m6 9.5c2.4 1.1 3.75 2.85 3.75 4.8 0 3.13-2.8 5.7-6.25 5.7-2.32 0-4.34-1.18-5.43-2.93"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  ingredients: (
    <path
      d="M5 6.75h14M5 12h14M5 17.25h8m6.5-10.5l1.5 1.5-4.5 4.5H15v-1.5l4.5-4.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'preservative-free': (
    <path
      d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Zm4-12-8 8m0-8 8 8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function FeatureCard({ icon, title, description }) {
  return (
    <article className="paper-panel rounded-[1.75rem] p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-olive/18 bg-olive/8 text-olive">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          {icons[icon]}
        </svg>
      </div>
      <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-olive">
        MulliRico Standard
      </p>
      <h3 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.02em] text-brown">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-brown/74">{description}</p>
    </article>
  );
}

export default FeatureCard;
