
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Badge } from './ui/badge';

export interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  category: string;
}

const RecipeCard = ({ id, title, description, image, cookTime, category }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card block">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <Badge className="absolute top-2 right-2 bg-recipe-spice hover:bg-recipe-spice/90">
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-serif font-medium text-recipe-cinnamon mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>{cookTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
