import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getDatabase, ref, child, get } from "firebase/database";
import * as SecureStore from "expo-secure-store";

function StartScreen({ navigation, userInfo, setUserInfo, SetUserSignInBefore }) {
  const previousScreen = null;
  const nextScreen = "UserSignUpComponent";

  const initUserData = async () => {
    const id = await SecureStore.getItemAsync("id");
    const privateKey = await SecureStore.getItemAsync("privateKey");
    // console.log(id, privateKey);
    //if (false) {                // 1. 자동 로그인 중지 상태 (개발자용)
    if (id && privateKey) {  // 2. 자동 로그인 (1, 2 중 하나로 고르기)
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.val().userPrivateKey === privateKey) {
              // 테스트를 위해 Main이나 Certification으로 가고 싶지 않은 경우 이 부분을 false로 만드시면 됩니다
              alert("🔐 로그인 성공 !!🔐");
              if (snapshot.val().userCertification) { // 인증된 회원이라면
                const tmp = { ...userInfo };
                tmp.userId = snapshot.val().userId;
                tmp.userPhoneNumber = snapshot.val().userPhoneNumber;
                tmp.userName = snapshot.val().userName;
                tmp.userBirth = snapshot.val().userBirth;
                tmp.userGender = snapshot.val().userGender;
                tmp.userUniversity = snapshot.val().userUniversity;
                tmp.userCertification = snapshot.val().userCertification;
                tmp.userEmail = snapshot.val().userEmail;
                tmp.userPrivateKey = snapshot.val().userPrivateKey;
                setUserInfo(tmp);
                navigation.navigate("MainScreen");
              }
              else {
                SetUserSignInBefore(true); //유저가 가입한 경험이 있음을 의미
                navigation.navigate(nextScreen);
              } 
            } else {
              console.log("자동 로그인 실패");
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (id === null && privateKey === null) {
      // id privateKey 가 아예 없는 경우 === 아직 해당 디바이스에서 가입 기록이 없음
      console.log("StartScreen : 가입 기록이 없는 Device");
    } else {
      console.log("자동 로그인 OFF. 디버깅 상태입니다:"); // 실제는 로그인 되는 상태입니다. UserSignUpComponent 부분 작업하려고 임의로 자동 로그인을 꺼둔 상태
      console.log("id :", id);
      console.log("privateKey :", privateKey);
    }
  };
  
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
            <Text style={styles.startButtonText}>가입하기</Text>
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
    fontWeight: "bold",
  },
});

export default StartScreen;
