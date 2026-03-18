import React, { useState, useEffect } from "react";
import { recipes, categories } from "./data/recipes";
import FoodIllustration from "./components/FoodIllustration";
import CookingGuide from "./components/CookingGuide";

function App() {
  const [page, setPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedSteps, setCheckedSteps] = useState({});

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setPage("recipe");
    setCheckedSteps({});
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setPage("home");
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleStep = (index) => {
    setCheckedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const checkedCount = Object.values(checkedSteps).filter(Boolean).length;

  if (page === "recipe" && selectedRecipe) {
    return (
        <RecipePage
            recipe={selectedRecipe}
            onBack={goHome}
            checkedSteps={checkedSteps}
            toggleStep={toggleStep}
            checkedCount={checkedCount}
            onOpenRecipe={openRecipe}
        />
    );
  }

  return (
      <div className="app">
        {/* Hero Banner */}
        <header className="hero-banner">
          <div className="hero-bg-pattern"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-emoji">👨‍🍳</span>
              Простые Рецепты
            </h1>
            <p className="hero-subtitle">20 рецептов на каждый день — от яиц до борща</p>
          </div>
        </header>

        <main className="main-content">
          {/* Search */}
          <div className="search-container">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                  type="text"
                  placeholder="Найти рецепт..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
              />
              {searchQuery && (
                  <button className="search-clear" onClick={() => setSearchQuery("")}>✕</button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="categories-container">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    className={`category-btn ${activeCategory === cat.id ? "category-active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="category-emoji">{cat.emoji}</span>
                  <span className="category-name">{cat.name}</span>
                </button>
            ))}
          </div>

          {/* Recipe Count */}
          <div className="recipe-count">
            {filteredRecipes.length === 0
                ? "Ничего не найдено 😔"
                : `${filteredRecipes.length} ${getRecipeWord(filteredRecipes.length)}`}
          </div>

          {/* Recipe Grid */}
          <div className="recipe-grid">
            {filteredRecipes.map((recipe, index) => (
                <div
                    key={recipe.id}
                    className="recipe-card"
                    onClick={() => openRecipe(recipe)}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      "--card-color-1": recipe.colors[0],
                      "--card-color-2": recipe.colors[1]
                    }}
                >
                  <div className="card-illustration">
                    <FoodIllustration recipeId={recipe.id} className="card-svg" />
                    <div className="card-badge">{recipe.emoji}</div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{recipe.name}</h3>
                    <p className="card-description">{recipe.description}</p>
                    <div className="card-meta">
                      <span className="card-meta-item">⏱ {recipe.time}</span>
                      <span className="card-meta-item">👥 {recipe.servings}</span>
                      <span className={`card-difficulty card-difficulty-${getDifficultyClass(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </main>

        <footer className="footer">
          <p>👨‍🍳 Простые Рецепты — готовьте с удовольствием!</p>
        </footer>
      </div>
  );
}

function RecipePage({ recipe, onBack, checkedSteps, toggleStep, checkedCount, onOpenRecipe }) {
  const [activeTab, setActiveTab] = useState("recipe");
  const progress = recipe.steps.length > 0
      ? Math.round((checkedCount / recipe.steps.length) * 100)
      : 0;

  const relatedRecipes = recipes
      .filter((r) => r.category === recipe.category && r.id !== recipe.id)
      .slice(0, 3);

  return (
      <div className="app">
        {/* Hero */}
        <div className="recipe-hero" style={{
          "--hero-color-1": recipe.colors[0],
          "--hero-color-2": recipe.colors[1]
        }}>
          <button className="back-btn" onClick={onBack}>← Назад</button>
          <div className="recipe-hero-illustration">
            <FoodIllustration recipeId={recipe.id} className="hero-svg" />
          </div>
          <div className="recipe-hero-info">
            <h1 className="recipe-hero-title">{recipe.emoji} {recipe.name}</h1>
            <p className="recipe-hero-desc">{recipe.description}</p>
            <div className="recipe-hero-meta">
              <span>⏱ {recipe.time}</span>
              <span>👥 {recipe.servings} порц.</span>
              <span className={`hero-difficulty hero-difficulty-${getDifficultyClass(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav">
          <button
              className={`tab-btn ${activeTab === "recipe" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("recipe")}
          >
            📋 Рецепт
          </button>
          <button
              className={`tab-btn ${activeTab === "guide" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("guide")}
          >
            👨‍🍳 Пошаговый гид
          </button>
        </div>

        <main className="recipe-main">
          {activeTab === "recipe" ? (
              <>
                {/* Ingredients */}
                <section className="recipe-section">
                  <h2 className="section-title">🥘 Ингредиенты</h2>
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="ingredient-item">
                          <span className="ingredient-dot">●</span>
                          {ing}
                        </li>
                    ))}
                  </ul>
                </section>

                {/* Steps */}
                <section className="recipe-section">
                  <h2 className="section-title">📝 Приготовление</h2>

                  {/* Progress */}
                  <div className="steps-progress">
                    <div className="steps-progress-bar">
                      <div className="steps-progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="steps-progress-text">{progress}% готово</span>
                  </div>

                  <div className="steps-list">
                    {recipe.steps.map((step, i) => (
                        <div
                            key={i}
                            className={`step-item ${checkedSteps[i] ? "step-done" : ""}`}
                            onClick={() => toggleStep(i)}
                        >
                          <div className={`step-checkbox ${checkedSteps[i] ? "step-checked" : ""}`}>
                            {checkedSteps[i] ? "✓" : i + 1}
                          </div>
                          <p className="step-text">{step}</p>
                        </div>
                    ))}
                  </div>
                </section>

                {/* Tips */}
                {recipe.tips && recipe.tips.length > 0 && (
                    <section className="recipe-section tips-section">
                      <h2 className="section-title">💡 Полезные советы</h2>
                      <div className="tips-list">
                        {recipe.tips.map((tip, i) => (
                            <div key={i} className="tip-item">
                              <span className="tip-icon">💡</span>
                              <p>{tip}</p>
                            </div>
                        ))}
                      </div>
                    </section>
                )}
              </>
          ) : (
              /* Cooking Guide Tab */
              <section className="recipe-section">
                <CookingGuide steps={recipe.guideSteps} recipeName={recipe.name} />
              </section>
          )}

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
              <section className="recipe-section">
                <h2 className="section-title">📌 Ещё из этой категории</h2>
                <div className="related-grid">
                  {relatedRecipes.map((r) => (
                      <div
                          key={r.id}
                          className="related-card"
                          onClick={() => onOpenRecipe(r)}
                          style={{
                            "--card-color-1": r.colors[0],
                            "--card-color-2": r.colors[1]
                          }}
                      >
                        <div className="related-illustration">
                          <FoodIllustration recipeId={r.id} className="related-svg" />
                        </div>
                        <div className="related-info">
                          <span className="related-emoji">{r.emoji}</span>
                          <h4>{r.name}</h4>
                          <span className="related-time">⏱ {r.time}</span>
                        </div>
                      </div>
                  ))}
                </div>
              </section>
          )}
        </main>

        <footer className="footer">
          <p>👨‍🍳 Простые Рецепты — готовьте с удовольствием!</p>
        </footer>
      </div>
  );
}

function getDifficultyClass(difficulty) {
  if (difficulty === "Легко") return "easy";
  if (difficulty === "Средне") return "medium";
  return "hard";
}

function getRecipeWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) return "рецепт";
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return "рецепта";
  return "рецептов";
}

export default App;
