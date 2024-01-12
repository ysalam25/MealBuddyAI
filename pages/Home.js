import React from "react";
import { StyledContainer } from "./../components/styles";
import RecommendedForYou from "../components/RecommendedForYou";
import TrendingNow from "../components/TrendingNow";
import SearchBarWithIcon from "../components/SearchBarWithIcon";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <StyledContainer>
      <SearchBarWithIcon />
      <RecommendedForYou />
      <TrendingNow />
    </StyledContainer>
  );
};

export default Home;
