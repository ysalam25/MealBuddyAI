import React, { useState } from "react";
import { StyledContainer, InnerContainer, SearchContainer, SearchButton, SearchButtonIcon, SubTitle, SearchTextInput, SearchTextInputIcon, SearchTextInputWrapper } from "./../components/styles";
import iconFilter from "../assets/icon-filter.png";
import iconSearch from "../assets/icon-search.png"; 

import { Colors } from "../components/styles";

const TestHome = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("search button", searchText);
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
                onChangeText={(text) => setSearchText(text)}
              />            
            </SearchTextInputWrapper>
            <SearchButton onPress={handleSearch}>
            <SearchButtonIcon source={iconFilter} />
          </SearchButton>
        </SearchContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

export default TestHome;
