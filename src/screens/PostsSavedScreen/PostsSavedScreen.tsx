import { StyleSheet, View } from "react-native";
import React from "react";
import SavedPost, { IMG_SIZE } from "./SavedPost";
import { FlashList } from "@shopify/flash-list";
import { useAppSelector } from "../../hooks";

const PostsSavedScreen = () => {
  const { posts } = useAppSelector(state => state.posts);

  const { savedPostsIds } = useAppSelector(state => state.savedPosts);

  const images = savedPostsIds.map(
    id => posts.find(post => post.id === id)?.image,
  );

  const savedPostHandler = ({ item, index }) => {
    return <SavedPost img={item} index={index} />;
  };

  return (
    <View style={styles.saved}>
      <FlashList
        data={images}
        estimatedItemSize={IMG_SIZE}
        renderItem={savedPostHandler}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
};

export default PostsSavedScreen;

const styles = StyleSheet.create({
  saved: {
    flex: 1,
  },
});
