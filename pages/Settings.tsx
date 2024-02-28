import React from "react";
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

import { Auth } from "aws-amplify";
const Settings = ({ navigation }: { navigation: any }) => {
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
        routes: [{ name: "Walkthrough1" }],
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
