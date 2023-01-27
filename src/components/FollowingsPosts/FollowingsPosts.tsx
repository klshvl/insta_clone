import React, { useCallback, useRef, useState } from "react";
import { Platform, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useSelector } from "react-redux";

import Post from "../Post";
import StoryProfiles from "../StoryProfiles";
import { useKeyboard } from "./useKeyboard";

const FollowingsPosts = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [viewHeight, setViewHeight] = useState<number>();
  const { keyboardHeight } = useKeyboard();
  const postRef = useRef<FlashList<Post>>(null);

  const { posts } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );

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

  const postsHandler = ({ item }: { item: Post }) => {
    return (
      <Post post={item} onFocus={() => posts.map(post => onFocus(post.id))} />
    );
  };

  return (
    <View
      style={[
        getStyles().contentContainerStyle,
        getStyles(keyboardHeight).keyboard,
      ]}
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
      <FlashList
        ref={postRef}
        ListHeaderComponent={<StoryProfiles posts={posts} />}
        data={posts}
        renderItem={postsHandler}
        estimatedItemSize={630}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FollowingsPosts;

import { StyleSheet } from "react-native";
import { InitialState } from "../../store/posts";

const getStyles = (keyboardHeight?: number) =>
  StyleSheet.create({
    contentContainerStyle: {
      flex: 1,
    },
    keyboard: {
      marginBottom: keyboardHeight ? keyboardHeight - 80 : 0,
    },
  });
