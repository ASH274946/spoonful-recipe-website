export enum RecipeCategory {
  VEGETARIAN = "Vegetarian",
  SOUP = "Soup",
  MAIN_COURSE = "Main Course",
  APPETIZER = "Appetizer",
  DESSERT = "Dessert",
  BREAKFAST = "Breakfast",
  SALAD = "Salad",
  PASTA = "Pasta",
  SEAFOOD = "Seafood",
  CHICKEN = "Chicken",
  BEEF = "Beef",
  PORK = "Pork",
  SANDWICH = "Sandwich",
  SIDE_DISH = "Side Dish",
  SNACK = "Snack",
  ICE_CREAM = "Ice Cream"
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  category: string;
  ingredients: {
    amount: string;
    name: string;
  }[];
  instructions: string[];
}

// First, define our recipes array
const allRecipes: Recipe[] = [
  // Vegetarian
  {
    id: "creamy-tomato-basil-soup",
    title: "Creamy Tomato Basil Soup",
    description: "A comforting homemade tomato soup enriched with fresh basil and a touch of cream. Perfect for chilly evenings served with a grilled cheese sandwich.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "onion, chopped" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "2 cans", name: "crushed tomatoes" },
      { amount: "2 cups", name: "vegetable broth" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "1/2 cup", name: "fresh basil, chopped" },
      { amount: "to taste", name: "salt and pepper" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion and garlic, cook until softened.",
      "Add crushed tomatoes and broth, simmer for 20 minutes.",
      "Stir in cream and basil, season with salt and pepper.",
      "Serve hot with crusty bread."
    ]
  },
  {
    id: "spinach-mushroom-risotto",
    title: "Spinach & Mushroom Risotto",
    description: "Creamy Italian risotto with earthy mushrooms and fresh spinach. A luxurious vegetarian main course that's worth the stirring time.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
    cookTime: "35 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "2 cups", name: "arborio rice" },
      { amount: "8 oz", name: "mushrooms, sliced" },
      { amount: "2 cups", name: "fresh spinach" },
      { amount: "1", name: "onion, chopped" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "1/2 cup", name: "white wine" },
      { amount: "1/2 cup", name: "parmesan cheese" },
      { amount: "2 tbsp", name: "butter" }
    ],
    instructions: [
      "Heat broth in a saucepan, keep warm.",
      "Sauté mushrooms and onion in butter.",
      "Add rice, toast for 2 minutes.",
      "Add wine, stir until absorbed.",
      "Add broth gradually, stirring constantly.",
      "Stir in spinach and cheese before serving."
    ]
  },
  {
    id: "vegetable-biryani",
    title: "Fragrant Vegetable Biryani",
    description: "A fragrant Indian rice dish packed with spiced vegetables and herbs. This one-pot meal is perfect for family dinners.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "2 cups", name: "basmati rice, rinsed and soaked for 30 minutes" },
      { amount: "3 tbsp", name: "ghee or vegetable oil" },
      { amount: "1", name: "large onion, thinly sliced" },
      { amount: "2", name: "carrots, diced" },
      { amount: "1 cup", name: "green beans, cut into 1-inch pieces" },
      { amount: "1 cup", name: "cauliflower florets" },
      { amount: "1 cup", name: "green peas (fresh or frozen)" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "1 tbsp", name: "ginger, grated" },
      { amount: "2 tsp", name: "cumin seeds" },
      { amount: "1 cinnamon", name: "stick" },
      { amount: "4", name: "cardamom pods" },
      { amount: "4", name: "cloves" },
      { amount: "2 tsp", name: "turmeric powder" },
      { amount: "1 tsp", name: "garam masala" },
      { amount: "1/2 tsp", name: "red chili powder (adjust to taste)" },
      { amount: "3 cups", name: "vegetable broth" },
      { amount: "1/4 cup", name: "fresh cilantro, chopped" },
      { amount: "1/4 cup", name: "fresh mint leaves, chopped" },
      { amount: "2 tbsp", name: "lemon juice" },
      { amount: "Salt", name: "to taste" }
    ],
    instructions: [
      "Drain the soaked rice and set aside.",
      "In a large, heavy-bottomed pot, heat ghee over medium heat. Add cumin seeds, cinnamon stick, cardamom pods, and cloves. Sauté until fragrant, about 30 seconds.",
      "Add sliced onions and cook until golden brown, about 5-7 minutes.",
      "Add garlic and ginger, sauté for another minute.",
      "Add all the vegetables and cook for 5 minutes, stirring occasionally.",
      "Add turmeric, garam masala, red chili powder, and salt. Stir to coat the vegetables with the spices.",
      "Add the drained rice and gently stir to mix with the vegetables and spices.",
      "Pour in the vegetable broth, bring to a boil, then reduce heat to low.",
      "Cover with a tight-fitting lid and simmer for 15-20 minutes until rice is cooked and liquid is absorbed.",
      "Remove from heat and let it rest, covered, for 10 minutes.",
      "Add chopped cilantro, mint, and lemon juice. Gently fluff with a fork to mix.",
      "Serve hot, garnished with additional herbs if desired."
    ]
  },
  {
    id: "mediterranean-stuffed-peppers",
    title: "Mediterranean Stuffed Peppers",
    description: "Bell peppers stuffed with quinoa, vegetables, and Mediterranean herbs.",
    image: "https://images.pexels.com/photos/31372400/pexels-photo-31372400/free-photo-of-delicious-stuffed-cabbage-rolls-with-sauce.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "4", name: "large bell peppers (assorted colors), halved and seeds removed" },
      { amount: "1 cup", name: "quinoa, rinsed" },
      { amount: "2 cups", name: "vegetable broth" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "small red onion, diced" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "1 cup", name: "cherry tomatoes, halved" },
      { amount: "1/2 cup", name: "kalamata olives, pitted and chopped" },
      { amount: "1/2 cup", name: "crumbled feta cheese" },
      { amount: "2 tbsp", name: "fresh parsley, chopped" },
      { amount: "2 tbsp", name: "fresh mint, chopped" },
      { amount: "1 tbsp", name: "lemon zest" },
      { amount: "2 tbsp", name: "lemon juice" },
      { amount: "1 tsp", name: "dried oregano" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cook quinoa in vegetable broth according to package instructions. Once cooked, fluff with a fork and set aside to cool slightly.",
      "In a skillet, heat olive oil over medium heat. Add onion and cook until softened, about 3-4 minutes.",
      "Add garlic and cook for another 30 seconds until fragrant.",
      "In a large bowl, combine cooked quinoa, sautéed onion and garlic, cherry tomatoes, olives, feta cheese, parsley, mint, lemon zest, lemon juice, and oregano. Season with salt and pepper.",
      "Arrange the bell pepper halves in a baking dish, cut side up.",
      "Divide the quinoa mixture evenly among the pepper halves, packing it in gently.",
      "Cover the dish with foil and bake for 25 minutes.",
      "Remove the foil and bake for another 10-15 minutes until the peppers are tender and the tops are lightly browned.",
      "Serve hot, garnished with additional herbs and feta if desired."
    ]
  },
  {
    id: "butternut-squash-curry",
    title: "Butternut Squash and Chickpea Curry",
    description: "A warming, spiced curry with tender butternut squash and protein-rich chickpeas in a creamy coconut sauce. Perfect for a cozy night in.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    cookTime: "35 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "2 tbsp", name: "coconut oil" },
      { amount: "1", name: "large onion, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "1 tbsp", name: "fresh ginger, grated" },
      { amount: "2 tbsp", name: "red curry paste" },
      { amount: "1 medium", name: "butternut squash, peeled and cut into 1-inch cubes (about 4 cups)" },
      { amount: "1 can (15 oz)", name: "chickpeas, drained and rinsed" },
      { amount: "1 can (14 oz)", name: "diced tomatoes" },
      { amount: "1 can (14 oz)", name: "coconut milk" },
      { amount: "1 cup", name: "vegetable broth" },
      { amount: "1 tsp", name: "ground turmeric" },
      { amount: "1 tsp", name: "ground cumin" },
      { amount: "1/2 tsp", name: "ground coriander" },
      { amount: "1/4 tsp", name: "red pepper flakes (adjust to taste)" },
      { amount: "2 cups", name: "fresh spinach" },
      { amount: "2 tbsp", name: "lime juice" },
      { amount: "1/4 cup", name: "fresh cilantro, chopped" },
      { amount: "Salt", name: "to taste" },
      { amount: "Cooked rice", name: "for serving" }
    ],
    instructions: [
      "In a large pot or Dutch oven, heat coconut oil over medium heat. Add onion and cook until softened, about 5 minutes.",
      "Add garlic and ginger, cook for another minute until fragrant.",
      "Stir in red curry paste and cook for 30 seconds to release the flavors.",
      "Add butternut squash cubes, chickpeas, diced tomatoes with their juice, coconut milk, vegetable broth, turmeric, cumin, coriander, and red pepper flakes. Stir to combine.",
      "Bring to a boil, then reduce heat to medium-low. Cover and simmer for 20-25 minutes, or until the butternut squash is tender.",
      "Stir in spinach and cook until wilted, about 2 minutes.",
      "Remove from heat and stir in lime juice. Season with salt to taste.",
      "Garnish with fresh cilantro and serve over cooked rice."
    ]
  },
  {
    id: "mushroom-wellington",
    title: "Mushroom Wellington",
    description: "A showstopping vegetarian main course featuring a savory mushroom filling encased in golden, flaky puff pastry. Perfect for special occasions.",
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "40 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "2 sheets", name: "frozen puff pastry, thawed" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 lb", name: "mixed mushrooms (cremini, shiitake, portobello), chopped" },
      { amount: "1", name: "large shallot, finely diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "2 tbsp", name: "fresh thyme leaves" },
      { amount: "2 tbsp", name: "fresh rosemary, chopped" },
      { amount: "1/4 cup", name: "dry white wine" },
      { amount: "1/2 cup", name: "walnuts, toasted and chopped" },
      { amount: "1/2 cup", name: "breadcrumbs" },
      { amount: "4 oz", name: "soft goat cheese" },
      { amount: "1", name: "large egg, beaten (for egg wash)" },
      { amount: "Salt and black pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "In a large skillet, heat olive oil over medium-high heat. Add mushrooms and cook until they release their moisture and begin to brown, about 8-10 minutes.",
      "Add shallot and cook for another 2-3 minutes until softened.",
      "Add garlic, thyme, and rosemary, cook for 1 minute until fragrant.",
      "Pour in white wine, scraping up any browned bits from the bottom of the pan. Cook until most of the liquid has evaporated.",
      "Remove from heat and stir in walnuts and breadcrumbs. Season with salt and pepper to taste. Allow to cool for 10 minutes.",
      "Roll out one sheet of puff pastry on a floured surface to about a 14x10-inch rectangle.",
      "Spread goat cheese down the center of the pastry, leaving about 2 inches on all sides. Spoon the mushroom mixture over the cheese.",
      "Brush the edges of the pastry with beaten egg. Roll out the second sheet of pastry and place it over the filling.",
      "Press the edges together to seal, then trim any excess. Crimp the edges with a fork.",
      "Cut a few small slits in the top to vent. Brush the entire surface with beaten egg.",
      "Bake for 35-40 minutes until the pastry is golden brown and puffed.",
      "Let rest for 10 minutes before slicing and serving."
    ]
  },
  {
    id: "quinoa-buddha-bowl",
    title: "Quinoa Buddha Bowl",
    description: "A nutritious and colorful bowl packed with protein-rich quinoa, roasted vegetables, and a tahini dressing. Perfect for a healthy lunch or dinner.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "1 cup", name: "quinoa, rinsed" },
      { amount: "2 cups", name: "water" },
      { amount: "1", name: "sweet potato, cubed" },
      { amount: "1", name: "red bell pepper, sliced" },
      { amount: "1 cup", name: "chickpeas, drained and rinsed" },
      { amount: "2 cups", name: "kale, chopped" },
      { amount: "1", name: "avocado, sliced" },
      { amount: "1/4 cup", name: "tahini" },
      { amount: "2 tbsp", name: "lemon juice" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 clove", name: "garlic, minced" },
      { amount: "2 tbsp", name: "water" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Cook quinoa according to package instructions.",
      "Toss sweet potato and bell pepper with olive oil, salt, and pepper. Roast for 20-25 minutes.",
      "In a small bowl, whisk together tahini, lemon juice, garlic, water, salt, and pepper until smooth.",
      "Assemble bowls by dividing quinoa, roasted vegetables, chickpeas, kale, and avocado among four bowls.",
      "Drizzle with tahini dressing and serve."
    ]
  },
  // {
  //   id: "mushroom-risotto",
  //   title: "Creamy Mushroom Risotto",
  //   description: "A luxurious Italian risotto with mixed mushrooms, fresh herbs, and Parmesan cheese. The perfect comfort food for any occasion.",
  //   image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
  //   cookTime: "35 minutes",
  //   prepTime: "10 minutes",
  //   servings: 4,
  //   category: "Vegetarian",
  //   ingredients: [
  //     { amount: "6 cups", name: "vegetable broth" },
  //     { amount: "2 tbsp", name: "olive oil" },
  //     { amount: "1", name: "onion, finely chopped" },
  //     { amount: "3 cloves", name: "garlic, minced" },
  //     { amount: "1 lb", name: "mixed mushrooms, sliced" },
  //     { amount: "1 1/2 cups", name: "arborio rice" },
  //     { amount: "1/2 cup", name: "dry white wine" },
  //     { amount: "1/2 cup", name: "grated Parmesan cheese" },
  //     { amount: "2 tbsp", name: "butter" },
  //     { amount: "2 tbsp", name: "fresh parsley, chopped" },
  //     { amount: "Salt and pepper", name: "to taste" }
  //   ],
  //   instructions: [
  //     "Bring vegetable broth to a simmer in a saucepan.",
  //     "Heat olive oil in a large pan over medium heat. Add onion and cook until softened.",
  //     "Add garlic and mushrooms, cook until mushrooms release their moisture.",
  //     "Add rice and toast for 1-2 minutes.",
  //     "Pour in wine and stir until absorbed.",
  //     "Add broth one ladle at a time, stirring until absorbed.",
  //     "When rice is creamy, stir in Parmesan, butter, and parsley. Season with salt and pepper."
  //   ]
  // },
  
  // Non-Vegetarian
  {
    id: "lemon-herb-roasted-chicken",
    title: "Lemon Herb Roasted Chicken",
    description: "A simple yet flavorful roasted chicken seasoned with lemon, garlic, and fresh herbs. The perfect centerpiece for a family dinner.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
    cookTime: "1 hour 15 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.CHICKEN,
    ingredients: [
      { amount: "1 (4-5 lb)", name: "whole chicken" },
      { amount: "1", name: "lemon, quartered" },
      { amount: "1 head", name: "garlic, halved crosswise" },
      { amount: "4 sprigs", name: "fresh rosemary" },
      { amount: "6 sprigs", name: "fresh thyme" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "2 tbsp", name: "unsalted butter, softened" },
      { amount: "1 tsp", name: "salt" },
      { amount: "1/2 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Remove giblets from the chicken cavity and pat the chicken dry with paper towels.",
      "Place lemon quarters, half of the garlic head, 2 sprigs of rosemary, and 3 sprigs of thyme inside the cavity.",
      "In a small bowl, mix together olive oil, butter, salt, and pepper.",
      "Rub the mixture all over the chicken, including under the skin of the breast.",
      "Place the chicken in a roasting pan or large oven-safe skillet. Scatter the remaining garlic, rosemary, and thyme around the chicken.",
      "Roast for 1 hour to 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) when inserted into the thickest part of the thigh.",
      "Let rest for 15 minutes before carving and serving."
    ]
  },
  {
    id: "beef-stir-fry",
    title: "Beef & Vegetable Stir Fry",
    description: "A quick and flavorful stir fry with tender beef strips and colorful vegetables in a savory garlic-ginger sauce.",
    image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040",
    cookTime: "15 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.BEEF,
    ingredients: [
      { amount: "1 lb", name: "flank steak, thinly sliced against the grain" },
      { amount: "2 tbsp", name: "soy sauce" },
      { amount: "1 tbsp", name: "cornstarch" },
      { amount: "3 tbsp", name: "vegetable oil, divided" },
      { amount: "1 bell pepper", name: "sliced" },
      { amount: "2 cups", name: "broccoli florets" },
      { amount: "1 cup", name: "snap peas" },
      { amount: "1 carrot", name: "julienned" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "1 tbsp", name: "fresh ginger, grated" },
      { amount: "1/4 cup", name: "beef broth" },
      { amount: "3 tbsp", name: "oyster sauce" },
      { amount: "1 tbsp", name: "sesame oil" },
      { amount: "Green onions", name: "for garnish" }
    ],
    instructions: [
      "In a bowl, combine sliced beef with 1 tablespoon soy sauce and cornstarch. Marinate for 15 minutes.",
      "Heat 1 tablespoon vegetable oil in a large wok or skillet over high heat. Add beef and stir-fry until browned, about 2-3 minutes. Remove and set aside.",
      "Add remaining oil to the wok. Add bell pepper, broccoli, snap peas, and carrot. Stir-fry for 3-4 minutes until vegetables begin to soften.",
      "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
      "Return beef to the wok. Add beef broth, remaining soy sauce, and oyster sauce.",
      "Stir-fry for 1-2 minutes until sauce thickens slightly and everything is well coated.",
      "Remove from heat and drizzle with sesame oil.",
      "Garnish with sliced green onions and serve over rice."
    ]
  },
  {
    id: "grilled-salmon-with-avocado-salsa",
    title: "Grilled Salmon with Avocado Salsa",
    description: "Perfectly grilled salmon fillets topped with a fresh, zesty avocado salsa. A healthy and delicious dinner option.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    cookTime: "10 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.SEAFOOD,
    ingredients: [
      { amount: "4 (6 oz)", name: "salmon fillets" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tbsp", name: "lemon juice" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "1 tsp", name: "dried oregano" },
      { amount: "1/2 tsp", name: "salt" },
      { amount: "1/4 tsp", name: "black pepper" },
      { amount: "2", name: "ripe avocados, diced" },
      { amount: "1", name: "small red onion, finely diced" },
      { amount: "1", name: "jalapeño, seeded and minced" },
      { amount: "1", name: "tomato, diced" },
      { amount: "2 tbsp", name: "fresh cilantro, chopped" },
      { amount: "1 tbsp", name: "lime juice" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "In a shallow dish, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper. Add salmon fillets, turning to coat. Let marinate for 10 minutes.",
      "Meanwhile, prepare the avocado salsa by combining diced avocados, red onion, jalapeño, tomato, cilantro, and lime juice in a bowl. Season with salt and pepper to taste. Set aside.",
      "Preheat grill or grill pan to medium-high heat.",
      "Remove salmon from marinade and grill for 3-4 minutes per side, or until fish flakes easily with a fork but is still moist.",
      "Serve salmon topped with avocado salsa."
    ]
  },
  {
    id: "thai-red-curry-with-chicken",
    title: "Thai Red Curry with Chicken",
    description: "A fragrant and spicy Thai curry with tender chicken, vegetables, and coconut milk. Serve over jasmine rice for a satisfying meal.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.CHICKEN,
    ingredients: [
      { amount: "1.5 lbs", name: "boneless, skinless chicken thighs, cut into 1-inch pieces" },
      { amount: "2 tbsp", name: "vegetable oil" },
      { amount: "3 tbsp", name: "Thai red curry paste" },
      { amount: "1", name: "red bell pepper, sliced" },
      { amount: "1", name: "yellow bell pepper, sliced" },
      { amount: "1", name: "small eggplant, cubed" },
      { amount: "1 cup", name: "green beans, trimmed and halved" },
      { amount: "1 (14 oz) can", name: "coconut milk" },
      { amount: "1 cup", name: "chicken broth" },
      { amount: "2 tbsp", name: "fish sauce" },
      { amount: "1 tbsp", name: "brown sugar" },
      { amount: "2", name: "kaffir lime leaves (optional)" },
      { amount: "1 stalk", name: "lemongrass, bruised and cut into 2-inch pieces" },
      { amount: "1 tbsp", name: "fresh ginger, minced" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "1/4 cup", name: "fresh basil leaves (preferably Thai basil)" },
      { amount: "1 tbsp", name: "lime juice" },
      { amount: "Jasmine rice", name: "for serving" }
    ],
    instructions: [
      "Heat oil in a large skillet or wok over medium-high heat. Add curry paste and cook, stirring constantly, for 1 minute until fragrant.",
      "Add chicken and cook for 5 minutes, stirring occasionally, until chicken begins to brown.",
      "Add bell peppers, eggplant, green beans, ginger, and garlic. Cook for 3 minutes, stirring frequently.",
      "Pour in coconut milk and chicken broth. Add fish sauce, brown sugar, lime leaves (if using), and lemongrass. Stir to combine.",
      "Bring to a simmer, then reduce heat to medium-low. Cook, uncovered, for 15 minutes until vegetables are tender and chicken is cooked through.",
      "Remove from heat and discard lemongrass and lime leaves. Stir in basil leaves and lime juice.",
      "Serve hot over jasmine rice."
    ]
  },
  {
    id: "beef-bourguignon",
    title: "Classic Beef Bourguignon",
    description: "A rich and hearty French stew made with beef, red wine, mushrooms, and bacon. Perfect for a special dinner served with crusty bread.",
    image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011",
    cookTime: "3 hours",
    prepTime: "30 minutes",
    servings: 6,
    category: RecipeCategory.BEEF,
    ingredients: [
      { amount: "3 lbs", name: "beef chuck, cut into 2-inch cubes" },
      { amount: "8 oz", name: "bacon, diced" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "2", name: "large onions, sliced" },
      { amount: "3", name: "carrots, sliced" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "1 bottle (750 ml)", name: "dry red wine (such as Burgundy or Pinot Noir)" },
      { amount: "2 cups", name: "beef broth" },
      { amount: "2 tbsp", name: "tomato paste" },
      { amount: "1 bouquet garni", name: "(bundle of thyme, parsley, and bay leaf)" },
      { amount: "1 lb", name: "mushrooms, quartered" },
      { amount: "1 lb", name: "pearl onions, peeled" },
      { amount: "3 tbsp", name: "butter, divided" },
      { amount: "3 tbsp", name: "all-purpose flour" },
      { amount: "1/4 cup", name: "fresh parsley, chopped" },
      { amount: "Salt and black pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 325°F (165°C).",
      "Pat beef dry with paper towels and season generously with salt and pepper.",
      "In a large Dutch oven, cook bacon over medium heat until crisp. Remove with a slotted spoon and set aside, leaving the fat in the pot.",
      "Working in batches, sear beef in the hot bacon fat until browned on all sides. Remove and set aside with the bacon.",
      "Add sliced onions and carrots to the pot. Cook until onions are softened, about 5 minutes.",
      "Add garlic and cook for another minute until fragrant.",
      "Return beef and bacon to the pot. Add wine, beef broth, tomato paste, and bouquet garni. Bring to a simmer.",
      "Cover with a tight-fitting lid and transfer to the oven. Cook for 2 1/2 to 3 hours, until beef is very tender.",
      "About 30 minutes before the stew is done, melt 2 tablespoons of butter in a large skillet. Add mushrooms and pearl onions, sauté until browned and tender. Set aside.",
      "In a small bowl, mash together the remaining 1 tablespoon of butter with the flour to create a paste (beurre manié).",
      "When the stew is done, remove from oven and place on the stovetop over medium heat. Remove the bouquet garni.",
      "Add the beurre manié to the stew, stirring until it dissolves. Simmer for 5 minutes until the sauce thickens.",
      "Add the sautéed mushrooms and pearl onions. Adjust seasoning with salt and pepper.",
      "Sprinkle with chopped parsley and serve hot with crusty bread or mashed potatoes."
    ]
  },
  {
    id: "shrimp-scampi",
    title: "Garlic Butter Shrimp Scampi",
    description: "Succulent shrimp sautéed in a rich garlic butter sauce with white wine and lemon. Ready in minutes and perfect over pasta or with crusty bread.",
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1",
    cookTime: "10 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SEAFOOD,
    ingredients: [
      { amount: "1 lb", name: "large shrimp, peeled and deveined" },
      { amount: "4 tbsp", name: "unsalted butter" },
      { amount: "4 tbsp", name: "olive oil" },
      { amount: "6 cloves", name: "garlic, minced" },
      { amount: "1/4 tsp", name: "red pepper flakes" },
      { amount: "1/2 cup", name: "dry white wine" },
      { amount: "1", name: "lemon, juiced and zested" },
      { amount: "1/4 cup", name: "fresh parsley, chopped" },
      { amount: "Salt and black pepper", name: "to taste" },
      { amount: "Cooked pasta or crusty bread", name: "for serving" }
    ],
    instructions: [
      "Pat shrimp dry with paper towels and season with salt and pepper.",
      "In a large skillet, heat 2 tablespoons of olive oil and 2 tablespoons of butter over medium-high heat.",
      "Add shrimp in a single layer and cook for 1-2 minutes per side until just pink and opaque. Do not overcook. Remove to a plate.",
      "In the same skillet, add remaining olive oil and butter. Once butter is melted, add garlic and red pepper flakes. Cook for 30 seconds until fragrant.",
      "Pour in white wine and lemon juice. Bring to a simmer and cook for 2-3 minutes until slightly reduced.",
      "Add lemon zest and parsley, then return shrimp to the skillet. Toss to coat in the sauce and heat through, about 1 minute.",
      "Taste and adjust seasoning if needed.",
      "Serve immediately over pasta or with crusty bread to soak up the delicious sauce."
    ]
  },
  {
    id: "grilled-chicken-pasta",
    title: "Grilled Chicken Pasta",
    description: "A light and fresh pasta dish with grilled chicken, cherry tomatoes, and fresh basil in a garlic olive oil sauce.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.CHICKEN,
    ingredients: [
      { amount: "2", name: "chicken breasts" },
      { amount: "1 lb", name: "spaghetti" },
      { amount: "2 cups", name: "cherry tomatoes, halved" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "1/2 cup", name: "fresh basil, chopped" },
      { amount: "1/4 cup", name: "olive oil" },
      { amount: "1/4 cup", name: "grated Parmesan" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Season chicken with salt and pepper. Grill until cooked through, about 6-8 minutes per side. Let rest and slice.",
      "Cook pasta according to package instructions.",
      "In a large pan, heat olive oil over medium heat. Add garlic and cook until fragrant.",
      "Add cherry tomatoes and cook until softened.",
      "Toss with pasta, chicken, basil, and Parmesan. Season with salt and pepper."
    ]
  },
  {
    id: "salmon-risotto",
    title: "Creamy Salmon Risotto",
    description: "A luxurious risotto with flaked salmon, fresh dill, and lemon zest. Perfect for a special dinner.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    cookTime: "35 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.SEAFOOD,
    ingredients: [
      { amount: "6 cups", name: "fish stock" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "onion, finely chopped" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "1 1/2 cups", name: "arborio rice" },
      { amount: "1/2 cup", name: "dry white wine" },
      { amount: "1 lb", name: "salmon fillet, cooked and flaked" },
      { amount: "1/2 cup", name: "heavy cream" },
      { amount: "2 tbsp", name: "fresh dill, chopped" },
      { amount: "1", name: "lemon, zested" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Bring fish stock to a simmer in a saucepan.",
      "Heat olive oil in a large pan over medium heat. Add onion and cook until softened.",
      "Add garlic and rice, toast for 1-2 minutes.",
      "Pour in wine and stir until absorbed.",
      "Add stock one ladle at a time, stirring until absorbed.",
      "When rice is creamy, stir in salmon, cream, dill, and lemon zest.",
      "Season with salt and pepper."
    ]
  },
  {
    id: "honey-garlic-chicken",
    title: "Honey Garlic Chicken",
    description: "Tender chicken thighs glazed with a sweet and savory honey garlic sauce.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.CHICKEN,
    ingredients: [
      { amount: "8", name: "chicken thighs, boneless" },
      { amount: "1/4 cup", name: "honey" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "2 tbsp", name: "soy sauce" },
      { amount: "1 tbsp", name: "rice vinegar" },
      { amount: "1 tbsp", name: "sesame oil" },
      { amount: "Green onions", name: "for garnish" }
    ],
    instructions: [
      "Season chicken with salt and pepper.",
      "Pan-fry chicken until golden brown.",
      "Mix honey, garlic, soy sauce, and vinegar.",
      "Pour sauce over chicken and simmer until thickened.",
      "Garnish with green onions and serve."
    ]
  },
  {
    id: "teriyaki-salmon",
    title: "Teriyaki Salmon",
    description: "Pan-seared salmon fillets glazed with homemade teriyaki sauce.",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SEAFOOD,
    ingredients: [
      { amount: "4", name: "salmon fillets" },
      { amount: "1/2 cup", name: "soy sauce" },
      { amount: "1/4 cup", name: "mirin" },
      { amount: "2 tbsp", name: "brown sugar" },
      { amount: "1 tbsp", name: "ginger, grated" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "Sesame seeds", name: "for garnish" }
    ],
    instructions: [
      "Mix soy sauce, mirin, sugar, ginger, and garlic.",
      "Pan-sear salmon skin-side up.",
      "Flip and add sauce to the pan.",
      "Baste salmon until glazed and cooked through.",
      "Garnish with sesame seeds."
    ]
  },
  {
    id: "beef-stir-fry-noodles",
    title: "Beef Stir-Fry Noodles",
    description: "Quick and flavorful stir-fried noodles with tender beef strips and crisp vegetables.",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa",
    cookTime: "15 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.BEEF,
    ingredients: [
      { amount: "1 lb", name: "beef sirloin, sliced" },
      { amount: "8 oz", name: "rice noodles" },
      { amount: "2 cups", name: "mixed vegetables" },
      { amount: "3 tbsp", name: "soy sauce" },
      { amount: "2 tbsp", name: "oyster sauce" },
      { amount: "1 tbsp", name: "sesame oil" },
      { amount: "3 cloves", name: "garlic, minced" }
    ],
    instructions: [
      "Soak noodles in hot water until soft.",
      "Stir-fry beef until browned, remove from pan.",
      "Stir-fry vegetables and garlic.",
      "Add noodles, sauces, and beef back to pan.",
      "Toss until well combined and heated through."
    ]
  },
  {
    id: "chicken-marsala",
    title: "Chicken Marsala",
    description: "Classic Italian-American dish with chicken cutlets and mushrooms in a Marsala wine sauce.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.CHICKEN,
    ingredients: [
      { amount: "4", name: "chicken breasts, pounded thin" },
      { amount: "8 oz", name: "mushrooms, sliced" },
      { amount: "1/2 cup", name: "Marsala wine" },
      { amount: "1/2 cup", name: "chicken broth" },
      { amount: "2 tbsp", name: "butter" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "Fresh parsley", name: "for garnish" }
    ],
    instructions: [
      "Dredge chicken in flour, salt, and pepper.",
      "Pan-fry chicken until golden, remove from pan.",
      "Sauté mushrooms in same pan.",
      "Add wine and broth, simmer until reduced.",
      "Return chicken to pan and finish cooking."
    ]
  },
  {
    id: "bbq-pulled-pork",
    title: "BBQ Pulled Pork",
    description: "Slow-cooked pork shoulder in a sweet and tangy BBQ sauce, perfect for sandwiches.",
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc",
    cookTime: "8 hours",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.PORK,
    ingredients: [
      { amount: "4 lbs", name: "pork shoulder" },
      { amount: "2 cups", name: "BBQ sauce" },
      { amount: "1 cup", name: "chicken broth" },
      { amount: "1 tbsp", name: "paprika" },
      { amount: "1 tbsp", name: "brown sugar" },
      { amount: "1 tbsp", name: "garlic powder" },
      { amount: "Hamburger buns", name: "for serving" }
    ],
    instructions: [
      "Rub pork with spice mixture.",
      "Place in slow cooker with broth.",
      "Cook on low for 8 hours.",
      "Shred pork and mix with BBQ sauce.",
      "Serve on buns with coleslaw."
    ]
  },
  
  // Desserts
  {
    id: "classic-chocolate-chip-cookies",
    title: "Classic Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies with crisp edges and a gooey center. The perfect balance of sweet and chocolatey.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    cookTime: "12 minutes",
    prepTime: "15 minutes",
    servings: 24,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "unsalted butter, softened" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "3/4 cup", name: "packed brown sugar" },
      { amount: "2", name: "large eggs" },
      { amount: "2 tsp", name: "vanilla extract" },
      { amount: "2 1/4 cups", name: "all-purpose flour" },
      { amount: "1 tsp", name: "baking soda" },
      { amount: "1/2 tsp", name: "salt" },
      { amount: "2 cups", name: "semisweet chocolate chips" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
      "Beat in eggs one at a time, then stir in vanilla.",
      "In a separate bowl, whisk together flour, baking soda, and salt. Gradually add to the wet ingredients and mix until just combined.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
      "Bake for 10-12 minutes, or until edges are golden but centers are still soft.",
      "Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
    ]
  },
  {
    id: "strawberry-cheesecake",
    title: "Strawberry Cheesecake",
    description: "Creamy New York style cheesecake topped with fresh strawberry compote on a buttery graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "graham cracker crumbs" },
      { amount: "1/2 cup", name: "unsalted butter, melted" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "4 (8 oz) packages", name: "cream cheese, room temperature" },
      { amount: "1 1/2 cups", name: "granulated sugar" },
      { amount: "4", name: "large eggs" },
      { amount: "1 cup", name: "sour cream" },
      { amount: "1 tbsp", name: "vanilla extract" },
      { amount: "2 cups", name: "fresh strawberries, hulled" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "1 tbsp", name: "lemon juice" }
    ],
    instructions: [
      "Preheat oven to 325°F (165°C). Prepare a 9-inch springform pan by wrapping the outside with aluminum foil.",
      "In a bowl, combine graham cracker crumbs, melted butter, and 1/4 cup sugar. Press into the bottom of the springform pan.",
      "Bake crust for 10 minutes, then remove and cool while preparing filling.",
      "In a large bowl, beat cream cheese and 1 1/2 cups sugar until smooth. Add eggs one at a time, beating after each addition.",
      "Stir in sour cream and vanilla extract. Pour over prepared crust.",
      "Place springform pan in a larger roasting pan. Fill roasting pan with hot water to create a water bath, coming halfway up the sides of the springform pan.",
      "Bake for 1 hour, or until center is almost set. Turn off oven, prop door open slightly, and let cheesecake cool in oven for 1 hour.",
      "Remove from oven, run a knife around the edge, and cool completely before refrigerating for at least 4 hours or overnight.",
      "For the topping, blend 1 cup strawberries with sugar and lemon juice. Strain if desired. Slice remaining strawberries.",
      "Before serving, top cheesecake with strawberry sauce and sliced fresh strawberries."
    ]
  },
  {
    id: "tiramisu",
    title: "Classic Tiramisu",
    description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    cookTime: "30 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6", name: "egg yolks" },
      { amount: "1 cup", name: "sugar" },
      { amount: "16 oz", name: "mascarpone cheese" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "2 cups", name: "strong coffee, cooled" },
      { amount: "24", name: "ladyfinger cookies" },
      { amount: "Cocoa powder", name: "for dusting" }
    ],
    instructions: [
      "Whisk egg yolks and sugar until pale.",
      "Fold in mascarpone and whipped cream.",
      "Dip ladyfingers in coffee.",
      "Layer cookies and cream mixture.",
      "Dust with cocoa and chill overnight."
    ]
  },
  {
    id: "sticky-toffee-pudding",
    title: "Sticky Toffee Pudding",
    description: "Rich date sponge cake with warm toffee sauce.",
    image: "https://images.unsplash.com/photo-1586767003402-8ade266deb64",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "dates, pitted and chopped" },
      { amount: "1 cup", name: "boiling water" },
      { amount: "1 1/2 cups", name: "flour" },
      { amount: "1 tsp", name: "baking powder" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "1 cup", name: "brown sugar" },
      { amount: "2", name: "eggs" }
    ],
    instructions: [
      "Soak dates in boiling water.",
      "Cream butter and sugar.",
      "Mix in eggs and flour.",
      "Add date mixture.",
      "Bake and serve with toffee sauce."
    ]
  },
  {
    id: "pavlova",
    title: "Berry Pavlova",
    description: "Light and airy meringue dessert topped with whipped cream and fresh berries.",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
    cookTime: "1 hour 30 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "4", name: "egg whites" },
      { amount: "1 cup", name: "sugar" },
      { amount: "1 tsp", name: "cornstarch" },
      { amount: "1 tsp", name: "vanilla extract" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "2 cups", name: "mixed berries" }
    ],
    instructions: [
      "Whip egg whites until stiff.",
      "Gradually add sugar.",
      "Shape into nest and bake.",
      "Cool completely.",
      "Top with cream and berries."
    ]
  },
  {
    id: "bread-pudding",
    title: "Bourbon Bread Pudding",
    description: "Warm and comforting bread pudding with bourbon sauce.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 loaf", name: "day-old bread, cubed" },
      { amount: "4", name: "eggs" },
      { amount: "2 cups", name: "milk" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "1 cup", name: "brown sugar" },
      { amount: "2 tsp", name: "vanilla extract" },
      { amount: "1/4 cup", name: "bourbon" }
    ],
    instructions: [
      "Arrange bread in baking dish.",
      "Whisk wet ingredients.",
      "Pour over bread and let soak.",
      "Bake until set.",
      "Serve with bourbon sauce."
    ]
  },
  {
    id: "baklava",
    title: "Baklava",
    description: "Layered phyllo pastry filled with nuts and sweetened with honey syrup.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548",
    cookTime: "45 minutes",
    prepTime: "45 minutes",
    servings: 24,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 package", name: "phyllo dough" },
      { amount: "4 cups", name: "mixed nuts, finely chopped" },
      { amount: "1 cup", name: "butter, melted" },
      { amount: "1 cup", name: "sugar" },
      { amount: "1 cup", name: "honey" },
      { amount: "1 tsp", name: "cinnamon" },
      { amount: "1/2 cup", name: "water" }
    ],
    instructions: [
      "Layer phyllo with butter.",
      "Add nut mixture between layers.",
      "Cut into diamonds.",
      "Bake until golden.",
      "Pour honey syrup over hot baklava."
    ]
  },
  {
    id: "apple-crisp",
    title: "Classic Apple Crisp",
    description: "Warm, cinnamon-spiced apples topped with a buttery, crunchy oat topping. Best served with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    cookTime: "35 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6", name: "large apples, peeled and sliced" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "1 tsp", name: "ground cinnamon" },
      { amount: "1/2 tsp", name: "ground nutmeg" },
      { amount: "1 cup", name: "all-purpose flour" },
      { amount: "1 cup", name: "old-fashioned oats" },
      { amount: "1 cup", name: "brown sugar" },
      { amount: "1/2 cup", name: "cold butter, cubed" },
      { amount: "1/2 tsp", name: "salt" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Toss apples with sugar, cinnamon, and nutmeg. Place in a 9x13 baking dish.",
      "In a bowl, combine flour, oats, brown sugar, and salt.",
      "Cut in butter until mixture is crumbly.",
      "Sprinkle topping over apples.",
      "Bake for 35-40 minutes until golden and bubbly.",
      "Let cool slightly before serving."
    ]
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    description: "Individual chocolate cakes with a molten center, served with vanilla ice cream and fresh berries.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
    cookTime: "12 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "4 oz", name: "dark chocolate, chopped" },
      { amount: "1/2 cup", name: "unsalted butter" },
      { amount: "2", name: "large eggs" },
      { amount: "2", name: "large egg yolks" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "2 tbsp", name: "all-purpose flour" },
      { amount: "1/4 tsp", name: "salt" },
      { amount: "Vanilla ice cream", name: "for serving" },
      { amount: "Fresh berries", name: "for garnish" }
    ],
    instructions: [
      "Preheat oven to 450°F (230°C). Butter and flour four ramekins.",
      "Melt chocolate and butter together in a double boiler or microwave.",
      "In a bowl, whisk eggs, egg yolks, and sugar until pale and thick.",
      "Fold in chocolate mixture, then flour and salt.",
      "Divide batter among ramekins.",
      "Bake for 12 minutes until edges are set but centers are still soft.",
      "Let cool for 1 minute, then invert onto plates.",
      "Serve with vanilla ice cream and fresh berries."
    ]
  },
  {
    id: "vanilla-panna-cotta",
    title: "Vanilla Bean Panna Cotta",
    description: "Silky smooth Italian dessert with real vanilla beans and fresh berry compote.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    cookTime: "10 minutes",
    prepTime: "15 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1/2 cup", name: "sugar" },
      { amount: "1", name: "vanilla bean, split" },
      { amount: "2 1/4 tsp", name: "gelatin powder" },
      { amount: "3 tbsp", name: "cold water" },
      { amount: "1 cup", name: "mixed berries" },
      { amount: "2 tbsp", name: "sugar for compote" }
    ],
    instructions: [
      "Bloom gelatin in cold water.",
      "Heat cream, sugar, and vanilla until just simmering.",
      "Stir in gelatin until dissolved.",
      "Pour into molds and refrigerate 4 hours.",
      "Make berry compote and serve together."
    ]
  },
  {
    id: "lemon-meringue-pie",
    title: "Lemon Meringue Pie",
    description: "Tangy lemon curd topped with fluffy meringue in a buttery crust.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13",
    cookTime: "45 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1", name: "pie crust" },
      { amount: "4", name: "egg yolks" },
      { amount: "4", name: "egg whites" },
      { amount: "1 cup", name: "sugar" },
      { amount: "1/2 cup", name: "lemon juice" },
      { amount: "2 tbsp", name: "lemon zest" },
      { amount: "1/4 cup", name: "cornstarch" }
    ],
    instructions: [
      "Blind bake pie crust.",
      "Cook lemon curd until thickened.",
      "Pour into crust.",
      "Make meringue and top pie.",
      "Bake until meringue is golden."
    ]
  },
  {
    id: "creme-brulee",
    title: "Classic Crème Brûlée",
    description: "Rich vanilla custard with a crisp caramelized sugar top.",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3",
    cookTime: "35 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1", name: "vanilla bean" },
      { amount: "1/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "Extra sugar", name: "for topping" }
    ],
    instructions: [
      "Heat cream with vanilla bean.",
      "Whisk yolks with sugar.",
      "Temper eggs with hot cream.",
      "Bake in water bath until set.",
      "Top with sugar and torch before serving."
    ]
  },
  {
    id: "apple-tarte-tatin",
    title: "Apple Tarte Tatin",
    description: "Upside-down caramelized apple tart with flaky pastry.",
    image: "https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "45 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6", name: "apples, peeled and quartered" },
      { amount: "1 cup", name: "sugar" },
      { amount: "6 tbsp", name: "butter" },
      { amount: "1", name: "puff pastry sheet" },
      { amount: "Vanilla ice cream", name: "for serving" }
    ],
    instructions: [
      "Make caramel in cast iron skillet.",
      "Arrange apples in pan.",
      "Top with pastry and tuck edges.",
      "Bake until golden brown.",
      "Invert onto serving plate while hot."
    ]
  },
  {
    id: "chocolate-mousse",
    title: "Dark Chocolate Mousse",
    description: "Light and airy chocolate mousse made with high-quality dark chocolate.",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3",
    cookTime: "15 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "8 oz", name: "dark chocolate" },
      { amount: "4", name: "eggs, separated" },
      { amount: "1/4 cup", name: "sugar" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "1 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Melt chocolate over double boiler.",
      "Whip egg whites with sugar to peaks.",
      "Whip cream separately.",
      "Fold all components together.",
      "Chill for at least 4 hours."
    ]
  },

  // Ice Cream
  {
    id: "classic-vanilla-ice-cream",
    title: "Classic Vanilla Bean Ice Cream",
    description: "Rich and creamy vanilla ice cream with real vanilla bean specks.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1", name: "vanilla bean, split and seeds scraped" },
      { amount: "6", name: "large egg yolks" },
      { amount: "1 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "In a medium saucepan, combine heavy cream, milk, half the sugar, salt, and vanilla bean with seeds. Bring to a simmer over medium heat.",
      "In a separate bowl, whisk egg yolks with remaining sugar until pale and thick.",
      "Slowly pour about 1 cup of the hot cream mixture into the egg yolks, whisking constantly to temper the eggs.",
      "Pour the egg mixture back into the saucepan with the remaining cream mixture.",
      "Cook over medium-low heat, stirring constantly, until the mixture thickens enough to coat the back of a spoon (about 170-175°F).",
      "Strain the custard through a fine-mesh sieve into a clean bowl. Remove the vanilla bean pod.",
      "Stir in vanilla extract and let cool completely, then cover and refrigerate for at least 4 hours or overnight.",
      "Pour the chilled custard into an ice cream maker and churn according to manufacturer's instructions.",
      "Transfer to a freezer-safe container and freeze for at least 4 hours before serving."
    ]
  },
  {
    id: "dark-chocolate-fudge-ice-cream",
    title: "Dark Chocolate Fudge Ice Cream",
    description: "Intensely chocolatey ice cream with rich fudge swirls.",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1 cup", name: "dark chocolate chips" },
      { amount: "1/2 cup", name: "fudge sauce" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until stiff peaks form.",
      "Add chocolate chips and fudge sauce. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "fresh-strawberry-ice-cream",
    title: "Fresh Strawberry Ice Cream",
    description: "Creamy ice cream with fresh strawberry puree and chunks.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1 cup", name: "fresh strawberries, hulled" },
      { amount: "1/2 cup", name: "granulated sugar" },
      { amount: "1/4 cup", name: "water" },
      { amount: "1/4 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, and vanilla extract. Beat with an electric mixer until smooth.",
      "Add strawberries and sugar. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "mint-chocolate-chip-ice-cream",
    title: "Mint Chocolate Chip Ice Cream",
    description: "Fresh mint ice cream with dark chocolate flakes.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1 cup", name: "fresh mint leaves" },
      { amount: "6", name: "large egg yolks" },
      { amount: "1/2 tsp", name: "peppermint extract" },
      { amount: "1 cup", name: "dark chocolate chips" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, and mint leaves. Beat with an electric mixer until smooth.",
      "Add chocolate chips and peppermint extract. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "salted-caramel-ice-cream",
    title: "Salted Caramel Ice Cream",
    description: "Rich caramel ice cream with a touch of sea salt.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "caramel sauce" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until smooth.",
      "Add caramel sauce. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "pistachio-ice-cream",
    title: "Pistachio Ice Cream",
    description: "Creamy pistachio ice cream with roasted nuts.",
    image: "https://images.unsplash.com/photo-1560801619-01d71da0f70c",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "roasted pistachios, chopped" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until smooth.",
      "Add roasted pistachios. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "coffee-toffee-crunch-ice-cream",
    title: "Coffee Toffee Crunch Ice Cream",
    description: "Coffee ice cream with buttery toffee pieces.",
    image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "strong brewed coffee, cooled" },
      { amount: "6", name: "large egg yolks" },
      { amount: "1 cup", name: "toffee bits" },
      { amount: "1/2 cup", name: "caramel sauce" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until smooth.",
      "Add cooled coffee and toffee bits. Fold gently until combined.",
      "Add caramel sauce. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "coconut-mango-ice-cream",
    title: "Coconut Mango Ice Cream",
    description: "Tropical ice cream with coconut cream and fresh mango.",
    image: "https://images.unsplash.com/photo-1516043827470-d52c543c438f",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "coconut cream" },
      { amount: "1 cup", name: "mango puree" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, coconut cream, mango puree, sugar, and salt. Beat with an electric mixer until smooth.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "cookie-dough-ice-cream",
    title: "Cookie Dough Ice Cream",
    description: "Vanilla ice cream loaded with chunks of edible cookie dough.",
    image: "https://images.pexels.com/photos/6431604/pexels-photo-6431604.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1 cup", name: "cookie dough, crumbled" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until smooth.",
      "Add cookie dough. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "lavender-honey-ice-cream",
    title: "Lavender Honey Ice Cream",
    description: "Delicate lavender-infused ice cream sweetened with honey.",
    image: "https://images.unsplash.com/photo-1587563974670-b5181b459b30",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "lavender honey" },
      { amount: "1 tsp", name: "lavender extract" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, and lavender honey. Beat with an electric mixer until smooth.",
      "Add lavender extract. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "brown-butter-pecan-ice-cream",
    title: "Brown Butter Pecan Ice Cream",
    description: "Rich ice cream with nutty brown butter and toasted pecans.",
    image: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "brown butter" },
      { amount: "1 cup", name: "pecans, toasted and chopped" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, and salt. Beat with an electric mixer until smooth.",
      "Add brown butter and pecans. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "lemon-blueberry-ice-cream",
    title: "Lemon Blueberry Ice Cream",
    description: "Tangy lemon ice cream with fresh blueberry swirl.",
    image: "https://images.unsplash.com/photo-1587563974670-b5181b459b30",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "lemon juice" },
      { amount: "1 cup", name: "blueberries" },
      { amount: "1/4 cup", name: "granulated sugar" },
      { amount: "1/4 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, lemon juice, and vanilla extract. Beat with an electric mixer until smooth.",
      "Add blueberries and sugar. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "cardamom-rose-ice-cream",
    title: "Cardamom Rose Ice Cream",
    description: "Fragrant ice cream with cardamom and rose water.",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 tsp", name: "cardamom powder" },
      { amount: "1 tsp", name: "rose water" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, cardamom powder, and rose water. Beat with an electric mixer until smooth.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "ginger-honey-ice-cream",
    title: "Ginger Honey Ice Cream",
    description: "Spicy ginger ice cream sweetened with honey.",
    image: "https://images.pexels.com/photos/6419602/pexels-photo-6419602.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "fresh ginger, grated" },
      { amount: "1/2 cup", name: "honey" },
      { amount: "1 tsp", name: "ground ginger" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, ginger, and honey. Beat with an electric mixer until smooth.",
      "Add ground ginger. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },
  {
    id: "tiramisu-ice-cream",
    title: "Tiramisu Ice Cream",
    description: "Coffee and mascarpone ice cream with chocolate bits.",
    image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.ICE_CREAM,
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "granulated sugar" },
      { amount: "1/8 tsp", name: "salt" },
      { amount: "1/2 cup", name: "strong brewed coffee, cooled" },
      { amount: "16 oz", name: "mascarpone cheese" },
      { amount: "1/4 cup", name: "sugar" },
      { amount: "1/4 tsp", name: "vanilla extract" },
      { amount: "1/4 cup", name: "coffee liqueur" },
      { amount: "1/4 cup", name: "chocolate chips" }
    ],
    instructions: [
      "In a large bowl, combine heavy cream, milk, sugar, salt, and coffee liqueur. Beat with an electric mixer until smooth.",
      "Add mascarpone cheese and chocolate chips. Fold gently until combined.",
      "Pour into a freezer-safe container and freeze for 4-6 hours, or until firm.",
      "Chill the container in the refrigerator for 15 minutes before serving."
    ]
  },

  // Starters
  {
    id: "crispy-calamari",
    title: "Crispy Calamari",
    description: "Golden-fried calamari rings served with a tangy dipping sauce.",
    image: "https://img.freepik.com/free-photo/crispy-calamari-rings-with-sauce_144627-27401.jpg",
    cookTime: "10 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.APPETIZER,
    ingredients: [
      { amount: "1 lb", name: "squid (bodies and tentacles), cleaned and sliced into 1/2-inch rings" },
      { amount: "2 cups", name: "buttermilk" },
      { amount: "2 cups", name: "all-purpose flour" },
      { amount: "1/2 cup", name: "cornstarch" },
      { amount: "1 tsp", name: "salt" },
      { amount: "1 tsp", name: "black pepper" },
      { amount: "1 tsp", name: "garlic powder" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/4 tsp", name: "cayenne pepper" },
      { amount: "Vegetable oil", name: "for frying" },
      { amount: "Lemon wedges", name: "for serving" },
      { amount: "1 cup", name: "marinara sauce, warmed" }
    ],
    instructions: [
      "Place calamari in a bowl with buttermilk and let soak for 30 minutes.",
      "In a separate bowl, combine flour, cornstarch, salt, pepper, garlic powder, paprika, and cayenne pepper.",
      "Heat 2 inches of oil in a large, heavy-bottomed pot to 350°F (175°C).",
      "Working in batches, remove calamari from buttermilk, letting excess drip off, and dredge in the flour mixture.",
      "Carefully add coated calamari to hot oil and fry until golden brown, about 2-3 minutes.",
      "Remove with a slotted spoon and drain on paper towels. Season with additional salt while hot.",
      "Repeat with remaining calamari, ensuring oil temperature returns to 350°F between batches.",
      "Serve immediately with lemon wedges and warm marinara sauce for dipping."
    ]
  },
  // {
  //   id: "bruschetta",
  //   title: "Classic Tomato Bruschetta",
  //   description: "Toasted baguette slices topped with a fresh mixture of diced tomatoes, basil, garlic, and olive oil. A simple Italian appetizer that's always a hit.",
  //   image: "https://images.unsplash.com/photo-1572695157811-69cb2c1e8dc6",
  //   cookTime: "10 minutes",
  //   prepTime: "15 minutes",
  //   servings: 6,
  //   category: RecipeCategory.APPETIZER,
  //   ingredients: [
  //     { amount: "6 slices", name: "crusty bread" },
  //     { amount: "4", name: "tomatoes, diced" },
  //     { amount: "3 cloves", name: "garlic" },
  //     { amount: "1/4 cup", name: "fresh basil" },
  //     { amount: "3 tbsp", name: "olive oil" },
  //     { amount: "1 tbsp", name: "balsamic vinegar" },
  //     { amount: "Salt and pepper", name: "to taste" }
  //   ],
  //   instructions: [
  //     "Toast bread slices.",
  //     "Mix tomatoes with garlic and basil.",
  //     "Season with oil and vinegar.",
  //     "Top bread with mixture.",
  //     "Serve immediately."
  //   ]
  // },
  {
    id: "stuffed-mushrooms",
    title: "Stuffed Mushrooms",
    description: "Mushroom caps filled with a savory mixture of breadcrumbs, herbs, and cheese.",
    image: "https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "20 minutes",
    prepTime: "15 minutes",
    servings: 6,
    category: RecipeCategory.APPETIZER,
    ingredients: [
      { amount: "24", name: "large button mushrooms" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1/2 cup", name: "breadcrumbs" },
      { amount: "1/4 cup", name: "grated Parmesan" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "2 tbsp", name: "fresh parsley, chopped" },
      { amount: "1/4 tsp", name: "dried oregano" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Clean mushrooms and remove stems.",
      "Brush mushrooms with olive oil and place on baking sheet.",
      "Mix breadcrumbs, Parmesan, garlic, parsley, and oregano.",
      "Stuff mixture into mushroom caps.",
      "Bake for 15-20 minutes until golden."
    ]
  },
  {
    id: "spinach-artichoke-dip",
    title: "Spinach and Artichoke Dip",
    description: "Creamy dip with spinach, artichokes, and melted cheese.",
    image: "https://images.pexels.com/photos/6544374/pexels-photo-6544374.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    servings: 8,
    category: RecipeCategory.APPETIZER,
    ingredients: [
      { amount: "1 (10 oz) package", name: "frozen spinach, thawed and drained" },
      { amount: "1 (14 oz) can", name: "artichoke hearts, drained and chopped" },
      { amount: "8 oz", name: "cream cheese, softened" },
      { amount: "1/2 cup", name: "mayonnaise" },
      { amount: "1/2 cup", name: "sour cream" },
      { amount: "1 cup", name: "grated Parmesan" },
      { amount: "1 cup", name: "shredded mozzarella" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Mix all ingredients in a bowl until well combined.",
      "Transfer to a baking dish.",
      "Bake for 25 minutes until hot and bubbly.",
      "Let cool slightly before serving."
    ]
  },

  // Snacks
  {
    id: "spicy-roasted-chickpeas",
    title: "Spicy Roasted Chickpeas",
    description: "Crunchy, spicy roasted chickpeas that make a perfect protein-packed snack or salad topper.",
    image: "https://media.istockphoto.com/id/1547949593/photo/sugar-free-dates-and-nuts-ladoo.jpg?b=1&s=612x612&w=0&k=20&c=ihc2R7Ym6lBfxPPFT-a8TY-pB862VIEa5JvaLVfcCcI=",
    cookTime: "35 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 (15 oz) cans", name: "chickpeas, drained and rinsed" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "garlic powder" },
      { amount: "1 tsp", name: "ground cumin" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/2 tsp", name: "cayenne pepper (adjust to taste)" },
      { amount: "1/2 tsp", name: "salt" },
      { amount: "1/4 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "Spread chickpeas on a clean kitchen towel and gently pat dry, removing any loose skins.",
      "In a bowl, toss chickpeas with olive oil until well coated.",
      "In a small bowl, mix together garlic powder, cumin, paprika, cayenne, salt, and pepper.",
      "Sprinkle spice mixture over chickpeas and toss to coat evenly.",
      "Spread chickpeas in a single layer on the prepared baking sheet.",
      "Roast for 30-35 minutes, shaking the pan halfway through, until chickpeas are golden brown and crispy.",
      "Let cool completely before storing in an airtight container for up to a week."
    ]
  },
  {
    id: "fresh-berry-parfait",
    title: "Fresh Berry Parfait",
    description: "Layered yogurt parfait with fresh berries and granola.",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    cookTime: "0 minutes",
    prepTime: "10 minutes",
    servings: 2,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 cups", name: "Greek yogurt" },
      { amount: "2 tbsp", name: "honey, plus more for drizzling" },
      { amount: "1 cup", name: "mixed berries (strawberries, blueberries, raspberries)" },
      { amount: "1 cup", name: "granola" },
      { amount: "2 tbsp", name: "chopped nuts (optional)" },
      { amount: "2 tsp", name: "chia seeds (optional)" }
    ],
    instructions: [
      "In a small bowl, mix the Greek yogurt with honey until well combined.",
      "In clear serving glasses or bowls, begin layering by placing 2 tablespoons of granola at the bottom.",
      "Add a layer of the honey-sweetened yogurt (about 1/4 cup).",
      "Add a layer of mixed berries.",
      "Repeat the layers, ending with berries on top.",
      "Drizzle with additional honey and sprinkle with chopped nuts and chia seeds if using.",
      "Serve immediately or refrigerate for up to 2 hours before serving."
    ]
  },
  {
    id: "trail-mix",
    title: "Trail Mix",
    description: "A nutritious blend of nuts, dried fruits, and seeds.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
    cookTime: "0 minutes",
    prepTime: "10 minutes",
    servings: 8,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 cup", name: "almonds" },
      { amount: "1 cup", name: "cashews" },
      { amount: "1 cup", name: "dried cranberries" },
      { amount: "1 cup", name: "dried apricots, chopped" },
      { amount: "1 cup", name: "dark chocolate chips" },
      { amount: "1/2 cup", name: "pumpkin seeds" },
      { amount: "1/2 cup", name: "sunflower seeds" }
    ],
    instructions: [
      "Mix all ingredients in a large bowl.",
      "Store in an airtight container.",
      "Can be kept for up to 2 weeks."
    ]
  },
  {
    id: "energy-balls",
    title: "Energy Balls",
    description: "No-bake energy balls packed with nuts, dates, and seeds.",
    image: "https://images.pexels.com/photos/4397920/pexels-photo-4397920.jpeg",
    cookTime: "0 minutes",
    prepTime: "15 minutes",
    servings: 12,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 cup", name: "dates, pitted" },
      { amount: "1 cup", name: "mixed nuts" },
      { amount: "1 cup", name: "old-fashioned oats" },
      { amount: "1/2 cup", name: "chia seeds" },
      { amount: "1/2 cup", name: "flax seeds" },
      { amount: "1/4 cup", name: "honey" },
      { amount: "1/4 cup", name: "peanut butter" }
    ],
    instructions: [
      "Process dates and nuts in a food processor until finely chopped.",
      "Add remaining ingredients and pulse until combined.",
      "Roll into 1-inch balls.",
      "Refrigerate for 30 minutes to set.",
      "Store in an airtight container."
    ]
  },
  // Soups
  {
    id: "creamy-mushroom-soup",
    title: "Creamy Mushroom Soup",
    description: "A rich and velvety mushroom soup made with a blend of wild mushrooms, cream, and fresh herbs. Perfect for a cozy dinner.",
    image: "https://images.pexels.com/photos/24196190/pexels-photo-24196190/free-photo-of-photo-of-soup-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600d",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "2 lbs", name: "mixed mushrooms (cremini, shiitake, oyster)" },
      { amount: "4 tbsp", name: "butter" },
      { amount: "1", name: "large onion, diced" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "2 tbsp", name: "fresh thyme leaves" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Clean and slice mushrooms. Set aside.",
      "In a large pot, melt butter over medium heat. Add onion and garlic, cook until softened.",
      "Add mushrooms and cook until they release their moisture and begin to brown.",
      "Pour in vegetable broth and bring to a simmer.",
      "Cook for 20 minutes, then blend until smooth using an immersion blender.",
      "Stir in heavy cream and thyme. Season with salt and pepper.",
      "Simmer for 5 minutes more before serving."
    ]
  },
  {
    id: "lentil-soup",
    title: "Spiced Lentil Soup",
    description: "A hearty and nutritious lentil soup with warming spices and fresh vegetables. Perfect for a healthy meal.",
    image: "https://images.pexels.com/photos/20422123/pexels-photo-20422123/free-photo-of-food-on-plate-and-soup-in-cup.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "40 minutes",
    prepTime: "15 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "2 cups", name: "red lentils, rinsed" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "large onion, diced" },
      { amount: "2", name: "carrots, diced" },
      { amount: "2", name: "celery stalks, diced" },
      { amount: "4 cloves", name: "garlic, minced" },
      { amount: "1 tbsp", name: "ground cumin" },
      { amount: "1 tsp", name: "ground coriander" },
      { amount: "1/2 tsp", name: "turmeric" },
      { amount: "6 cups", name: "vegetable broth" },
      { amount: "1", name: "lemon, juiced" },
      { amount: "Fresh cilantro", name: "for garnish" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook until vegetables begin to soften.",
      "Add garlic and spices, cook until fragrant.",
      "Add lentils and vegetable broth. Bring to a boil.",
      "Reduce heat and simmer for 30 minutes, until lentils are tender.",
      "Stir in lemon juice and season with salt and pepper.",
      "Garnish with fresh cilantro before serving."
    ]
  },
  {
    id: "chicken-noodle-soup",
    title: "Classic Chicken Noodle Soup",
    description: "A comforting homemade chicken noodle soup with tender chicken, vegetables, and egg noodles.",
    image: "https://images.pexels.com/photos/5338137/pexels-photo-5338137.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "1", name: "whole chicken (about 3-4 lbs)" },
      { amount: "2", name: "carrots, sliced" },
      { amount: "2", name: "celery stalks, sliced" },
      { amount: "1", name: "large onion, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "8 cups", name: "chicken broth" },
      { amount: "8 oz", name: "egg noodles" },
      { amount: "2 tbsp", name: "fresh parsley, chopped" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "In a large pot, combine chicken and broth. Bring to a boil.",
      "Reduce heat and simmer for 30 minutes, until chicken is cooked through.",
      "Remove chicken and let cool. Shred the meat.",
      "Add vegetables to the broth and simmer for 10 minutes.",
      "Add noodles and cook until tender.",
      "Return shredded chicken to the pot.",
      "Season with salt and pepper, garnish with parsley."
    ]
  },
  {
    id: "minestrone-soup",
    title: "Italian Minestrone",
    description: "A hearty Italian vegetable soup with pasta, beans, and fresh herbs. A complete meal in a bowl.",
    image: "https://images.pexels.com/photos/10309490/pexels-photo-10309490.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "large onion, diced" },
      { amount: "2", name: "carrots, diced" },
      { amount: "2", name: "celery stalks, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "1", name: "zucchini, diced" },
      { amount: "1 cup", name: "green beans, cut into 1-inch pieces" },
      { amount: "1 (14 oz) can", name: "diced tomatoes" },
      { amount: "1 (15 oz) can", name: "cannellini beans, drained" },
      { amount: "6 cups", name: "vegetable broth" },
      { amount: "1 cup", name: "small pasta (like ditalini)" },
      { amount: "2 tbsp", name: "fresh basil, chopped" },
      { amount: "Grated Parmesan", name: "for serving" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook until softened.",
      "Add garlic and cook until fragrant.",
      "Add zucchini, green beans, tomatoes, and beans.",
      "Pour in broth and bring to a boil.",
      "Add pasta and cook until al dente.",
      "Stir in basil and season with salt and pepper.",
      "Serve with grated Parmesan."
    ]
  },
  {
    id: "tom-yum-soup",
    title: "Thai Tom Yum Soup",
    description: "A spicy and sour Thai soup with shrimp, mushrooms, and aromatic herbs. Bursting with authentic Thai flavors.",
    image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "4 cups", name: "chicken broth" },
      { amount: "2 stalks", name: "lemongrass, bruised" },
      { amount: "4", name: "kaffir lime leaves" },
      { amount: "2", name: "Thai chilies, sliced" },
      { amount: "1 tbsp", name: "fish sauce" },
      { amount: "1 lb", name: "shrimp, peeled and deveined" },
      { amount: "8 oz", name: "mushrooms, sliced" },
      { amount: "2", name: "tomatoes, wedged" },
      { amount: "1", name: "lime, juiced" },
      { amount: "Fresh cilantro", name: "for garnish" }
    ],
    instructions: [
      "Bring broth to a boil in a large pot.",
      "Add lemongrass, lime leaves, and chilies. Simmer for 5 minutes.",
      "Add mushrooms and cook for 2 minutes.",
      "Add shrimp and cook until pink.",
      "Add tomatoes and cook for 1 minute.",
      "Stir in fish sauce and lime juice.",
      "Garnish with cilantro and serve."
    ]
  },
  {
    id: "butternut-squash-soup",
    title: "Roasted Butternut Squash Soup",
    description: "A creamy and comforting soup made with roasted butternut squash, apples, and warming spices.",
    image: "https://images.unsplash.com/photo-1576749872435-ff88a71c1ae2",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "1 large", name: "butternut squash, peeled and cubed" },
      { amount: "2", name: "apples, peeled and cubed" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1", name: "large onion, diced" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "1 tsp", name: "ground cinnamon" },
      { amount: "1/2 tsp", name: "ground nutmeg" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss squash and apples with olive oil, salt, and pepper.",
      "Roast for 30 minutes until tender.",
      "In a pot, sauté onion until softened.",
      "Add roasted squash, apples, and broth.",
      "Simmer for 15 minutes.",
      "Blend until smooth using an immersion blender.",
      "Stir in cream and spices. Season to taste."
    ]
  },
  {
    id: "gazpacho",
    title: "Classic Gazpacho",
    description: "A refreshing cold Spanish soup made with ripe tomatoes, cucumbers, and peppers. Perfect for hot summer days.",
    image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb",
    cookTime: "0 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "2 lbs", name: "ripe tomatoes, chopped" },
      { amount: "1", name: "cucumber, peeled and chopped" },
      { amount: "1", name: "red bell pepper, chopped" },
      { amount: "1", name: "small red onion, chopped" },
      { amount: "2 cloves", name: "garlic, minced" },
      { amount: "3 tbsp", name: "red wine vinegar" },
      { amount: "1/4 cup", name: "olive oil" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Combine all vegetables in a blender or food processor.",
      "Pulse until desired consistency is reached.",
      "Add vinegar and olive oil, blend until smooth.",
      "Season with salt and pepper.",
      "Chill for at least 2 hours before serving."
    ]
  },
  {
    id: "french-onion-soup",
    title: "Classic French Onion Soup",
    description: "A rich and caramelized onion soup topped with crusty bread and melted cheese. A French bistro classic.",
    image: "https://images.pexels.com/photos/18410573/pexels-photo-18410573/free-photo-of-soup-with-onion-in-pan.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "1 hour",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "4", name: "large yellow onions, thinly sliced" },
      { amount: "4 tbsp", name: "butter" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "4 cups", name: "beef broth" },
      { amount: "1/2 cup", name: "dry white wine" },
      { amount: "1", name: "bay leaf" },
      { amount: "4", name: "slices crusty bread" },
      { amount: "2 cups", name: "grated Gruyère cheese" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Melt butter and olive oil in a large pot over medium heat.",
      "Add onions and cook, stirring occasionally, until deeply caramelized (about 45 minutes).",
      "Add wine and cook until reduced.",
      "Add broth and bay leaf. Simmer for 20 minutes.",
      "Season with salt and pepper.",
      "Top each serving with a slice of bread and grated cheese.",
      "Broil until cheese is melted and bubbly."
    ]
  },
  {
    id: "miso-soup",
    title: "Traditional Miso Soup",
    description: "A light and nourishing Japanese soup with miso paste, tofu, and seaweed. A perfect start to any meal.",
    image: "https://images.pexels.com/photos/31264150/pexels-photo-31264150/free-photo-of-traditional-japanese-miso-soup-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "4 cups", name: "dashi stock" },
      { amount: "1/4 cup", name: "miso paste" },
      { amount: "8 oz", name: "firm tofu, cubed" },
      { amount: "2", name: "green onions, sliced" },
      { amount: "1 sheet", name: "nori, cut into small pieces" },
      { amount: "1 cup", name: "wakame seaweed" }
    ],
    instructions: [
      "Bring dashi stock to a simmer.",
      "Dissolve miso paste in a small amount of hot stock.",
      "Add miso mixture back to the pot.",
      "Add tofu and wakame.",
      "Simmer for 5 minutes.",
      "Garnish with green onions and nori."
    ]
  },
  {
    id: "potato-leek-soup",
    title: "Creamy Potato Leek Soup",
    description: "A velvety smooth soup made with potatoes, leeks, and cream. A comforting classic.",
    image: "https://images.unsplash.com/photo-1616501268209-edfff098fdd2",
    cookTime: "1 hour 30 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "4", name: "large leeks, white and light green parts only, sliced" },
      { amount: "4", name: "potatoes, peeled and diced" },
      { amount: "4 tbsp", name: "butter" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "2 tbsp", name: "fresh chives, chopped" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Melt butter in a large pot over medium heat.",
      "Add leeks and cook until softened.",
      "Add potatoes and broth.",
      "Bring to a boil, then simmer for 20 minutes.",
      "Blend until smooth using an immersion blender.",
      "Stir in cream and season with salt and pepper.",
      "Garnish with chives before serving."
    ]
  },
  {
    id: "split-pea-soup",
    title: "Hearty Split Pea Soup",
    description: "A thick and satisfying soup made with split peas, vegetables, and ham. Perfect for cold days.",
    image: "https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69",
    cookTime: "1 hour 30 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "1 lb", name: "dried split peas" },
      { amount: "1", name: "ham hock or 2 cups diced ham" },
      { amount: "2", name: "carrots, diced" },
      { amount: "2", name: "celery stalks, diced" },
      { amount: "1", name: "large onion, diced" },
      { amount: "8 cups", name: "water or chicken broth" },
      { amount: "2", name: "bay leaves" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Rinse split peas thoroughly.",
      "In a large pot, combine all ingredients.",
      "Bring to a boil, then reduce heat and simmer for 1.5 hours.",
      "Remove ham hock if used, shred meat and return to soup.",
      "Season with salt and pepper.",
      "Serve hot with crusty bread."
    ]
  },
  {
    id: "vegetable-chowder",
    title: "Creamy Vegetable Chowder",
    description: "A rich and creamy chowder packed with fresh vegetables and herbs. A vegetarian comfort food favorite.",
    image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff",
    cookTime: "35 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.SOUP,
    ingredients: [
      { amount: "4 tbsp", name: "butter" },
      { amount: "1", name: "large onion, diced" },
      { amount: "2", name: "carrots, diced" },
      { amount: "2", name: "celery stalks, diced" },
      { amount: "2", name: "potatoes, peeled and diced" },
      { amount: "1 cup", name: "corn kernels" },
      { amount: "1 cup", name: "green beans, cut into 1-inch pieces" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "2 cups", name: "heavy cream" },
      { amount: "2 tbsp", name: "all-purpose flour" },
      { amount: "2 tbsp", name: "fresh thyme leaves" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Melt butter in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook until softened.",
      "Add flour and cook for 2 minutes.",
      "Gradually add broth, stirring constantly.",
      "Add potatoes and simmer for 10 minutes.",
      "Add corn and green beans. Cook for 5 minutes.",
      "Stir in cream and thyme.",
      "Season with salt and pepper.",
      "Simmer for 5 minutes more before serving."
    ]
  },
  {
    id: "vegetable-lasagna",
    title: "Vegetable Lasagna",
    description: "Layers of pasta, roasted vegetables, and creamy ricotta cheese make this vegetarian lasagna a crowd-pleaser.",
    image: "https://images.unsplash.com/photo-1551892269-860b1e482f98",
    cookTime: "45 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "1 package", name: "lasagna noodles" },
      { amount: "2", name: "zucchini, sliced" },
      { amount: "2", name: "yellow squash, sliced" },
      { amount: "1", name: "eggplant, sliced" },
      { amount: "2 cups", name: "mushrooms, sliced" },
      { amount: "15 oz", name: "ricotta cheese" },
      { amount: "2 cups", name: "mozzarella cheese, shredded" },
      { amount: "1 cup", name: "Parmesan cheese, grated" },
      { amount: "2 cups", name: "marinara sauce" },
      { amount: "2", name: "eggs" },
      { amount: "2 tbsp", name: "fresh basil, chopped" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Preheat oven to 375°F. Cook lasagna noodles according to package directions.",
      "Roast sliced vegetables with olive oil, salt, and pepper until tender.",
      "Mix ricotta, 1 cup mozzarella, eggs, and basil. Season with salt and pepper.",
      "Layer: sauce, noodles, ricotta mixture, vegetables. Repeat layers.",
      "Top with remaining mozzarella and Parmesan.",
      "Cover with foil and bake for 25 minutes. Uncover and bake 20 minutes more."
    ]
  },
  {
    id: "thai-green-curry",
    title: "Thai Green Curry with Tofu",
    description: "A fragrant and creamy Thai curry with crispy tofu, colorful vegetables, and aromatic herbs.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "14 oz", name: "firm tofu, cubed" },
      { amount: "2 tbsp", name: "green curry paste" },
      { amount: "1 can", name: "coconut milk" },
      { amount: "1 cup", name: "bamboo shoots" },
      { amount: "1 cup", name: "snap peas" },
      { amount: "1", name: "red bell pepper, sliced" },
      { amount: "1 tbsp", name: "soy sauce" },
      { amount: "1 tbsp", name: "brown sugar" },
      { amount: "Fresh basil", name: "for garnish" }
    ],
    instructions: [
      "Press and drain tofu, then cube and pan-fry until golden.",
      "In a large pan, heat curry paste until fragrant.",
      "Add coconut milk and bring to a simmer.",
      "Add vegetables and cook until tender-crisp.",
      "Stir in tofu, soy sauce, and brown sugar.",
      "Garnish with fresh basil and serve with rice."
    ]
  },
  {
    id: "stuffed-portobello-mushrooms",
    title: "Stuffed Portobello Mushrooms",
    description: "Large portobello mushrooms filled with a savory mixture of breadcrumbs, cheese, and herbs.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: RecipeCategory.VEGETARIAN,
    ingredients: [
      { amount: "4 large", name: "portobello mushrooms" },
      { amount: "1 cup", name: "breadcrumbs" },
      { amount: "1/2 cup", name: "Parmesan cheese" },
      { amount: "1/4 cup", name: "fresh parsley" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Clean mushrooms and remove stems.",
      "Mix breadcrumbs, cheese, parsley, and garlic.",
      "Fill mushrooms with mixture and drizzle with oil.",
      "Bake at 400°F for 20-25 minutes until golden."
    ]
  },
  // {
  //   id: "chocolate-souffle",
  //   title: "Chocolate Soufflé",
  //   description: "Light and airy chocolate soufflé with a molten center.",
  //   image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
  //   cookTime: "15 minutes",
  //   prepTime: "20 minutes",
  //   servings: 4,
  //   category: "Dessert",
  //   ingredients: [
  //     { amount: "4 oz", name: "dark chocolate" },
  //     { amount: "4", name: "egg whites" },
  //     { amount: "2", name: "egg yolks" },
  //     { amount: "1/4 cup", name: "sugar" },
  //     { amount: "2 tbsp", name: "butter" },
  //     { amount: "1 tbsp", name: "flour" },
  //     { amount: "Powdered sugar", name: "for dusting" }
  //   ],
  //   instructions: [
  //     "Melt chocolate and butter.",
  //     "Whip egg whites with sugar.",
  //     "Fold together gently.",
  //     "Bake in ramekins.",
  //     "Serve immediately with sugar."
  //   ]
  // },
  {
    id: "banoffee-pie",
    title: "Banoffee Pie",
    description: "Classic English dessert with toffee, bananas, and whipped cream.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729",
    cookTime: "20 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "graham cracker crumbs" },
      { amount: "1/2 cup", name: "butter, melted" },
      { amount: "1 can", name: "dulce de leche" },
      { amount: "4", name: "bananas, sliced" },
      { amount: "2 cups", name: "heavy cream" },
      { amount: "2 tbsp", name: "sugar" },
      { amount: "Chocolate shavings", name: "for garnish" }
    ],
    instructions: [
      "Make graham cracker crust.",
      "Spread dulce de leche.",
      "Layer with bananas.",
      "Top with whipped cream.",
      "Garnish with chocolate."
    ]
  },
  {
    id: "profiteroles",
    title: "Chocolate Profiteroles",
    description: "Light choux pastry puffs filled with cream and topped with chocolate.",
    image: "https://images.unsplash.com/photo-1605291445244-9ff5e28a5376",
    cookTime: "30 minutes",
    prepTime: "40 minutes",
    servings: 24,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "water" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "1 cup", name: "flour" },
      { amount: "4", name: "eggs" },
      { amount: "2 cups", name: "heavy cream" },
      { amount: "8 oz", name: "chocolate" }
    ],
    instructions: [
      "Make choux pastry.",
      "Pipe and bake puffs.",
      "Fill with whipped cream.",
      "Make chocolate sauce.",
      "Drizzle with chocolate."
    ]
  },
  {
    id: "fruit-trifle",
    title: "Berry Trifle",
    description: "Layered dessert with cake, custard, berries, and whipped cream.",
    image: "https://images.pexels.com/photos/31378021/pexels-photo-31378021/free-photo-of-delicious-berry-dessert-on-white-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "30 minutes",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1", name: "pound cake" },
      { amount: "4 cups", name: "mixed berries" },
      { amount: "3 cups", name: "vanilla custard" },
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1/4 cup", name: "sugar" },
      { amount: "2 tbsp", name: "berry liqueur" }
    ],
    instructions: [
      "Cut cake into layers.",
      "Make custard and cool.",
      "Layer cake, berries, custard.",
      "Top with whipped cream.",
      "Chill before serving."
    ]
  },
  {
    id: "cannoli",
    title: "Classic Cannoli",
    description: "Crispy Italian pastry tubes filled with sweet ricotta cream.",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023",
    cookTime: "30 minutes",
    prepTime: "1 hour",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "flour" },
      { amount: "2 tbsp", name: "sugar" },
      { amount: "1/4 cup", name: "cold butter" },
      { amount: "2", name: "eggs" },
      { amount: "15 oz", name: "ricotta cheese" },
      { amount: "1/2 cup", name: "powdered sugar" },
      { amount: "1/2 cup", name: "mini chocolate chips" }
    ],
    instructions: [
      "Make cannoli dough.",
      "Form and fry shells.",
      "Mix ricotta filling.",
      "Pipe filling into shells.",
      "Dust with powdered sugar."
    ]
  },
  {
    id: "carrot-cake",
    title: "Classic Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting and walnuts.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    cookTime: "45 minutes",
    prepTime: "30 minutes",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "flour" },
      { amount: "2 cups", name: "grated carrots" },
      { amount: "1 cup", name: "vegetable oil" },
      { amount: "4", name: "eggs" },
      { amount: "2 cups", name: "sugar" },
      { amount: "1 cup", name: "chopped walnuts" },
      { amount: "8 oz", name: "cream cheese" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "3 cups", name: "powdered sugar" }
    ],
    instructions: [
      "Mix wet and dry ingredients.",
      "Fold in carrots and nuts.",
      "Bake in prepared pan.",
      "Make cream cheese frosting.",
      "Frost cooled cake."
    ]
  },
  {
    id: "apple-strudel",
    title: "Apple Strudel",
    description: "Traditional Austrian pastry with spiced apples and raisins.",
    image: "https://images.unsplash.com/photo-1630953899906-d16511a72558",
    cookTime: "45 minutes",
    prepTime: "1 hour",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6", name: "apples, sliced" },
      { amount: "1/2 cup", name: "raisins" },
      { amount: "1/2 cup", name: "walnuts" },
      { amount: "1 cup", name: "sugar" },
      { amount: "1 tsp", name: "cinnamon" },
      { amount: "1 package", name: "phyllo dough" },
      { amount: "1/2 cup", name: "butter, melted" }
    ],
    instructions: [
      "Mix apple filling.",
      "Layer phyllo sheets.",
      "Add filling and roll.",
      "Brush with butter.",
      "Bake until golden."
    ]
  },
  {
    id: "chocolate-eclairs",
    title: "Chocolate Éclairs",
    description: "Choux pastry filled with vanilla cream and topped with chocolate.",
    image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c",
    cookTime: "35 minutes",
    prepTime: "45 minutes",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "water" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "1 cup", name: "flour" },
      { amount: "4", name: "eggs" },
      { amount: "2 cups", name: "milk" },
      { amount: "1/2 cup", name: "sugar" },
      { amount: "4 oz", name: "dark chocolate" }
    ],
    instructions: [
      "Make choux pastry.",
      "Pipe into logs.",
      "Bake until hollow.",
      "Fill with pastry cream.",
      "Top with chocolate."
    ]
  },
  {
    id: "peach-cobbler",
    title: "Southern Peach Cobbler",
    description: "Warm peach dessert with buttery biscuit topping.",
    image: "https://images.unsplash.com/photo-1639744091981-2f826321fae6",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6 cups", name: "peaches, sliced" },
      { amount: "1 cup", name: "sugar" },
      { amount: "1 tbsp", name: "lemon juice" },
      { amount: "2 cups", name: "flour" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "1/2 cup", name: "milk" },
      { amount: "2 tsp", name: "baking powder" }
    ],
    instructions: [
      "Prepare peach filling.",
      "Make biscuit topping.",
      "Layer in baking dish.",
      "Bake until bubbly.",
      "Serve warm with ice cream."
    ]
  },
  {
    id: "rice-pudding",
    title: "Creamy Rice Pudding",
    description: "Classic comfort dessert with vanilla and cinnamon.",
    image: "https://images.pexels.com/photos/8053828/pexels-photo-8053828.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "45 minutes",
    prepTime: "10 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "arborio rice" },
      { amount: "4 cups", name: "whole milk" },
      { amount: "1/2 cup", name: "sugar" },
      { amount: "1", name: "vanilla bean" },
      { amount: "1/4 tsp", name: "salt" },
      { amount: "Ground cinnamon", name: "for serving" }
    ],
    instructions: [
      "Combine rice and milk.",
      "Add sugar and vanilla.",
      "Simmer until creamy.",
      "Let rest to thicken.",
      "Serve with cinnamon."
    ]
  },
  {
    id: "churros",
    title: "Spanish Churros",
    description: "Crispy fried dough served with chocolate sauce.",
    image: "https://images.pexels.com/photos/9501468/pexels-photo-9501468.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 cup", name: "water" },
      { amount: "2 tbsp", name: "sugar" },
      { amount: "1/2 tsp", name: "salt" },
      { amount: "1 cup", name: "flour" },
      { amount: "2", name: "eggs" },
      { amount: "Oil", name: "for frying" },
      { amount: "1/2 cup", name: "sugar with cinnamon" },
      { amount: "8 oz", name: "chocolate for dipping" }
    ],
    instructions: [
      "Make choux pastry dough.",
      "Pipe into hot oil.",
      "Fry until golden.",
      "Roll in cinnamon sugar.",
      "Serve with chocolate sauce."
    ]
  },
  {
    id: "cheesecake",
    title: "New York Cheesecake",
    description: "Classic creamy cheesecake with graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "graham cracker crumbs" },
      { amount: "1/2 cup", name: "butter, melted" },
      { amount: "32 oz", name: "cream cheese" },
      { amount: "1 1/2 cups", name: "sugar" },
      { amount: "4", name: "eggs" },
      { amount: "1 cup", name: "sour cream" },
      { amount: "2 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Make graham cracker crust.",
      "Beat cream cheese filling.",
      "Pour into crust.",
      "Bake in water bath.",
      "Cool and chill overnight."
    ]
  },
  {
    id: "creme-caramel",
    title: "Crème Caramel",
    description: "Silky smooth custard with caramel sauce.",
    image: "https://images.pexels.com/photos/5060468/pexels-photo-5060468.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    servings: 6,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "whole milk" },
      { amount: "1 cup", name: "sugar" },
      { amount: "4", name: "eggs" },
      { amount: "2", name: "egg yolks" },
      { amount: "1 tsp", name: "vanilla extract" },
      { amount: "1/2 cup", name: "sugar for caramel" }
    ],
    instructions: [
      "Make caramel in molds.",
      "Prepare custard mixture.",
      "Pour into molds.",
      "Bake in water bath.",
      "Chill and unmold."
    ]
  },
  {
    id: "black-forest-cake",
    title: "Black Forest Cake",
    description: "German chocolate cake with cherries and whipped cream.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
    cookTime: "40 minutes",
    prepTime: "1 hour",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "flour" },
      { amount: "2 cups", name: "sugar" },
      { amount: "3/4 cup", name: "cocoa powder" },
      { amount: "4", name: "eggs" },
      { amount: "1 cup", name: "milk" },
      { amount: "2 cups", name: "cherries" },
      { amount: "2 cups", name: "heavy cream" },
      { amount: "Chocolate shavings", name: "for decoration" }
    ],
    instructions: [
      "Make chocolate cake layers.",
      "Prepare cherry filling.",
      "Whip cream for frosting.",
      "Layer cake and cherries.",
      "Decorate with chocolate."
    ]
  },
  {
    id: "mille-feuille",
    title: "Mille-Feuille",
    description: "French pastry with layers of puff pastry and vanilla cream.",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f",
    cookTime: "30 minutes",
    prepTime: "1 hour",
    servings: 8,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "1 package", name: "puff pastry" },
      { amount: "2 cups", name: "milk" },
      { amount: "1/2 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1/4 cup", name: "cornstarch" },
      { amount: "1", name: "vanilla bean" },
      { amount: "Powdered sugar", name: "for dusting" }
    ],
    instructions: [
      "Bake puff pastry sheets.",
      "Make vanilla pastry cream.",
      "Layer pastry and cream.",
      "Chill until set.",
      "Dust with powdered sugar."
    ]
  },
  {
    id: "opera-cake",
    title: "Opéra Cake",
    description: "Elegant French cake with layers of almond sponge, coffee buttercream, and chocolate ganache.",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2",
    cookTime: "1 hour",
    prepTime: "2 hours",
    servings: 12,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "6", name: "eggs" },
      { amount: "1 cup", name: "almond flour" },
      { amount: "1 cup", name: "powdered sugar" },
      { amount: "3/4 cup", name: "flour" },
      { amount: "1 cup", name: "butter" },
      { amount: "8 oz", name: "dark chocolate" },
      { amount: "1/2 cup", name: "strong coffee" },
      { amount: "1 cup", name: "heavy cream" }
    ],
    instructions: [
      "Make almond sponge layers.",
      "Prepare coffee buttercream.",
      "Make chocolate ganache.",
      "Layer cake components.",
      "Glaze with chocolate."
    ]
  },
  {
    id: "lemon-bars",
    title: "Classic Lemon Bars",
    description: "Buttery shortbread crust topped with tangy lemon curd.",
    image: "https://images.pexels.com/photos/6542761/pexels-photo-6542761.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "45 minutes",
    prepTime: "15 minutes",
    servings: 16,
    category: RecipeCategory.DESSERT,
    ingredients: [
      { amount: "2 cups", name: "flour" },
      { amount: "1/2 cup", name: "powdered sugar" },
      { amount: "1 cup", name: "butter" },
      { amount: "4", name: "eggs" },
      { amount: "2 cups", name: "sugar" },
      { amount: "1/3 cup", name: "lemon juice" },
      { amount: "2 tbsp", name: "lemon zest" }
    ],
    instructions: [
      "Make shortbread base.",
      "Prepare lemon filling.",
      "Pour over crust.",
      "Bake until set.",
      "Dust with powdered sugar."
    ]
  },
  {
    id: "chocolate-truffles",
    title: "Dark Chocolate Truffles",
    description: "Rich chocolate ganache truffles rolled in cocoa powder.",
    image: "https://images.unsplash.com/photo-1548741487-18d363dc4469",
    cookTime: "15 minutes",
    prepTime: "30 minutes",
    servings: 24,
    category: "Dessert",
    ingredients: [
      { amount: "12 oz", name: "dark chocolate" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "2 tbsp", name: "butter" },
      { amount: "1 tsp", name: "vanilla extract" },
      { amount: "1/2 cup", name: "cocoa powder" },
      { amount: "Optional", name: "nuts for coating" }
    ],
    instructions: [
      "Make chocolate ganache.",
      "Chill until firm.",
      "Roll into balls.",
      "Coat in cocoa powder.",
      "Keep refrigerated."
    ]
  },
  {
    id: "apple-pie",
    title: "Classic Apple Pie",
    description: "Traditional American pie with spiced apple filling and flaky crust.",
    image: "https://images.pexels.com/photos/14478394/pexels-photo-14478394.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "1 hour",
    prepTime: "45 minutes",
    servings: 8,
    category: "Dessert",
    ingredients: [
      { amount: "6 cups", name: "apples, sliced" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "2 tbsp", name: "flour" },
      { amount: "1 tsp", name: "cinnamon" },
      { amount: "1/4 tsp", name: "nutmeg" },
      { amount: "2", name: "pie crusts" },
      { amount: "2 tbsp", name: "butter" }
    ],
    instructions: [
      "Prepare pie crust.",
      "Mix apple filling.",
      "Fill and top pie.",
      "Bake until golden.",
      "Cool before serving."
    ]
  },
  {
    id: "butter-chicken",
    title: "Classic Butter Chicken",
    description: "Rich and creamy Indian curry with tender chicken pieces in a tomato-based sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    cookTime: "45 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Non-Vegetarian",
    ingredients: [
      { amount: "1.5 lbs", name: "chicken thighs, boneless" },
      { amount: "1 cup", name: "yogurt" },
      { amount: "2 tbsp", name: "ginger-garlic paste" },
      { amount: "2 tbsp", name: "garam masala" },
      { amount: "2 cups", name: "tomato puree" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "1/2 cup", name: "butter" },
      { amount: "1 tbsp", name: "kasuri methi" }
    ],
    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Cook chicken until golden brown.",
      "Make sauce with tomatoes and cream.",
      "Simmer until thick and creamy.",
      "Finish with butter and kasuri methi."
    ]
  },
  {
    id: "mushroom-risotto",
    title: "Wild Mushroom Risotto",
    description: "Creamy Italian risotto with assorted wild mushrooms and Parmesan.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: "Vegetarian",
    ingredients: [
      { amount: "1.5 cups", name: "arborio rice" },
      { amount: "4 cups", name: "vegetable broth" },
      { amount: "1 lb", name: "mixed mushrooms" },
      { amount: "1/2 cup", name: "white wine" },
      { amount: "1/2 cup", name: "Parmesan cheese" },
      { amount: "2 tbsp", name: "butter" },
      { amount: "1", name: "onion, diced" },
      { amount: "2 cloves", name: "garlic, minced" }
    ],
    instructions: [
      "Sauté mushrooms until golden.",
      "Cook onion and garlic in butter.",
      "Add rice and wine, stir until absorbed.",
      "Gradually add hot broth, stirring.",
      "Finish with Parmesan and butter."
    ]
  },
  {
    id: "spring-rolls",
    title: "Vietnamese Spring Rolls",
    description: "Fresh rice paper rolls with shrimp, herbs, and rice noodles.",
    image: "https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "20 minutes",
    prepTime: "30 minutes",
    servings: 8,
    category: "Starter",
    ingredients: [
      { amount: "16", name: "rice paper wrappers" },
      { amount: "16", name: "large shrimp, cooked" },
      { amount: "4 oz", name: "rice vermicelli" },
      { amount: "1 cup", name: "fresh mint leaves" },
      { amount: "1 cup", name: "fresh cilantro" },
      { amount: "2", name: "carrots, julienned" },
      { amount: "1", name: "cucumber, julienned" },
      { amount: "1 cup", name: "peanut sauce" }
    ],
    instructions: [
      "Cook and cool rice noodles.",
      "Prepare all vegetables and herbs.",
      "Soak rice paper until soft.",
      "Layer ingredients and roll tightly.",
      "Serve with peanut sauce."
    ]
  },
  // {
  //   id: "chocolate-souffle",
  //   title: "Dark Chocolate Soufflé",
  //   description: "Light and airy chocolate dessert that rises beautifully.",
  //   image: "https://images.unsplash.com/photo-your-souffle-image",
  //   cookTime: "15 minutes",
  //   prepTime: "20 minutes",
  //   servings: 4,
  //   category: "Dessert",
  //   ingredients: [
  //     { amount: "4 oz", name: "dark chocolate" },
  //     { amount: "4", name: "egg whites" },
  //     { amount: "2", name: "egg yolks" },
  //     { amount: "1/4 cup", name: "sugar" },
  //     { amount: "2 tbsp", name: "butter" },
  //     { amount: "1 tbsp", name: "flour" },
  //     { amount: "Powdered sugar", name: "for dusting" }
  //   ],
  //   instructions: [
  //     "Melt chocolate and butter.",
  //     "Whip egg whites with sugar.",
  //     "Fold together gently.",
  //     "Bake in ramekins.",
  //     "Serve immediately with sugar."
  //   ]
  // },
  {
    id: "fish-tacos",
    title: "Baja Fish Tacos",
    description: "Crispy battered fish tacos with slaw and lime crema.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    servings: 4,
    category: "Non-Vegetarian",
    ingredients: [
      { amount: "1 lb", name: "white fish fillets" },
      { amount: "1 cup", name: "flour" },
      { amount: "1 cup", name: "beer" },
      { amount: "2 cups", name: "cabbage slaw" },
      { amount: "1 cup", name: "Mexican crema" },
      { amount: "8", name: "corn tortillas" },
      { amount: "2", name: "limes" },
      { amount: "Fresh cilantro", name: "for garnish" }
    ],
    instructions: [
      "Make beer batter and coat fish.",
      "Fry until golden brown.",
      "Warm tortillas.",
      "Assemble with slaw and crema.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "shakshuka",
    title: "Mediterranean Shakshuka",
    description: "Eggs poached in a flavorful tomato sauce with peppers and Middle Eastern spices.",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    servings: 4,
    category: "Vegetarian",
    ingredients: [
      { amount: "6", name: "eggs" },
      { amount: "2 cans", name: "diced tomatoes" },
      { amount: "2", name: "bell peppers, diced" },
      { amount: "1", name: "onion, diced" },
      { amount: "3 cloves", name: "garlic, minced" },
      { amount: "2 tsp", name: "paprika" },
      { amount: "1 tsp", name: "cumin" },
      { amount: "Fresh parsley", name: "for garnish" }
    ],
    instructions: [
      "Sauté onions and peppers.",
      "Add tomatoes and spices.",
      "Create wells and add eggs.",
      "Cover and cook until set.",
      "Garnish with parsley."
    ]
  },
  // {
  //   id: "baklava",
  //   title: "Honey Walnut Baklava",
  //   description: "Layers of flaky phyllo dough filled with walnuts and honey syrup.",
  //   image: "https://images.unsplash.com/photo-baklava",
  //   cookTime: "45 minutes",
  //   prepTime: "30 minutes",
  //   servings: 12,
  //   category: "Dessert",
  //   ingredients: [
  //     { amount: "1 package", name: "phyllo dough" },
  //     { amount: "4 cups", name: "walnuts, chopped" },
  //     { amount: "1 cup", name: "butter, melted" },
  //     { amount: "1 cup", name: "honey" },
  //     { amount: "1 cup", name: "water" },
  //     { amount: "1 cup", name: "sugar" },
  //     { amount: "1 tsp", name: "cinnamon" },
  //     { amount: "1 tsp", name: "vanilla extract" }
  //   ],
  //   instructions: [
  //     "Layer phyllo with butter.",
  //     "Mix nuts with cinnamon.",
  //     "Layer nut mixture between phyllo.",
  //     "Bake until golden.",
  //     "Pour honey syrup over hot baklava."
  //   ]
  // },
  {
    id: "pad-thai",
    title: "Classic Pad Thai",
    description: "Traditional Thai stir-fried rice noodles with tofu, shrimp, and peanuts.",
    image: "https://images.pexels.com/photos/27672712/pexels-photo-27672712/free-photo-of-a-plate-of-food-with-noodles-and-shrimp-on-it.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "20 minutes",
    prepTime: "30 minutes",
    servings: 4,
    category: "Non-Vegetarian",
    ingredients: [
      { amount: "8 oz", name: "rice noodles" },
      { amount: "8 oz", name: "shrimp" },
      { amount: "8 oz", name: "tofu, cubed" },
      { amount: "2", name: "eggs" },
      { amount: "1 cup", name: "bean sprouts" },
      { amount: "1/2 cup", name: "peanuts, crushed" },
      { amount: "3 tbsp", name: "tamarind paste" },
      { amount: "2 tbsp", name: "fish sauce" }
    ],
    instructions: [
      "Soak noodles until soft.",
      "Stir-fry shrimp and tofu.",
      "Add eggs and scramble.",
      "Toss with sauce and noodles.",
      "Garnish with peanuts and lime."
    ]
  },
  {
    id: "bruschetta",
    title: "Classic Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, basil, and garlic.",
    image: "https://images.pexels.com/photos/2138849/pexels-photo-2138849.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "10 minutes",
    prepTime: "15 minutes",
    servings: 6,
    category: "Starter",
    ingredients: [
      { amount: "6 slices", name: "crusty bread" },
      { amount: "4", name: "tomatoes, diced" },
      { amount: "3 cloves", name: "garlic" },
      { amount: "1/4 cup", name: "fresh basil" },
      { amount: "3 tbsp", name: "olive oil" },
      { amount: "1 tbsp", name: "balsamic vinegar" },
      { amount: "Salt and pepper", name: "to taste" }
    ],
    instructions: [
      "Toast bread slices.",
      "Mix tomatoes with garlic and basil.",
      "Season with oil and vinegar.",
      "Top bread with mixture.",
      "Serve immediately."
    ]
  },
  {
    id: "saffron-rose-ice-cream",
    title: "Saffron Rose Ice Cream",
    description: "Luxurious ice cream infused with saffron and rose water, topped with pistachios.",
    image: "https://images.pexels.com/photos/29989975/pexels-photo-29989975/free-photo-of-gourmet-ice-cream-dessert-with-edible-flowers.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "25 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1/4 tsp", name: "saffron threads" },
      { amount: "2 tbsp", name: "rose water" },
      { amount: "1/4 cup", name: "pistachios, chopped" },
      { amount: "1/4 tsp", name: "salt" }
    ],
    instructions: [
      "Steep saffron in warm cream.",
      "Make custard base with egg yolks.",
      "Add rose water and chill.",
      "Churn in ice cream maker.",
      "Fold in pistachios and freeze."
    ]
  },
  {
    id: "salted-caramel-pretzel-ice-cream",
    title: "Salted Caramel Pretzel Ice Cream",
    description: "Rich caramel ice cream with salty pretzel pieces and chocolate swirls.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "1 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1 cup", name: "pretzels, crushed" },
      { amount: "1/2 cup", name: "chocolate sauce" },
      { amount: "1 tsp", name: "sea salt" },
      { amount: "1 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Make caramel with sugar.",
      "Prepare custard base.",
      "Add vanilla and salt.",
      "Churn in ice cream maker.",
      "Layer with pretzels and chocolate."
    ]
  },
  {
    id: "mango-sticky-rice-ice-cream",
    title: "Mango Sticky Rice Ice Cream",
    description: "Thai-inspired ice cream with sweet sticky rice and fresh mango.",
    image: "https://images.pexels.com/photos/20187175/pexels-photo-20187175/free-photo-of-mango-and-rice-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1 cup", name: "cooked sticky rice" },
      { amount: "2", name: "ripe mangoes" },
      { amount: "1/2 cup", name: "coconut milk" },
      { amount: "1/4 tsp", name: "salt" }
    ],
    instructions: [
      "Cook sticky rice with coconut milk.",
      "Make vanilla custard base.",
      "Fold in sticky rice.",
      "Churn in ice cream maker.",
      "Layer with fresh mango."
    ]
  },
  {
    id: "chocolate-hazelnut-swirl-ice-cream",
    title: "Chocolate Hazelnut Swirl Ice Cream",
    description: "Rich chocolate ice cream with hazelnut swirl and chocolate chunks.",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "8 oz", name: "dark chocolate" },
      { amount: "1/2 cup", name: "hazelnut spread" },
      { amount: "1/2 cup", name: "hazelnuts, chopped" },
      { amount: "1 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Melt chocolate for base.",
      "Make custard mixture.",
      "Prepare hazelnut swirl.",
      "Churn in ice cream maker.",
      "Layer with hazelnut spread."
    ]
  },
  {
    id: "lemon-meringue-ice-cream",
    title: "Lemon Meringue Ice Cream",
    description: "Tangy lemon ice cream with meringue pieces and lemon curd swirl.",
    image: "https://images.unsplash.com/photo-1587563974670-b5181b459b30",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "3", name: "lemons, zested and juiced" },
      { amount: "1/2 cup", name: "meringue cookies" },
      { amount: "1/2 cup", name: "lemon curd" },
      { amount: "1/4 tsp", name: "salt" }
    ],
    instructions: [
      "Make lemon custard base.",
      "Prepare lemon curd.",
      "Crush meringue cookies.",
      "Churn in ice cream maker.",
      "Layer with curd and meringue."
    ]
  },
  {
    id: "coconut-pandan-ice-cream",
    title: "Coconut Pandan Ice Cream",
    description: "Southeast Asian-inspired ice cream with coconut milk and pandan leaf flavor.",
    image: "https://images.pexels.com/photos/7856754/pexels-photo-7856754.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "coconut milk" },
      { amount: "1 cup", name: "heavy cream" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "4", name: "pandan leaves" },
      { amount: "1/4 cup", name: "shredded coconut" },
      { amount: "1/4 tsp", name: "salt" }
    ],
    instructions: [
      "Steep pandan leaves in coconut milk.",
      "Make custard base with egg yolks.",
      "Add coconut milk mixture.",
      "Churn in ice cream maker.",
      "Fold in shredded coconut."
    ]
  },
  {
    id: "raspberry-white-chocolate-ice-cream",
    title: "Raspberry White Chocolate Ice Cream",
    description: "Creamy white chocolate ice cream with fresh raspberry swirls.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "8 oz", name: "white chocolate" },
      { amount: "2 cups", name: "fresh raspberries" },
      { amount: "1/4 cup", name: "sugar" },
      { amount: "1 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Melt white chocolate in cream.",
      "Make custard base.",
      "Prepare raspberry sauce.",
      "Churn in ice cream maker.",
      "Layer with raspberry sauce."
    ]
  },
  {
    id: "chai-spiced-ice-cream",
    title: "Chai Spiced Ice Cream",
    description: "Warmly spiced ice cream with black tea and traditional chai spices.",
    image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "4", name: "black tea bags" },
      { amount: "2", name: "cinnamon sticks" },
      { amount: "1 tsp", name: "cardamom pods" },
      { amount: "1/2 tsp", name: "ground ginger" }
    ],
    instructions: [
      "Steep tea and spices in cream.",
      "Make custard base.",
      "Strain out tea and spices.",
      "Churn in ice cream maker.",
      "Freeze until firm."
    ]
  },
  {
    id: "peanut-butter-banana-ice-cream",
    title: "Peanut Butter Banana Ice Cream",
    description: "Creamy peanut butter ice cream with ripe banana swirls.",
    image: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1 cup", name: "creamy peanut butter" },
      { amount: "3", name: "ripe bananas" },
      { amount: "1/4 cup", name: "honey" },
      { amount: "1/2 cup", name: "chocolate chips" }
    ],
    instructions: [
      "Make peanut butter custard base.",
      "Prepare banana puree.",
      "Add honey to banana mixture.",
      "Churn in ice cream maker.",
      "Fold in chocolate chips."
    ]
  },
  // {
  //   id: "mint-chocolate-chip-ice-cream",
  //   title: "Fresh Mint Chocolate Chip Ice Cream",
  //   description: "Homemade mint ice cream with dark chocolate chips.",
  //   image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7",
  //   cookTime: "30 minutes",
  //   prepTime: "25 minutes",
  //   servings: 6,
  //   category: "Ice Cream",
  //   ingredients: [
  //     { amount: "2 cups", name: "heavy cream" },
  //     { amount: "1 cup", name: "whole milk" },
  //     { amount: "3/4 cup", name: "sugar" },
  //     { amount: "4", name: "egg yolks" },
  //     { amount: "1 cup", name: "fresh mint leaves" },
  //     { amount: "1/2 cup", name: "dark chocolate chips" },
  //     { amount: "1/4 tsp", name: "peppermint extract" }
  //   ],
  //   instructions: [
  //     "Steep mint leaves in cream.",
  //     "Make custard base.",
  //     "Strain out mint leaves.",
  //     "Churn in ice cream maker.",
  //     "Add chocolate chips."
  //   ]
  // },
  {
    id: "coffee-cookie-crumble-ice-cream",
    title: "Coffee Cookie Crumble Ice Cream",
    description: "Rich coffee ice cream with chocolate cookie pieces.",
    image: "https://images.pexels.com/photos/27548806/pexels-photo-27548806/free-photo-of-a-black-coffee-cup-with-a-spoon-on-top.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "30 minutes",
    prepTime: "25 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1/4 cup", name: "instant espresso powder" },
      { amount: "1 cup", name: "chocolate cookies, crushed" },
      { amount: "1/2 cup", name: "chocolate sauce" }
    ],
    instructions: [
      "Dissolve espresso in cream.",
      "Make custard base.",
      "Crush cookies coarsely.",
      "Churn in ice cream maker.",
      "Layer with cookies and sauce."
    ]
  },
  {
    id: "strawberry-balsamic-ice-cream",
    title: "Strawberry Balsamic Ice Cream",
    description: "Sweet strawberry ice cream with a tangy balsamic swirl.",
    image: "https://images.pexels.com/photos/27548814/pexels-photo-27548814/free-photo-of-a-drink-with-strawberries-and-cream-on-top.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "2 cups", name: "fresh strawberries" },
      { amount: "1/4 cup", name: "balsamic vinegar" },
      { amount: "1/4 cup", name: "honey" }
    ],
    instructions: [
      "Make vanilla custard base.",
      "Prepare strawberry puree.",
      "Reduce balsamic with honey.",
      "Churn in ice cream maker.",
      "Layer with balsamic reduction."
    ]
  },
  {
    id: "cinnamon-roll-ice-cream",
    title: "Cinnamon Roll Ice Cream",
    description: "Cinnamon-spiced ice cream with cream cheese frosting swirl.",
    image: "https://images.pexels.com/photos/5662372/pexels-photo-5662372.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "2 tbsp", name: "ground cinnamon" },
      { amount: "4 oz", name: "cream cheese" },
      { amount: "1/2 cup", name: "powdered sugar" },
      { amount: "1/2 cup", name: "vanilla extract" }
    ],
    instructions: [
      "Make cinnamon custard base.",
      "Prepare cream cheese frosting.",
      "Churn in ice cream maker.",
      "Layer with frosting swirl.",
      "Freeze until firm."
    ]
  },
  {
    id: "s'mores-ice-cream",
    title: "S'mores Ice Cream",
    description: "Graham cracker ice cream with marshmallow swirl and chocolate chunks.",
    image: "https://images.pexels.com/photos/15690929/pexels-photo-15690929/free-photo-of-ice-cream-with-jam-in-bowl-on-table.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "35 minutes",
    prepTime: "30 minutes",
    servings: 6,
    category: "Ice Cream",
    ingredients: [
      { amount: "2 cups", name: "heavy cream" },
      { amount: "1 cup", name: "whole milk" },
      { amount: "3/4 cup", name: "sugar" },
      { amount: "4", name: "egg yolks" },
      { amount: "1 cup", name: "graham cracker crumbs" },
      { amount: "1 cup", name: "mini marshmallows" },
      { amount: "1/2 cup", name: "chocolate chunks" },
      { amount: "1/4 cup", name: "honey" }
    ],
    instructions: [
      "Make vanilla custard base.",
      "Toast marshmallows until golden.",
      "Mix graham cracker crumbs with honey.",
      "Churn in ice cream maker.",
      "Layer with marshmallows and chocolate."
    ]
  },
  // {
  //   id: "creamy-mushroom-risotto",
  //   title: "Creamy Mushroom Risotto",
  //   description: "A luxurious Italian risotto with mixed mushrooms, fresh herbs, and Parmesan cheese.",
  //   image: "https://images.unsplash.com/photo-mushroom-risotto",
  //   cookTime: "35 minutes",
  //   prepTime: "15 minutes",
  //   servings: 4,
  //   category: "Vegetarian",
  //   ingredients: [
  //     { amount: "6 cups", name: "vegetable broth" },
  //     { amount: "2 tbsp", name: "olive oil" },
  //     { amount: "1", name: "onion, finely chopped" },
  //     { amount: "3 cloves", name: "garlic, minced" },
  //     { amount: "1 lb", name: "mixed mushrooms, sliced" },
  //     { amount: "1 1/2 cups", name: "arborio rice" },
  //     { amount: "1/2 cup", name: "dry white wine" },
  //     { amount: "1/2 cup", name: "grated Parmesan cheese" },
  //     { amount: "2 tbsp", name: "butter" },
  //     { amount: "2 tbsp", name: "fresh parsley, chopped" },
  //     { amount: "Salt and pepper", name: "to taste" }
  //   ],
  //   instructions: [
  //     "Bring vegetable broth to a simmer in a saucepan.",
  //     "Heat olive oil in a large pan over medium heat. Add onion and cook until softened.",
  //     "Add garlic and mushrooms, cook until mushrooms release their moisture.",
  //     "Add rice and toast for 1-2 minutes.",
  //     "Pour in wine and stir until absorbed.",
  //     "Add broth one ladle at a time, stirring until absorbed.",
  //     "When rice is creamy, stir in Parmesan, butter, and parsley. Season with salt and pepper."
  //   ]
  // },
  // {
  //   id: "classic-baklava",
  //   title: "Classic Baklava",
  //   description: "Layers of phyllo dough filled with nuts and honey syrup.",
  //   image: "https://images.unsplash.com/photo-baklava",
  //   cookTime: "45 minutes",
  //   prepTime: "30 minutes",
  //   servings: 12,
  //   category: "Dessert",
  //   ingredients: [
  //     { amount: "1 package", name: "phyllo dough" },
  //     { amount: "4 cups", name: "mixed nuts, finely chopped" },
  //     { amount: "1 cup", name: "butter, melted" },
  //     { amount: "1 cup", name: "sugar" },
  //     { amount: "1 cup", name: "honey" },
  //     { amount: "1 tsp", name: "cinnamon" },
  //     { amount: "1/2 cup", name: "water" }
  //   ],
  //   instructions: [
  //     "Layer phyllo with butter.",
  //     "Add nut mixture between layers.",
  //     "Cut into diamonds.",
  //     "Bake until golden.",
  //     "Pour honey syrup over hot baklava."
  //   ]
  // }
  {
    id: "spiced-roasted-nuts",
    title: "Spiced Roasted Mixed Nuts",
    description: "A savory blend of mixed nuts roasted with aromatic spices.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: "15 minutes",
    prepTime: "5 minutes",
    servings: 8,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 cups", name: "mixed nuts (almonds, cashews, pecans)" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "smoked paprika" },
      { amount: "1 tsp", name: "ground cumin" },
      { amount: "1/2 tsp", name: "cayenne pepper" },
      { amount: "1 tsp", name: "sea salt" },
      { amount: "2 tbsp", name: "fresh rosemary, chopped" }
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Mix all nuts with oil and spices in a bowl.",
      "Spread on a baking sheet.",
      "Roast for 12-15 minutes, stirring once.",
      "Add fresh rosemary and let cool before serving."
    ]
  },
  {
    id: "homemade-trail-mix",
    title: "Energy-Packed Trail Mix",
    description: "A nutritious blend of dried fruits, nuts, and dark chocolate for the perfect energy-boosting snack.",
    image: "https://images.pexels.com/photos/6061395/pexels-photo-6061395.jpeg",
    cookTime: "0 minutes",
    prepTime: "10 minutes",
    servings: 10,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 cup", name: "almonds" },
      { amount: "1 cup", name: "cashews" },
      { amount: "1/2 cup", name: "pumpkin seeds" },
      { amount: "1/2 cup", name: "dried cranberries" },
      { amount: "1/2 cup", name: "dried blueberries" },
      { amount: "1/2 cup", name: "dark chocolate chips" },
      { amount: "1/4 cup", name: "coconut flakes" }
    ],
    instructions: [
      "Combine all ingredients in a large bowl.",
      "Mix well to ensure even distribution.",
      "Store in an airtight container.",
      "Can be stored for up to 2 weeks."
    ]
  },
  {
    id: "crispy-chickpeas",
    title: "Crispy Seasoned Chickpeas",
    description: "Crunchy roasted chickpeas seasoned with Mediterranean spices, a healthy alternative to chips.",
    image: "https://images.pexels.com/photos/19863266/pexels-photo-19863266/free-photo-of-pea-puffs-in-a-glass-bowl.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: "40 minutes",
    prepTime: "10 minutes",
    servings: 6,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 cans", name: "chickpeas, drained and dried" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "garlic powder" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/2 tsp", name: "cumin" },
      { amount: "1/2 tsp", name: "sea salt" },
      { amount: "1/4 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Pat chickpeas very dry with paper towels.",
      "Toss with oil and all seasonings.",
      "Spread on baking sheet in single layer.",
      "Roast for 35-40 minutes, shaking pan occasionally.",
      "Let cool completely for maximum crispiness."
    ]
  },
  {
    id: "baked-sweet-potato-fries",
    title: "Baked Sweet Potato Fries",
    description: "Crispy, healthy sweet potato fries seasoned with herbs and spices.",
    image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg",
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 large", name: "sweet potatoes" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/2 tsp", name: "garlic powder" },
      { amount: "1/2 tsp", name: "onion powder" },
      { amount: "1/2 tsp", name: "sea salt" },
      { amount: "1/4 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Cut sweet potatoes into thin fries.",
      "Toss with oil and seasonings.",
      "Spread on baking sheet in single layer.",
      "Bake for 20-25 minutes, flipping halfway.",
      "Serve hot with your favorite dipping sauce."
    ]
  },
  {
    id: "kale-chips",
    title: "Crispy Kale Chips",
    description: "Healthy, crispy kale chips seasoned with sea salt and nutritional yeast.",
    image: "https://images.pexels.com/photos/5589056/pexels-photo-5589056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 bunch", name: "kale" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "2 tbsp", name: "nutritional yeast" },
      { amount: "1/2 tsp", name: "garlic powder" },
      { amount: "1/2 tsp", name: "onion powder" },
      { amount: "1/4 tsp", name: "sea salt" }
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Remove kale stems and tear into pieces.",
      "Wash and dry thoroughly.",
      "Toss with oil and seasonings.",
      "Spread on baking sheet in single layer.",
      "Bake for 12-15 minutes until crispy."
    ]
  },
  {
    id: "fruit-and-nut-bars",
    title: "Homemade Fruit and Nut Bars",
    description: "No-bake energy bars packed with dried fruits, nuts, and seeds.",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
    cookTime: "0 minutes",
    prepTime: "15 minutes",
    servings: 12,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 cup", name: "dates, pitted" },
      { amount: "1 cup", name: "mixed nuts" },
      { amount: "1/2 cup", name: "dried cranberries" },
      { amount: "1/2 cup", name: "pumpkin seeds" },
      { amount: "1/4 cup", name: "chia seeds" },
      { amount: "2 tbsp", name: "honey" },
      { amount: "1/2 tsp", name: "vanilla extract" }
    ],
    instructions: [
      "Process dates in food processor until smooth.",
      "Add nuts and pulse until chopped.",
      "Mix in remaining ingredients.",
      "Press into lined baking pan.",
      "Refrigerate for 1 hour.",
      "Cut into bars and store in fridge."
    ]
  },
  {
    id: "crispy-seasoned-chickpeas",
    title: "Crispy Seasoned Chickpeas",
    description: "Crunchy roasted chickpeas seasoned with Mediterranean spices.",
    image: "https://www.pexels.com/photo/pea-puffs-in-a-glass-bowl-19863266/",
    cookTime: "40 minutes",
    prepTime: "10 minutes",
    servings: 6,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 cans", name: "chickpeas, drained and dried" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "garlic powder" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/2 tsp", name: "cumin" },
      { amount: "1/2 tsp", name: "sea salt" },
      { amount: "1/4 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Pat chickpeas very dry with paper towels.",
      "Toss with oil and all seasonings.",
      "Spread on baking sheet in single layer.",
      "Roast for 35-40 minutes, shaking pan occasionally.",
      "Let cool completely for maximum crispiness."
    ]
  },
  {
    id: "energy-packed-trail-mix",
    title: "Energy-Packed Trail Mix",
    description: "A nutritious blend of dried fruits, nuts, and dark chocolate.",
    image: "https://images.pexels.com/photos/6061395/pexels-photo-6061395.jpeg",
    cookTime: "0 minutes",
    prepTime: "10 minutes",
    servings: 10,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "1 cup", name: "almonds" },
      { amount: "1 cup", name: "cashews" },
      { amount: "1/2 cup", name: "pumpkin seeds" },
      { amount: "1/2 cup", name: "dried cranberries" },
      { amount: "1/2 cup", name: "dried blueberries" },
      { amount: "1/2 cup", name: "dark chocolate chips" },
      { amount: "1/4 cup", name: "coconut flakes" }
    ],
    instructions: [
      "Combine all ingredients in a large bowl.",
      "Mix well to ensure even distribution.",
      "Store in an airtight container.",
      "Can be stored for up to 2 weeks."
    ]
  },
  {
    id: "baked-sweet-potato-fries",
    title: "Baked Sweet Potato Fries",
    description: "Crispy, healthy sweet potato fries seasoned with herbs and spices.",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    servings: 4,
    category: RecipeCategory.SNACK,
    ingredients: [
      { amount: "2 large", name: "sweet potatoes" },
      { amount: "2 tbsp", name: "olive oil" },
      { amount: "1 tsp", name: "paprika" },
      { amount: "1/2 tsp", name: "garlic powder" },
      { amount: "1/2 tsp", name: "onion powder" },
      { amount: "1/2 tsp", name: "sea salt" },
      { amount: "1/4 tsp", name: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Cut sweet potatoes into thin fries.",
      "Toss with oil and seasonings.",
      "Spread on baking sheet in single layer.",
      "Bake for 20-25 minutes, flipping halfway.",
      "Serve hot with your favorite dipping sauce."
    ]
  }
];

// Then filter out duplicates
export const recipes: Recipe[] = allRecipes.reduce((unique: Recipe[], recipe) => {
  // Check if we already have a recipe with this title
  const exists = unique.some(r => r.title === recipe.title);
  if (!exists) {
    unique.push(recipe);
  }
  return unique;
}, []);

export const getFeaturedRecipe = (): Recipe => {
  return recipes.find(recipe => recipe.id === "lemon-herb-roasted-chicken") || recipes[0];
};

export const getRecipes = (): Recipe[] => {
  return recipes;
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

const categoryMapping: { [key: string]: string } = {
  "non-vegetarian": "Non-Vegetarian",
  "starter": "Appetizer",
  "appetizer": "Appetizer",
  "main": "Main Course",
  "main course": "Main Course",
  "desserts": "Dessert",
  "vegetarian": "Vegetarian",
  "soups": "Soup",
  "salads": "Salad",
  "pasta": "Pasta",
  "seafood": "Seafood",
  "chicken": "Chicken",
  "beef": "Beef",
  "pork": "Pork",
  "sandwiches": "Sandwich",
  "side dishes": "Side Dish",
  "side": "Side Dish",
  "snacks": "Snack",
  "beverages": "Beverage",
  "breakfast": "Breakfast"
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  const normalizedCategory = category.toLowerCase().trim();
  
  // Define meat categories that should be consolidated into Non-Vegetarian
  const meatCategories = ["beef", "chicken", "pork", "seafood"];
  
  return recipes.filter(recipe => {
    const recipeCategory = recipe.category.toLowerCase().trim();
    
    // Skip recipes with no category or invalid categories
    if (!recipeCategory) return false;
    
    // Skip appetizer/starter recipes completely
    if (recipeCategory === "starter" || recipeCategory === "appetizer") {
      return false;
    }
    
    // Handle Non-Vegetarian category
    if (normalizedCategory === "non-vegetarian") {
      return meatCategories.includes(recipeCategory);
    }
    
    // For other categories, do exact match
    return recipeCategory === normalizedCategory;
  });
};

export const getCategories = (): string[] => {
  const categories = new Set<string>();
  recipes.forEach(recipe => {
    const category = recipe.category.toLowerCase().trim();
    
    // Skip empty or invalid categories
    if (!category) return;
    
    // Skip appetizer/starter categories
    if (category === "starter" || category === "appetizer") return;
    
    // Convert meat categories to Non-Vegetarian
    if (["beef", "chicken", "pork", "seafood"].includes(category)) {
      categories.add("Non-Vegetarian");
    }
    // Skip main course category
    else if (category === "main course" || category === "main") {
      // Skip adding this category
    }
    else {
      categories.add(recipe.category.trim());
    }
  });
  return Array.from(categories).sort();
};
