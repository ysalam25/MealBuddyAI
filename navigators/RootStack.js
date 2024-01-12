import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Walkthrough from "../pages/Walkthrough";
import Tabs from "../navigators/tabs"; // Ensure this import is correct

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#000", // Update the color as needed
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      initialRouteName="Walkthrough"
    >
      {/* Tab Navigator as a screen */}
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerShown: false, // Hide the header on Home tab
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
    </Stack.Navigator>
  );
};

export default RootStack;
