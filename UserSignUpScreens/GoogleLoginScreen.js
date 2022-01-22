import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { theme } from "../colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { androidClientId, iosClientId, db } from "../firebase-config";
import * as Google from "expo-google-app-auth";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { encrypt, decrypt } from "./myCrypto"

function GoogleLoginScreen({ navigation, progress, userInfo, setUserInfo }) {
  
  const previousScreen = "Start";
  const nextScreen = "PhoneNumberInputScreen";

  const progressString = (progress * 100).toString() + "%";



  const getUserGoogleDataAndSetFirebase = async (accessToken, userKey) => {
    let userInfoResponse = await fetch( // 구글에서 데이터 가져오기
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => { // userInfoResponse를 json형식으로 변환
      moveNextScreen(data.id, data.email, userKey);
    });
  };

  const dataInsertFirebase = async (result) => {
    const a = Date(); // 현재 시간 담기
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'private_key')).then((snapshot) => {
      if (snapshot.exists()) {
        const user_key = encrypt(a, snapshot.val()); // 현재시간 + 서버키 조합으로 암호화
        getUserGoogleDataAndSetFirebase(result.accessToken, user_key); // user data를 구글에서 가져오기
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: iosClientId,
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {    // 로그인 성공시 firebase에 데이터 삽입
        dataInsertFirebase(result);
      } else {
        console.log("Permission denied");
      }
    } catch (error) {
      console.log("signInWithGoogleAsync function error : ", error);
    }
  };

  const moveNextScreen = (userId, userEmail, userPrivateKey) => {
    const tmp = { ...userInfo };
    tmp.userId = userId;
    tmp.userEmail = userEmail;
    tmp.userPrivateKey = userPrivateKey;
    setUserInfo(tmp);
    navigation.navigate(nextScreen);
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar></StatusBar>

      <View style={styles.header}>
        <View style={styles.progressComponent}>
          <View style={{ ...styles.progress, width: progressString }}></View>
        </View>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate(previousScreen);
          }}
        >
          <AntDesign name="left" size={40} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.9 }}>
        <View style={styles.nameView}>
          <Text style={styles.nameViewText}>로그인:</Text>
        </View>

        <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              signInWithGoogleAsync();
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#ee9ca7", "#ffdde1"]}
              style={styles.gradient}
            >
              <Text style={styles.nextButtonText}>Google 아이디로 로그인</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles_width = "80%";
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  progressComponent: {
    backgroundColor: theme.progressComponentBg,
  },
  progress: {
    height: 7,
    backgroundColor: theme.progressColor,
  },
  header: {
    flex: 0.1,
  },
  backBtn: {
    marginVertical: 10,
    marginLeft: 10,
  },

  nameView: {
    flex: 0.2,
    marginLeft: 30,
  },
  nameViewText: {
    color: theme.phoneNumberTextColor,
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 6,
  },

  nameInputView: {
    marginTop: "20%",
    marginBottom: 20,
    justifyContent: "center",
    width: styles_width,
  },
  nameInput: {
    borderBottomWidth: 2,
    fontSize: 25,
    color: theme.phoneNumberTextColor,
  },
  placeholderStyle: {
    borderBottomWidth: 2,
    fontSize: 25,
    color: theme.phoneNumberTextColor,
  },

  subText: {
    width: "80%",
    color: theme.subTextColor,
    fontSize: 13,
  },

  gradient: {
    width: styles_width,
    borderRadius: 30,
  },
  nextButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  nextButtonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default GoogleLoginScreen;
