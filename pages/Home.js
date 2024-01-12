import React from "react";
import { StyledContainer,
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
  RatingContainer, } from "./../components/styles";
import RecommendedForYou from "../components/RecommendedForYou";
import TrendingNow from "../components/TrendingNow";
import SearchBarWithIcon from "../components/SearchBarWithIcon";
import {Modal, View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import filterData from "../mockData/filterData";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [starStates, setStarStates] = useState([false, false, false, false, false]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSearchBarClick = () => {
    console.log("search bar clicked");
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

  const handleCategoryButtonClick = (category) => {
    console.log("Category button clicked:", category);
    setSelectedCategory((prevSelectedCategories) => {
      const isCategorySelected = prevSelectedCategories.includes(category);
  
      if (isCategorySelected) {
        return prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category);
      }
  
      return [...prevSelectedCategories, category];
    });
  };
  return (
    <StyledContainer>
      <SearchBarWithIcon onPress={handleSearchBarClick}/>
      <RecommendedForYou />
      <TrendingNow />
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
                  <TouchableOpacity key={index} onPress={() => handleStarClick(index)}>
                    <StarSVGIcon isFilled={isFilled} color="#9095A0" />
                  </TouchableOpacity>
                ))}
              </RatingContainer>
              <ApplyContainer>
                <FilterButton onPress={handleReset}>
                  <CategoryButtonText>Reset</CategoryButtonText>
                </FilterButton>
                <FilterButton>
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
