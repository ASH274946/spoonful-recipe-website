
import React, { useState } from 'react';
import Layout from '../components/Layout';
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from '../components/CategoryFilter';
import { getRecipes, getRecipesByCategory } from '../data/recipes';

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const recipes = selectedCategory ? getRecipesByCategory(selectedCategory) : getRecipes();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-recipe-cinnamon mb-4">All Recipes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of delicious recipes, from quick weeknight dinners to impressive desserts.
          </p>
        </header>

        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {recipes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No recipes found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                cookTime={recipe.cookTime}
                category={recipe.category}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RecipesPage;
