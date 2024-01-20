//  import React, { useEffect } from "react";
// // import { Amplify, API } from "aws-amplify";
//  //import amplifyconfig from "./src/amplifyconfiguration.json";
//  import { NavigationContainer } from "@react-navigation/native";
//  import RootStack from "./navigators/RootStack";
// import { TamaguiProvider, Text, Button } from 'tamagui';
// import tamaguiConfig from './tamagui.config'
// import { H1, H2, H3, H4, H5, H6, Heading } from 'tamagui'


// // Amplify.configure(amplifyconfig);
// // export default function App() {
// //   useEffect(() => {
// //     // Function to make the API call
// //     const fetchDataFromApi = async () => {
// //       try {
// //         const apiResponse = await API.get("mealbuddyapi", "/items");
// //         console.log("API Response:", apiResponse);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     // Call the API function
// //     fetchDataFromApi();
// //   }, []);

// //   return (
// //     <TamaguiProvider config={tamaguiConfig}>
// //       <NavigationContainer>
// //         <Text>
// //           Hello World
// //         </Text>
// //         <RootStack />
// //       </NavigationContainer>
// //     </TamaguiProvider>
// //   );
// // }


// function App() {
//   const [loaded] = useFonts({
//     Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
//     InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       // can hide splash screen here
//     }
//   }, [loaded])

//   if (!loaded) {
//     return null;
//   }

//   return <MyApp />
// }


// export default function Demo() {
//   return (
//         <TamaguiProvider config={tamaguiConfig}> 
       
//           <NavigationContainer>
//             <Text>
//               Hello World
//             </Text>
//             <Button onPress={() => console.log('Hello!')}>
//             Hello World
//           </Button>
//             <RootStack />
//           </NavigationContainer>
//         </TamaguiProvider>
//       );
// }

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import { TamaguiProvider, Text, Button } from 'tamagui';
import tamaguiConfig from './tamagui.config';
import RootStack from "./navigators/RootStack";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // Load the Inter font
        'Inter': require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        'InterBold': require("@tamagui/font-inter/otf/Inter-Bold.otf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Or any loading component
  }

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
