import { Injectable, signal } from '@angular/core';
import { Recipe } from '../interfaces/recipe';


const tempRecipes:Recipe[] = [
  {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
  {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
   {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
  {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
   {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
  {
    "id": "fluffypancakes",
    "title": "Fluffy Pancakes",
    "category_id": "breakfast",
    "description": "Light and fluffy pancakes perfect for weekend mornings",
    "ing": [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
    ],
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "level": "eazy",
    "ins": [
      "Mix dry ing in a large bowl",
      "In another bowl, whisk eggs, milk, and melted butter",
      "Pour wet ing into dry ing and stir until just combined",
      "Heat griddle or pan over medium heat",
      "Pour ¼ cup batter for each pancake",
      "Cook until bubbles form on surface, then flip",
      "Cook until golden brown and serve hot"
    ]
  },
  {
    "id": "caesarsalad",
    "title": "Caesar Salad",
    "category_id": "lunch",
    "description": "Classic Caesar salad with homemade dressing and croutons",
    "ing": [
      "1 large romaine lettuce head",
      "½ cup parmesan cheese, grated",
      "1 cup croutons",
      "3 cloves garlic",
      "2 anchovy fillets",
      "1 egg yolk",
      "2 tablespoons lemon juice",
      "½ cup olive oil"
    ],
    "level": "medium",
    "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "ins": [
      "Wash and chop romaine lettuce",
      "Make dressing: mash garlic and anchovies into paste",
      "Whisk in egg yolk and lemon juice",
      "Slowly add olive oil while whisking",
      "Toss lettuce with dressing",
      "Add parmesan cheese and croutons",
      "Serve immediately"
    ]
  },
  {
        "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    "id": "spaghetticarbonara",
    "title": "Spaghetti Carbonara",
    "category_id": "dinner",
    "description": "Creamy Italian pasta with eggs, cheese, and pancetta",
    "ing": [
      "400g spaghetti",
      "200g pancetta, diced",
      "4 large eggs",
      "100g pecorino cheese, grated",
      "2 cloves garlic",
      "Black pepper",
      "Salt"
    ],
    "level": "medium",
    "ins": [
      "Cook spaghetti according to package directions",
      "Cook pancetta in large pan until crispy",
      "Beat eggs with cheese and black pepper",
      "Drain pasta, reserving 1 cup pasta water",
      "Add hot pasta to pancetta pan",
      "Remove from heat and quickly stir in egg mixture",
      "Add pasta water as needed for creaminess",
      "Serve immediately with extra cheese"
    ]
  },
  {
        "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",

    "id": "chocolatechipcookies",
    "title": "Chocolate Chip Cookies",
    "category_id": "desserts",
    "description": "Classic chewy chocolate chip cookies that everyone loves",
    "ing": [
      "2¼ cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup butter, softened",
      "¾ cup granulated sugar",
      "¾ cup brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups chocolate chips"
    ],
    "level": "easy",
    "ins": [
      "Preheat oven to 375°F",
      "Mix flour, baking soda, and salt in bowl",
      "Cream butter and both sugars until fluffy",
      "Beat in eggs and vanilla",
      "Gradually add flour mixture",
      "Stir in chocolate chips",
      "Drop rounded tablespoons onto ungreased cookie sheets",
      "Bake 9-11 minutes until golden brown"
    ]
  },
  {
        "image":"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",

    "id": "avocadotoast",
    "title": "Avocado Toast",
    "category_id": "quickmeals",
    "description": "Simple and nutritious avocado toast ready in 5 minutes",
    "ing": [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1 tablespoon lemon juice",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "2 cherry tomatoes (optional)"
    ],
    "level": "easy",
    "ins": [
      "Toast bread until golden brown",
      "Mash avocado with lemon juice, salt, and pepper",
      "Spread avocado mixture on toast",
      "Top with sliced cherry tomatoes if using",
      "Sprinkle with red pepper flakes",
      "Serve immediately"
    ]
  }
]


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes = signal<Recipe[]>([...tempRecipes]);


  getAllRecipes():Recipe[]{
      return this.recipes();
  }

  getRecipesByCategory(categoryId:string):Recipe[]{
    console.log(categoryId)
    return this.recipes().filter(recipe => recipe.category_id === categoryId);
  }

  getRecipesBySearch(searchValue:string):Recipe[]{
    return this.recipes().filter(recipe => recipe.title.includes(searchValue));
  }

}
