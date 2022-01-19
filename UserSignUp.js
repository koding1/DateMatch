import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { theme } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./StartScreen";
import GoogleLoginScreen from "./GoogleLoginScreen";
import PhoneNumberInputScreen from "./PhoneNumberInputScreen";
import NameInputScreen from "./NameInputScreen";
import BirthInputScreen from "./BirthInputScreen";
import GenderInputScreen from "./GenderInputScreen";
import UniversityInputScreen from "./UniversityInputScreen";
import CertificationScreen from "./CertificationScreen";
import MatchScreen from "./MatchScreen";
import MainScreen from "./MainScreen";

const UserSignUp = createStackNavigator();

export function UserSignUp() {
  const SCREEN_NUM = 7;
  const [userInfo, setUserInfo] = useState({
    userId: null,
    userPhoneNumber: null,
    userName: null,
    userBirth: null,
    userGender: null,
    userUniversity: null,
    userCertification: false,
    userEmail: null,
    userPrivateKey: null,
  });

  return (
    <NavigationContainer style={styles.nav}>
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

        <UserSignUp.Screen
          name={`MatchScreen`}
          children={({ navigation }) => (
            <MatchScreen
              navigation={navigation}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <UserSignUp.Screen
          name={"MainScreen"}
          children={({ navigation }) => (
            <MainScreen
              navigation={navigation}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />
      </UserSignUp.Navigator>
    </NavigationContainer>
  );
}