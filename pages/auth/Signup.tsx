import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../../components/screen/SignUpScreen";
import { colors } from "../../components/constants/colors";


type SignupProps = {
  navigation: StackNavigationProp<any>; 
};

// Define the types for the form values
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {

  const [error, setError] = useState<string>("");
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
    } catch (error: any) {
      // console.log("Error signing up:", error);
      // Alert.alert("Error", "An error occurred while signing up. Please try again.");
      if (!values.name && !values.email && !values.password && !values.confirmPassword) {
        setError('Please fill in all fields.');
      } else if (!values.name) {
        setError('Name cannot be empty.');
      } else if (!values.email) {
        setError('Email cannot be empty.');
      } else if (!values.password) {
        setError('Password cannot be empty.');
      } else if (!values.confirmPassword) {
        setError('Confirm Password cannot be empty.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <View style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style={styles.SignUpContainer}>
          <Text style={styles.SubTitle}>Get Started</Text>
          <View style={styles.ExtraView}>
            <Text style={styles.ExtraText}> Have an account? </Text>
            <Text style={styles.TextLink} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.TextLinkContent}>Log In</Text>
            </Text>
          </View>

            <Formik
              initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
              onSubmit={handleSignup}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.StyledFormArea}>
                  <Text style={styles.Label}>Name</Text>
                  <TextInput
                    style={styles.StyledTextInput}
                    placeholder="Name"
                    placeholderTextColor={colors.darkLight}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  <Text style={styles.Label}>Email Address</Text>
                  <TextInput
                    style={styles.StyledTextInput}
                    placeholder="Email Address"
                    placeholderTextColor={colors.darkLight}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <Text style={styles.Label}>Password</Text>
                  <TextInput
                    style={styles.StyledTextInput}
                    placeholder="Password"
                    placeholderTextColor={colors.darkLight}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={true}
                  />
                  <Text style={styles.Label}>Confirm Password</Text>
                  <TextInput
                    style={styles.StyledTextInput}
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.darkLight}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    secureTextEntry={true}
                  />
                   <View style={styles.FullContainer}>
                  {error && (<View style={styles.ErrorContainer}>
                    <Image source={require('../../assets/Icons/errorIcon.png')} style={styles.ErrorIcon} />
                    <Text style={styles.ErrorText}>{error}</Text>
                  </View>
                    )}
                 
                    <View style={styles.ButtonContainer}>
                      <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={styles.StyledButton}>
                        <Text style={styles.ButtonText}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
        </View>
      </View>
    </View>
  );
};

export default Signup;
