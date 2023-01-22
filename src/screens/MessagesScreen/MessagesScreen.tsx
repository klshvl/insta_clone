import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessagesScreen = () => {
  return (
    <View style={styles.messages}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  messages: {
    flex: 1,
  },
});
