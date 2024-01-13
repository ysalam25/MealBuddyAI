import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./../components/styles";
const { primary, secondary } = Colors;

//pages
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import Walkthrough from "./../pages/Walkthrough";
import ConfirmEmail from "./../pages/ConfirmEmail";
import ForgotPassword from "./../pages/ForgotPassword";
import NewPasswordScreen from "./../pages/NewPasswordScreen";
import Walkthrough1 from "./../pages/Walkthrough1";
import RecipeDetailScreen from "../pages/RecipeDetailScreen";

// test home page
import TestHome from "./../pages/TestHome";
import Tabs from "../navigators/tabs";
import Pantry from "./../pages/Pantry"
import EditItem from "./../pages/EditItem"
import Tabs from "../navigators/tabs"; // Ensure this import is correct

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: secondary, // Update the color as needed
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Walkthrough1" component={Walkthrough1} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
      <Stack.Screen name="TestHome" component={TestHome} />
      <Stack.Screen name="Pantry" component={Pantry} />
      <Stack.Screen name="EditItem" component={EditItem} />
    </Stack.Navigator>
  );
};

export default RootStack;
