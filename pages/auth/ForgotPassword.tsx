import React from "react";
import { StatusBar } from "expo-status-bar";

import { Formik } from "formik";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { Colors } from "../../components/styles";
import { Auth } from "@aws-amplify/auth";
import { styles } from "../../components/screen/ForgotPassword";

const ForgotPassword = ({ navigation }: { navigation: any }) => {
  const[error, setError] = React.useState<string>("");
  const handleForgotPassword = async (values: { email: string }) => {
    try {
      await Auth.forgotPassword(values.email); // Call the auth.forgotPassword function with the email value
      console.log("Password reset email sent successfully");
      console.log(navigation.state);
      navigation.navigate("NewPasswordScreen", {
        email: values.email,
        previousPage: navigation.state,
      });
    } catch (error: any) {
      if(error.message === "Username/client id combination not found.") {
        setError("User not found");
      } else if (error.message === "User is not confirmed.") {
        setError("User not confirmed");
      } else if (error.message === "User does not exist.") {
        setError("User does not exist");
      } else if (values.email === "") {
        setError("Email cannot be empty");
      }
    }
  };
  return (
    <View style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style={styles.ResetContainer}>
          <Text style={styles.SubTitle}>Reset your password</Text>
          <Text style={styles.ExtraText}>Enter your email address</Text>
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
                {error && (
                  <View style={styles.ErrorContainer}>
                    <Image source={require('../../assets/Icons/errorIcon.png')} style={styles.ErrorIcon} />
                    <Text style={styles.ErrorText}>{error}</Text>
                  </View>
                )}
                <View style={styles.ButtonContainer}>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.StyledButton}>
                    <Text style={styles.ButtonText}>Send</Text>
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
