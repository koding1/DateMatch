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
import { theme } from "./colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function NameInputScreen({ navigation, progress, userInfo, setUserInfo }) {
  const previousScreen = 'Start'
  const nextScreen = 'PhoneNumberInputScreen'

  const [id, setId] = useState("");
  const [idFocused, setIdFocused] = useState(false);

  const onChangeIdText = (payload) => setId(payload);

  const progressString = (progress*100).toString() + "%";
  
  const moveNextScreen = (id) => {
    const tmp = {...userInfo};
    tmp.userId = id;
    setUserInfo(tmp);
    navigation.navigate(nextScreen);
  }

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
          <Text style={styles.nameViewText}>아이디:</Text>
        </View>

        <View style={{alignItems: "center", flex:0.5 }}>
          <View style={styles.nameInputView}>
            <TextInput
              placeholder="로그인에 사용 할 아이디"
              value={id}
              onBlur={() => setIdFocused(false)}
              onFocus={() => setIdFocused(true)}
              onChangeText={onChangeIdText}

              style={
                id
                  ? {
                      ...styles.nameInput,
                      borderColor: idFocused
                        ? theme.progressColor
                        : "black",
                    }
                  : {
                      ...styles.placeholderStyle,
                      borderColor: idFocused
                        ? theme.progressColor
                        : "black",
                    }
              }
            />

          </View>
          <Text style={styles.subText}>
            로그인에 사용 할 아이디로, 닉네임과 다릅니다.
          </Text>
        </View>
        <View style={{flex:0.3,justifyContent: "flex-end",}}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              id ? moveNextScreen(id) : console.log("빈칸");
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

export default NameInputScreen;
