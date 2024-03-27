import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const ItemDetailsScreen = ({ route, navigation }) => {
  const { itemData } = route.params;
  const imageUrl = itemData.image_url;

  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const formatNutrientValue = (value) => {
    return value ? parseFloat(value).toFixed(2) : "0.00";
  };

  const addItem = () => {
    console.log("Add Item button pressed");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.title}>{itemData.product_name}</Text>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        <Text style={styles.subtitle}>Nutritional Information (per 100g):</Text>
        {itemData.nutriments && (
          <>
            <Text>
              Energy: {formatNutrientValue(itemData.nutriments.energy)} kJ
            </Text>
            <Text>Fat: {formatNutrientValue(itemData.nutriments.fat)} g</Text>
            <Text>
              Saturated Fat:{" "}
              {formatNutrientValue(itemData.nutriments["saturated-fat"])} g
            </Text>
            <Text>
              Carbohydrates:{" "}
              {formatNutrientValue(itemData.nutriments.carbohydrates)} g
            </Text>
            <Text>
              Sugars: {formatNutrientValue(itemData.nutriments.sugars)} g
            </Text>
            <Text>
              Fiber: {formatNutrientValue(itemData.nutriments.fiber)} g
            </Text>
            <Text>
              Proteins: {formatNutrientValue(itemData.nutriments.proteins)} g
            </Text>
            <Text>Salt: {formatNutrientValue(itemData.nutriments.salt)} g</Text>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateHome}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonSpacing]}
        onPress={addItem}
      >
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#F9F6EE",
  },
  detailBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FFD1DC",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSpacing: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ItemDetailsScreen;
