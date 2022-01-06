import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { theme } from "./colors";

function SecondScreen() {

  return (
      <ImageBackground source={require("./image/bg.jpg")} resizeMode="cover" style={styles.image}>
        <View style={styles.main}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>시작하기2</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image:{
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    width: '100%',
    height: '100%',
  },

  startButton: {
    backgroundColor: theme.btnBg,
    borderRadius: 30,
    marginBottom: 60,
  },
  startButtonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: theme.btnTextColor,
  },
});

export default SecondScreen;
