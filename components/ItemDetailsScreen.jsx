import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ItemDetailsScreen = ({ route }) => {
  const { itemData } = route.params;
  const imageUrl = itemData.image_url;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.title}>{itemData.product_name}</Text>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        <Text>Brand: {itemData.brands}</Text>
        <Text>Quantity: {itemData.quantity}</Text>

        <Text style={styles.subtitle}>Nutritional Information (per 100g):</Text>
        {itemData.nutriments && (
          <>
            <Text>Energy: {itemData.nutriments.energy} kJ</Text>
            <Text>Fat: {itemData.nutriments.fat} g</Text>
            <Text>Saturated Fat: {itemData.nutriments["saturated-fat"]} g</Text>
            <Text>Carbohydrates: {itemData.nutriments.carbohydrates} g</Text>
            <Text>Sugars: {itemData.nutriments.sugars} g</Text>
            <Text>Fiber: {itemData.nutriments.fiber} g</Text>
            <Text>Proteins: {itemData.nutriments.proteins} g</Text>
            <Text>Salt: {itemData.nutriments.salt} g</Text>

          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80, 
  },
  detailBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ItemDetailsScreen;
