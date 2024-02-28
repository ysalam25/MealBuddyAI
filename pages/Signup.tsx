import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, View } from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  StyledContainer,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from "../components/styles";

// Define the types for your component's props
type SignupProps = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your navigation state type if available
};

// Define the types for the form values
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const handleSignup = async (values: FormValues) => {
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
      navigation.navigate("ConfirmEmail", { email: values.email });
    } catch (error) {
      console.log("Error signing up:", error);
      Alert.alert("Error", "An error occurred while signing up. Please try again.");
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Get Started</SubTitle>

        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          onSubmit={handleSignup}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                placeholder="Name"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {/* Other text inputs */}
              <StyledButton onPress={handleSubmit as any}>
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
          <StyledButton onPress={() => navigation.navigate("DietaryPreferences")}>
            <ButtonText>Go to Dietary Preferences</ButtonText>
          </StyledButton>
        </ExtraView>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput: React.FC<{ label?: string } & React.ComponentProps<typeof StyledTextInput>> = (props) => (
  <View>
    <StyledTextInput {...props} />
  </View>
);

export default Signup;
