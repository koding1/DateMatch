// import {
//     Text,
//     View,
//   } from "react-native";

// function MatchScreen({}) {
//   return (
//     <View>
//       <Text> 해구 </Text>
//     </View>
//   );
// }

// export default MatchScreen;

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";

function MatchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.toDo} >
          <TouchableOpacity>
            <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MatchScreen;
