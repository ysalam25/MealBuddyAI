import React from "react";

import { NavigationContainer } from "@react-navigation/native";
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

// test home page
import TestHome from "./../pages/TestHome";
import Pantry from "./../pages/Pantry"
import EditItem from "./../pages/EditItem"

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          hearderTintColor: secondary,
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainterStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Walkthrough"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="TestHome" component={TestHome} />
        <Stack.Screen name="Pantry" component={Pantry} />
        <Stack.Screen name="EditItem" component={EditItem} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
