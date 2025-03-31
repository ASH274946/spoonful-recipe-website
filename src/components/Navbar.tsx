
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { cn } from '@/lib/utils';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from './ui/command';
import { getRecipes } from '../data/recipes';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const recipes = getRecipes();

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const handleSelect = (recipeId: string) => {
    setOpen(false);
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full shadow-sm transition-colors",
      isDarkMode ? "bg-gray-900 text-white" : "bg-white"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-serif font-bold",
            isDarkMode ? "text-white" : "text-recipe-spice"
          )}>
            Spoonful Stories
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn(
            "font-medium",
            isDarkMode ? "text-white hover:text-recipe-butter" : "text-foreground hover:text-recipe-spice"
          )}>Home</Link>
          <Link to="/recipes" className={cn(
            "font-medium",
            isDarkMode ? "text-white hover:text-recipe-butter" : "text-foreground hover:text-recipe-spice"
          )}>Recipes</Link>
          <Link to="/about" className={cn(
            "font-medium",
            isDarkMode ? "text-white hover:text-recipe-butter" : "text-foreground hover:text-recipe-spice"
          )}>About</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Sun className={cn(
              "h-4 w-4",
              isDarkMode ? "text-gray-400" : "text-recipe-spice"
            )} />
            <Switch 
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <Moon className={cn(
              "h-4 w-4",
              isDarkMode ? "text-recipe-butter" : "text-gray-400"
            )} />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className={isDarkMode ? "text-white hover:bg-gray-800" : ""}
            onClick={() => setOpen(true)}
            aria-label="Search recipes"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search recipes..." />
        <CommandList>
          <CommandEmpty>No recipes found.</CommandEmpty>
          <CommandGroup heading="Recipes">
            {recipes.map((recipe) => (
              <CommandItem
                key={recipe.id}
                onSelect={() => handleSelect(recipe.id)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span>{recipe.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Navbar;
