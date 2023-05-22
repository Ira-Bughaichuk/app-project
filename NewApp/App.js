import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";

// import * as Font from "expo-font";
// import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';

export default function App() {
//  const loadFonts = async () => {
//   await Font.loadAsync({
//     "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     const loadAsyncData = async () => {
//       await loadFonts();
//       setFontsLoaded(true);
//     };
//     loadAsyncData();
//   }, []);
//   if (!fontsLoaded) {
//     return null;
//   }

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </>
  );
}
