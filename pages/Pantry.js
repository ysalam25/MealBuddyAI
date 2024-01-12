<<<<<<< HEAD
import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LoginContainer,
  StyledInputLabel,
  StyledButton,
  StyledButton2,
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SlideContainer,
} from "../components/styles";


import { SliderBox } from "react-native-image-slider-box";

const Pantry = ({ }) => {
  return (
    <StyledContainer>
=======
import React, { useState } from "react";
import styled from "styled-components";
import { StatusBar, Dimensions, Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Constants from "expo-constants";

import { StyledContainer, InnerContainer, SearchContainer, SearchButton, SearchButtonIcon, SubTitle, SearchTextInput, SearchTextInputIcon, SearchTextInputWrapper, StyledButton, ButtonText} from "../components/styles";

import iconFilter from "../assets/icon-filter.png";
import iconSearch from "../assets/icon-search.png"; 

import iconCamera from "../assets/icon-add-camera.png"; 
import iconPlus from "../assets/icon-add-plus.png"; 


import imgEmptyPantry from "../assets/pantry-empty.png"; 
const txtEmptyPantry = "Let's start by filling up your empty pantry. Click the plus button below to start.";

import { Colors } from "../components/styles";
import AddItem from "./AddItem";

// const screenHeight = Dimensions.get('window').height - StatusBar.currentHeight;

const screenHeight = Dimensions.get('window').height 
const screenWidth = Dimensions.get('window').width;

const StatusBarHeight = Constants.statusBarHeight;

const PantryScreen = styled.View`
  border: 2px solid ${Colors.background};
  width: 100%;
  height: 80%;
  align-items: center;
  flex: 1;
`;

const ImageWrapper = styled.View`
  border: 2px solid ${Colors.background};
  width: 40%;
  height: 52%;
`;
//  height:${screenHeight}px;


// temp text style *** switch to the main text to match

const styles = StyleSheet.create({
  text: {
    marginTop: 10, // Adjust the margin top to move it higher up
    fontSize: 16, // Adjust the font size as needed
    width: '50%',
    textAlign: 'center',
  },
});


const Pantry = ({ navigation }) => {

  // ----- search items functionality -----
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("search button", searchText);
  };


  // ----- add items functionality -----
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <SubTitle>Pantry</SubTitle>
        <SearchContainer>
          <SearchTextInputWrapper>
            <SearchTextInputIcon source={iconSearch} />
            <SearchTextInput
              placeholder="Search items"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />            
          </SearchTextInputWrapper>
          <SearchButton onPress={handleSearch}>
            <SearchButtonIcon source={iconFilter} />
          </SearchButton>
        </SearchContainer>

        <PantryScreen>

          <ImageWrapper>
              <Image
                source={imgEmptyPantry}
                style={{ width: '100%'}}
                resizeMode="contain"
              />
          </ImageWrapper>
          <Text style={styles.text}>{txtEmptyPantry}</Text>

        </PantryScreen>

        <StyledButton onPress={toggleModal} style={{ width: 50, marginTop: 10, borderRadius: 10 }}><ButtonText>+</ButtonText></StyledButton>
        
        <AddItem isVisible={isModalVisible} onClose={toggleModal}>

        <Text>Choose scanning preference</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={iconCamera} style={{ width: 50, height: 50, marginBottom: 10 }} />
            <Text>Scan with camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={iconPlus} style={{ width: 50, height: 50, marginBottom: 10 }} />
            <Text>Enter details manually</Text>
          </TouchableOpacity>
        </View>
      </AddItem>
      
      
      </InnerContainer>
>>>>>>> 2dd7881a (pantry empty state)
    </StyledContainer>
  );
};

export default Pantry;
