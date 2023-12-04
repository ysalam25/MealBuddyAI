import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify, API } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import React, { useEffect } from 'react';

Amplify.configure(amplifyconfig);


export default function App() {
  useEffect(() => {
    // Function to make the API call
    const fetchDataFromApi = async () => {
      try {
        const apiResponse = await API.get('mealbuddyapi', '/items');
        console.log('API Response:', apiResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the API function
    fetchDataFromApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text>MealBuDDY!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
