import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LoginContainer,
  StyledInputLabel,
  StyledButton,
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  OverlappingScreen,
  OverlappingContent,
  OverlappingText,
  CloseButton,
  CloseButtonText,
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

import { Formik } from "formik";
import { Colors } from "./../components/styles";

const Walkthrough = () => {
  const [showModal, setShowModal] = useState(false);
  const [starStates, setStarStates] = useState([false, false, false, false, false]);


  const handleButtonClick = () => {
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
  
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Title</PageTitle>
        <LoginContainer>
          <SubTitle>Walkthrough</SubTitle>
          <ExtraView>
            <ExtraText> No account? </ExtraText>
            <TextLink>
              <TextLinkContent>Sign Up</TextLinkContent>
            </TextLink>
          </ExtraView>
          <StyledButton onPress={handleButtonClick}>
            <ButtonText>YY</ButtonText>
          </StyledButton>
        </LoginContainer>
      </InnerContainer>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <OverlappingScreen>
            <OverlappingContent>
            <TouchableOpacity onPress={closeModal}>
                <CrossSVGIcon />
              </TouchableOpacity>
              <OverlappingTitle>Category</OverlappingTitle>
               <CategoryContainer>
              <CategoryButton>
                <CategoryButtonText>BreakFast</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Lunch</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Dinner</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Snack</CategoryButtonText>
              </CategoryButton>
              </CategoryContainer>
              <OverlappingTitle>Cuisine Type</OverlappingTitle>
              <CategoryContainer>
              <CategoryButton>
                <CategoryButtonText>Mexican</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Italian</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Mediterranean</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Asian Fusion</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Indian</CategoryButtonText>
              </CategoryButton>
              <CategoryButton>
                <CategoryButtonText>Comfort</CategoryButtonText>
              </CategoryButton>
              </CategoryContainer>
             <OverlappingTitle>Rating</OverlappingTitle>
             <RatingContainer>
                {starStates.map((isFilled, index) => (
                  <TouchableOpacity key={index} onPress={() => handleStarClick(index)}>
                    <StarSVGIcon isFilled={isFilled} color='#9095A0' />
                  </TouchableOpacity>
                ))}
              </RatingContainer>
            <ApplyContainer>
              <FilterButton>
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

export default Walkthrough;