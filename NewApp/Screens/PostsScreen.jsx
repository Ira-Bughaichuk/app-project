import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config.js";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  const { login, email } = useSelector((state) => state.auth);

  useEffect(() => {
    onSnapshot(collection(db, "myPosts"), (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={require("../assets/image/user.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>{login}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View>
      <FlatList
          style={styles.listItem}
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.photo }} style={styles.itemImg} />
              <View style={styles.itemOverlay}>
                <Text style={styles.itemTitle}>{item.data.name}</Text>
                <View style={styles.itemInfo}>
                  <TouchableOpacity
                    style={styles.overlayIcons}
                    onPress={() => navigation.navigate("CommentsScreen", item)}
                  >
                    <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                    <Text style={styles.itemCount}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.overlayIcons}
                    onPress={() => navigation.navigate("MapScreen",item)}
                  >
                    <Ionicons
                      name="md-location-outline"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text style={styles.itemPlace}>
                      {item.data.locationTitle}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    paddingBottom: 72,
  },
  profileWrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name: {
    color: "#212121",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    color: "#212121",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
  },
  // listItem:{
  //   marginBottom:70,
  // },
  item: {
    marginBottom: 32,
    justifyContent: "center",
  },
  itemImg: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  overlayIcons: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemCount: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  itemPlace: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
