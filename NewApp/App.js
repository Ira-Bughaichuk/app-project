import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import * as Font from "expo-font";
import { useEffect, useState } from "react";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
 
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncData = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    loadAsyncData();
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
