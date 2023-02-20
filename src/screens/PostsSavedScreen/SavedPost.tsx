import { Dimensions, Image, StyleSheet } from "react-native";
import React from "react";

interface SavedPostProps {
  img: string | undefined;
  index: number;
}

export const IMG_SIZE = Dimensions.get("window").width / 3.02;

const SavedPost = ({ img, index }: SavedPostProps) => {
  return (
    <Image
      key={Math.random()}
      source={{ uri: img }}
      style={[styles.img, (index + 1) % 3 === 0 && styles.lastImg]}
    />
  );
};

export default SavedPost;

const styles = StyleSheet.create({
  img: {
    width: IMG_SIZE,
    height: IMG_SIZE,
    marginBottom: 1,
  },
  lastImg: {
    width: Dimensions.get("window").width / 3,
  },
});
