import React, { useState } from "react";
import {
  styles, CategoryButton,
  CategoryContainer,
  CategoryButtonText,
  ApplyContainer,
  FilterButton,
  CrossSVGIcon,
  StarSVGIcon,
  RatingContainer
} from "../components/screen/HomeScreen";
import { StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FlashCard from "../components/FlashCard";
import SearchBarWithIcon from "../components/SearchBarWithIcon";
import FilteredRecipes from "../components/FilteredRecipies";
import { Modal, View, TouchableOpacity, ScrollView, Text } from "react-native";
import filterData from "../mockData/filterData.json";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const [starStates, setStarStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);

  // Mock data for recipes
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Avocado Toast",
      category: "Breakfast",
      attributes: ["Vegan", "30 mins"],
      rating: 3,
      cuisine: "Mexican",
    },
    {
      id: 2,
      title: "Margherita Pizza",
      category: "Lunch",
      attributes: ["Vegetarian", "30 mins"],
      rating: 4,
      cuisine: "Italian",
    },
    {
      id: 3,
      title: "Chicken Curry",
      category: "Dinner",
      attributes: ["Non-Vegetarian", "1 hour"],
      rating: 5,
      cuisine: "Indian",
    },
    {
      id: 4,
      title: "Asian Fusion Noodles",
      category: "Dinner",
      attributes: ["Vegetarian", "30 mins"],
      rating: 4,
      cuisine: "Asian Fusion",
    },
    {
      id: 5,
      title: "Mediterranean Salad",
      category: "Lunch",
      attributes: ["Vegetarian", "20 mins"],
      rating: 4,
      cuisine: "Mediterranean",
    },
    {
      id: 6,
      title: "Taco Tuesday",
      category: "Dinner",
      attributes: ["Non-Vegetarian", "40 mins"],
      rating: 4,
      cuisine: "Mexican",
    },
    // Add more recipes as needed
  ]);
  const recommendedItems = [
    {
      title: "Creamy Tomato Basil Pasta",
      attributes: ["Vegan"],
      preparationTime: "25 mins",
      cookingTime: "30 mins",
      totalTime: "55 mins",
    },
    {
      title: "Chickpea Veggie Salad",
      attributes: ["Gluten-Free", "Vegan"],
      preparationTime: "15 mins",
      cookingTime: "0 mins",
      totalTime: "15 mins",
    },
    {
      title: "Quinoa and Black Beans",
      attributes: ["High-Protein", "Vegan"],
      preparationTime: "10 mins",
      cookingTime: "25 mins",
      totalTime: "35 mins",
    },
    {
      title: "Spicy Thai Noodles",
      attributes: ["Vegetarian"],
      preparationTime: "20 mins",
      cookingTime: "20 mins",
      totalTime: "40 mins",
    },
    {
      title: "Mushroom Risotto",
      attributes: ["Vegetarian", "Gluten-Free"],
      preparationTime: "10 mins",
      cookingTime: "1 hour",
      totalTime: "1 hour 10 mins",
    },
  ];

  const trendingItems = [
    {
      title: "Avocado Toast with Egg",
      attributes: ["High-Protein", "10 mins"],
      preparationTime: "10 mins",
      cookingTime: "5 mins",
      totalTime: "15 mins",
    },
    {
      title: "Kale and Quinoa Salad",
      attributes: ["Superfood", "15 mins"],
      preparationTime: "15 mins",
      cookingTime: "0 mins",
      totalTime: "15 mins",
    },
    {
      title: "Berry Almond Overnight Oats",
      attributes: ["No Added Sugar", "High-Fiber"],
      preparationTime: "5 mins",
      cookingTime: "0 mins",
      totalTime: "8 hours",
    },
  ];

  const handleSearchBarClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
    <View style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <SearchBarWithIcon onPress={handleSearchBarClick} />
        <View style={styles.RecipeContainer}>
          <ScrollView>
            {/* Conditionally render the FilteredRecipes component */}
            {selectedCategory.length > 0 || selectedCuisine.length > 0 || starStates.filter((isFilled) => isFilled).length > 0 ? (
              <FilteredRecipes recipes={filteredRecipes} />
            ) : (
              <>
                <FlashCard
                  title="Recommended for you"
                  items={recommendedItems}
                  navigation={navigation}
                />
                <FlashCard
                  title="Trending now"
                  items={trendingItems}
                  navigation={navigation}
                />
              </>
            )}

          </ScrollView>
        </View>
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.OverlappingScreen}>
              <View style={styles.OverlappingContent}>
                <TouchableOpacity onPress={closeModal}>
                  <CrossSVGIcon />
                </TouchableOpacity>
                {filterData.map((item, index) => (
                  <React.Fragment key={index}>
                    <Text style={styles.OverlappingTitle}>{item.heading}</Text>
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
                <Text style={styles.OverlappingTitle}>Rating</Text>
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
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};



const styles1 = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default Home;