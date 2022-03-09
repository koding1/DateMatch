
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import GoogleLoginScreen from "./UserLoginScreens/GoogleLoginScreen";
import CertificationScreen from "./UserLoginScreens/CertificationScreen";

const UserSignUp = createStackNavigator();

function UserLoginComponent({ userInfo, setUserInfo, userSignInBefore, setUserLoginRequest }) {
  const SCREEN_NUM = 8;

  return (
    <UserSignUp.Navigator
      screenOptions={{ ...horizontalAnimation, headerShown: false }}
      initialRouteName={
        userSignInBefore ? "CertificationScreen" : "GoogleLoginScreen2"
        
      } // userSignInBefore가 true : 이전에 가입한 적 있지만 승인 상태가 false 인 상태
    >
      <UserSignUp.Screen
        name={`GoogleLoginScreen`}
        children={({ navigation }) => (
          <GoogleLoginScreen
            navigation={navigation}
            progress={1 / SCREEN_NUM}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setUserLoginRequest={setUserLoginRequest}
          />
        )}
      />

      <UserSignUp.Screen
        name={`CertificationScreen`}
        children={({ navigation }) => (
          <CertificationScreen
            navigation={navigation}
            progress={8 / SCREEN_NUM}
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

  export default UserLoginComponent;