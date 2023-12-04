import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify, API} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


export default function App() {
  async function fetchWoohoo(){
      API
      
      .get("mealbuddylambda", "/items", {}).then((response) => {
        setMyMessage(response.success);
        console.log(`Response: ${response}`);
      }).catch((error) => {
        console.log(`Error: ${error}`);
      });
    }

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
