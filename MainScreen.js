import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { theme } from "./colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./MainScreens/StackNavigator";
import NewUserScreen from "./MainScreens/Temporary";
import { BlindDateScreen } from "./MainScreens/Temporary";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { getDatabase, ref, child, get } from "firebase/database";

const Tab = createBottomTabNavigator();

function MainScreen({ navigation, userInfo}) {
  console.log("MainScreen 에서 읽은 Data :", userInfo); // 220128 장현진 디버깅 용 추가 - 다음 푸시 때 지우셔도 됩니다
  return (
    <SafeAreaView style={styles.test}>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen
          name="홈"
          options={{ headerShown: false }}
          component={StackNavigator}
        />
        <Tab.Screen name="신규" component={NewUserScreen} />
        <Tab.Screen name="과팅 & 미팅" component={BlindDateScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
});

export default MainScreen;
