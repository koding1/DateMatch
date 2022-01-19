import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { theme } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GoogleLoginScreen from "./GoogleLoginScreen";
import PhoneNumberInputScreen from "./PhoneNumberInputScreen";
import NameInputScreen from "./NameInputScreen";
import BirthInputScreen from "./BirthInputScreen";
import GenderInputScreen from "./GenderInputScreen";
import UniversityInputScreen from "./UniversityInputScreen";
import CertificationScreen from "./CertificationScreen";


const UserSignUp = createStackNavigator();

function UserSignUpComponent({userInfo, setUserInfo}) {
  const SCREEN_NUM = 7;

  return (
      <UserSignUp.Navigator
        screenOptions={{ ...horizontalAnimation, headerShown: false }}
        initialRouteName="GoogleLoginScreen"
      >

        <UserSignUp.Screen
          name={`GoogleLoginScreen`}
          children={({ navigation }) => (
            <GoogleLoginScreen
              navigation={navigation}
              progress={1 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />
        
        <UserSignUp.Screen
          name={`PhoneNumberInputScreen`}
          children={({ navigation }) => (
            <PhoneNumberInputScreen
              navigation={navigation}
              progress={2 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={`NameInputScreen`}
          children={({ navigation }) => (
            <NameInputScreen
              navigation={navigation}
              progress={3 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={`BirthInputScreen`}
          children={({ navigation }) => (
            <BirthInputScreen
              navigation={navigation}
              progress={4 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={`GenderInputScreen`}
          children={({ navigation }) => (
            <GenderInputScreen
              navigation={navigation}
              progress={5 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={`UniversityInputScreen`}
          children={({ navigation }) => (
            <UniversityInputScreen
              navigation={navigation}
              progress={6 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={`CertificationScreen`}
          children={({ navigation }) => (
            <CertificationScreen
              navigation={navigation}
              progress={7 / SCREEN_NUM}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />
      </UserSignUp.Navigator>
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

  export default UserSignUpComponent;