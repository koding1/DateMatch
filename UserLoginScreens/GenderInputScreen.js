import React, { useState} from "react";
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

function GenderInputScreen({ navigation, progress, userInfo, setUserInfo }) {
  const previousScreen = "BirthInputScreen";
  const nextScreen = "ProfilePictureInputScreen";

  const [womanFocused, setWomanFocused] = useState(false);
  const [manFocused, setManFocused] = useState(false);

  const selectGenderWoman = (payload) => {
    setManFocused(false);

    setWomanFocused(!womanFocused);
  }

  const selectGenderMan = (payload) => {
    setWomanFocused(false);

    setManFocused(!manFocused);
  }
  const progressString = (progress*100).toString() + "%";

  const moveNextScreen = (manFocused, womanFocused) => {
    const tmp = {...userInfo};
    tmp.userGender = manFocused ? 'man': 'woman'
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

      <View style={{ flex: 0.9 }}>
        <View style={styles.birthView}>
          <Text style={styles.birthViewText}>내 성별:</Text>
        </View>

        <View style={{ flex: 0.5, width: "100%", alignItems: "center", marginTop: "20%" }}>
          <TouchableOpacity
            style={{...styles.genderInputComponent, borderColor : womanFocused ? theme.progressColor : theme.notChoiceBorderColor}}
            onPress={() => selectGenderWoman()}
          >
            <Text style={{...styles.genderInputText, color : womanFocused ? theme.progressColor : theme.notChoiceBorderColor}}>여성</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.genderInputComponent, borderColor : manFocused ? theme.progressColor : theme.notChoiceBorderColor}}
            onPress={() => selectGenderMan()}
          >
            <Text style={{...styles.genderInputText, color : manFocused ? theme.progressColor : theme.notChoiceBorderColor}}>남성</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
                (manFocused || womanFocused) ? moveNextScreen(manFocused, womanFocused) : console.log("성별이 선택되지 않았습니다.")
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
    flex: 0.1,
  },
  backBtn: {
    marginVertical: 10,
    marginLeft: 10,
  },

  birthView: {
    flex: 0.2,
    marginLeft: 30,
  },
  birthViewText: {
    color: theme.phoneNumberTextColor,
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 6,
  },

  birthInputView: {
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  birthInput: {
    fontSize: 30,
    color: theme.phoneNumberTextColor,
    letterSpacing: 6,
  },
  placeholderStyle: {
    fontSize: 25,
    color: theme.phoneNumberTextColor,
  },

  subText: {
    marginLeft: "12.5%",
    color: theme.subTextColor,
    fontSize: 16,
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

  genderInputComponent: {
    width: styles_width,
    borderWidth: 1,
    borderColor: theme.notChoiceBorderColor,
    borderRadius: 30,
    marginVertical: 10,
  },
  genderInputText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: theme.notChoiceBorderColor,
    fontWeight: "bold",
  },
});

export default GenderInputScreen;
