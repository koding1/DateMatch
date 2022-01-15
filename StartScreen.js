import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { theme } from "./colors";
import {LinearGradient} from 'expo-linear-gradient';
import { getDatabase, ref, child, get } from "firebase/database";

function StartScreen({ navigation }) {
  const previousScreen = null
  const nextScreen = 'IdInputScreen'

  const initUserData = () => {
    const id = "haegu"; // 후에 로그인 된 아이디로 대체해야함

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().userCertification);
          snapshot.val().userCertification
            ? navigation.navigate("MatchScreen")
            : navigation.navigate("CertificationScreen")
        } else {
          console.log("No data available !!!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    useEffect(() => initUserData(), []); // 초기 실행
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
            <Text style={styles.startButtonText}>시작하기</Text>
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
