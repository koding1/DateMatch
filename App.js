import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import StartScreen from "./StartScreen";
import UserSignUpComponent from "./UserSignUpComponent";
import MatchScreen from "./MatchScreen";
import MainScreen from "./MainScreen";

const Stack = createStackNavigator();

export default function App() {
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
    userProfilePictureUrl: null,
  });
  const [userSignInBefore, SetUserSignInBefore] = useState(false); // 유저의 가입 경험이 있다면 (SecureStore)

  return (
    <NavigationContainer style={styles.nav}>
      <Stack.Navigator
        screenOptions={{ ...horizontalAnimation, headerShown: false }}
        initialRouteName="Start"
      >

        <Stack.Screen
          name={`Start`} // 회원 가입 절차 다 모여있는 곳
          children={({ navigation }) => (
            <StartScreen
              navigation={navigation}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              SetUserSignInBefore={SetUserSignInBefore}
            />
          )}
        />
        
        <Stack.Screen
          name={`UserSignUpComponent`} // 회원 가입 절차 다 모여있는 곳
          children={({ navigation }) => (
            <UserSignUpComponent
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              userSignInBefore={userSignInBefore} // 유저 가입 경험이 있는데 MainScreen이 아닌 UserSignUpComponent로 온 경우 -> 승인 상태가 false인 경우
            />
          )}
        />

        <Stack.Screen
          name={`MatchScreen`}
          children={({ navigation }) => (
            <MatchScreen
              navigation={navigation}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <Stack.Screen
          name={"MainScreen"}
          children={({ navigation }) => (
            <MainScreen
              navigation={navigation}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />
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