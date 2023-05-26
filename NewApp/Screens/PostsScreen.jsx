import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  //console.log("posts", posts);

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          source={require("../assets/image/user.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
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
                <Text style={styles.itemTitle}>{item.name}</Text>
                <View style={styles.itemInfo}>
                  <TouchableOpacity
                    style={styles.overlayIcons}
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                    <Text style={styles.itemCount}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.overlayIcons}
                    onPress={() =>
                      navigation.navigate("MapScreen", route.params)
                    }
                  >
                    <Ionicons
                      name="md-location-outline"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text style={styles.itemPlace}>{item.locationTitle}</Text>
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
