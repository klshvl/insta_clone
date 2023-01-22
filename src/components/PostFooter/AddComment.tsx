import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useRecoilState } from "recoil";

import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addComment } from "../../store";

interface AddCommentProps {
  post: Post;
  commentImage: ImageSourcePropType;
  onFocus: () => void;
}

const AddComment = ({ commentImage, onFocus, post }: AddCommentProps) => {
  const [addComments, setAddComments] = useState<string | undefined>("");

  const dispatch = useDispatch();

  const navigation = useNavigation<any>();

  const commentsHandler = () => {
    navigation.navigate("Comments", post.comments);
  };

  const addCommentsHandler = () => {
    if (addComments === "") return;
    dispatch(addComment(post.id, addComments));
    setAddComments("");
  };

  const onChangeText = (newComment: string) => setAddComments(newComment);

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
        <Image source={commentImage} style={styles.image} />
        <View style={styles.commentsInput}>
          <TextInput
            onFocus={onFocus}
            placeholder="Add a comment..."
            defaultValue={addComments}
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
