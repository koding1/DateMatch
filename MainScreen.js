import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
  Dimensions,
  Switch,
} from "react-native";
import { Animated } from 'react-native-reanimated';
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>

      <StatusBar style="auto" />
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("./image/certificationCapture.png")}
          style={styles.image}
        />
      </View>

      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <View style={styles.btnContainer}>
        <Button
          title="MatchScreen"
          onPress={() => {
            navigation.navigate("MatchScreen");
          }}
        />
        <Button
          title="오늘의 소개팅 받기"
          onPress={() => {
            alert("오늘의 소개팅 받기");
          }}
        />
        <Button
          title="신청 현황"
          onPress={() => {
            alert("신청 현황");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "center",
    width: SCREEN_WIDTH,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "white",
    fontSize: 40,
    fontWeight: "500",
  },
});

export default MainScreen;
