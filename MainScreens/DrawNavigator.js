import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";

function MyInfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function QnAScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function AllianceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// render function에 async를 쓰면 오류가 나서 then을 쓰기도 뭐하고
// 비동기 처리를 어떻게 해야할지 고민 중
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        <Image
          source={require("../image/bg.jpg")}
          style={styles.profileImage}
        />
      </View>
      <View>
        <Text>송승훈</Text>
      </View>
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const DrawNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#c6cbef",
          width: 240,
        },
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../image/bg.jpg")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="홈" component={HomeScreen} />
      <Drawer.Screen name="내 정보" component={MyInfoScreen} />
      <Drawer.Screen name="공지사항" component={NotificationsScreen} />
      <Drawer.Screen name="자주하는 질문" component={QnAScreen} />
      <Drawer.Screen name="과팅 제휴" component={AllianceScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  profileImage: {
    resizeMode: "contain",
  },
});
export default DrawNavigator;
