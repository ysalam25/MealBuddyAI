import { StyleSheet, Text, View } from "react-native";
import { Amplify, API } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigators/tabs"; 
Amplify.configure(amplifyconfig);

import RootStack from "./navigators/RootStack";

export default function App() {
  useEffect(() => {
    // Function to make the API call
    const fetchDataFromApi = async () => {
      try {
        const apiResponse = await API.get("mealbuddyapi", "/items");
        console.log("API Response:", apiResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the API function
    fetchDataFromApi();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
