import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "@react-navigation/native";
import { SavedPostsInitialState } from "../../store/savedPosts";
import SavedPost, { IMG_SIZE } from "./SavedPost";
import { FlashList } from "@shopify/flash-list";

const PostsSavedScreen = () => {
  const { posts } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );

  const { savedPostsIds } = useSelector(
    (state: { savedPosts: SavedPostsInitialState }) => state.savedPosts,
  );

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
