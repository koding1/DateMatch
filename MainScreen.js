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
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";

function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {/* <TouchableOpacity>
          <ImageBackground
            source="./image/bg.jpg"
            resizeMode="cover"
            style={styles.image}
          />
        </TouchableOpacity> */}
      </View>
      <View>
        <TouchableOpacity
          onpress={() => {
            navigation.navigate(MatchScreen);
          }}
        >
          <Text>MatchScreen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
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
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default MainScreen;
