import React from "react";
import { FlashList } from "@shopify/flash-list";
import StoryProfile from "../StoryProfile";
import ItemSeparator from "../ItemSeparator";

interface StoryProfilesProps {
  posts: Post[];
}

const StoryProfiles = ({ posts }: StoryProfilesProps) => {
  const storyProfilesHandler = ({ item }: { item: Post }) => {
    return <StoryProfile item={item} />;
  };

  return (
    <>
      <FlashList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={storyProfilesHandler}
        estimatedItemSize={200}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ItemSeparator />
    </>
  );
};

export default StoryProfiles;
