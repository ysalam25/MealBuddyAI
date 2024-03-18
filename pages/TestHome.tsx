import React, { useState } from "react";
import { StyledContainer, InnerContainer, SearchContainer, SearchButton, SearchButtonIcon, SubTitle, SearchTextInput, SearchTextInputIcon, SearchTextInputWrapper } from "../components/styles";
import iconFilter from "assets/icon-filter.png";
import iconSearch from "../assets/icon-search.png"; 
import { Modal, View, Text, TouchableOpacity } from "react-native";
import filterData from "../mockData/filterData.json";

import {
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
  RatingContainer, } from "../components/styles";

const TestHome = ({ navigation }: { navigation: any }) => {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [starStates, setStarStates] = useState([false, false, false, false, false]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);



  const handleFilterClick = () => {
    setShowModal(true);
  };

  const handleStarClick = (index: number) => {
    setStarStates((prevStars) => {
      const updatedStars = prevStars.map((_, i) => i <= index);
      return updatedStars;
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = () => {
    console.log("search button", searchText);
  };

  const handleReset = () => {
    setSelectedCategory([]);
    setStarStates([false, false, false, false, false]);
  };

  
  const handleCategoryButtonClick = (category: string) => {
    console.log("Category button clicked:", category);
    setSelectedCategory((prevSelectedCategories : string[]) => {
      const isCategorySelected = prevSelectedCategories.includes(category);

      if (isCategorySelected) {
        return prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category);
      }

      return [...prevSelectedCategories, category];
    });
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <SubTitle>Home</SubTitle>
        <SearchContainer>
          <SearchTextInputWrapper>
            <SearchTextInputIcon source={iconSearch} />
            <SearchTextInput
              placeholder="Search recipes"
              value={searchText}
              onChangeText={(text: string) => setSearchText(text)}
            />            
          </SearchTextInputWrapper>
          <SearchButton onPress={handleFilterClick}>
            <SearchButtonIcon source={iconFilter} />
          </SearchButton>
        </SearchContainer>
      </InnerContainer>
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
                    selected={selectedCategory.includes(choice as never)}
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
                    <StarSVGIcon isFilled={isFilled} />
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

export default TestHome;
