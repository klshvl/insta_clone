import React from "react";

import StoryBorder from "../StoryBorder";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { Icon } from "react-native-eva-icons";

interface StoryProfileProps {
  item: Profile;
}

const StoryProfile = ({ item }: StoryProfileProps) => {
  return (
    <>
      <StoryBorder item={item} styleVariants="profiles">
        <Image source={item.image} style={styles.profile} />
      </StoryBorder>
      {item.id === 1 && (
        <View style={styles.addStoryCircle}>
          <Icon
            name="plus-outline"
            width={16}
            height={16}
            fill="white"
            stroke="white"
          />
        </View>
      )}
    </>
  );
};

export default StoryProfile;
