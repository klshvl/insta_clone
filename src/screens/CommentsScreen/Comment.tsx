import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Image from "react-native-fast-image";
import Swipeable from "react-native-gesture-handler/Swipeable";
import firestore from "@react-native-firebase/firestore";

import DeleteCommentsButton from "./DeleteComments";
import { getPosts } from "../../store/posts";
import { useAppDispatch } from "../../hooks";

interface CommentProps {
  comment: AddCommentsState;
  accountUsername: string | undefined;
  accountUserImage: string | undefined;
  post: any;
}

const Comment = ({
  comment,
  accountUsername,
  accountUserImage,
  post,
}: CommentProps) => {
  const dispatch = useAppDispatch();

  /////////////////// LIKE COMMENT ANIMATION ///////////////////

  const scale = useSharedValue(1);

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

  const commentWasLiked = async () => {
    const commentObj = await firestore()
      .collection("comments")
      .doc(comment.id.toString())
      .get();

    await firestore()
      .collection("comments")
      .doc(comment.id)
      .update({ commentLiked: !commentObj._data.commentLiked });

    dispatch(getPosts());
  };

  const tapHandler = Gesture.Tap().onStart(() => {
    runOnJS(commentWasLiked)();
    scale.value = withSpring(0.8, undefined, isFinished => {
      if (isFinished) scale.value = withSpring(1);
    });
  });

  /////////////////// DELETE COMMENT ///////////////////

  const deleteComments = async () => {
    const commentObj = firestore()
      .collection("comments")
      .doc(comment.id.toString());

    await firestore()
      .collection("posts")
      .doc(post.id.toString())
      .update({
        comments: firestore.FieldValue.arrayRemove(commentObj),
      });

    commentObj.delete();
    dispatch(getPosts());
  };

  const renderRightActions = () => {
    return <DeleteCommentsButton onPress={deleteComments} />;
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View key={Math.random()} style={styles.container}>
        <View style={styles.info}>
          <Image source={{ uri: accountUserImage }} style={styles.profileImg} />
          <View>
            <Text style={styles.username}>{accountUsername}</Text>
            <View style={styles.time}>
              <Text>2h</Text>
              <Text style={styles.reply}>Reply</Text>
            </View>
          </View>
          <Text style={styles.comment}>{comment.content}</Text>
        </View>
        <GestureDetector gesture={tapHandler}>
          {comment.commentLiked ? (
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
