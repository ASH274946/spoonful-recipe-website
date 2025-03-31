
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface FeaturedRecipeProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  category: string;
}

const FeaturedRecipe = ({ id, title, description, image, cookTime, category }: FeaturedRecipeProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      
      <div className="relative h-[500px] flex flex-col justify-end p-6 md:p-8">
        <Badge className="mb-4 self-start bg-recipe-spice hover:bg-recipe-spice/90">
          {category}
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">{title}</h2>
        <p className="text-white/80 mb-4 max-w-2xl">{description}</p>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center text-white/80">
            <Clock className="h-4 w-4 mr-1" />
            <span>{cookTime}</span>
          </div>
          
          <Button 
            asChild
            className="bg-recipe-spice hover:bg-recipe-spice/90 text-white"
          >
            <Link to={`/recipe/${id}`}>View Recipe</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
