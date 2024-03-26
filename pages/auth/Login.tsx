import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../components/screen/LoginScreen";
import { Formik } from "formik";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Colors } from "../../components/styles";
import { Auth } from "@aws-amplify/auth";

const Login = ({ navigation }: { navigation: any }) => {
  const [error, setError] = useState<string>(""); // Explicitly type 'error' as 'string'
  const handleLogin = async (values: { email: string, password: string }) => {
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log("User logged in:", user);
      navigation.navigate("Home");
    } catch (error: any) { 
      if (error.message == 'Username cannot be empty') {
        setError(error.message );
      } else if (values.email == '') {
        setError(error.message);
      } else if (values.password == '' && values.email != '') {
        setError( "Password cannot be empty.");
      }else {
        setError(error.message);
      }
      
    }
  };
  return (
    <View style = {styles.StyledContainer}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style ={styles.LoginContainer}>
            <Text style={styles.SubTitle}>Login</Text>
          <View style ={styles.ExtraView}>
            <Text style={styles.ExtraText}> No account? </Text>
            <Text style={styles.TextLink} onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.TextLinkContent}>Sign Up</Text>
            </Text>
          </View>
          <View style={styles.StyledFormArea}>
            
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.StyledFormArea}>
                <TextInput
                  style={styles.StyledTextInput}
                  placeholder="Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.StyledTextInput}
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                <View style={styles.BottomContainer}>
                  <View style={styles.TextContainer}>
                    <Text style={styles.TextLink} onPress={() => navigation.navigate("ForgotPassword")}>
                      <Text style={styles.TextForgotLinkContent}>Forgot Password?</Text>
                    </Text>
                  </View>
                  
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
                      <Text style={styles.ButtonText}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
          </View>
        </View>
      </View>
    </View>
  );
};

//Colors
const { primary, darkLight } = Colors;

export default Login;
