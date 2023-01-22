import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.account}>
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  account: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
