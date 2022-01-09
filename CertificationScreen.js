import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { theme } from "./colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function CertificationScreen({ navigation, progress }) {
  const previousScreen = 'GenderInputScreen'
  const nextScreen = 'CertificationScreen'

  const [confirmed, setConfirmed] = useState(true); // 서버에서 받아와야함

  const progressString = (progress*100).toString() + "%";
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
          <Text style={styles.nameViewText}>본인 확인</Text>
        </View>

        <View style={{alignItems: "center", flex:0.5 }}>
          <Text style={styles.mainText}>본인 확인이 진행 중 입니다.</Text>
          <Text style={styles.subText}>
            ~~은 이용자의 더욱 안전하고 쾌적한 매칭 환경 조성을 위해서, 본인 확인을 수작업으로 진행 후 가입을 승인하고 있습니다.
          </Text>
          <Text style={styles.subText}>
            본인 확인은 약 0~2일 정도의 시간이 소요됩니다.
          </Text>
        </View>
        <View style={{flex:0.3,justifyContent: "flex-end",}}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              confirmed ? navigation.navigate(nextScreen) : console.log("신원 확인이 완료되지 않았습니다.");
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



  mainText: {
    width: styles_width,
    fontSize: 25,
  },

  subText: {
    width: styles_width,
    color: theme.subTextColor,
    fontSize: 13,
    marginVertical: 5,
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

export default CertificationScreen;
