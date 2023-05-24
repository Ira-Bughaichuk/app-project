import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { TouchableOpacity, View } from "react-native";

import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";


export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{tabBarOptions: {
      style: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
  tabBarShowLabel: false,
   
      }} >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowOpacity: 0.3,
            shadowRadius: 0,
            elevation: 1,
          },
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Ionicons name="grid-outline" size={24} color="#212121" />
              </View>
            ) : (
              <Ionicons name="grid-outline" size={24} color="#BDBDBD" />
            ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowOpacity: 0.3,
            shadowRadius: 0,
            elevation: 1,
          },
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
            lineHeight: 22,
          },
           tabBarStyle: { display: 'none' },

          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Posts")}
            >
              <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <AntDesign name="plus" size={24} color="#212121" />
              </View>
            ) : (
              <AntDesign name="plus" size={24} color="#BDBDBD" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "Профіль",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <AntDesign name="user" size={24} color="#212121" />
              </View>
            ) : (
              <AntDesign name="user" size={24} color="#BDBDBD" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// options={{ title: "Публікації",headerStyle: {
//   backgroundColor: "#FFFFFF",
// },

// headerRight: () => (
//   <TouchableOpacity
//   onPress={() => navigation.navigate("Login")} title="ghh"
//   >
//   <Image source={logOut} />
//   </TouchableOpacity>
// ),
// }}
