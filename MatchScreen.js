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
  SafeAreaView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";

function uploadUserData(userId, userData) {
  const reference = ref(db, 'users/' + userId);
  set(reference, userData);
}

function MatchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.toDo} onPress={() => uploadUserData(userInfo.userId, tmp)} >
              <Text style={styles.toDoText}>등록하기</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.toDo}>
              <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.toDo}>
              <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.toDo}>
              <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.toDo}>
              <Text style={styles.toDoText}>세종대학교 / 24 / 2명 / 더보기 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    backgroundColor: "red",
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
