import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { theme } from "./colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function FourthScreen({ navigation }) {
  const [yy, setYy] = useState();
  const [mm, setMm] = useState();
  const [dd, setDd] = useState();

  const yyChange = (payload) => {
    setYy(payload);
    if (payload.length == 4) {
        ref_input2.current.focus()
    }
  };
  const mmChange = (payload) => {
    setMm(payload);
    if (payload.length == 2) {
        ref_input3.current.focus()
    }
  };
  const ddChange = (payload) => {
    setDd(payload);
  };
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  return (
    <View style={styles.main}>
      <StatusBar></StatusBar>

      <View style={styles.header}>
        <View style={styles.progressComponent}>
          <View style={styles.progress}></View>
        </View>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate("Third");
          }}
        >
          <AntDesign name="left" size={40} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.9}}>
        <View style={styles.birthView}>
          <Text style={styles.birthViewText}>내 생일:</Text>
        </View>

        <View style={{ flex: 0.5, width:"100%", alignItems:"center" }}>
        <View style={{ width:"90%" }}>
          <View style={styles.birthInputView}>
            <TextInput
              style={{ ...styles.birthInput, flex: 0.35 }}
              value={yy}
              maxLength={4}
              textAlign="center"
              placeholder="YYYY"
              autoFocus={true}
              onChangeText={yyChange}
              keyboardType='number-pad'
            ></TextInput>
            <Text style={{fontSize: 30}}>/</Text>
            <TextInput
              style={{ ...styles.birthInput, flex: 0.22 }}
              value={mm}
              maxLength={2}
              textAlign="center"
              placeholder="MM"
              onChangeText={mmChange}
              keyboardType='number-pad'
              ref={ref_input2}
            ></TextInput>
            <Text style={{fontSize: 30}}>/</Text>
            <TextInput
              style={{ ...styles.birthInput, flex: 0.22 }}
              value={dd}
              maxLength={2}
              textAlign="center"
              placeholder="DD"
              onChangeText={ddChange}
              keyboardType='number-pad'
              ref={ref_input3}
            ></TextInput>
          </View>
          <Text style={styles.subText}>나이는 공개됩니다.</Text>
        </View>
        </View>
        <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
                if (yy && mm && dd) {
                    if (yy.length==4 && mm.length==2 && dd.length==2){
                        navigation.navigate("Start")
                    }
                    else{
                        console.log("입력 모자람");
                    }
                }
                else{
                    console.log("빈칸");
                }
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
    </View>
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
    width: "60%",
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
});

export default FourthScreen;
