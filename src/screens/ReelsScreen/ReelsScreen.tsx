import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReelsScreen = () => {
  return (
    <View style={styles.reels}>
      <Text>ReelsScreen</Text>
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  reels: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
