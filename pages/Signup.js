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

const Signup = ({navigation}) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>

        <LoginContainer>
          <SubTitle>Get Started</SubTitle>

          <Formik
            initialValues={{ firstName: '', lastName: '', email: "", password: "", confirmPassword: ""}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="First Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                />
                <MyTextInput
                  placeholder="Last Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
                <MyTextInput
                  placeholder="Email Address"
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
                <MyTextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={true}
                />
              </StyledFormArea>
            )}
          </Formik>

          <StyledButton>
            <ButtonText>Get Started</ButtonText>
          </StyledButton>

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
