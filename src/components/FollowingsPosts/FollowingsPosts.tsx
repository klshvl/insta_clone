import React from "react";
import { FlatList } from "react-native";

import Post from "../Post";
import StoryProfiles from "../StoryProfiles";
import { useUsersContext } from "../../context/users-context";
import { styles } from "./styles";

const FollowingsPosts = () => {
  const usersData = useUsersContext();

  const postsHandler = ({ item }: { item: Profile }) => {
    return <Post userData={item} />;
  };

  return (
    <FlatList
      ListHeaderComponent={<StoryProfiles data={usersData} />}
      data={usersData}
      renderItem={postsHandler}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default FollowingsPosts;
