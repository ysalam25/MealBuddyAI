import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const DetailPageButton = ({ iconName, text, onPress, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.detailButton, style]}>
    <AntDesign name={iconName} size={16} color="black" />
    <Text style={[styles.detailButtonText, textStyle]}>{text}</Text>
  </TouchableOpacity>
);
const addToLikes = () => {
  console.log("Added to Likes");
  // Add your logic for liking the recipe here
};
const saveToCookbook = () => {
  console.log("Saved to Cookbook");
  // Add your logic for saving the recipe here
};

const RecipeDetailScreen = ({ route }: { route: any }) => {
  const { recipe } = route.params;
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{recipe.title}</Text>
      <Text style={styles.attribute}>{recipe.attributes[0]}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleLike}>
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={20}
            color={liked ? "red" : "black"}
          />
          <Text style={styles.buttonText}>
            {liked ? "Added to Likes" : "Add to Likes"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleSave}>
          <AntDesign
            name={saved ? "check" : "book"}
            size={20}
            color={saved ? "green" : "black"}
          />
          <Text style={styles.buttonText}>
            {saved ? "Saved to Cookbook" : "Save to Cookbook"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preparation</Text>
        <Text style={styles.sectionContent}>{recipe.preparationTime}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#808080",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cooking</Text>
        <Text style={styles.sectionContent}>{recipe.cookingTime}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#808080",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total</Text>
        <Text style={styles.sectionContent}>{recipe.totalTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    paddingTop: 40,
  },
  attribute: {
    fontStyle: "italic",
    marginBottom: 16,
  },
  section: {
    paddingTop: 15,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  sectionContent: {},
  detailButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#ffc5b0", // Or any other color you prefer
  },
  detailButtonText: {
    marginLeft: 6,
    color: "#000",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD1DC",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    // Adjust the elevation and shadow as per your design requirements
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: {
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
});

export default RecipeDetailScreen;
