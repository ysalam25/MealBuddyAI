import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../components/screen/ConfirmEmailScreen";
import { Formik } from "formik";
import { View, Alert, Text, TouchableOpacity, TextInput } from "react-native";
import { Colors } from "../../components/styles";
import { Auth } from "@aws-amplify/auth";

const ConfirmEmail = ({ navigation, route }: { navigation: any, route: any }) => {
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
    <View style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style={styles.LoginContainer}>
          <Text style={styles.SubTitle}>Verify your email</Text>
          <Formik
            initialValues={{
              verificationCode: "",
            }}
            onSubmit={handleVerification}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.StyledFormArea}>
                <Text style={styles.ExtraText}>Please enter the verification code we sent to your email address to complete the verification process.</Text>
                <TextInput
                  style={styles.StyledTextInput}
                  placeholder="Verification Code"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("verificationCode")}
                  onBlur={handleBlur("verificationCode")}
                  value={values.verificationCode}
                  keyboardType="numeric"
                  maxLength={6}
                />
                <View style={styles.ButtonContainer}>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.StyledButton}>
                    <Text style={styles.ButtonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View style={styles.BottomContainer}>
            <View style={styles.ExtraView}>
              <Text style={styles.ExtraTextBottom}>Didn't recieve the code? </Text>
              <Text
                onPress={resendLoading ? () => { } : handleResend}
                style={styles.TextLink}
              >
                <Text style={styles.TextLinkContent}>Send again</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Colors
const { primary, darkLight } = Colors;

export default ConfirmEmail;