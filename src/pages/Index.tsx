
import React from 'react';
import Layout from '../components/Layout';
import FeaturedRecipe from '../components/FeaturedRecipe';
import RecipeCard from '../components/RecipeCard';
import CategoriesShowcase from '../components/CategoriesShowcase';
import { getRecipes, getFeaturedRecipe } from '../data/recipes';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Index = () => {
  const recipes = getRecipes();
  const featuredRecipe = getFeaturedRecipe();
  const recentRecipes = recipes.slice(0, 3); // Get first 3 recipes for display

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero section with featured recipe */}
        <section className="mb-16">
          <FeaturedRecipe
            id={featuredRecipe.id}
            title={featuredRecipe.title}
            description={featuredRecipe.description}
            image={featuredRecipe.image}
            cookTime={featuredRecipe.cookTime}
            category={featuredRecipe.category}
          />
        </section>

        {/* Categories showcase */}
        <section className="mb-16">
          <CategoriesShowcase />
        </section>

        {/* Recent recipes section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-recipe-cinnamon">Recent Recipes</h2>
            <Button 
              variant="outline" 
              className="border-recipe-spice text-recipe-spice hover:bg-recipe-spice/10"
              asChild
            >
              <Link to="/recipes">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentRecipes.map((recipe) => (
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
        </section>

        {/* About section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-recipe-cinnamon mb-4">Welcome to Spoonful Stories</h2>
            <p className="text-muted-foreground mb-6">
              We believe that cooking should be an enjoyable experience for everyone, from beginners to experienced home cooks. 
              Our recipes are carefully crafted to be both delicious and approachable, with clear instructions and readily available ingredients.
            </p>
            <Button 
              className="bg-recipe-spice hover:bg-recipe-spice/90 text-white"
              asChild
            >
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
