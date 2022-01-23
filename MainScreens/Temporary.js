import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NewUserScreen = ({}) => {
  console.log("디버깅 : NewUserScreen");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>신규!</Text>
    </View>
  );
};

const BlindDateScreen = ({}) => {
  console.log("디버깅 : BlindDateScreen");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>과팅 & 미팅!</Text>
    </View>
  );
};

export default NewUserScreen;
export { BlindDateScreen };
