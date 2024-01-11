import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./../components/styles";
const { primary, secondary } = Colors;

//pages
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import Walkthrough from "./../pages/Walkthrough";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
