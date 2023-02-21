import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Icon } from "react-native-eva-icons";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

import { ICONS_SIZE } from "../Header/Header";
import PostFooter from "../PostFooter";
import StoryBorder from "../StoryBorder";
import { styles } from "./styles";

interface PostsProps {
  post: Post;
  onFocus: () => void;
  index: number;
}

const Post = ({ post, onFocus, index }: PostsProps) => {
  const [isLiked, setIsLiked] = useState(false);

  //////////////// POST LIKE ANIMATION ////////////////

  const scale = useSharedValue(0);

  const rImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Math.max(scale.value, 0),
        },
      ],
    };
  });

  const postIsLiked = () => {
    setIsLiked(true);
  };

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = withSpring(1, undefined, isFinished => {
        if (isFinished) {
          scale.value = withDelay(500, withSpring(0));
        }
      });
      runOnJS(postIsLiked)();
    });

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.info}>
          <StoryBorder item={post} styleVariants="post" index={index}>
            <Image source={{ uri: post.image }} style={styles.profile} />
          </StoryBorder>
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Icon
          name="more-horizontal-outline"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
        />
      </View>
      <GestureDetector gesture={doubleTap}>
        <View>
          <ImageBackground
            source={{ uri: post.image }}
            style={[styles.postImage]}>
            <Animated.Image
              source={require("../../../assets/images/whiteHeart.png")}
              style={[styles.heartImage, rImageStyle]}
              resizeMode={"contain"}
            />
          </ImageBackground>
        </View>
      </GestureDetector>
      <PostFooter
        onFocus={onFocus}
        isLiked={isLiked}
        onLiked={setIsLiked}
        post={post}
      />
    </View>
  );
};

export default Post;
