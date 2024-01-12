import React, { useState } from "react";
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
} from "./../components/styles";
import RecommendedForYou from "../components/RecommendedForYou";
import TrendingNow from "../components/TrendingNow";
import FlashCard from "../components/FlashCard";
import SearchBarWithIcon from "../components/SearchBarWithIcon";
import FilteredRecipes from "../components/FilteredRecipies";
import { Modal, View, TouchableOpacity } from "react-native";
import filterData from "../mockData/filterData";
import recipeData from "../mockData/recipeData";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [starStates, setStarStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState([]);

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

  const trendingItems = [
    {
      title: "Avocado Toast with Egg",
      attributes: ["High-Protein", "10 mins"],
    },
    {
      title: "Mango Berry Smoothie Bowl",
      attributes: ["No Added Sugar", "5 mins"],
    },
    {
      title: "Almond Flour Pancakes",
      attributes: ["Low-Carb", "20 mins"],
    },
    // ... add more items as needed
  ];

  const handleSearchBarClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStarClick = (index) => {
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

  const handleCategoryButtonClick = (category, heading) => {
    if (heading === "Category") {
      setSelectedCategory((prevSelectedCategories) => {
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
      ) : (
        <>
          <RecommendedForYou />
          <FlashCard title="Trending now" items={trendingItems} />
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
                    <StarSVGIcon isFilled={isFilled} color="#9095A0" />
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