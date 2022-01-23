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
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log("HomeScreen Check:");

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../image/certificationCapture.png")}
          style={styles.image}
        />
      </View>
      <Text>오늘의 소개팅 찾기 설정</Text>
      <View style={styles.switchContainer}>
        <View style={styles.switch}>
          <Text>학생 인증</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switch}>
          <Text>같은 학교</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          title="MatchScreen"
          onPress={() => {
            navigation.navigate("MatchScreen");
          }}
        />
        <Button
          style={styles.btn}
          title="오늘의 소개팅 받기"
          onPress={() => {
            alert("오늘의 소개팅 받기");
          }}
        />
        <Button
          style={styles.btn}
          title="신청 현황"
          onPress={() => {
            alert("신청 현황");
          }}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    marginHorizontal: 16,
    alignItems: "center",
  },
  switchContainer: {
    flex: 0.3,
    justifyContent: "center",
    flexDirection: "row",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "500",
    alignSelf: "stretch",
  },
});

export default HomeScreen;
