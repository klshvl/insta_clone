import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Icon } from "react-native-eva-icons";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { ICONS_SIZE } from "../Header/Header";
import LikersProfileImages from "./LikersProfileImages";
import LikesText from "./LikesText";
import AddComment from "./AddComment";
import Button from "../Button";
import { Source } from "react-native-fast-image";
import { InitialState } from "../../store/posts";
import {
  SavedPostsInitialState,
  removeSavedPost,
} from "../../store/savedPosts";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface PostFooterProps {
  isLiked: boolean;
  onLiked: (a: boolean) => void;
  post: Post;
  onFocus: () => void;
}

const PostFooter = ({ isLiked, onLiked, post, onFocus }: PostFooterProps) => {
  const { posts } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );

  const { savedPostsIds } = useSelector(
    (state: { savedPosts: SavedPostsInitialState }) => state.savedPosts,
  );

  const dispatch = useDispatch();

  const navigation = useNavigation<any>();

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

    post.likedBy.forEach(postId => {
      likes.push(posts.find((postU: Post) => postU.id === postId)?.username);
    });
    setUsersThatLiked(likes);
  }, [post.likedBy, posts]);

  const postLikesUsers = useCallback(
    (usernames: Array<string | undefined>) => {
      const userImages: Array<number | Source | undefined> = [];
      usernames.map(username => {
        userImages.push(
          posts.find((postI: Post) => postI.username === username)?.image,
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
    [posts],
  );

  useEffect(() => {
    postLikes();
  }, [postLikes]);

  const savePostHandler = () => {
    if (!savedPostsIds.includes(post.id)) {
      dispatch({ type: "save", payload: post.id });
    } else {
      dispatch(removeSavedPost(post.id));
    }
  };
  const postSaved = savedPostsIds.find(id => id === post.id);

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
          <Button onPress={() => navigation.navigate("Comments", post)}>
            <Icon
              style={styles.icon}
              name="message-circle-outline"
              width={ICONS_SIZE}
              height={ICONS_SIZE}
            />
          </Button>
          <Icon
            style={styles.icon}
            name="paper-plane-outline"
            width={ICONS_SIZE}
            height={ICONS_SIZE}
          />
        </View>
        <Button onPress={savePostHandler}>
          {postSaved ? (
            <Icon name="bookmark" width={ICONS_SIZE} height={ICONS_SIZE} />
          ) : (
            <Icon
              name="bookmark-outline"
              width={ICONS_SIZE}
              height={ICONS_SIZE}
            />
          )}
        </Button>
      </View>
      <View style={styles.likes}>
        {postLikesUsers(usersThatLiked)}
        <LikesText likeNum={2} usersThatLiked={usersThatLiked} />
      </View>
      {
        <AddComment
          post={post}
          commentImage={posts[0].image}
          onFocus={onFocus}
        />
      }
    </View>
  );
};

export default PostFooter;
