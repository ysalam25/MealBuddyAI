import React, { useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigators/RootStack";
import { TamaguiProvider, Text, Button } from 'tamagui';
import tamaguiConfig from './tamagui.config'

Amplify.configure(amplifyconfig);


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
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Text>
          Hello World
        </Text>
        <RootStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}
