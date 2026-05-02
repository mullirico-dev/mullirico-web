import { IngredientIcon } from './Icons';

function IngredientsSection({ id, ingredients }) {
  return (
    <section id={id} className="site-section px-4 py-16 sm:px-6 lg:px-8">
      <div className="site-container ingredients-grid">
        <div>
          <p className="mr-eyebrow">Ingredients</p>
          <h2 className="section-title">Simple, clear, and carefully chosen.</h2>
          <p className="section-copy">
            Every loaf is made in small batches with simple, honest ingredients. We
            speak carefully about what goes into each bake and avoid overstated claims.
          </p>
          <p className="ingredients-note">Made in small batches with simple, honest ingredients.</p>
        </div>

        <div className="ingredients-list">
          {ingredients.map((ingredient) => (
            <article key={ingredient.name} className="mr-card ingredient-card">
              <div className="ingredient-card__icon">
                <IngredientIcon icon={ingredient.icon} className="h-5 w-5" />
              </div>
              <div>
                <p className="mr-eyebrow">Ingredient</p>
                <p className="ingredient-card__name">{ingredient.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
