import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { theme } from "./colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./MainScreens/StackNavigator";
import NewUserScreen from "./MainScreens/Temporary";
import { BlindDateScreen } from "./MainScreens/Temporary";
import MatchScreen from "./MatchScreen";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { getDatabase, ref, child, get } from "firebase/database";

const Tab = createBottomTabNavigator();

function MainScreen({ navigation, userInfo}) {
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
        <Tab.Screen name="과팅 & 미팅" component={MatchScreen} />
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
