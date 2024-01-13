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
