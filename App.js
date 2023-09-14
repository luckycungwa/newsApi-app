// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Navigation stuff
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

// omponents imports
import HomeScreen from './comp/HomeScreen';
import CategoriesScreen from './comp/CategoriesScreen';
import ArticleDetails from './comp/ArticleDetails';
import ArticleList from './comp/ArticleList';

const Stack = createStackNavigator();



export default function App() {
  
  return (
    <NavigationContainer>
    <View style={styles.container}>
    {/* Top View */}
      <View style={styles.top}> </View>

{/* Middle/ main view */}
      <View style={styles.middle}>
        {/* <Stack.Navigator initialRouteName="Home"> */}
        <Stack.Navigator>
          {/* List of Screens/components for navigation */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Articles" component={ArticleList} />
          <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        </Stack.Navigator>
      </View>
{/* Bottom View */}
      <View style={styles.bottom}> </View>
    </View>

    <View>

    </View>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: '#ff2323',
  padding: 12,
  margin: 0,
},
top: {
  flex: 0.1,
  backgroundColor: "#3582ff",
  borderWidth: 2,
  // borderTopLeftRadius: 20,
  // borderTopRightRadius: 20,
},
middle: {
  flex: 1,
  backgroundColor: "beige",
  borderWidth: 2,
},
bottom: {
  flex: 0.1,
  backgroundColor: "#2a2a2a",
  // borderWidth: 5,
  // borderBottomLeftRadius: 20,
  // borderBottomRightRadius: 20,
},
});
