// import React, { useEffect } from "react";
// import { Amplify, API } from "aws-amplify";
 //import amplifyconfig from "./src/amplifyconfiguration.json";
 import { NavigationContainer } from "@react-navigation/native";
 import RootStack from "./navigators/RootStack";
import { TamaguiProvider, Text, Button } from 'tamagui';
import tamaguiConfig from './tamagui.config'
import { H1, H2, H3, H4, H5, H6, Heading } from 'tamagui'


// Amplify.configure(amplifyconfig);
// export default function App() {
//   useEffect(() => {
//     // Function to make the API call
//     const fetchDataFromApi = async () => {
//       try {
//         const apiResponse = await API.get("mealbuddyapi", "/items");
//         console.log("API Response:", apiResponse);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Call the API function
//     fetchDataFromApi();
//   }, []);

//   return (
//     <TamaguiProvider config={tamaguiConfig}>
//       <NavigationContainer>
//         <Text>
//           Hello World
//         </Text>
//         <RootStack />
//       </NavigationContainer>
//     </TamaguiProvider>
//   );
// }

import { useFonts } from 'expo-font'

function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }

  return <MyApp />
}

// export default () => (
//   <>
//     <H1>Heading 1</H1>
//     <H2>Heading 2</H2>
//     <H3>Heading 3</H3>
//     <H4>Heading 4</H4>
//     <H5>Heading 5</H5>
//     <H6>Heading 6</H6>
//     <Heading>Heading</Heading>
//   </>
// )



export default function Demo() {
  return (
        <TamaguiProvider config={tamaguiConfig}> 
       
          <NavigationContainer>
            <Text>
              Hello World
            </Text>
            <Button onPress={() => console.log('Hello!')}>
            Hello World
          </Button>
            <RootStack />
          </NavigationContainer>
        </TamaguiProvider>
      );
}