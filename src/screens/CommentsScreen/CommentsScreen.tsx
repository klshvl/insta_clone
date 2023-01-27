import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamsList } from "../../navigation/HomeStackNavigation";
import { RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Comment from "./Comment";
import { InitialState } from "../../store/posts";

interface CommentsScreenProps {
  route: RouteProp<RootStackParamsList, "Comments">;
}

const CommentsScreen = ({ route }: CommentsScreenProps) => {
  const { posts } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );
  const post = useMemo(
    () => posts.find(p => p.id === route.params.id),
    [posts, route.params],
  );

  return (
    <View style={styles.comments}>
      {post?.comments.map(comment => {
        return (
          <Comment
            key={Math.random()}
            comments={comment}
            accountUsername={posts[0].username}
            accountUserImage={posts[0].image}
            post={post}
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
  },
});
