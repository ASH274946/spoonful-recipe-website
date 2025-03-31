import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { getRecipeById } from '../data/recipes';
import { Clock } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Button } from '../components/ui/button';

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = id ? getRecipeById(id) : undefined;

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif mb-4">Recipe not found</h2>
          <p className="mb-8">Sorry, we couldn't find the recipe you're looking for.</p>
          <Button onClick={() => navigate('/recipes')}>
            View All Recipes
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-recipe-spice hover:bg-recipe-spice/90">
            {recipe.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-recipe-cinnamon mb-4">
            {recipe.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            {recipe.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-recipe-spice" />
              <span className="mr-1 font-medium">Prep:</span> {recipe.prepTime}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-recipe-spice" />
              <span className="mr-1 font-medium">Cook:</span> {recipe.cookTime}
            </div>
            <div className="flex items-center">
              <span className="mr-1 font-medium">Servings:</span> {recipe.servings}
            </div>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-2xl font-serif font-bold text-recipe-cinnamon mb-4">
                Ingredients
              </h2>
              <Separator className="mb-4" />
              <ul className="ingredient-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    <span className="font-medium text-recipe-spice">{ingredient.amount}</span>
                    <span className="text-foreground">{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-recipe-cinnamon mb-4">
              Instructions
            </h2>
            <Separator className="mb-6" />
            <ol className="instruction-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  <div className="instruction-number">{index + 1}</div>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RecipePage;
