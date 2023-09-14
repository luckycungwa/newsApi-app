import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CategoriesScreen = ({navigation}) => {
  // set up categories
  const categories = [
    { name: "All" },
    { name: "Breaking News" },
    { name: "Politics" },
    { name: "Business" },
    { name: "Finance" },
    { name: "Sports" },
    { name: "Entertainment" },
    { name: "Other" },
  ];

  // Manage button activity
  // const [isActive, setIsActive] = useState(true);

  return (
    <View style={styles.categoryContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.categoryButton}
          //   Navigate to Article
          onPress={() =>
            navigation.navigate("ArticleList", { category: category.name })
          }
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
    padding: 12,
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
    backgroundColor: "#8066ff",
  },
});

export default CategoriesScreen;
