import React from "react";
import { FlatList } from "react-native";
import StoryProfile from "../StoryProfile";
import ItemSeparator from "../ItemSeparator";

interface StoryProfilesProps {
  data: Profile[];
}

const StoryProfiles = ({ data }: StoryProfilesProps) => {
  const storyProfilesHandler = ({ item }: { item: Profile }) => {
    return <StoryProfile item={item} />;
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={storyProfilesHandler}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ItemSeparator />
    </>
  );
};

export default StoryProfiles;
