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
import FilteredRecipes from "../components/FilteredRecipies"; // Import the new component
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

  // Mock data for recipes
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Recipe 1",
      category: "Breakfast",
      attributes: ["Vegan", "30 mins"],
      rating: 3,
    },
    {
      id: 2,
      title: "Recipe 2",
      category: "Lunch",
      attributes: ["Vegie", "30 mins"],
      rating: 3,
    },
    // Add more recipes as needed
  ]);
  const recommendedItems = [
    {
      title: "Creamy Tomato Basil Pasta",
      attributes: ["Vegan", "25 mins"],
    },
    {
      title: "Hearty Vegetable Stew",
      attributes: ["Gluten-Free", "40 mins"],
    },
    {
      title: "Spicy Black Bean Tacos",
      attributes: ["Vegetarian", "15 mins"],
    },
  ];
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
    setStarStates([false, false, false, false, false]);
  };

  const handleApply = () => {
    console.log("Apply button clicked");
    setShowModal(false);
  };

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory((prevSelectedCategories) => {
      const isCategorySelected = prevSelectedCategories.includes(category);

      if (isCategorySelected) {
        return prevSelectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        );
      }

      return [...prevSelectedCategories, category];
    });
  };
  const filteredRecipes = recipes.filter((recipe) =>
    selectedCategory.includes(recipe.category)
  );

  return (
    <StyledContainer>
      <SearchBarWithIcon onPress={handleSearchBarClick} />
      {selectedCategory.length > 0 ? (
        <FilteredRecipes recipes={filteredRecipes} />
      ) : (
        <>
          <FlashCard title="Recommended for you" items={recommendedItems} />
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
                        onPress={() => handleCategoryButtonClick(choice)}
                        selected={selectedCategory.includes(choice)}
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
