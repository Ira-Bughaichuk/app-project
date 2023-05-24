import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function CreatePostsScreen(){
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
    
  )
}
export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  },
});