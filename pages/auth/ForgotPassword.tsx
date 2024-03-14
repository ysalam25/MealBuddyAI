import React from "react";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../components/styles";
import { Auth } from "@aws-amplify/auth";
import { styles } from "../../components/screen/ForgotPassword";

const ForgotPassword = ({ navigation }: { navigation: any }) => {
  const handleForgotPassword = async (values: { email: string }) => {
    try {
      await Auth.forgotPassword(values.email); // Call the auth.forgotPassword function with the email value
      console.log("Password reset email sent successfully");
      console.log(navigation.state);
      navigation.navigate("NewPasswordScreen", {
        email: values.email,
        previousPage: navigation.state,
      });
    } catch (error) {
      console.log("Error sending password reset email:", error);
    }
  };
  return (
    <View style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style={styles.ResetContainer}>
          <Text style={styles.SubTitle}>Resets your password</Text>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={handleForgotPassword}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.StyledFormArea}>
                <TextInput
                  style={styles.StyledTextInput}
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <View style={styles.ButtonContainer}>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.StyledButton}>
                    <Text style={styles.ButtonText}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          {/* <ExtraView>
            {navigation && navigation.state && navigation.state.routeName === "Settings" ? (
              <TextLink onPress={() => navigation.navigate("Login")}>
                <TextLinkContent>Back to Log In</TextLinkContent>
              </TextLink>
            ) : null}
          </ExtraView> */}
        </View>
      </View>
    </View>
  );
};

//Colors
const { darkLight } = Colors;


export default ForgotPassword;
