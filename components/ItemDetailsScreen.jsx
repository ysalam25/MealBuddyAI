import React , {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const ItemDetailsScreen = ({ route, navigation }) => {
  const { itemData } = route.params;
  const imageUrl = itemData.image_url;
  const [expirationDate, setExpirationDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unitType, setUnitType] = useState(null);
  const [category, setCategory] = useState(null);
  const [unitTypes, setUnitTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  


  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return false;
    }
    const dateObj = new Date(date);
    return dateObj instanceof Date && !isNaN(dateObj);
  };

  const formatNutrientValue = (value) => {
    return value ? parseFloat(value).toFixed(2) : "0.00";
  };

  const addItem = () => {
    console.log("Item added");
    if (!validateDate(expirationDate)) {
      Alert.alert('Invalid date', 'Please enter a valid date in the format YYYY-MM-DD');
      return;
    }
    console.log('Expiration Date: ', expirationDate);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

   
    <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
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
      <Text style={styles.subtitle}>Enter Expiration Date:</Text>
      <TextInput
          style={styles.input}
          onChangeText={setExpirationDate}
          value={expirationDate}
          placeholder="Enter Expiration Date"
        />
         <Text style={styles.subtitle}>Enter Quantity</Text>
         <TextInput
          style={styles.input}
          onChangeText={setQuantity}
          value={quantity.toString()}
          placeholder="Enter Quantity"
        />
         <Text style={styles.subtitle}>Enter Unit Type for Quantity:</Text>
         <DropDownPicker
            items={unitTypes}
            defaultValue={unitType}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => setUnitType(item.value)}
          />
         <Text style={styles.subtitle}>Enter Category</Text>
      
      <TouchableOpacity
        style={[styles.button, styles.buttonSpacing]}
        onPress={addItem}
      >
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
   
    backgroundColor: "#F9F6EE",
  },
  detailBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F9F6EE",
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default ItemDetailsScreen;
