import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { theme } from "./colors";
import {LinearGradient} from 'expo-linear-gradient';

function StartScreen({ navigation }) {
  const previousScreen = null
  const nextScreen = 'PhoneNumberInputScreen'

  return (
    <ImageBackground
      source={require("./image/bg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            navigation.navigate(nextScreen);
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#ee9ca7", "#ffdde1"]}
            style={styles.gradient}
          >
            <Text style={styles.startButtonText}>시작</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    borderRadius: 30,
  },
  startButton: {
    marginBottom: 50,
  },
  startButtonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
  },
});

export default StartScreen;
