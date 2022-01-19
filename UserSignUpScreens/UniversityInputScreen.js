import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
} from "react-native";
import { theme } from "../colors";
import { AntDesign } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import * as SecureStore from 'expo-secure-store';
import { db } from '../firebase-config'

function uploadUserData(userId, userData) {
  const reference = ref(db, 'users/' + userId);
  set(reference, userData);
}

function UniversityInputScreen({ navigation, progress, userInfo, setUserInfo }) {

  const previousScreen = 'GenderInputScreen'
  const nextScreen = 'CertificationScreen'

  const [name, setName] = useState("");
  const [nameFocused, setNameFocused] = useState(false);

  const onChangeNameText = (payload) => setName(payload);

  const progressString = (progress*100).toString() + "%";

  async function saveLocal(key, value) { // Local에 데이터 저장
    await SecureStore.setItemAsync(key, value);
  }

  const uploadDataAndNextScreen = (name) => {
    const tmp = { ...userInfo };
    tmp.userUniversity = name;
    setUserInfo(tmp);
    // console.log("데이터 업로드 :", tmp);
    uploadUserData(userInfo.userId, userInfo);
    saveLocal("id", userInfo.userId); // Local에 저장 하여 자동 로그인시 id로 사용
    saveLocal("privateKey", userInfo.userPrivateKey); // Local에 저장 하여 자동 로그인시 password로 사용
    navigation.navigate(nextScreen);
  };
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar></StatusBar>

      <View style={styles.header}>
        <View style={styles.progressComponent}>
          <View style={{...styles.progress, width: progressString}}></View>
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

      <View style={{flex:0.9}}>
        <View style={styles.nameView}>
          <Text style={styles.nameViewText}>내 학교:</Text>
        </View>

        <View style={{alignItems: "center", flex:0.5 }}>
          <View style={styles.nameInputView}>
            <TextInput
              placeholder="학교 이름을 입력해주세요"
              value={name}
              onBlur={() => setNameFocused(false)}
              onFocus={() => setNameFocused(true)}
              onChangeText={onChangeNameText}

              style={
                name
                  ? {
                      ...styles.nameInput,
                      borderColor: nameFocused
                        ? theme.progressColor
                        : "black",
                    }
                  : {
                      ...styles.placeholderStyle,
                      borderColor: nameFocused
                        ? theme.progressColor
                        : "black",
                    }
              }
            />

          </View>
          <Text style={styles.subText}>
            ~~ 프로필에 표시되는 이름으로, 이후 변경할 수 없습니다.
          </Text>
        </View>
        <View style={{flex:0.3,justifyContent: "flex-end",}}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              name ? uploadDataAndNextScreen(name) : console.log("빈칸");
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#ee9ca7", "#ffdde1"]}
              style={styles.gradient}
            >
              <Text style={styles.nextButtonText}>계속</Text>
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
    flex:0.1,
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
    width: "83%",
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

export default UniversityInputScreen;
