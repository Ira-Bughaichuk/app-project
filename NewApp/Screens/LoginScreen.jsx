
import React, { useState, useEffect } from "react";
import add from "../assets/image/add.png";
import del from "../assets/image/del.png";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";

function LoginScreen() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus =(inputName)=>{
    setFocusedInput(inputName);
    setIsShowKeyboard(true)
  }
  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 8 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 8 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);


  const keyboardHide=()=>{
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/image/Photo-BG.jpg")}
      >
        <KeyboardAvoidingView style={styles.keybContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{...styles.boxForm,    flex: isShowKeyboard ? 0.65 :0.60,}}>
          <Text style={styles.title}>Війти</Text>
          <View style={{ ...styles.form, width: dimensions }}>
           

            <TextInput
              onFocus={() => handleFocus("input2")}
              onBlur={handleBlur}
              style={{
                ...styles.formInput,
                marginBottom: 16,
                borderColor: focusedInput === "input2" ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Адреса електронної пошти"
            />

            <View style={styles.overlayPassword}>
              <TextInput
                onFocus={() => handleFocus("input3")}
                onBlur={handleBlur}
                style={{
                  ...styles.formInputPass,
                  borderColor:
                    focusedInput === "input3" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={{
                  ...styles.buttonPass,
                  top: focusedInput === "input3" ? 1 : 0,
                }}
                onPress={togglePasswordVisibility}
              >
                <Text style={styles.buttonText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.9} style={styles.formButton} onPress={keyboardHide}>
              <Text style={styles.buttonTitle}>Війти</Text>
            </TouchableOpacity>
            <Text style={styles.navigationText}>
            Немає облікового запису? Зареєструватись
            </Text>
          </View>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-end",
    // alignItems: "center",
    //justifyContent: "center",
  },
  image: {
    flex: 1,
   justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  keybContainer:{
    flex:1,
    justifyContent: "flex-end",
  },
  boxForm: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  //   flex: 0.67,
  //  flex:0.82,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
    marginHorizontal: 16,
  },
  form: {
    marginHorizontal: 16,
  
  },
  formInput: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  overlayPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    
    borderRadius: 8,
    overflow: "hidden",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    position: "relative",
    marginBottom: 43,
  },
  formInputPass: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    paddingRight: 115,
    color: "#212121",
    width: "100%",
  },
  buttonPass: {
    position: "absolute",
    right: 0,
    width: 110,
    height: "100%",
  },
  buttonText: {
    padding: 16,
    color: "#1B4371",
  },
  formButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingBottom: 16,
    paddingTop: 16,
    marginBottom: 16,
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  navigationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

