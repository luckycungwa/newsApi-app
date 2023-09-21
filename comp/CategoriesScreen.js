import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CategoriesScreen = ({navigation}) => {
  // set up categories
  const categories = [
    { name: "All" },
    { name: "Breaking" },
    { name: "Politics" },
    { name: "Business" },
    { name: "Finance" },
    {name: "Education"},
    { name: "Sports" },
    { name: "Entertainment" },
    { name: "Other" },
  ];

  const navigateToArticles = async (category) => {
    try {
      // Fetch articles based on the selected category
      const articles = await fetchNewsData(category);
      // Navigate to article based on their category
      navigation.navigate("ArticleList", { articles, category });
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <View style={styles.categoryContainer}>
    {/* list categories from array */}
      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.categoryButton}
          onPress={() => navigateToArticles(category.name)}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  categoryButton: {
    padding: 8,
    // marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2424245",
  },
  categoryButtonActive: {
    padding: 12,
    borderRadius: 5,
    
    backgroundColor: "#2424245",
    color: "#f2f2f2",
  },
  categoryText: {
    fontSize: 12,
    letterSpacing: 1.2,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    width: "100%",
    // backgroundColor: "#8066ff",
  },
});

export default CategoriesScreen;
