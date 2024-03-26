import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import iconCamera from "../assets/icon-add-camera.png";
import iconPlus from "../assets/icon-add-plus.png";
import { useNavigation } from "@react-navigation/native";

const AddRecipeOptions = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  const handleScanWithCamera = async () => {
    console.log("Scan with Cam");
  };

  const handleEnterDetailsManually = () => {
    console.log("Entering details manually");
  };

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.popup} onStartShouldSetResponder={() => true}>
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
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  popup: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", 
    alignItems: "center", 
    marginBottom: 80, 
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
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});

export default AddRecipeOptions;
