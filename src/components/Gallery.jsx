function Gallery({ id, items }) {
  return (
    <section
      id={id}
      className="site-section px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="site-container">
        <div className="section-head section-head--compact">
          <div>
            <p className="mr-eyebrow">Gallery</p>
            <h2 className="section-title">A closer look at the loaves.</h2>
          </div>
          <p className="section-copy">
            Warm crust, quiet crumb, and the details that make the first
            MulliRico loaf feel handmade rather than mass produced.
          </p>
        </div>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <figure
              key={`${item.caption}-${index}`}
              className={`gallery-card gallery-card--${index + 1}`}
            >
              <div className="gallery-card__frame">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery-card__image"
                />
              </div>
              <figcaption className="gallery-card__caption">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
