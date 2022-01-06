import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { theme } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./StartScreen";
import SecondScreen from "./SecondScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer  style={styles.nav}>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Start'>

          <Stack.Screen  name="시작화면" component={StartScreen} />

          <Stack.Screen name="Second" component={SecondScreen} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  navComtainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  }
});
