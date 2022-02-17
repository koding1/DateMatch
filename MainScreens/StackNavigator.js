import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//import DrawNavigator from "./DrawNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { BlindDateScreen } from "./Temporary";
import NewUserScreen from "./Temporary";

const Stack = createStackNavigator();
const StackNavigator = ({route}) => {
  const {userInfo} = route.params;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        children={() => <DrawerNavigator userInfo={userInfo} />}
      />
      {/* <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        initialParams={{ userInfo }}
      /> */}
      <Stack.Screen name="BlindDateScreen" component={BlindDateScreen} />
      <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
