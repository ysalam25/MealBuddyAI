import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
];

const RecommendedItem = ({ title, attributes }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      {attributes.map((attribute, index) => (
        <View
          key={index}
          style={
            attribute.toLowerCase() === "vegan"
              ? styles.attributeVegan
              : styles.attributeNormal
          }
        >
          <Text style={styles.attributeText}>{attribute}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
        <Text style={styles.likeButtonText}>
          {liked ? "Added to Likes" : "Like"}
        </Text>
        <AntDesign name="heart" size={16} color={liked ? "red" : "black"} />
      </TouchableOpacity>
    </View>
  );
};
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
    alignItems: "flex-start",
    height: 150,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "left",
  },
  itemAttribute: {
    color: "gray",
    fontSize: 14,
    textAlign: "left",
  },
  likeButton: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFD1DC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    alignSelf: "flex-start",
  },
  likeButtonText: {
    color: "#000",
    marginRight: 8,
    textAlign: "left",
  },
  attributeContainer: {
    backgroundColor: "#D3D3D3",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    marginBottom: 4,
    marginRight: 4,
  },
  attribute: {
    textAlign: "left",
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default RecommendedForYou;
