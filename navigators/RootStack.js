import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./../components/styles";
const { primary, secondary } = Colors;

//pages
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import ForgotPassword from "./../pages/ForgotPassword";
import NewPasswordScreen from "./../pages/NewPasswordScreen";
import Walkthrough1 from "./../pages/Walkthrough1";
import Settings from "./../pages/Settings";
import Tabs from "../navigators/tabs"; 
import ConfirmEmail from "./../pages/ConfirmEmail";
import DietaryPreferences from "./../pages/DietaryPreferences";
import LoginNewUser from "./../pages/LoginNewUser";
import RecipeDetailScreen from "../pages/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#000",
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      initialRouteName="Walkthrough1"
    >
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ route }) => ({
          headerShown: !route.params?.loggedOut,
        })}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Walkthrough1" component={Walkthrough1} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="DietaryPreferences" component={DietaryPreferences} />
      <Stack.Screen name="LoginNewUser" component={LoginNewUser} />
        
      <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
