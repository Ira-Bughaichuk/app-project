import { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  name: "",
  locationTitle: "",
};

function CreatePostsScreen({ navigation }) {
  const [data, setData] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    setIsCameraOpen(true);
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    if (Platform.OS !== "web") {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Insufficient permissions!",
          "Sorry, we need location permissions to make this work!",
          [{ text: "Okay" }]
        );
        return;
      }
    }
    let point = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: point.coords.latitude,
      longitude: point.coords.longitude,
    };
    setLocation(coords);
  };

  const selectCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleSubmit = () => {
    navigation.navigate("PostsScreen", { photo, location, ...data });
    handleReset();
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const openCamera = () => {
    setIsCameraOpen((pS) => !pS);
  };

  const handleReset = () => {
    setData(initialState);
    setPhoto(null);
    setIsCameraOpen(false);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.containerPosts}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            <View style={styles.form}>
              {!isCameraOpen ? (
                <View style={styles.wrapGray}>
                  <TouchableOpacity
                    onPress={openCamera}
                    style={styles.btnContainer}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      style={styles.cameraIcon}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.wrapCamera}>
                  <Camera style={styles.camera} ref={setCamera}>
                    {photo ? (
                      <View>
                        <Image
                          source={{ uri: photo }}
                          style={{ height: 240 }}
                        />
                      </View>
                    ) : null}

                    <TouchableOpacity
                      onPress={takePhoto}
                      style={styles.btnContainer}
                    >
                      <MaterialIcons
                        name="photo-camera"
                        size={24}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>
                  </Camera>
                </View>
              )}

              <TextInput
                style={styles.input}
                textAlign={"left"}
                placeholder="Назва..."
                value={data.name}
                onFocus={() => {}}
                onChangeText={(value) =>
                  setData((prevState) => ({ ...prevState, name: value }))
                }
              />
              <View style={{ position: "relative" }}>
                <Ionicons
                  name="md-location-outline"
                  style={{ position: "absolute", left: 0, bottom: 16 }}
                  size={18}
                  color="#BDBDBD"
                />
                <TextInput
                  style={{ ...styles.input, paddingLeft: 25, marginTop: 16 }}
                  textAlign={"left"}
                  placeholder="Місцевість..."
                  value={data.locationTitle}
                  onFocus={() => {}}
                  onChangeText={(value) =>
                    setData((prevState) => ({
                      ...prevState,
                      locationTitle: value,
                    }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={
                  photo
                    ? { ...styles.btn }
                    : {
                        ...styles.btn,
                        backgroundColor: "#F6F6F6",
                        color: "#BDBDBD",
                      }
                }
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Опубліковати</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.delateBtn} onPress={handleReset}>
              <AntDesign name="delete" size={(24, 14)} color="#BDBDBD" />
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 22,
    justifyContent: "space-between",
  },
  containerPosts: {
    flex: 1,
  },
  wrapCamera: {
    borderRadius: 8,
    overflow: "hidden",
  },
  btnContainer: {
    position: "absolute",
    left: "42%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    zIndex: 100,
  },
  camera: {
    justifyContent: "center",
    height: 240,
  },
  imgBaground: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    BorderColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    marginTop: 48,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    padding: 16,
    minWidth: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  delateBtn: {
    marginTop: 20,
    marginBottom: 34,
    alignSelf: "center",
    // left: 50,
    // transform:  "translateY",
    //  translateY: '50%',
    maxWidth: 70,
    width: 100,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapGray: {
    height: 240,
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});
