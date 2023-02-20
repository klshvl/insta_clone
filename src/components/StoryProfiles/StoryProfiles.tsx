import React from "react";
import { FlashList } from "@shopify/flash-list";

import StoryProfile from "../StoryProfile";
import ItemSeparator from "../ItemSeparator";
import UserStory from "../UserStory/UserStory";
import { StyleSheet } from "react-native";

interface StoryProfilesProps {
  posts: Post[];
}

const StoryProfiles = ({ posts }: StoryProfilesProps) => {
  const storyProfilesHandler = ({
    item,
    index,
  }: {
    item: Post;
    index: number;
  }) => {
    return <StoryProfile item={item} index={index} />;
  };

  return (
    <>
      <FlashList
        ListHeaderComponent={UserStory}
        data={posts}
        key={Math.random()}
        renderItem={storyProfilesHandler}
        estimatedItemSize={200}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyFlashList}
      />
      <ItemSeparator />
    </>
  );
};

export default StoryProfiles;

const styles = StyleSheet.create({
  storyFlashList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
