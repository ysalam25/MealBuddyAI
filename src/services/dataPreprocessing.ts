// Assume you have a function to load the cleaned recipes JSON
import { cleanedRecipes } from './dataset/cleaned_recipes.json';
import { Recipe } from './your_recipe_interface_file'; // replace with your actual Recipe interface file path


interface UserPreferences {
  pantryItems: string[];
  dietaryPreferences: string[];
}

// Function to match recipes based on user pantry and dietary preferences
function matchRecipes(preferences: UserPreferences): Recipe[] {
    return cleanedRecipes
        .filter((recipe: Recipe) => 
            preferences.dietaryPreferences.every((pref) => recipe.categories.includes(pref)) &&
            recipe.ingredients.some((ingredient: string) => preferences.pantryItems.includes(ingredient))
        )
        .slice(0, 4); // Assuming you want to return the top 4 matches
}

// This function could be used in your service that communicates with the frontend

export { matchRecipes };
