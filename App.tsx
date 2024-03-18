import React, { useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigators/RootStack";

Amplify.configure(amplifyconfig);

export default function App() {
  useEffect(() => {

    const fetchDataFromApi = async () => {
      try {
        const apiResponse = await API.get("mealbuddyapi", "/items", {});
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
