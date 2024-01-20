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
import { Auth } from "@aws-amplify/auth";

const Login = ({ navigation }) => {
  const handleLogin = async (values) => {
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log("User logged in:", user);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <LoginContainer>
          <SubTitle>Login</SubTitle>
          <ExtraView>
            <ExtraText> No account? </ExtraText>
            <TextLink onPress={() => navigation.navigate("Signup")}>
              <TextLinkContent>Sign Up</TextLinkContent>
            </TextLink>
          </ExtraView>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                <TextLink onPress={() => navigation.navigate("ForgotPassword")}>
                  <TextLinkContent>Forgot Password?</TextLinkContent>
                </TextLink>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Log In</ButtonText>
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

export default Login;


