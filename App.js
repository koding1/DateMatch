import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import StartScreen from "./StartScreen";
import UserSignUpComponent from "./UserSignUpComponent";
import UserLoginComponent from "./UserLoginComponent";
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
  const [userLoginRequest, SetUserLoginRequest] = useState(false); // 유저가 로그인 폼에서 로그인을 요청했을 때 True 로 바뀜
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
              userLoginRequest={userLoginRequest}
            />
          )}
        />

        <Stack.Screen
          name={`UserSignUpComponent`} // 회원 가입 절차 다 모여있는 곳
          children={({}) => (
            <UserSignUpComponent
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              userSignInBefore={userSignInBefore} // 유저 가입 경험이 있는데 MainScreen이 아닌 UserSignUpComponent로 온 경우 -> 승인 상태가 false인 경우
            />
          )}
        />

        <Stack.Screen
          name={`UserLoginComponent`} // 로그인 컴포넌트
          children={({}) => (
            <UserLoginComponent
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              userSignInBefore={userSignInBefore}
              setUserLoginRequest={SetUserLoginRequest}
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