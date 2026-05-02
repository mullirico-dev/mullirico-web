import { IngredientIcon } from './Icons';

function IngredientsSection({ id, ingredients }) {
  return (
    <section id={id} className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-0 h-56 -translate-y-1/2 bg-olive/6 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-kicker">Ingredients</p>
          <h2 className="section-title mt-4">Simple, clear, and carefully chosen.</h2>
          <p className="section-copy mt-4">
            Every loaf is made in small batches with simple, honest ingredients. We
            speak carefully about what goes into each bake and avoid overstated claims.
          </p>
          <p className="mt-6 rounded-2xl border border-olive/15 bg-white/70 px-5 py-4 text-sm leading-7 text-brown/75 shadow-soft">
            Made in small batches with simple, honest ingredients.
          </p>
        </div>

        <div className="paper-panel rounded-[2rem] p-7 shadow-card sm:p-9">
          <ul className="grid gap-4 sm:grid-cols-2">
            {ingredients.map((ingredient) => (
              <li
                key={ingredient.name}
                className="rounded-[1.25rem] border border-brown/8 bg-white/75 px-5 py-4 text-base leading-7 text-brown shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="ingredient-icon-shell" aria-hidden="true">
                    <IngredientIcon icon={ingredient.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-olive">
                      Ingredient
                    </p>
                    <p className="mt-2 text-base leading-7 text-brown">{ingredient.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
