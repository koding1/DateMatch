import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawNavigator from "./DrawNavigator";
import { BlindDateScreen } from "./Temporary";
import NewUserScreen from "./Temporary";

console.log("StackNavigator Check:");

const Stack = createStackNavigator();
const StackNavigator = ({route}) => {
  const {userInfo,setUserInfo} = route.params;

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
  >
      <Stack.Screen name="Home" component={DrawNavigator}  initialParams={{userInfo,setUserInfo}} />
      <Stack.Screen name="BlindDateScreen" component={BlindDateScreen} />
      <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
