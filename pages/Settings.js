import React from "react";
import { StatusBar } from "expo-status-bar";
import TouchableOpacity from "react-native-gesture-handler";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SettingTitle,
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
  StyledSettingButton,
  StyledSettingButtonText,
} from "../components/styles";

import { SliderBox } from "react-native-image-slider-box";
import { Auth } from "aws-amplify";
const Settings = ({ navigation }) => {
  // Logic for resetting password
  const handleResetPassword = () => {
    console.log("Reset Password");
    navigation.navigate("ForgotPassword");
  };

  // Logic for logging out
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      console.log("Sign out successful");

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };
  return (
    <StyledContainer>
      <SettingTitle>Settings</SettingTitle>
      <StyledSettingButton onPress={handleResetPassword}>
        <StyledSettingButtonText>Reset Password</StyledSettingButtonText>
      </StyledSettingButton>
      <StyledSettingButton onPress={handleLogout}>
        <StyledSettingButtonText>Logout</StyledSettingButtonText>
      </StyledSettingButton>
    </StyledContainer>
  );
};

export default Settings;
