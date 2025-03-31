
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/recipes';
import { Card, CardContent } from './ui/card';
import { Utensils, ChefHat, Salad, Beef, Cake, IceCreamCone } from 'lucide-react';

const CategoriesShowcase = () => {
  const categories = getCategories();
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vegetarian':
        return <Salad className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'non-vegetarian':
        return <Beef className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'dessert':
        return <Cake className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'ice cream':
        return <IceCreamCone className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'starter':
        return <ChefHat className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'soup':
        return <Utensils className="h-8 w-8 mb-2 text-recipe-spice" />;
      case 'snack':
        return <Utensils className="h-8 w-8 mb-2 text-recipe-spice" />;
      default:
        return <Utensils className="h-8 w-8 mb-2 text-recipe-spice" />;
    }
  };
  
  const getCategoryImage = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vegetarian':
        return "https://images.unsplash.com/photo-1476124369491-e7addf5db371";
      case 'non-vegetarian':
        return "https://images.unsplash.com/photo-1598103442097-8b74394b95c6";
      case 'dessert':
        return "https://images.unsplash.com/photo-1499636136210-6f4ee915583e";
      case 'ice cream':
        return "https://images.unsplash.com/photo-1570197788417-0e82375c9371";
      case 'starter':
        return "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f";
      case 'soup':
        return "https://images.unsplash.com/photo-1547592180-85f173990554";
      case 'snack':
        return "https://images.unsplash.com/photo-1488477181946-6428a0291777";
      default:
        return "https://images.unsplash.com/photo-1499636136210-6f4ee915583e";
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-recipe-cinnamon mb-6">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link 
            key={category} 
            to={`/recipes?category=${category}`}
            className="transform transition-transform hover:scale-105"
          >
            <Card className="overflow-hidden border-none shadow-md h-full">
              <div className="relative h-36">
                <img 
                  src={getCategoryImage(category)} 
                  alt={category}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <CardContent className="p-4 text-center">
                {getCategoryIcon(category)}
                <h3 className="font-medium text-lg">{category}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesShowcase;
