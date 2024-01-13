// RecipeDetail.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{recipe.title}</Text>
      <Text style={styles.attribute}>{recipe.attributes[0]}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preparation</Text>
        <Text style={styles.sectionContent}>{recipe.preparationTime}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cooking</Text>
        <Text style={styles.sectionContent}>{recipe.cookingTime}</Text>
      </View>
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
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  sectionContent: {
    // Additional styling if needed
  },
  // ... Add more styles as needed
});

export default RecipeDetailScreen;
