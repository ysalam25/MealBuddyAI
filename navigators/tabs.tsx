import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import AddRecipeOptions from "../components/AddRecipeOptions";

import Home from "../pages/Home";
import Profile from "../pages/profile/Profile";
import Pantry from "../pages/Pantry";
import addRecipe from "../pages/recipes/AddRecipe";
import Cart from "../pages/ShoppingCart/Cart";
import { colors } from "../components/constants/colors";

const Tab = createBottomTabNavigator();
type CustomTabBarButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};
type TabBarIconProps = {
  focused: boolean;
  // You can add other properties here if needed, like 'color' or 'size'
};
const { height } = Dimensions.get('window');
const tabBarHeight = height * 0.1;

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      justifyContent: "center",
      alignItems: "center",
      bottom: 5,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60, // Set the width as needed
        height: 60, // Set the height as needed
        borderRadius: 30, // This will make it a circle
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const HomeIcon: React.FC<TabBarIconProps> = ({ focused }) => (
  <View style={{
    alignItems: "center",
    justifyContent: "center",
  }}>
    <Image
      source={require("../assets/Icons/homeIcon.png")}
      resizeMode="contain"
      style={{
        width: 20,
        height: 20,
        tintColor: focused ? "#F87D57" : "#000000",
      }}
    />
    <Text style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 }}>
      Home
    </Text>
  </View>
);

const Tabs = () => {
  const [isAddRecipeVisible, setAddRecipeVisible] = useState(false);
  return (
    <React.Fragment>
        <Tab.Navigator
      screenOptions={{
      tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colors.background,
          height: "13%",
          paddingBottom: "5%",
          borderTopWidth: 0,
        },
       
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight:"700",
          },
          headerStyle: {
            backgroundColor: colors.background, 
        },
       headerTransparent: true,
          
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("../assets/Icons/homeIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 20,
                  bottom: "10%",
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12, fontWeight: "600"}}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pantry"
        component={Pantry}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight:"700",
          },
          headerStyle: {
            backgroundColor: colors.background, 
        },
        headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
               
              }}
            >
              <Image
                source={require("../assets/Icons/pantryIcon.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  bottom: "10%",
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 , fontWeight: "600"}}
              >
                Pantry
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="addRecipe"
        component={addRecipe}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Icons/addIcon.png")}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
                
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={() => setAddRecipeVisible(true)} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight:"700",
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTransparent: true,
         
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("../assets/Icons/searchIcon.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  bottom: "10%",
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12, fontWeight: "600"}}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight:"700",
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/Icons/profileIcon.png")}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  bottom: "10%",
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 , fontWeight: "600"}}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

    <AddRecipeOptions
    isVisible={isAddRecipeVisible}
    onClose={() => setAddRecipeVisible(false)}
    />
    </React.Fragment>
  );
};

export default Tabs;
