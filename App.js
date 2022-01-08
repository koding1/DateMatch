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
import ThirdScreen from "./ThirdScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      <Stack.Navigator
        screenOptions={{ ...horizontalAnimation, headerShown: false }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={StartScreen} />

        <Stack.Screen name="Second" component={SecondScreen} />

        <Stack.Screen name="Third" component={ThirdScreen} />

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
  },
});

// https://itnext.io/change-react-native-screen-animation-direction-with-react-navigation-8cec0f66f22
const horizontalAnimation = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
