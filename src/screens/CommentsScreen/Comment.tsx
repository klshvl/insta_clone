import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-eva-icons";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Image, { Source } from "react-native-fast-image";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteComments from "./DeleteComments";
import { deleteComment } from "../../store/posts";
import { useAppDispatch } from "../../hooks";

interface CommentProps {
  // comment: string;
  comments: AddCommentsState;
  accountUsername: string;
  accountUserImage: number | Source | undefined;
  post: Post;
}

const Comment = ({
  comments,
  accountUsername,
  accountUserImage,
  post,
}: CommentProps) => {
  const scale = useSharedValue(1);
  const [liked, setLiked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  const rIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const commentWasLiked = () => {
    setLiked(!liked);
  };

  const tapHandler = Gesture.Tap().onStart(() => {
    runOnJS(commentWasLiked)();
    scale.value = withSpring(0.8, undefined, isFinished => {
      if (isFinished) scale.value = withSpring(1);
    });
  });

  const deleteComments = () => {
    dispatch(deleteComment(post.id, comments.id));
  };

  const renderRightActions = () => {
    return <DeleteComments onPress={deleteComments} />;
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View key={Math.random()} style={styles.container}>
        <View style={styles.info}>
          <Image source={accountUserImage} style={styles.profileImg} />
          <View>
            <Text style={styles.username}>{accountUsername}</Text>
            <View style={styles.time}>
              <Text>2h</Text>
              <Text style={styles.reply}>Reply</Text>
            </View>
          </View>
          <Text style={styles.comment}>{comments.addComment}</Text>
        </View>
        <GestureDetector gesture={tapHandler}>
          {liked ? (
            <AnimatedIcon
              name="heart"
              width={16}
              height={16}
              fill={"red"}
              style={[styles.icon, rIconStyle]}
            />
          ) : (
            <AnimatedIcon
              name="heart-outline"
              width={16}
              height={16}
              style={[styles.icon, rIconStyle]}
            />
          )}
        </GestureDetector>
      </View>
    </Swipeable>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  info: {
    flexDirection: "row",
  },
  profileImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 10,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  time: {
    flexDirection: "row",
  },
  reply: {
    marginLeft: 10,
  },
  comment: {
    marginLeft: 5,
  },
  icon: {
    marginRight: 22,
  },
});
