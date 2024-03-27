import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { StatusBar, Dimensions, Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Constants from "expo-constants";
import { Auth } from "aws-amplify";

import { API } from "aws-amplify";
import { StyledContainer, InnerContainer, SearchContainer, SearchButton, SearchButtonIcon, SubTitle, SearchTextInput, SearchTextInputIcon, SearchTextInputWrapper, StyledButton, ButtonText} from "../components/styles";

import iconFilter from "../assets/icon-filter.png";
import iconSearch from "../assets/icon-search.png"; 

import imgEmptyPantry from "../assets/pantry-empty.png"; 

import { Colors } from "../components/styles";
import AddItem from "./AddItem";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const txtEmptyPantry = "Let's start by filling up your empty pantry. Click the plus button below to start.";

const StatusBarHeight = Constants.statusBarHeight;

const PantryScreen = styled(View)`
  border: 2px solid ${Colors.background};
  width: 100%;
  height: 80%;
  align-items: center;
  flex: 1;
`;

const ImageWrapper = styled(View)`
  border: 2px solid ${Colors.background};
  width: 40%;
  height: 52%;
`;

const styles = StyleSheet.create({
  text: {
    marginTop: 10, 
    fontSize: 16,
    width: '50%',
    textAlign: 'center',
  },
});

const Pantry = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [pantryItems, setPantryItems] = useState([]);
  const [pantries, setPantries] = useState([]);

  const [userName, setUserName] = useState("");
  const [userId, setId] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      try {
        const session = await Auth.currentSession();
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        setUserName(user.attributes.name);
        setId(user.attributes.sub);
        const pantriesArray = await fetchPantries(userId);
        const pantryItemsArray = pantries.map(pantry => fetchPantryItems(userId, pantry));
      } catch (error) {
        console.log('error fetching session and user', error);
      }
    };

    fetchSessionAndUser();
  }, []);



const fetchPantries = async (userId) => {
   
    try {
      console.log('fetching pantries for user:', userId)
        const apiName = 'mealbuddyapi';
        const path = `/users/${userId}/pantries`;
        const response = await API.get(apiName, path, {});
        console.log('Pantries:', response.body);
        const pantriesArray = JSON.parse(response.body);
        setPantries(pantriesArray);
        return pantriesArray;
    } catch (error) {
        console.error('Error fetching pantries:', error);
    } 
};

const fetchPantryItems = async (userId, pantryId) => {
  console.log('fetching items for pantry:', pantryId);
  console.log('fetching items for user:', userId);
  try {
      const apiName = 'mealbuddyapi';
      const path = `/users/${userId}/pantries/${pantryId}`;
      console.log(path)
      const response = await API.get(apiName, path, {});
      const pantryItems = JSON.parse(response.body);
      setPantryItems(pantryItems);
      return response.body; // Return the items for this pantry
  } catch (error) {
      console.error(`Error fetching items for pantry ${pantryId}:`, error);
  }
};



  const handleSearch = () => {
    console.log("search button", searchText);
  };

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
              onChangeText={(text: string) => setSearchText(text)}
            />            
          </SearchTextInputWrapper>
          <SearchButton onPress={handleSearch}>
            <SearchButtonIcon source={iconFilter} />
          </SearchButton>
        </SearchContainer>

        {pantryItems.length > 0 ? (
          <PantryScreen>
            
            <Text style={styles.text}>{pantryItems}</Text>
          </PantryScreen>
        ) : (
          <PantryScreen>
            {/* Render pantry items here */}
          </PantryScreen>
        )}

        <StyledButton onPress={toggleModal} style={{ width: 50, marginTop: 10, borderRadius: 10 }}><ButtonText>+</ButtonText></StyledButton>
        
        <AddItem isVisible={isModalVisible} onClose={toggleModal} />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Pantry;
