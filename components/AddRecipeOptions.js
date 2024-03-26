import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import iconCamera from "../assets/icon-add-camera.png";
import iconPlus from "../assets/icon-add-plus.png";
import { useNavigation } from "@react-navigation/native";
import * as Permissions from "expo-permissions";

const AddRecipeOptions = () => {
  const navigation = useNavigation();

  const handleScanWithCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      navigation.navigate("CameraScreen");
    } else {
      console.log("Camera permission denied");
    }
  };

  const handleEnterDetailsManually = async () => {
    navigation.navigate("EnterFoodItemScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={handleScanWithCamera}
        activeOpacity={0.7}
      >
        <Image source={iconCamera} style={styles.icon} />
        <Text>Scan with camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={handleEnterDetailsManually}
        activeOpacity={0.7}
      >
        <Image source={iconPlus} style={styles.icon} />
        <Text>Enter details manually</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  optionButton: {
    backgroundColor: "white",
    elevation: 2,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: 150,
    alignItems: "center",
  },
  icon: {
    width: 45, // Increased by 50%
    height: 45, // Increased by 50%
    marginBottom: 10,
  },
});

export default AddRecipeOptions;
