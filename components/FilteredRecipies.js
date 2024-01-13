import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilteredRecipes = ({ recipes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filtered Recipes</Text>
      <View style={styles.recipesContainer}>
        {recipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeContainer}>
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeCategory}>{recipe.category}</Text>
            {/* Render other details of the recipe as needed */}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  recipesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  recipeContainer: {
    width: 150,
    height: 174,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  recipeTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },
  recipeCategory: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
  },
});

export default FilteredRecipes;