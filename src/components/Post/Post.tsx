import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
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
  userData: Profile;
}

const Post = ({ userData }: PostsProps) => {
  const [isLiked, setIsLiked] = useState(false);

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
        <StoryBorder item={userData} styleVariants="post">
          <Image source={userData.image} style={styles.profile} />
        </StoryBorder>
        <Icon
          name="more-horizontal-outline"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
        />
      </View>
      <GestureDetector gesture={doubleTap}>
        <View>
          <ImageBackground source={userData.image} style={[styles.postImage]}>
            <Animated.Image
              source={require("../../../assets/images/whiteHeart.png")}
              style={[styles.heartImage, rImageStyle]}
              resizeMode={"contain"}
            />
          </ImageBackground>
        </View>
      </GestureDetector>
      <PostFooter isLiked={isLiked} onLiked={setIsLiked} user={userData} />
    </View>
  );
};

export default Post;
