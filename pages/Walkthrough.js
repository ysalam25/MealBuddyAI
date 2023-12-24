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
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../components/styles";

import { Formik } from "formik";
import { View } from "react-native";
import { Colors } from "./../components/styles";

const Walkthrough = () => {
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
          <StyledButton>
            <ButtonText>YY</ButtonText>
          </StyledButton>
        </LoginContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

//Colors
const { primary, darkLight } = Colors;

const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
      <StyledTextInput {...props} />
    </View>
  );
};

export default Walkthrough;
