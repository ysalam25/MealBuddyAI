import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//flash cards
const FlashCardItem = ({ item, navigation }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const handlePress = () => {
    navigation.navigate("RecipeDetailScreen", { recipe: item });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.attributes.map((attribute, attrIndex) => (
          <Text key={attrIndex} style={styles.itemAttribute}>
            {attribute}
          </Text>
        ))}
        <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={16}
            color={liked ? "red" : "black"}
          />
          <Text style={styles.likeButtonText}>
            {liked ? "Added to Likes" : "Like"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const FlashCard = ({ title, items, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemsList}
      >
        {items.map((item, index) => (
          <FlashCardItem key={index} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

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
  likeButton: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 10, // Increased horizontal padding for a wider button
    paddingVertical: 8,
    backgroundColor: "#FFD1DC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  likeButtonText: {
    marginLeft: 4,
    color: "#000",
    textAlign: "left",
    paddingLeft: 6,
  },
  itemAttribute: {
    color: "gray",
    fontSize: 14,
    textAlign: "left",
    marginBottom: 4,
    alignSelf: "flex-start",
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

export default FlashCard;
