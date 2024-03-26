import React, { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigators/RootStack";
import { Button, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import axios from 'axios';
import { PantryProvider } from "./src/services/PantryState";

Amplify.configure(amplifyconfig);

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');


  // Define fetchDataFromApi function inside the component
  // const fetchDataFromApi = async () => {
  //   try {
  //     const apiResponse = await axios.get("mealbuddyapi/items");
  //     console.log("API Response:", apiResponse);
  //     // Assuming apiResponse.data is the desired response format
  //     // If not, adjust accordingly
  //     setResponse(JSON.stringify(apiResponse.data));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setResponse("Failed to fetch data");
  //   }
  // };

  // useEffect(() => {
  //   // Call the API function on component mount if needed
  //   fetchDataFromApi();
  // }, []);

  // const handleFetchResponse = () => {
  //   fetchDataFromApi();
  // };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "80%",
      height: 40,
      borderWidth: 1,
      borderColor: "gray",
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    responseText: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 20,
    },
  });

  return (
    <PantryProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <TextInput
          style={styles.input}
          placeholder="Enter your prompt"
          value={prompt}
          onChangeText={setPrompt}
        />
        <Button title="Get Response" onPress={handleFetchResponse} />
        <Text style={styles.responseText}>{response}</Text>
      </SafeAreaView>
    </PantryProvider>
  );
}
