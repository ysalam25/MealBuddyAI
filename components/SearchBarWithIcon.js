import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchBarWithIcons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/Icons/searchIcon.png")}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity style={styles.pantryIcon}>
        <Image
          source={require("../assets/Icons/pantryIcon.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF", // Background color for the search bar
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8, // Space between search bar and pantry icon
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10, // Space for the search icon inside the bar
    paddingRight: 10, // Space before the pantry icon on the right
  },
  searchIcon: {
    marginLeft: 10, // Space from the left edge of the search bar
    width: 20,
    height: 20,
    tintColor: "gray", // Icon color, you can adjust as needed
  },
  pantryIcon: {
    padding: 10,
    backgroundColor: "#FFF", // Background color for the pantry icon
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "gray", // Icon color, you can adjust as needed
  },
});

export default SearchBarWithIcons;
