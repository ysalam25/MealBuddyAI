import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from "../../components/constants/colors";

type RootStackParamList = {
  Cart: undefined; 
};

interface CartProps {
  navigation: StackNavigationProp<RootStackParamList, 'Cart'>;
}

interface GroceryItem {
  id: number;
  name: string;
  quantity: string;
  checked: boolean;
}

const Cart: React.FC<CartProps> = ({ navigation }) => {

  const [beverages, setBeverages] = useState<GroceryItem[]>([
    { id: 1, name: "Almond Milk", quantity: "1 gallon", checked: false },
  ]);

  const [bakery, setBakery] = useState<GroceryItem[]>([
    { id: 2, name: "Sourdough Bread", quantity: "1 loaf", checked: false },
    { id: 3, name: "Whole Wheat Tortillas", quantity: "10 pieces", checked: false },
  ]);

  const toggleCheckbox = (item: GroceryItem, setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>) => {
    setItems(prevItems => {
      return prevItems.map(prevItem => {
        if (prevItem.id === item.id) {
          return { ...prevItem, checked: !prevItem.checked };
        }
        return prevItem;
      });
    });
  };

  const renderItem = (item: GroceryItem, setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>) => (
    <View style={styles.itemContainer} key={item.id}>
      <TouchableOpacity
        style={[styles.checkbox, item.checked && styles.checkedCheckbox]}
        onPress={() => toggleCheckbox(item, setItems)}
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
      </View>
    </View>
  );

  const renderCategoryTitle = (title: string) => (
    <Text style={styles.categoryTitle}>{title}</Text>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Groceries</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.subTitle}>Beverages</Text>
        {beverages.map(item => renderItem(item, setBeverages))}
        <Text style={styles.categoryTitle}>Bakery</Text>
        {bakery.map(item => renderItem(item, setBakery))}
        {/* Add other categories and items here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
    paddingHorizontal: 20,
    
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // checkbox: {
  //   width: 20,
  //   height: 20, 
  //   borderRadius: 10, 
  //   borderWidth: 1,
  //   borderColor: '#000',
  //   marginRight: 10,
  // },
  itemTextContainer: {
    flexDirection: 'column',
  },
  itemName: {
    fontSize: 16, // was 18
  },
  itemQuantity: {
    fontSize: 12, // was 14
    color: '#A9A9A9',
  },
  categoryTitle: {
    fontSize: 20, // was 24
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
});

export default Cart;
