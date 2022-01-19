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
import { Feather } from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

function PhoneNumberInputScreen({ navigation, progress, userInfo, setUserInfo }) {
  const previousScreen = 'GoogleLoginScreen'
  const nextScreen = 'NameInputScreen'
  const [countryCallingCode, setCountryCallingCode] = useState("KR +82");
  const [countryCallingCodeFocus, setCountryCallingCodeFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);

  const onChangeCountryCallingCode = (payload) => setCountryCallingCode(payload);
  const onChangePhoneNumber = (payload) => setPhoneNumber(payload);

  const progressString = (progress*100).toString() + "%";

  const moveNextScreen = (phoneNumber) => {
    const tmp = {...userInfo};
    tmp.userPhoneNumber = phoneNumber;
    setUserInfo(tmp);
    console.log(userInfo);
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar>
      </StatusBar>

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
      <View>
        <View style={styles.phoneNumberView}>
          <Feather name="phone" size={43} color="black" />
          <Text style={styles.phoneNumberText}>내 전화번호:</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.phoneNumberInputView}>
            <TextInput
              style={{
                ...styles.phoneNumberInput1,
                borderColor: countryCallingCodeFocus
                  ? theme.progressColor
                  : "black",
              }}
              value={countryCallingCode}
              onBlur={() => setCountryCallingCodeFocus(false)}
              onFocus={() => setCountryCallingCodeFocus(true)}
              onChangeText={onChangeCountryCallingCode}
            />
            <TextInput
              placeholder="전화번호를 입력해주세요."
              value={phoneNumber}
              onBlur={() => setPhoneNumberFocused(false)}
              onFocus={() => setPhoneNumberFocused(true)}
              onChangeText={onChangePhoneNumber}
              keyboardType='number-pad'
              style={phoneNumber ? {
                ...styles.phoneNumberInput2,
                borderColor: phoneNumberFocused ? theme.progressColor : "black",
              } : {...styles.placeholderStyle, borderColor: phoneNumberFocused ? theme.progressColor : "black",}}
            />
          </View>
        </View>
        <View style={{alignItems:"center"}}>
          <Text style={styles.subText}>'계속하기'를 탭하면 ~~에서 인증 코드를 문자 메세지로 전송합니다. 문자 메세지 및 데이터 요금이 부과될 수 있습니다. 인증이 완료된 전화번호는 ~~로그인에 사용할 수 있습니다.</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              phoneNumber ?
              moveNextScreen(phoneNumber) :
              console.log("빈칸")
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

const styles_width = '85%';
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
  header: {},
  backBtn: {
    marginVertical: 10,
    marginLeft: 10,
  },

  phoneNumberView: {
    alignItems: "center",
    marginLeft: 30,
    flexDirection: "row",
  },
  phoneNumberText: {
    color: theme.phoneNumberTextColor,
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 6,
  },

  phoneNumberInputView: {
    flexDirection: "row",
    marginVertical: 50,
    justifyContent: "space-between",
    width: styles_width,
  },
  phoneNumberInput1: {
    width: "32%",
    borderBottomWidth: 2,
    fontSize: 23,
  },
  phoneNumberInput2: {
    width: "60%",
    borderBottomWidth: 2,
    fontSize: 23,
    color: theme.phoneNumberTextColor,
  },
  placeholderStyle:{
    width: "60%",
    borderBottomWidth: 2,
    fontSize: 15,
    color: theme.phoneNumberTextColor,
  },

  subText: {
    width:"83%", 
    color:theme.subTextColor,
    fontSize: 13,
  },
  
  gradient: {
    width: styles_width,
    borderRadius: 30,
  },
  nextButton: {
    width:"100%",
    marginVertical: 30,
    alignItems:"center",

  },
  nextButtonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
  },

  
});

export default PhoneNumberInputScreen;
