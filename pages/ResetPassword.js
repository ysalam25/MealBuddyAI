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
} from "../components/styles";

import { Formik } from "formik";
import { View } from "react-native";
import { Colors } from "../components/styles";
import { Auth } from "@aws-amplify/auth";

const ForgotPassword = ({ navigation }) => {
    const handleForgotPassword = async (values) => {
        try {
          await Auth.forgotPassword(values.email); // Call the auth.forgotPassword function with the email value
          console.log("Password reset email sent successfully");
          navigation.navigate("NewPasswordScreen",{email: values.email});
        } catch (error) {
          console.log("Error sending password reset email:", error);
        }
      };
    return (
        <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
            <LoginContainer>
              <SubTitle>Reset your password</SubTitle>
              <Formik
                initialValues={{email: ""}}
                onSubmit={handleForgotPassword}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      placeholder="Email Address"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>Send</ButtonText>
                    </StyledButton>
                  </StyledFormArea>
                )}
              </Formik>
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

export default ForgotPassword;
