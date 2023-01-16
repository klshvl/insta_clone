import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: Platform.OS === "ios" ? 125 : 50,
  },
});
