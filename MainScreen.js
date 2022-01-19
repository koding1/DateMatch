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
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";

const { width:SCREEN_WIDTH } = Dimensions.get("window");

function MainScreen( navigation ) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imgContainer}>
        <Image
          source={require("./image/certificationCapture.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="MatchScreen"
          onPress={() => {
            navigation.navigate("MatchScreen");
          }}
        />
        <TouchableOpacity onPress={() => {
            alert("🔐 로그인 성공 !!🔐");
            // navigation.navigate("MatchScreen");
          }}>
          <Text style={styles.btn}>MatchScreen</Text>
        </TouchableOpacity>
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
    resizeMode:"center",
    width: SCREEN_WIDTH,
    height: "40%",
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
