import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  FlatList,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

import Post from "../Post";
import { getPosts } from "../../store/posts";
import StoryProfiles from "../StoryProfiles";
import { useKeyboard } from "./useKeyboard";
import { useAppDispatch, useAppSelector } from "../../hooks";

const FollowingsPosts = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [viewHeight, setViewHeight] = useState<number>();
  const { keyboardHeight } = useKeyboard();
  const postRef = useRef<FlashList<Post>>(null);
  const dispatch = useAppDispatch();
  const styles = getStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { posts } = useAppSelector(state => state.posts);

  const onFocus = useCallback((id: number) => {
    // let ke = keyboardHeight;
    // ke ||= 346;
    if (Platform.OS === "ios") {
      // postRef.current?.scrollToOffset({
      //   offset:
      //     postRef.current?.state.layoutProvider
      //       .getLayoutManager()
      //       ?.getOffsetForIndex(index).y! +
      //     630 -
      //     ke,
      //   animated: true,
      // });

      setSelectedIndex(id);
    }
  }, []);

  const postsHandler = ({ item, index }: { item: Post; index: number }) => {
    return (
      <Post
        post={item}
        onFocus={() => posts.map(() => onFocus(index))}
        index={index}
      />
    );
  };

  return (
    <View
      style={[styles.contentContainerStyle, styles.keyboard(keyboardHeight)]}
      onLayout={e => {
        if (!viewHeight || e.nativeEvent.layout.height > viewHeight) {
          setViewHeight(e.nativeEvent.layout.height);
          return;
        }
        if (selectedIndex !== undefined) {
          postRef.current?.scrollToIndex({
            index: selectedIndex,
            animated: true,
            viewPosition: 1,
          });
        }
      }}>
      <FlatList
        ref={postRef}
        ListHeaderComponent={<StoryProfiles posts={posts} />}
        data={posts}
        renderItem={postsHandler}
        // estimatedItemSize={630}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FollowingsPosts;

const getStyles = () =>
  StyleSheet.create({
    contentContainerStyle: {
      flex: 1,
    },
    keyboard: (
      keyboardHeight?: number,
    ): ViewStyle | TextStyle | ImageStyle => ({
      marginBottom: keyboardHeight ? keyboardHeight - 80 : 0,
    }),
  });
