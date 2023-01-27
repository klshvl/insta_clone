import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "@react-navigation/native";
import { SavedPostsInitialState } from "../../store/savedPosts";
import SavedPost from "./SavedPost";

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

  return (
    <View>
      {images.map(img => (
        <SavedPost key={Math.random()} img={img} />
      ))}
    </View>
  );
};

export default PostsSavedScreen;

const styles = StyleSheet.create({
  saved: {
    flex: 1,
  },
});
