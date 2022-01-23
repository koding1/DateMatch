import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { theme } from "./colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./MainScreens/StackNavigator";
import NewUserScreen from "./MainScreens/Temporary";
import { BlindDateScreen } from "./MainScreens/Temporary";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.test}>
      
      <StatusBar style="auto" />

      <View>
        <Text>top</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={StackNavigator} />
        <Tab.Screen name="신규" component={NewUserScreen} />
        <Tab.Screen name="과팅 & 미팅" component={BlindDateScreen} />
      </Tab.Navigator>
      <View>
        <Text>bottom</Text>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
});

export default MainScreen;
