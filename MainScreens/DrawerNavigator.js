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
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as ImagePicker from "expo-image-picker";
import { theme } from "../colors";
import HomeScreen from "./HomeScreen";
import { storage } from "../firebase-config";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import LoadableImage from "./LoadableImage";

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
  const userStorageRef = storageRef(
    storage,
    `user_profile_picture/${userId}/${imageName}`
  );
  const response = await fetch(uri);
  const bytes = await response.blob();
  await uploadBytes(userStorageRef, bytes)
    .then(() => {
      console.log("업로드 성공");
    })
    .catch((error) => {
      console.log("업로드 실패");
      console.error(error);
    });
};

const downloadUserImage = (userId) => {
  const userStorageRef = storageRef(
    storage,
    `user_profile_picture/${userId}/profile.jpg`
  );
  const url = getDownloadURL(userStorageRef);

  console.log("url:", url);

  return url;
};

function CustomDrawerContent(props) {
  console.log("Custom's props.url:",props.url);
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

  useEffect(() => {
    setUserInfo(props.oldUserInfo);
  }, []);

  const selectProfilePicture = async (payload) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadUserImage(
        result.uri,
        "ChangeRequest.jpg",
        props.oldUserInfo.userId
      );
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        {/* <Image source={{ uri: downloadUserImage(props.oldUserInfo.userId) }} style={styles.profile} /> */}
        {/* {image ? (
          <Image source={{ uri: downloadUserImage(props.oldUserInfo.userId) }} style={styles.profile} />
        ) : (
          <Image source={require("../image/bg.jpg")} style={styles.profile} />
        )} */}

        <LoadableImage url={props.url} />

        <TouchableOpacity
          style={styles.profilePictureInputComponent}
          onPress={() => selectProfilePicture()}
        >
          <Text style={styles.profilePictureInputText}>사진 가져오기</Text>
        </TouchableOpacity>
      </View>
      <View>
        {userInfo.userBirth ? (
          <Text>{userInfo.userName}</Text>
        ) : (
          <Text>Loading..</Text>
        )}
        {userInfo.userBirth ? (
          <Text>{userInfo.userBirth.yy}</Text>
        ) : (
          <Text>Loading..</Text>
        )}
        {userInfo.userBirth ? (
          <Text>{userInfo.userUniversity}</Text>
        ) : (
          <Text>Loading..</Text>
        )}
      </View>
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

function cacheImages(image) {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    console.log("image:",image);
    console.log("type of image:",typeof image);
    console.log("not string");
    // return Asset.fromModule(image).downloadAsync();
  }
}

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
  state = {
    isReady: false,
    url:"",
  };
  
  async _loadAssetsAsync() {
    console.log("_loadAssetsAsync");
    const test = this.setState({url:downloadUserImage(this.props.userInfo.userId)});
    const imageAssets = cacheImages(this.state.url);
    // const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets,...test]);
  }

  render() {
    console.log("this.props.userInfo:",this.props.userInfo);
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

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
      drawerContent={(props) => (
        <CustomDrawerContent {...props} oldUserInfo={this.props.userInfo} url={this.state.url}/>
      )}
    >
      <Drawer.Screen name="홈" component={HomeScreen} />
      <Drawer.Screen name="내 정보" component={MyInfoScreen} />
      <Drawer.Screen name="공지사항" component={NotificationsScreen} />
      <Drawer.Screen name="자주하는 질문" component={QnAScreen} />
      <Drawer.Screen name="과팅 제휴" component={AllianceScreen} />
    </Drawer.Navigator>
    );
  }
}

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