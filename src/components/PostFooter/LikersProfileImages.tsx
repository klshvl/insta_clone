import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface Props {
  imgSource: ImageSourcePropType;
  index: number;
}

const LikersProfileImages = ({ imgSource, index }: Props) => {
  return (
    <View style={getStyles(index).container}>
      <Image source={imgSource} style={getStyles(index).image} />
    </View>
  );
};

export default LikersProfileImages;

export const getStyles = (index: number) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      left: index * 12,
      zIndex: -index,
    },
    image: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderColor: "white",
      borderWidth: 2,
    },
  });
