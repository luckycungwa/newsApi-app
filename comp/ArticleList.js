// ArticleList.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
// navigation sauces
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Componengts
import { fetchNewsData } from "../NewsData";

const Stack = createStackNavigator();

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // fetch data
        const data = await fetchNewsData();
        setArticles(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.articleItem}
        onPress={() => navigation.navigate("ArticleDetails", { article: item })}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.urlToImage }}
            style={styles.articleImage}
          />
        </View>
        <View style={styles.articleInfo}>
          <Text style={styles.articleTitle}>{item.title}</Text>
          <Text style={styles.articleDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    
  );

  return (
    
    <View style={styles.articleContainer}>
      {/* Clickab;le Article && navigate to article details page */}
      
    <SafeAreaView style={styles.container}>
    {/* Enable scrolling through the articles listed */}
      <ScrollView scrollEnabled="true">
        <FlatList
          data={articles}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
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
  articleItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fcfcfc",
    borderRadius: 4,
    width: "100%",
    height: "auto",
  },
  articleImage: {
    width: "auto",
    height: "100%",
    borderRadius: 4,
    objectFit: "cover",
  },
  imageContainer: {
    width: "auto",
    height: 180,
    // backgroundColor: "blue", //for placeholder
  },
  articleTitle: {
    color: "#1c1c1c",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  articleDescription: {
    color: "#1c1c1c",
  },
  articleContainer: {
    flexDirection: "column",
    margin: 4,
    paddingVertical: 4,
    // paddingHorizontal: 12,
    borderColor: "#ff6f6f", //for content loader
    borderWidth: 1,
    width: "100%",
    flexWrap: "wrap",
  },
  articleInfo: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "auto",
    
  },
});

export default ArticleList;
