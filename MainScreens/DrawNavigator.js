import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

function MyInfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function QnAScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function AllianceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

console.log("DrawNavigator Check:");

const Drawer = createDrawerNavigator();
const DrawNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="내 정보" component={MyInfoScreen} />
        <Drawer.Screen name="공지사항" component={NotificationsScreen} />
        <Drawer.Screen name="자주하는 질문" component={QnAScreen} />
        <Drawer.Screen name="과팅 제휴" component={AllianceScreen} />
      </Drawer.Navigator>
  );
};
export default DrawNavigator;