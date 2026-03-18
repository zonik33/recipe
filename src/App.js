import React, { useState, useEffect } from "react";
import { recipes, categories } from "./data/recipes";

function RecipeCard({ recipe, index, onClick }) {
  const categoryObj = categories.find((c) => c.id === recipe.category);
  const difficultyClass =
      recipe.difficulty === "Легко"
          ? "difficulty-easy"
          : recipe.difficulty === "Средне"
              ? "difficulty-medium"
              : "difficulty-hard";

  return (
      <div
          className="recipe-card"
          style={{ animationDelay: `${index * 0.08}s` }}
          onClick={() => onClick(recipe)}
      >
        <div className="recipe-card-image" style={{ background: recipe.gradient }}>
          <span>{recipe.emoji}</span>
          <div className="recipe-card-time">⏱ {recipe.time}</div>
        </div>
        <div className="recipe-card-body">
        <span
            className="recipe-card-category"
            style={{
              background: recipe.gradient,
              color: "white",
            }}
        >
          {categoryObj ? categoryObj.emoji + " " + categoryObj.name : recipe.category}
        </span>
          <h3 className="recipe-card-title">{recipe.title}</h3>
          <p className="recipe-card-desc">{recipe.description}</p>
          <div className="recipe-card-footer">
          <span className={"recipe-card-difficulty " + difficultyClass}>
            {recipe.difficulty}
          </span>
            <span className="recipe-card-servings">👤 {recipe.servings}</span>
          </div>
        </div>
      </div>
  );
}

function RecipePage({ recipe, onBack, onOpenRecipe }) {
  const [completedSteps, setCompletedSteps] = useState([]);
  const categoryObj = categories.find((c) => c.id === recipe.category);
  const relatedRecipes = recipes.filter(
      (r) => r.category === recipe.category && r.id !== recipe.id
  );
  const progress =
      recipe.steps.length > 0
          ? Math.round((completedSteps.length / recipe.steps.length) * 100)
          : 0;

  useEffect(() => {
    setCompletedSteps([]);
    window.scrollTo(0, 0);
  }, [recipe.id]);

  function toggleStep(idx) {
    setCompletedSteps(function (prev) {
      if (prev.includes(idx)) {
        return prev.filter(function (i) {
          return i !== idx;
        });
      } else {
        return prev.concat([idx]);
      }
    });
  }

  return (
      <div className="recipe-page">
        {/* Hero */}
        <div className="recipe-hero" style={{ background: recipe.gradient }}>
          <div className="recipe-hero-emoji">{recipe.emoji}</div>
          <div className="recipe-hero-info">
          <span className="recipe-hero-category">
            {categoryObj ? categoryObj.emoji + " " + categoryObj.name : ""}
          </span>
            <h1 className="recipe-hero-title">{recipe.title}</h1>
            <p className="recipe-hero-desc">{recipe.description}</p>
            <div className="recipe-meta">
              <div className="recipe-meta-item">
                <div className="recipe-meta-value">⏱ {recipe.time}</div>
                <div className="recipe-meta-label">Время</div>
              </div>
              <div className="recipe-meta-item">
                <div className="recipe-meta-value">👤 {recipe.servings}</div>
                <div className="recipe-meta-label">Порции</div>
              </div>
              <div className="recipe-meta-item">
                <div className="recipe-meta-value">📊 {recipe.difficulty}</div>
                <div className="recipe-meta-label">Сложность</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid: Ingredients + Steps */}
        <div className="recipe-grid">
          {/* Ingredients */}
          <div className="recipe-section">
            <h2 className="recipe-section-title">🛒 Ингредиенты</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map(function (ing, i) {
                return (
                    <li key={i} className="ingredient-item">
                  <span
                      className="ingredient-dot"
                      style={{ background: recipe.dotColor }}
                  ></span>
                      {ing}
                    </li>
                );
              })}
            </ul>
          </div>

          {/* Steps */}
          <div className="recipe-section">
            <h2 className="recipe-section-title">
              👨‍🍳 Приготовление
              {completedSteps.length > 0 && (
                  <span style={{ fontSize: 14, color: "#a0aec0", marginLeft: 8 }}>
                {completedSteps.length}/{recipe.steps.length}
              </span>
              )}
            </h2>

            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: progress + "%" }}></div>
            </div>

            <ul className="steps-list">
              {recipe.steps.map(function (step, i) {
                var isDone = completedSteps.includes(i);
                return (
                    <li
                        key={i}
                        className={"step-item" + (isDone ? " completed" : "")}
                        onClick={function () {
                          toggleStep(i);
                        }}
                    >
                      <div className={"step-number " + (isDone ? "done" : "default")}>
                        {isDone ? "✓" : i + 1}
                      </div>
                      <div className={"step-text" + (isDone ? " completed" : "")}>
                        {step}
                      </div>
                    </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
            <div className="tips-section">
              <h2 className="tips-title">💡 Полезные советы</h2>
              <ul className="tips-list">
                {recipe.tips.map(function (tip, i) {
                  return (
                      <li key={i} className="tip-item">
                        <span className="tip-icon">✨</span>
                        <span>{tip}</span>
                      </li>
                  );
                })}
              </ul>
            </div>
        )}

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
            <div className="related-section">
              <h2 className="related-title">
                📖 Ещё из категории «{categoryObj ? categoryObj.name : ""}»
              </h2>
              <div className="related-grid">
                {relatedRecipes.map(function (r) {
                  return (
                      <div
                          key={r.id}
                          className="related-card"
                          onClick={function () {
                            onOpenRecipe(r);
                          }}
                      >
                        <div className="related-card-emoji">{r.emoji}</div>
                        <div className="related-card-info">
                          <div className="related-card-name">{r.title}</div>
                          <div className="related-card-time">
                            ⏱ {r.time} • {r.difficulty}
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
        )}
      </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  function openRecipe(recipe) {
    setSelectedRecipe(recipe);
    setCurrentPage("recipe");
    window.scrollTo(0, 0);
  }

  function goHome() {
    setCurrentPage("home");
    setSelectedRecipe(null);
  }

  var filteredRecipes = recipes.filter(function (recipe) {
    var matchesCategory =
        activeCategory === "all" || recipe.category === activeCategory;
    var matchesSearch =
        searchQuery === "" ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              {currentPage === "recipe" && (
                  <button className="header-back-btn" onClick={goHome}>
                    ←
                  </button>
              )}
              <div className="header-logo" onClick={goHome}>
                <span className="header-logo-emoji">🍽️</span>
                <div>
                  <div className="header-logo-text">Простые Рецепты</div>
                  <div className="header-logo-sub">На каждый день</div>
                </div>
              </div>
            </div>

            {currentPage === "home" && (
                <div className="search-container">
                  <span className="search-icon">🔍</span>
                  <input
                      type="text"
                      className="search-input"
                      placeholder="Найти рецепт..."
                      value={searchQuery}
                      onChange={function (e) {
                        setSearchQuery(e.target.value);
                      }}
                  />
                </div>
            )}
          </div>
        </header>

        {/* Main */}
        <main className="main-content">
          {currentPage === "home" ? (
              <>
                {/* Categories */}
                <div className="categories-section">
                  <h2 className="section-title">Категории</h2>
                  <div className="categories-list">
                    {categories.map(function (cat) {
                      var isActive = activeCategory === cat.id;
                      return (
                          <button
                              key={cat.id}
                              className={
                                  "category-btn category-btn-" +
                                  cat.colorClass +
                                  (isActive ? " active" : "")
                              }
                              onClick={function () {
                                setActiveCategory(cat.id);
                              }}
                          >
                            <span>{cat.emoji}</span>
                            <span>{cat.name}</span>
                          </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recipe Grid */}
                {filteredRecipes.length > 0 ? (
                    <div className="recipes-grid">
                      {filteredRecipes.map(function (recipe, i) {
                        return (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                index={i}
                                onClick={openRecipe}
                            />
                        );
                      })}
                    </div>
                ) : (
                    <div className="no-results">
                      <div className="no-results-emoji">🔍</div>
                      <h3 className="no-results-title">Ничего не найдено</h3>
                      <p className="no-results-text">
                        Попробуйте изменить запрос или выбрать другую категорию
                      </p>
                    </div>
                )}
              </>
          ) : (
              selectedRecipe && (
                  <RecipePage
                      recipe={selectedRecipe}
                      onBack={goHome}
                      onOpenRecipe={openRecipe}
                  />
              )
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>
            Сделано с <span className="footer-heart">❤️</span>
          </p>
        </footer>
      </div>
  );
}
