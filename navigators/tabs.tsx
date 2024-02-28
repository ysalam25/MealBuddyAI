import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Pantry from "../pages/Pantry";
import Profile from "../pages/Profile";
import addRecipe from "../pages/AddRecipe";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: { children: React.ReactNode, onPress: any }) => (
  <TouchableOpacity
    style={{
      top: 5,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#F87D57",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffff",
          height: 80,
          paddingBottom: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
          },
          headerStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/homeIcon.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 }}
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
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 28,
          },
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/pantryIcon.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 }}
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
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} onPress={() => {}} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 28,
          },
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/profileIcon.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 28,
          },
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/settingIcon.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 25,
                  tintColor: focused ? "#F87D57" : "#000000",
                }}
              />
              <Text
                style={{ color: focused ? "#F87D57" : "#000000", fontSize: 12 }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
