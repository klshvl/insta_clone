import React from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamsList } from "../../navigation/HomeStackNavigation";
import { RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Comment from "./Comment";

interface CommentsScreenProps {
  route: RouteProp<RootStackParamsList, "Comments">;
}

const CommentsScreen = ({ route }: CommentsScreenProps) => {
  const comments = route.params;
  const { posts } = useSelector(state => state.posts);

  return (
    <View style={styles.comments}>
      {comments.map(comment => {
        return (
          <Comment
            key={Math.random()}
            comment={comment}
            accountUsername={posts[0].username}
            accountUserImage={posts[0].image}
          />
        );
      })}
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  comments: {
    flex: 1,
    padding: 10,
  },
});
