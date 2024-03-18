import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchBarWithIcon = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity >
          <Image
            source={require("../assets/Icons/searchIcon.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.pantryIcon}>
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
    marginLeft: 0,
    marginRight: 0,
    
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8, 
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10, 
    paddingRight: 10, 
  },
  searchIcon: {
    marginLeft: 10, 
    width: 20,
    height: 20,
    tintColor: "gray",
  },
  pantryIcon: {
    padding: 10,
    backgroundColor: "#FFF", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "gray", 
  },
});

export default SearchBarWithIcon;
