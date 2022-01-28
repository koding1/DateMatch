
import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import GoogleLoginScreen from "./UserSignUpScreens/GoogleLoginScreen";
import PhoneNumberInputScreen from "./UserSignUpScreens/PhoneNumberInputScreen";
import NameInputScreen from "./UserSignUpScreens/NameInputScreen";
import BirthInputScreen from "./UserSignUpScreens/BirthInputScreen";
import GenderInputScreen from "./UserSignUpScreens/GenderInputScreen";
import UniversityInputScreen from "./UserSignUpScreens/UniversityInputScreen";
import CertificationScreen from "./UserSignUpScreens/CertificationScreen";
import ProfilePictureInputScreen from "./UserSignUpScreens/ProfilePictureInputScreen";

const UserSignUp = createStackNavigator();

function UserSignUpComponent({ userInfo, setUserInfo, userSignInBefore }) {
  const SCREEN_NUM = 8;

  return (
    <UserSignUp.Navigator
      screenOptions={{ ...horizontalAnimation, headerShown: false }}
      initialRouteName={
        userSignInBefore ? "CertificationScreen" : "GoogleLoginScreen"
        
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
        name={`ProfilePictureInputScreen`}
        children={({ navigation }) => (
          <ProfilePictureInputScreen
            navigation={navigation}
            progress={6 / SCREEN_NUM}
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
            progress={7 / SCREEN_NUM}
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

  export default UserSignUpComponent;