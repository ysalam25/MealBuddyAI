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
} from "./../components/styles";

import { Formik } from "formik";
import { View } from "react-native";
import { Colors } from "./../components/styles";
import { SliderBox } from "react-native-image-slider-box";

const images = [
  require("./../assets/kitchen.png"), // Local image
  require("./../assets/stove.png"),
  require("./../assets/chef.png"), // Local image
];

const Walkthrough = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <SlideContainer>
        <SliderBox images={images} sliderBoxHeight={300} resizeMode="contain" />
      </SlideContainer>
      <InnerContainer>
        <StyledButton onPress={() => navigation.navigate("Signup")}>
          <ButtonText>Sign Up</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate("Login")}>
          <ButtonText>Log In</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate("Home")}>
          <ButtonText>Home (test)</ButtonText>
        </StyledButton>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Walkthrough;
