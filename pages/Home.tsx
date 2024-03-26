import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  OverlappingScreen,
  OverlappingContent,
  OverlappingTitle,
  CategoryButton,
  CategoryContainer,
  CategoryButtonText,
  ApplyContainer,
  FilterButton,
  CrossSVGIcon,
  StarSVGIcon,
  RatingContainer,
} from "../components/styles";
import RecommendedForYou from "../components/RecommendedForYou";
import TrendingNow from "../components/TrendingNow";
import FlashCard from "../components/FlashCard";
import SearchBarWithIcon from "../components/SearchBarWithIcon";
import FilteredRecipes from "../components/FilteredRecipies";
import { Modal, View, TouchableOpacity } from "react-native";
import filterData from "../mockData/filterData.json";
import { useNavigation } from "@react-navigation/native";
import { generateRecipe } from '../src/services/openaiService';
import Config from "react-native-config";
import { API } from "aws-amplify";
import axios from "axios";



interface Recipe {
  id: number;
  title: string;
  category: string;
  attributes: string[];
  rating: number;
  cuisine: string;
}

const Home = () => {

  const navigation = useNavigation();
  
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Define the interface for TrendingItems if necessary
interface TrendingItem {
  title: string;
  attributes: string[];
  preparationTime: string; 
  cookingTime: string;
  totalTime: string;
}
  

  useEffect(() => {
    // Fetch initial trending recipes or other content on mount
    const fetchTrendingItems = async () => {
      try {
        const response = await fetch('/api/trendingItems');
        const data = await response.json();
        setTrendingItems(data);
      } catch (error) {
        console.error("Error fetching trending items:", error);
      }
    };
    fetchTrendingItems();
  }, []);

  
  const handleSearchSubmit = async (searchQuery: string) => {

    const pantryItems = usePantry(); // Use the usePantry hook to get the pantry items

    try {
      // Create a list of ingredients from the pantry items
      const pantryIngredients = pantryItems.map((item: { name: string }) => item.name).join(', ');

      // Construct the prompt with dietary preferences and available ingredients
      const prompt = `Given the dietary preferences ${searchQuery} and available ingredients ${pantryIngredients}, what is a good recipe?`;

      // Generate the recipe with the constructed prompt
      const recipeText = await generateRecipe(prompt);
      console.log('Generated recipe:', recipeText);
      // Now process the recipeText and update your state or UI accordingly
    } catch (error) {
      console.error('Failed to generate recipe:', error);
    }
  };
  
  

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // If you're hosting the dataset
        const response = await axios.get('dataset/full_format_recipes.json');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);

  // // Mock data for recipes
  // const [recipes, setRecipes] = useState([
  //   {
  //     id: 1,
  //     title: "Avocado Toast",
  //     category: "Breakfast",
  //     attributes: ["Vegan", "30 mins"],
  //     rating: 3,
  //     cuisine: "Mexican",
  //   },
  //   {
  //     id: 2,
  //     title: "Margherita Pizza",
  //     category: "Lunch",
  //     attributes: ["Vegetarian", "30 mins"],
  //     rating: 4,
  //     cuisine: "Italian",
  //   },
  //   {
  //     id: 3,
  //     title: "Chicken Curry",
  //     category: "Dinner",
  //     attributes: ["Non-Vegetarian", "1 hour"],
  //     rating: 5,
  //     cuisine: "Indian",
  //   },
  //   {
  //     id: 4,
  //     title: "Asian Fusion Noodles",
  //     category: "Dinner",
  //     attributes: ["Vegetarian", "30 mins"],
  //     rating: 4,
  //     cuisine: "Asian Fusion",
  //   },
  //   {
  //     id: 5,
  //     title: "Mediterranean Salad",
  //     category: "Lunch",
  //     attributes: ["Vegetarian", "20 mins"],
  //     rating: 4,
  //     cuisine: "Mediterranean",
  //   },
  //   {
  //     id: 6,
  //     title: "Taco Tuesday",
  //     category: "Dinner",
  //     attributes: ["Non-Vegetarian", "40 mins"],
  //     rating: 4,
  //     cuisine: "Mexican",
  //   },
  //   // Add more recipes as needed
  // ]);
  // const recommendedItems = [
  //   {
  //     title: "Creamy Tomato Basil Pasta",
  //     attributes: ["Vegan"],
  //     preparationTime: "25 mins",
  //     cookingTime: "30 mins",
  //     totalTime: "55 mins",
  //   },
  //   {
  //     title: "Chickpea Veggie Salad",
  //     attributes: ["Gluten-Free", "Vegan"],
  //     preparationTime: "15 mins",
  //     cookingTime: "0 mins",
  //     totalTime: "15 mins",
  //   },
  //   {
  //     title: "Quinoa and Black Beans",
  //     attributes: ["High-Protein", "Vegan"],
  //     preparationTime: "10 mins",
  //     cookingTime: "25 mins",
  //     totalTime: "35 mins",
  //   },
  //   {
  //     title: "Spicy Thai Noodles",
  //     attributes: ["Vegetarian"],
  //     preparationTime: "20 mins",
  //     cookingTime: "20 mins",
  //     totalTime: "40 mins",
  //   },
  //   {
  //     title: "Mushroom Risotto",
  //     attributes: ["Vegetarian", "Gluten-Free"],
  //     preparationTime: "10 mins",
  //     cookingTime: "1 hour",
  //     totalTime: "1 hour 10 mins",
  //   },
  // ];

  // const trendingItems = [
  //   {
  //     title: "Avocado Toast with Egg",
  //     attributes: ["High-Protein", "10 mins"],
  //     preparationTime: "10 mins",
  //     cookingTime: "5 mins",
  //     totalTime: "15 mins",
  //   },
  //   {
  //     title: "Kale and Quinoa Salad",
  //     attributes: ["Superfood", "15 mins"],
  //     preparationTime: "15 mins",
  //     cookingTime: "0 mins",
  //     totalTime: "15 mins",
  //   },
  //   {
  //     title: "Berry Almond Overnight Oats",
  //     attributes: ["No Added Sugar", "High-Fiber"],
  //     preparationTime: "5 mins",
  //     cookingTime: "0 mins",
  //     totalTime: "8 hours",
  //   },
  // ];

  const handleSearchBarClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [starStates, setStarStates] = useState<boolean[]>([false, false, false, false, false]);

  const handleStarClick = (index: number) => {
    setStarStates((prevStars) => {
      const updatedStars = prevStars.map((_, i) => i <= index);
      return updatedStars;
    });
  };

  const handleReset = () => {
    setSelectedCategory([]);
    setSelectedCuisine([]);
    setStarStates([false, false, false, false, false]);
  };

  const handleApply = () => {
    console.log("Apply button clicked");
    setShowModal(false);
  };

  const handleCategoryButtonClick = (category: string, heading: string) => {
    if (heading === "Category") {
      setSelectedCategory((prevSelectedCategories: string[]) => {
        const isCategorySelected = prevSelectedCategories.includes(category);

        if (isCategorySelected) {
          return prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category);
        }

        return [...prevSelectedCategories, category];
      });
    } else if (heading === "Cuisine Type") {
      setSelectedCuisine((prevSelectedCuisines) => {
        const isCuisineSelected = prevSelectedCuisines.includes(category);

        if (isCuisineSelected) {
          return prevSelectedCuisines.filter((selectedCuisine) => selectedCuisine !== category);
        }

        return [...prevSelectedCuisines, category];
      });
    }
  };

  // Filter recipes based on selected categories, cuisine, and rating
  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedCategory.length === 0 || selectedCategory.includes(recipe.category)) &&
      (selectedCuisine.length === 0 || selectedCuisine.includes(recipe.cuisine)) &&
      (starStates.filter((isFilled) => isFilled).length === 0 || starStates[recipe.rating - 1])
  );

  return (
    <StyledContainer>
      <SearchBarWithIcon onPress={handleSearchBarClick} />

      {/* Conditionally render the FilteredRecipes component */}
      {selectedCategory.length > 0 || selectedCuisine.length > 0 || starStates.filter((isFilled) => isFilled).length > 0 ? (
        <FilteredRecipes recipes={filteredRecipes} />
   // Declare and initialize the trendingItems variable
        
            ) : (
              <>
                <FlashCard
                  title="Recommended for you"
                  items={recipes}
                  navigation={navigation}
                />
                <FlashCard
                  title="Trending now"
                  items={trendingItems} // Use the trendingItems variable
                  navigation={navigation}
                />
              </>
            )}

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <OverlappingScreen>
            <OverlappingContent>
              <TouchableOpacity onPress={closeModal}>
                <CrossSVGIcon />
              </TouchableOpacity>
              {filterData.map((item, index) => (
                <React.Fragment key={index}>
                  <OverlappingTitle>{item.heading}</OverlappingTitle>
                  <CategoryContainer>
                    {item.choices.map((choice, choiceIndex) => (
                      <CategoryButton
                        key={choiceIndex}
                        onPress={() => handleCategoryButtonClick(choice, item.heading)}
                        selected={
                          item.heading === "Category"
                            ? selectedCategory.includes(choice)
                            : selectedCuisine.includes(choice)
                        }
                      >
                        <CategoryButtonText>{choice}</CategoryButtonText>
                      </CategoryButton>
                    ))}
                  </CategoryContainer>
                </React.Fragment>
              ))}
              <OverlappingTitle>Rating</OverlappingTitle>
              <RatingContainer>
                {starStates.map((isFilled, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleStarClick(index)}
                  >
                    <StarSVGIcon isFilled={isFilled} />
                  </TouchableOpacity>
                ))}
              </RatingContainer>
              <ApplyContainer>
                <FilterButton onPress={handleReset}>
                  <CategoryButtonText>Reset</CategoryButtonText>
                </FilterButton>
                <FilterButton onPress={handleApply}>
                  <CategoryButtonText>Apply</CategoryButtonText>
                </FilterButton>
              </ApplyContainer>
            </OverlappingContent>
          </OverlappingScreen>
        </View>
      </Modal>
    </StyledContainer>
  );
};

export default Home;

function usePantry() {
  throw new Error("Function not implemented.");
}

