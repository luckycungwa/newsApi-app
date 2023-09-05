import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Navigation
import ArticleList from "./ArticleList";

const ArticleDetails = ({ navigation }) => {


  return (
    <View style={styles.categoryContainer}>
     
          <Text style={styles.categoryText}>Article Details</Text>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButton: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1.5,
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

export default ArticleDetails;
