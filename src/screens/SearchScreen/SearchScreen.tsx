import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.search}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
