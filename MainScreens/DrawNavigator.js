import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import * as ImagePicker from 'expo-image-picker';
import { theme } from "../colors";
import HomeScreen from "./HomeScreen";
import { storage } from '../firebase-config'
import { ref as storageRef, uploadBytes } from "firebase/storage";

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

const uploadUserImage = async (uri, imageName, userId) => {
  const userStorageRef = storageRef(storage, `user_profile_picture/${userId}/${imageName}`);
  const response = await fetch(uri);
  const bytes = await response.blob();
  await uploadBytes(userStorageRef, bytes).then(() => {
      console.log('업로드 성공')
  })
  .catch(error => {
      console.log('업로드 실패')
      console.error(error)
  });
};

function CustomDrawerContent(props) {
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    userId: null,
    userPhoneNumber: null,
    userName: null,
    userBirth: null,
    userGender: null,
    userUniversity: null,
    userCertification: false,
    userEmail: null,
    userPrivateKey: null,
    userProfilePictureUrl: null,
  });

  useEffect(()=>{setUserInfo(props.oldUserInfo)},[])
  console.log(props.oldUserInfo);
  console.log(userInfo);

  const selectProfilePicture = async (payload) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);

      const tmp = { ...userInfo };
      tmp.userProfilePictureUrl = result.uri;
      setUserInfo(tmp);
      uploadUserImage(tmp.userProfilePictureUrl, "profile.jpg", tmp.userId);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        {image ? (
          <Image source={{ uri: image }} style={styles.profile} />
        ) : (
          <Image source={require("../image/bg.jpg")} style={styles.profile} />
        )}

        <TouchableOpacity
          style={styles.profilePictureInputComponent}
          onPress={() => selectProfilePicture()}
        >
          <Text style={styles.profilePictureInputText}>사진 가져오기</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Text>{userInfo.userName}</Text>
        <Text>{userInfo.userBirth.yy}</Text>
        <Text>{userInfo.userUniversity}</Text> */}
      </View>
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const DrawNavigator = ({route}) => {
  const {userInfo,setUserInfo} = route.params;

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
      drawerContent={(props) => <CustomDrawerContent {...props} oldUserInfo={userInfo} />}
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
  profilePictureInputComponent: {
    width: "80%",
    borderWidth: 1,
    borderColor: theme.progressColor,
    borderRadius: 30,
    marginVertical: 10,
  },
  profilePictureInputText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
    color: theme.progressColor,
    fontWeight: "bold",
  },
  profile: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
});
export default DrawNavigator;
