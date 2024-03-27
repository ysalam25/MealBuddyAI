import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "../components/styles";
const { primary, secondary } = Colors;

//pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import NewPasswordScreen from "../pages/auth/NewPasswordScreen";
import Walkthrough from "../pages/walkthrough/Walkthrough";
import Profile from "../pages/profile/Profile";
import Tabs from "./tabs"; 
import ConfirmEmail from "../pages/auth/ConfirmEmail";
import LoginNewUser from "../pages/auth/LoginNewUser";
import RecipeDetailScreen from "../pages/recipes/RecipeDetailScreen";
import Pantry from "../pages/Pantry"
import EditItem from "../pages/EditItem"
import DietaryPreferences from "../pages/profile/DietaryPreferences";
import CameraScreen from "../components/CameraScreen";
import EnterFoodItemScreen from "../components/EnterFoodItemScreen";
import ItemDetailsScreen from "../components/ItemDetailsScreen";
import AddRecipeOptions from "../components/AddRecipeOptions";
import AddItem from "../pages/AddItem";
import OnboardingPage1 from "../pages/profile/OnboardingPage1";
import EditName from "../pages/profile/EditName";
import EditEmail from "../pages/profile/EditEmail";
import ChangePassword from "../pages/profile/ChangePassword";
import CurrentDiet from "../pages/profile/CurrentDiet";
import DietaryRestrctions from "../pages/profile/DietaryRestrictions";
import NutritionGoals from "../pages/profile/NutritionGoals";


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#000",
        headerTransparent: true,
        headerTitle: "",
        headerBackButtonMenuEnabled: true,
      }}
      initialRouteName="Walkthrough"
    >
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ route }) => ({
          headerShown: !(route.params as { loggedOut?: boolean })?.loggedOut,
        })}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} options={{ headerShown: false }} />
      <Stack.Screen 
  name="DietaryPreferences" 
  component={DietaryPreferences} 
  options={{ headerShown: false }}
/>
      <Stack.Screen name="LoginNewUser" component={LoginNewUser} />
      <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
      <Stack.Screen name="Pantry" component={Pantry} />
      <Stack.Screen name="EditItem" component={EditItem} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="EnterFoodItemScreen" component={EnterFoodItemScreen} />
      <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      <Stack.Screen name="AddRecipeOptions" component={AddRecipeOptions} />
       <Stack.Screen name="CurrentDiet" component={CurrentDiet} />
      <Stack.Screen name="DietaryRestrictions" component={DietaryRestrctions} /> 
      <Stack.Screen name="NutritionGoals" component={NutritionGoals} /> 
      <Stack.Screen name="EditName" component={EditName} />
      <Stack.Screen name="EditEmail" component={EditEmail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />

    </Stack.Navigator>
  );
};

export default RootStack;
