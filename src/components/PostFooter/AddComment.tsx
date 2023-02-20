import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../Button/Button";
import { getPosts } from "../../store/posts";
import { useAppDispatch, useAppSelector } from "../../hooks";
import firestore from "@react-native-firebase/firestore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/AfterAuth/HomeStackNavigation";

interface AddCommentProps {
  post: Post;
  onFocus: () => void;
}

const AddComment = ({ onFocus, post }: AddCommentProps) => {
  const [newComment, setNewComment] = useState("");

  const dispatch = useAppDispatch();

  const { user } = useAppSelector(state => state.user);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const commentsHandler = () => {
    navigation.navigate("Comments", post);
  };

  const addCommentsHandler = async () => {
    if (newComment === "") return;
    const commentObj = await firestore()
      .collection("comments")
      .add({ content: newComment, commentLiked: false });

    await firestore()
      .collection("posts")
      .doc(post.id.toString())
      .update({
        comments: firestore.FieldValue.arrayUnion(commentObj),
      });

    dispatch(getPosts());
    setNewComment("");
  };

  const onChangeText = (comment: string) => {
    setNewComment(comment);
  };

  return (
    <>
      <Button textStyle={styles.comments} onPress={commentsHandler}>
        {post.comments.length === 0
          ? null
          : `View ${post.comments.length > 1 ? "all" : ""} ${
              post.comments.length
            } ${post.comments.length === 1 ? "comment" : "comments"}`}
      </Button>
      <View
        style={
          post.comments.length === 0
            ? [styles.addComment, styles.addCommentMargin]
            : styles.addComment
        }>
        <Image
          source={
            user?.photoURL
              ? { uri: user.photoURL }
              : require("../../../assets/images/defaultProfile.svg.png")
          }
          style={styles.image}
        />
        <View style={styles.commentsInput}>
          <TextInput
            onFocus={onFocus}
            placeholder="Add a comment..."
            defaultValue={newComment}
            onChangeText={onChangeText}
          />
          <Button textStyle={styles.postComment} onPress={addCommentsHandler}>
            Post
          </Button>
        </View>
      </View>
    </>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  comments: {
    fontSize: 16,
    marginVertical: 10,
  },
  addComment: {
    flexDirection: "row",
    alignItems: "center",
  },
  addCommentMargin: {
    marginTop: 10,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  commentsInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  postComment: {
    color: "#2291d1",
    fontWeight: "700",
  },
});
