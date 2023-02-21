import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import SavedPost, { IMG_SIZE } from "./SavedPost";
import { FlashList } from "@shopify/flash-list";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSavedPosts } from "../../store/user";

const PostsSavedScreen = () => {
  const { posts } = useAppSelector(state => state.posts);

  const { user } = useAppSelector(state => state.user);

  const images = user?.savedPosts.map(
    savedPost => posts.find(post => post.id === savedPost.postId)?.image,
  );

  const savedPostHandler = ({ item, index }) => {
    return <SavedPost img={item} index={index} />;
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSavedPosts());
  }, []);

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
