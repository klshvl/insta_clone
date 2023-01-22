import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShopScreen = () => {
  return (
    <View style={styles.shop}>
      <Text>ShopScreen</Text>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  shop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
