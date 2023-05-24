import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";


function PostsScreen() {
  return<View style={styles.container}>
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
  </View>
}
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff'
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
});
