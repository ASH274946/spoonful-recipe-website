
import React from 'react';
import { Button } from './ui/button';
import { getCategories } from '../data/recipes';
import { Utensils, ChefHat, Salad, Beef, Cake, IceCreamCone } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  const categories = getCategories();
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vegetarian':
        return <Salad className="mr-2 h-4 w-4" />;
      case 'non-vegetarian':
        return <Beef className="mr-2 h-4 w-4" />;
      case 'dessert':
        return <Cake className="mr-2 h-4 w-4" />;
      case 'ice cream':
        return <IceCreamCone className="mr-2 h-4 w-4" />;
      case 'starter':
        return <ChefHat className="mr-2 h-4 w-4" />;
      case 'soup':
        return <Utensils className="mr-2 h-4 w-4" />;
      case 'snack':
        return <Utensils className="mr-2 h-4 w-4" />;
      default:
        return <Utensils className="mr-2 h-4 w-4" />;
    }
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-serif font-medium mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => onSelectCategory('')}
          variant={selectedCategory === '' ? 'default' : 'outline'}
          className={selectedCategory === '' ? 'bg-recipe-spice hover:bg-recipe-spice/90' : ''}
          size="sm"
        >
          All
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelectCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={selectedCategory === category ? 'bg-recipe-spice hover:bg-recipe-spice/90' : ''}
            size="sm"
          >
            {getCategoryIcon(category)}
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
