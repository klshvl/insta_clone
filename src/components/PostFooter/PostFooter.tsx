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

import { styles } from "./styles";
import { ICONS_SIZE } from "../Header/Header";
import LikersProfileImages from "./LikersProfileImages";
import LikesText from "./LikesText";
import AddComment from "./AddComment";
import Button from "../Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/AfterAuth/HomeStackNavigation";
import { useAppSelector, useAppDispatch } from "../../hooks";
import firestore from "@react-native-firebase/firestore";
import { getSavedPosts } from "../../store/user";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface PostFooterProps {
  isLiked: boolean;
  onLiked: (a: boolean) => void;
  post: Post;
  onFocus: () => void;
}

const PostFooter = ({ isLiked, onLiked, post, onFocus }: PostFooterProps) => {
  const { posts } = useAppSelector(state => state.posts);
  const { user } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const [usersThatLiked, setUsersThatLiked] = useState<
    Array<string | undefined>
  >([]);

  //////////////// POST LIKE ANIMATION ////////////////

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
    onLiked(prevLike => !prevLike);
  };

  const singleTap = Gesture.Tap().onStart(() => {
    runOnJS(postIsLiked)();
    scale.value = withSpring(0.8, undefined, isFinished => {
      if (isFinished) scale.value = withSpring(1);
    });
  });

  //////////////// POST LIKERS ////////////////

  const postLikes = useCallback(() => {
    let likes: Array<string | undefined> = [];

    post.likedBy.forEach(likeObj => {
      likes.push(
        posts.find((postU: Post) => postU.userId === likeObj.userId)?.username,
      );
    });
    setUsersThatLiked(likes);
  }, [post.likedBy, posts]);

  const postLikesUsers = useCallback(
    (usernames: Array<string | undefined>) => {
      const userImages: Array<string | undefined> = [];
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

  //////////////// SAVE POST ////////////////

  const savePostHandler = async () => {
    const savedPostsCollection = firestore().collection("savedPosts");

    const savedPost = user?.savedPosts.find(
      savedP => savedP.postId === post.id,
    );

    if (!savedPost) {
      await savedPostsCollection.add({ postId: post.id });
    } else {
      await savedPostsCollection.doc(savedPost.id).delete();
    }

    dispatch(getSavedPosts());
  };

  const postWasSaved = user?.savedPosts.find(
    savedP => savedP.postId === post.id,
  );

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
          {postWasSaved ? (
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
      <AddComment post={post} onFocus={onFocus} />
    </View>
  );
};

export default PostFooter;
