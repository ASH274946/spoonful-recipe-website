
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-recipe-spice mb-4">Spoonful Stories</h3>
            <p className="text-muted-foreground">Delicious recipes and culinary adventures for every home cook.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-recipe-spice">Home</Link></li>
              <li><Link to="/recipes" className="text-muted-foreground hover:text-recipe-spice">Recipes</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-recipe-spice">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-recipe-spice">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-recipe-spice">Pinterest</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-recipe-spice">Subscribe to Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Spoonful Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
