import React from "react";
import { StyleSheet, Text } from "react-native";

interface ErrorProps {
  error: string | undefined;
}

const ErrorMessage = ({ error }: ErrorProps) => {
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 5,
  },
});
