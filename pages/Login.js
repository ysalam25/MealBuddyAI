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

const Login = ({ navigation }) => {
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
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Walkthrough");
            }}
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
              </StyledFormArea>
            )}
          </Formik>
          <StyledButton>
            <ButtonText>Log In</ButtonText>
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

export default Login;
