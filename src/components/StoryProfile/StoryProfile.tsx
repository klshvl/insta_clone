import React from "react";

import StoryBorder from "../StoryBorder";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface StoryProfileProps {
  // item: Post;
  index: number;
  item: any;
}

const StoryProfile = ({ item, index }: StoryProfileProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
      }}>
      <StoryBorder item={item} styleVariants="profiles" index={index}>
        <Image source={{ uri: item.image }} style={styles.profile} />
      </StoryBorder>
      <Text>{item.username}</Text>
    </View>
  );
};

export default StoryProfile;
