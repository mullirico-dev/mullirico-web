function Gallery({ id, items }) {
  return (
    <section id={id} className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title mt-4">A closer look at the loaves.</h2>
          <p className="section-copy mt-4">
            Every loaf is scored by hand and baked in small batches. Here is a closer look
            at the crust, crumb, and care that go into each bake.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={`${item.caption}-${index}`}
              className={`group overflow-hidden rounded-[1.75rem] border border-brown/8 bg-white/70 p-3 shadow-soft ${
                index === 0 || index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-72 w-full rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-[1.02] sm:h-80"
              />
              <figcaption className="px-2 pb-1 pt-4 text-sm uppercase tracking-[0.28em] text-brown/58">
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
