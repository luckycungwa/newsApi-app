import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArticleList from "./ArticleList";
import CategoriesScreen from "./CategoriesScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <CategoriesScreen/> */}
      <ArticleList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  categoryButton: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#2424245",
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
  },
});

export default HomeScreen;
