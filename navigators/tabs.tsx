import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "../pages/Home";
import Profile from "../pages/profile/Profile";
import Pantry from "../pages/Pantry";
import addRecipe from "../pages/recipes/AddRecipe";
import Cart from "../pages/ShoppingCart/Cart";
import { colors } from "../components/constants/colors";

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window');
const tabBarHeight = height * 0.1;

type CustomTabBarButtonProps = {
  onPress?: () => void;
};

const CustomTabBarButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 5,
        width: 60,
        height: 60,
      }}
      onPress={() => navigation.navigate('AddRecipeOptions')}
    >
      <Image
        source={require('../assets/Icons/addIcon.png')}
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
        }}
      />
    </TouchableOpacity>
  );
};


const Tabs: React.FC = () => {
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
          tabBarButton: () => <CustomTabBarButton />
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 0,
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

    </React.Fragment>
  );
};

export default Tabs;
