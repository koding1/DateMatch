import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { theme } from "../colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import {Camera} from "expo-camera";
import * as ImagePicker from 'expo-image-picker';


function ProfilePictureInputScreen({ navigation, progress, userInfo, setUserInfo }) {
  const previousScreen = "GenderInputScreen";
  const nextScreen = "UniversityInputScreen";

  const [image, setImage] = useState(null);

  const selectProfilePicture = async (payload) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);

      const tmp = { ...userInfo };
      tmp.userProfilePictureUrl = result.uri;
      setUserInfo(tmp);
    }
  };

  const progressString = (progress*100).toString() + "%";

  const moveNextScreen = () => {
    // const tmp = {...userInfo};
    // tmp.userGender = manFocused ? 'man': 'woman'
    // setUserInfo(tmp);
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar></StatusBar>

      <View style={styles.header}>
        <View style={styles.progressComponent}>
          <View style={{ ...styles.progress, width: progressString }}></View>
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

      <View style={{ flex: 0.9 }}>
        <View style={styles.birthView}>
          <Text style={styles.birthViewText}>프로필 사진:</Text>
        </View>

        <View
          style={{
            flex: 0.5,
            width: "100%",
            alignItems: "center",
            marginTop: "0%",
          }}
        >
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

        <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              image
                ? moveNextScreen()
                : console.log("사진이 없습니다.");
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

  profilePictureInputComponent: {
    width: styles_width,
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
  }
});

export default ProfilePictureInputScreen;
