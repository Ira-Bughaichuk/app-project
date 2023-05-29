import "react-native-gesture-handler";
import {Provider} from "react-redux";
import { useFonts } from "expo-font";
import { store } from "./redux/store";
import MainRoute from './Screens/MainRoute';

export default function App({ navigation }) {
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
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}
