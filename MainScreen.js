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

async function MainScreen({ navigation }) {
  const id = await SecureStore.getItemAsync("id");
  console.log(userInfo)
  console.log(id)
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${id}`))
    .then((snapshot) => {
      setUserInfo(() => ({
        userId: id,
        userPhoneNumber: snapshot.val().userPhoneNumber,
        userName: snapshot.val().userName,
        userBirth: snapshot.val().userBirth,
        userGender: snapshot.val().userGender,
        userUniversity: snapshot.val().userUniversity,
        userCertification: snapshot.val().userCertification,
        userEmail: snapshot.val().userEmail,
        userPrivateKey: snapshot.val().userPrivateKey,
      }));
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(userInfo)

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
