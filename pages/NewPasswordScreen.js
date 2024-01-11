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

const NewPasswordScreen = ({navigation, route}) => {
    const { email } = route.params;
    const handlePasswordReset = async (values) => {
        try {
          await Auth.forgotPasswordSubmit(
            email,
            values.verificationCode,
            values.password
          ); 
          console.log("Password reset successful");
          navigation.navigate("Login");
        } catch (error) {
          console.log("Error resetting password:", error);
        }
      };
    return (
        <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
    
            <LoginContainer>
              <SubTitle>Reset your password</SubTitle>
    
              <Formik
                initialValues={{ name: "", email: "", password: "", confirmPassword: ""}}
                onSubmit={handlePasswordReset}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                        placeholder="Verification Code"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("verificationCode")}
                        onBlur={handleBlur("verificationCode")}
                        value={values.verificationCode}
                        keyboardType="numeric"
                    />
                    <MyTextInput
                        placeholder="Password"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>Submit</ButtonText>
                    </StyledButton>
                  </StyledFormArea>
                )}
              </Formik>
    
              <ExtraView>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Back to Log In</TextLinkContent>
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

export default NewPasswordScreen;