
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   StyleSheet,
//   ImageBackground,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Pressable,
// } from "react-native";
// import { registerThunk } from "../redux/auth/authOperations";

// import { AntDesign } from "@expo/vector-icons";

// const initialState = {
//   login: "",
//   email: "",
//   password: "",
// };
// function RegistrationScreen({ navigation }) {
//   const [avatar, setAvatar] = useState(null);
//   const [state, setstate] = useState(initialState);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [focusedInput, setFocusedInput] = useState(null);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
//       setIsShowKeyboard(false);
//     });

//     return () => {
//       hideSubscription.remove();
//     };
//   }, []);

//   const addImg = () => {};
//   const delImg = () => {
//     setAvatar(null);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword((pS) => !pS);
//   };

//   const handleFocus = (inputName) => {
//     setFocusedInput(inputName);
//     setIsShowKeyboard(true);
//   };

//   const keyboardHide = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//   };

//   const handleSubmit = () => {
//     keyboardHide();
//     dispatch(registerThunk(state));
//     setstate(initialState);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <ImageBackground style={styles.bg} source={require("../assets/image/Photo-BG.jpg")}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : null}
//         >
//           <Pressable
//             style={{
//               ...styles.formContainer,
//               paddingBottom: isShowKeyboard ? 32 : 66,
//             }}
//             onPress={keyboardHide}
//           >
//             <View style={styles.avatarBox}>
//               <Image source={{ uri: avatar }} style={styles.avatarImg} />
//               {avatar ? (
//                 <TouchableOpacity onPress={delImg} style={styles.avatarIcon}>
//                   <AntDesign name="close" size={16} color="#BDBDBD" />
//                 </TouchableOpacity>
//               ) : (
//                 <TouchableOpacity onPress={delImg} style={styles.avatarIcon}>
//                   <AntDesign name="plus" size={16} color="#BDBDBD" />
//                 </TouchableOpacity>
//               )}
//             </View>
//             <Text style={styles.text}>Реєстрація</Text>
//             <TextInput
//               style={{
//                 ...styles.input,
//                 borderColor: focusedInput === "input1" ? "#FF6C00" : "#E8E8E8",
//               }}
//               textAlign={"left"}
//               placeholder="Логін"
//               value={state.login}
//               onFocus={() => handleFocus("input1")}
//               onChangeText={(value) =>
//                 setstate((prevState) => ({ ...prevState, login: value }))
//               }
//             />
//             <TextInput
//               style={{
//                 ...styles.input,
//                 borderColor: focusedInput === "input2" ? "#FF6C00" : "#E8E8E8",
//               }}
//               textAlign={"left"}
//               placeholder="Адреса електронної пошти"
//               value={state.email}
//               onFocus={() => handleFocus("input2")}
//               onChangeText={(value) =>
//                 setstate((prevState) => ({ ...prevState, email: value }))
//               }
//             />
//             <View style={{ position: "relative", minWidth: "91.6%" }}>
//               <TextInput
//                 style={{
//                   ...styles.input,
//                   borderColor:
//                     focusedInput === "input3" ? "#FF6C00" : "#E8E8E8",
//                 }}
//                 textAlign={"left"}
//                 placeholder="Пароль"
//                 secureTextEntry={showPassword}
//                 value={state.password}
//                 onFocus={() => handleFocus("input3")}
//                 onChangeText={(value) =>
//                   setstate((prevState) => ({ ...prevState, password: value }))
//                 }
//               />
//               <TouchableOpacity
//                 style={{ position: "absolute", right: 32, bottom: 16 }}
//                 onPress={toggleShowPassword}
//               >
//                 <Text style={styles.btnPasswordText}>
//                   {showPassword ? "Показати" : "Приховати"}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             {!isShowKeyboard ? (
//               <>
//                 <TouchableOpacity
//                   activeOpacity={0.8}
//                   style={styles.btn}
//                   onPress={handleSubmit}
//                 >
//                   <Text style={styles.btnTitle}>Увійти</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.8} style={styles.navButton}>
//                   <Text style={styles.navButtonTitle}>
//                     Вже є акаунт?
//                     <Text onPress={() => navigation.navigate("LoginScreen")}>
//                       Увійти
//                     </Text>
//                   </Text>
//                 </TouchableOpacity>
//               </>
//             ) : null}
//           </Pressable>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// }

// export default RegistrationScreen;

// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   formContainer: {
//     position: "relative",
//     alignItems: "center",
//     gap: 16,
//     backgroundColor: "#FFFFFF",
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//   },
//   avatarBox: {
//     position: "absolute",
//     top: -60,
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//   },
//   avatarIcon: {
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     justifyContent: "center",

//     alignItems: "center",
//     width: 25,
//     height: 25,
//     borderRadius: 1000,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 14,
//     right: -12.5,
//   },
//   text: {
//     textAlign: "center",
//     marginBottom: 16,
//     marginTop: 92,
//     marginHorizontal: 16,
//     fontFamily: "Roboto-Medium",
//     fontSize: 30,
//     color: "#212121",
//   },

//   input: {
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     height: 50,
//     minWidth: "90%",
//     marginHorizontal: 16,
//     borderRadius: 8,
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     color: "#212121",
//   },
//   btnPasswordText: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     color: "#1B4371",
//   },
//   btn: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 26,
//     padding: 16,
//     minWidth: "90%",
//     borderRadius: 100,
//     marginHorizontal: 16,
//     backgroundColor: "#FF6C00",
//   },
//   btnTitle: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     color: "#FFFFFF",
//   },
//   navButton: {
//     marginHorizontal: 16,
//   },
//   navButtonTitle: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     color: "#1B4371",
//     textAlign: "center",
//   },
// });
//-------------------------------/

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import { registerThunk} from '../redux/auth/authOperations';

const initialState = {
  login: "",
  email:"",
  password: "",
}

function RegistrationScreen({navigation}) {
  const [focusedInput, setFocusedInput] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dateForm, setDateForm] = useState(initialState);


const dispatch = useDispatch();

useEffect(() => {
  const onChange = () => {
        const width = Dimensions.get("window").width - 8 * 2;
        setDimensions(width);
      };
      const subscription = Dimensions.addEventListener("change", onChange);
  return () => subscription?.remove();
});

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

  const keyboardHide=()=>{
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }
   
  const handleSubmit =()=>{
  keyboardHide();
  dispatch(registerThunk(dateForm));
  setDateForm(initialState);
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.page}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/image/Photo-BG.jpg")}
      >
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{...styles.boxForm,    flex: isShowKeyboard ? 0.82 :0.67,}}>
          <View style={styles.boxAvatar}>
            <View style={styles.avatarBord}>
              <Image style={styles.avatar} source={{ uri: imagePath }} />

              {imagePath ? (
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
                  <Image style={styles.icon} source={del} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
                  <Image style={styles.icon} source={add} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{ ...styles.form, width: dimensions }}>
           <TextInput
              onFocus={() => handleFocus("input1")}
              onBlur={handleBlur}
              onChangeText={(value) => {
                setDateForm((prevState) => ({ ...prevState, login: value }));
              }}
              value={dateForm.login}
              style={{
                ...styles.formInput,
                marginBottom: 16,
                borderColor: focusedInput === "input1" ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Логін"
            /> 

             <TextInput
              onFocus={() => handleFocus("input2")}
              onBlur={handleBlur}
              onChangeText={(value) => {
                setDateForm((prevState) => ({ ...prevState, email: value }));
              }}
              value={dateForm.email}
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
                
                 value={dateForm.password}
                 onChangeText={(value) => {
                  setDateForm((prevState) => ({ ...prevState, password: value }));
                }}
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

            <TouchableOpacity activeOpacity={0.9} style={styles.formButton} onPress={handleSubmit} >
              <Text style={styles.buttonTitle}>Зареєструватись</Text>
            </TouchableOpacity>
            <View style={styles.overlayText}>
            <Text style={styles.navigationText}> Вже є обліковий запис? </Text>

              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("LoginScreen")} >
              <Text style={styles.navigationText}> Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}


export default RegistrationScreen;


const styles = StyleSheet.create({
  page: {
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
  container:{
    flex:1,
    justifyContent: "flex-end",
  },
  boxAvatar: {
    alignSelf: "center",
    width: 132,
    height: 120,
    marginTop: -60,
    marginBottom: 32,

  },
  avatarBord: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    position: "relative",
  },
  avatar: {
    // borderRadius: 16,
    // width: 120,
    // height: 120,
    //object-fit: "cover",
  },
  iconBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 1000,
    overflow: "hidden",

    position: "absolute",
    top: 81,
    right: -12.5,
  },
  icon: {
    width: 13,
    height: 13,
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
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
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
  overlayText:{
    flexDirection:"row",
    justifyContent:"center",
  },
  navigationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",

  },
});
