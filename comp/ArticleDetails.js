import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// Navigation
import ArticleList from "./ArticleList";

const ArticleDetails = ({ route }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.articleImage} />
      <View style={styles.subTextContainer}>
        <Text style={styles.articleSubText}> source: {article.author}</Text>
        <Text style={styles.articleSubText}>{article.source.name}</Text>
      </View>

      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDescription}>{article.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  articleDescription: {
    fontSize: 16,
  },
  articleSubText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 8,
    marginVertical: "12",
    width: "100%",
    height: "auto",
  },
});

export default ArticleDetails;
