import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";


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
import { Auth } from "aws-amplify";
const Signup = ({navigation}) => {
  const handleSignup = async (values) => {
    try {
      const { user } = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
          name: values.name,
        },
      });
      console.log("User signed up:", user);
      Alert.alert("Success", "Sign up successful. Please check your email for verification.");
      navigation.navigate("ConfirmEmail",{ email: values.email });
    } catch (error) {
      console.log("Error signing up:", error);
      Alert.alert("Error", "An error occurred while signing up. Please try again.");
    }
  }; 
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>

        <LoginContainer>
          <SubTitle>Get Started</SubTitle>

          <Formik
            initialValues={{ name: "", email: "", password: "", confirmPassword: ""}}
            onSubmit={handleSignup}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <MyTextInput
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  //keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                <MyTextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={true}
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Get Started</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>

          <ExtraView>
            <ExtraText> Have an account? </ExtraText>
            <TextLink onPress={() => navigation.navigate("Login")}>
              <TextLinkContent>Log In</TextLinkContent>
            </TextLink>
          </ExtraView>
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

export default Signup;
