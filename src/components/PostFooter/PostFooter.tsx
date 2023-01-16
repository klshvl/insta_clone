import React, { useCallback, useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Icon } from "react-native-eva-icons";

import { styles } from "./styles";
import { ICONS_SIZE } from "../Header/Header";
import {
  Gesture,
  GestureDetector,
  TextInput,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useUsersContext } from "../../context/users-context";
import LikersProfileImages from "./LikersProfileImages";
import LikesText from "./LikesText";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface PostFooterProps {
  isLiked: boolean;
  onLiked: (a: boolean) => void;
  user: Profile;
}

const PostFooter = ({ isLiked, onLiked, user }: PostFooterProps) => {
  const usersData = useUsersContext();

  const [usersThatLiked, setUsersThatLiked] = useState<
    Array<string | undefined>
  >([]);

  const scale = useSharedValue(1);
  const rIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const postIsLiked = () => {
    onLiked(!isLiked);
  };

  const singleTap = Gesture.Tap().onStart(() => {
    runOnJS(postIsLiked)();
    scale.value = withSpring(0.8, undefined, isFinished => {
      if (isFinished) scale.value = withSpring(1);
    });
  });

  const postLikes = useCallback(() => {
    let likes: Array<string | undefined> = [];

    user.likedBy.forEach(userId => {
      likes.push(usersData.find(userData => userData.id === userId)?.username);
    });
    setUsersThatLiked(likes);
  }, [user.likedBy, usersData]);

  const postLikesUsers = useCallback(
    (usernames: Array<string | undefined>) => {
      const userImages: ImageSourcePropType = [];
      usernames.map(username => {
        userImages.push(
          usersData.find(userData => userData.username === username)?.image,
        );
      });

      return userImages.slice(0, 3).map((userImage, index) => {
        return (
          <LikersProfileImages
            key={index + Math.random()}
            imgSource={userImage}
            index={index}
          />
        );
      });
    },
    [usersData],
  );

  useEffect(() => {
    postLikes();
  }, [postLikes]);

  return (
    <View style={styles.postInteractionContainer}>
      <View style={styles.postInteraction}>
        <View style={styles.icons}>
          <GestureDetector gesture={singleTap}>
            {isLiked ? (
              <AnimatedIcon
                style={[styles.icon, rIconStyle]}
                name="heart"
                width={ICONS_SIZE}
                height={ICONS_SIZE}
                fill={"red"}
              />
            ) : (
              <AnimatedIcon
                style={[styles.icon, rIconStyle]}
                name="heart-outline"
                width={ICONS_SIZE}
                height={ICONS_SIZE}
              />
            )}
          </GestureDetector>
          <Icon
            style={styles.icon}
            name="message-circle-outline"
            width={ICONS_SIZE}
            height={ICONS_SIZE}
          />
          <Icon
            style={styles.icon}
            name="paper-plane-outline"
            width={ICONS_SIZE}
            height={ICONS_SIZE}
          />
        </View>
        <Icon name="bookmark-outline" width={ICONS_SIZE} height={ICONS_SIZE} />
      </View>
      <View style={styles.likes}>
        {postLikesUsers(usersThatLiked)}
        <LikesText likeNum={2} usersThatLiked={usersThatLiked} />
      </View>

      <Text style={styles.comments}>View all 5 comments</Text>
      <View style={styles.addComment}>
        <Image source={usersData[0].image} style={styles.image} />
        <TextInput placeholder="Add a comment..." />
      </View>
    </View>
  );
};

export default PostFooter;
