
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-serif font-bold text-recipe-cinnamon mb-4 text-center">About Spoonful Stories</h1>
          <p className="text-muted-foreground text-center mb-8">
            A passion for food, a love for sharing recipes, and a dedication to making cooking accessible to everyone.
          </p>
          
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f" 
              alt="Kitchen with natural light"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Spoonful Stories, where we believe that food is more than just sustenance—it's a way to 
              connect, to create memories, and to express love. Founded in 2023, our blog has grown from a small 
              personal project into a beloved resource for home cooks of all skill levels.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-recipe-cinnamon mt-8 mb-4">Our Philosophy</h2>
            <p>
              We believe that cooking should be joyful, not stressful. Our recipes are designed to be accessible, 
              using ingredients that are easy to find and techniques that are straightforward to master. Whether 
              you're a beginner just learning to boil water or an experienced cook looking for new inspiration, 
              you'll find something here that speaks to you.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-recipe-cinnamon mt-8 mb-4">Meet the Team</h2>
            <p>
              Spoonful Stories is brought to you by a small team of passionate food lovers. Each recipe is 
              developed, tested, and photographed with care, ensuring that when you follow our instructions, 
              you'll achieve delicious results every time.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm my-8">
              <h3 className="text-xl font-serif font-medium text-recipe-spice mb-2">Get in Touch</h3>
              <p className="mb-4">
                Have a question about a recipe? Want to share your cooking success? We'd love to hear from you!
              </p>
              <Button className="bg-recipe-spice hover:bg-recipe-spice/90 text-white">
                Contact Us
              </Button>
            </div>
            
            <Separator className="my-8" />
            
            <p className="text-center italic">
              "Cooking is like love. It should be entered into with abandon or not at all." — Harriet Van Horne
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
