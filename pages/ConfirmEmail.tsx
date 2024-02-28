import React, { useState } from "react";
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
import { View, Alert } from "react-native";
import { Colors } from "../components/styles";
import { Auth } from "@aws-amplify/auth";

const ConfirmEmail = ({ navigation , route}: { navigation: any, route: any }) => {
  const { email } = route.params;
  const [resendLoading, setResendLoading] = useState(false);
  

  const handleVerification = async (values: { verificationCode: string }) => {
    try {
      await Auth.confirmSignUp(email, values.verificationCode);
      Alert.alert("Success", "Email verification successful. You can now log in.");
      navigation.navigate("LoginNewUser");
    } catch (error) {
      console.log("Error verifying email:", error);
      Alert.alert("Error", "An error occurred while verifying your email. Please try again.");
    }
  };

  const handleResend = async () => {
    try {
      setResendLoading(true);
      await Auth.resendSignUp(email);
      Alert.alert("Success", "Verification code has been resent.");
    } catch (error) {
      console.log("Error resending verification code:", error);
      Alert.alert("Error", "An error occurred while resending the verification code. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <LoginContainer>
          <SubTitle>Verify your email</SubTitle>
          <Formik
            initialValues={{
              verificationCode: "",
            }}
            onSubmit={handleVerification}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <ExtraText>Please enter the verification code we sent to your email address to complete the verification process.</ExtraText>
                <MyTextInput
                label = "Verification Code"
                  placeholder="Verification Code"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("verificationCode")}
                  onBlur={handleBlur("verificationCode")}
                  value={values.verificationCode}
                  keyboardType="numeric"
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Verify</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
          <ExtraView>
            <ExtraText>Already verified? </ExtraText>
            <TextLink onPress={() => navigation.navigate("Login")}>
              <TextLinkContent>Log In</TextLinkContent>
            </TextLink>
          </ExtraView>
          <ExtraView>
            <ExtraText>Didn't receive the code? </ExtraText>
            <StyledButton onPress={handleResend} disabled={resendLoading}>
              <ButtonText>{resendLoading ? "Resending..." : "Resend"}</ButtonText>
            </StyledButton>
          </ExtraView>
        </LoginContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

// Colors
const { primary, darkLight } = Colors;

const MyTextInput = ({ label, ...props }: { label: string, [key: string]: any }) => {
  return (
    <View>
      <StyledTextInput {...props} />
    </View>
  );
};

export default ConfirmEmail;