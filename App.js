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
import PhoneNumberInputScreen from "./PhoneNumberInputScreen";
import NameInputScreen from "./NameInputScreen";
import BirthInputScreen from "./BirthInputScreen";
import GenderInputScreen from "./GenderInputScreen";
import UniversityInputScreen from "./UniversityInputScreen";
import CertificationScreen from "./CertificationScreen";
import firebase from '@react-native-firebase/storage'
const Stack = createStackNavigator();

export default function App() {
  const SCREEN_NUM = 6
  return (
    <NavigationContainer style={styles.nav}>
      <Stack.Navigator
        screenOptions={{ ...horizontalAnimation, headerShown: false }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={StartScreen} />

        <Stack.Screen name={`PhoneNumberInputScreen`} children={({navigation})=><PhoneNumberInputScreen navigation={navigation} progress={1/SCREEN_NUM}/>}/>

        <Stack.Screen name={`NameInputScreen`} children={({navigation})=><NameInputScreen navigation={navigation} progress={2/SCREEN_NUM}/>}/>

        <Stack.Screen name={`BirthInputScreen`} children={({navigation})=><BirthInputScreen navigation={navigation} progress={3/SCREEN_NUM}/>}/>

        <Stack.Screen name={`GenderInputScreen`} children={({navigation})=><GenderInputScreen navigation={navigation} progress={4/SCREEN_NUM}/>}/>

        <Stack.Screen name={`UniversityInputScreen`} children={({navigation})=><UniversityInputScreen navigation={navigation} progress={5/SCREEN_NUM}/>}/>

        <Stack.Screen name={`CertificationScreen`} children={({navigation})=><CertificationScreen navigation={navigation} progress={6/SCREEN_NUM}/>}/>

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
