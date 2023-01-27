import { Image, StyleSheet } from "react-native";
import React from "react";

interface Props {}

const SavedPost = ({ img }: Props) => {
  return (
    <Image
      key={Math.random()}
      source={img}
      style={{ width: 80, height: 80, margin: 8 }}
    />
  );
};

export default SavedPost;

const styles = StyleSheet.create({});
