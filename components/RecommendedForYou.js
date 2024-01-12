import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Mock data
const items = [
  {
    title: "Creamy Mushroom Pasta",
    attributes: ["Vegan", "30 mins"],
  },
  {
    title: "Fluffy Pancakes",
    attributes: [],
  },
  {
    title: "Blueberry Pancakes",
    attributes: ["20 mins"],
  },
  // ... other items
];

const RecommendedItem = ({ title, attributes }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    {attributes.map((attribute, index) => (
      <Text key={index} style={styles.itemAttribute}>
        {attribute}
      </Text>
    ))}
  </View>
);

const RecommendedForYou = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Recommended for you</Text>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemsList}
    >
      {items.map((item, index) => (
        <RecommendedItem
          key={index}
          title={item.title}
          attributes={item.attributes}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "transparent",
  },
  viewAllText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
  itemsList: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  itemContainer: {
    width: "auto",
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },
  itemAttribute: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
  },
});

export default RecommendedForYou;
