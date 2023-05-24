import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import Home from './Screens/Home.jsx';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
    <MainStack.Navigator  initialRouteName="Login">
      <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false}}/>
     <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
     <MainStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
     </MainStack.Navigator>
    </NavigationContainer>
  );
}
