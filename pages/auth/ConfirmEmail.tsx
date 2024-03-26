import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../components/screen/ConfirmEmailScreen";
import { Formik } from "formik";
import { View, Alert, Text, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { Colors } from "../../components/styles";
import { Auth } from "@aws-amplify/auth";
import { API } from "aws-amplify";

const ConfirmEmail = ({ navigation, route }: { navigation: any, route: any }) => {
  const { email, password, name } = route.params;
  const [resendLoading, setResendLoading] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);

  const handleVerification = async (values: { verificationCode: string }) => {
    setVerificationLoading(true);
    try {
      await Auth.confirmSignUp(email, values.verificationCode);
      const user = await Auth.signIn(email, password);

      const session = user.signInUserSession;
      if (session) {
        const idToken = session.getIdToken();
        const userId = idToken.payload.sub;

        //api call to add the new user
        const apiResponse = await postData(userId);

        // Proceed with navigation or state update with the userId
        console.log("User's sub ID:", userId);
        Alert.alert("Success", "Email verification successful. You are now signed in.");
        navigation.navigate("OnboardingPage1", { name: name, userId: userId });
      } else {
          throw new Error("Failed to get user session after sign-in.");
        }
    } catch (error) {
      console.log("Error verifying email:", error);
      Alert.alert("Error", "An error occurred while verifying your email or signing in. Please try again.");
    } finally {
      setVerificationLoading(false);
    }
  };

  const postData = async (userId:any) => {
    try {
      const apiName = 'mealbuddyapi'; 
      const path = '/users/create'; 
      const init = {
        body: JSON.stringify({
          queryStringParameters: {
            'user-id': userId
          }
        })
      }

      const response = await API.post(apiName, path, init);
      console.log('Response from posting data: ', response);
      return response;
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  const handleResend = async () => {
    try {
      setResendLoading(true);
      await Auth.resendSignUp(email);
     
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
              {({ handleChange, handleBlur, handleSubmit, values, submitForm }) => (
                <>
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
                        onPress={() => {
                          console.log('Button pressed');
                          handleSubmit();
                        }}
                        style={styles.StyledButton}
                        disabled={verificationLoading}>
                        {verificationLoading ? (
                          <ActivityIndicator size="small" color="#FFFFFF" />
                        ) : (
                          <Text style={styles.ButtonText}>Verify</Text>
                        )}
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => console.log('Link pressed')}
                      style={styles.SubTitle}
                    >
                      <Text style={styles.ExtraText}>Make sure to check your spam!</Text>
                    </TouchableOpacity>
                  </View>
                </>
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