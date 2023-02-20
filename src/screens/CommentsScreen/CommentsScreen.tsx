import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamsList } from "../../navigation/AfterAuth/HomeStackNavigation";
import { RouteProp } from "@react-navigation/native";

import Comment from "./Comment";
import { useAppSelector } from "../../hooks";

interface CommentsScreenProps {
  route: RouteProp<RootStackParamsList, "Comments">;
}

const CommentsScreen = ({ route }: CommentsScreenProps) => {
  const { posts } = useAppSelector(state => state.posts);

  const post = useMemo(
    () => posts.find(({ id }) => id === route.params.id),
    [posts, route.params],
  );

  const { user } = useAppSelector(state => state.user);

  return (
    <View style={styles.comments}>
      {post?.comments.map(comment => {
        return (
          <Comment
            key={Math.random()}
            comment={comment}
            accountUsername={user?.displayName}
            accountUserImage={user?.photoURL}
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
