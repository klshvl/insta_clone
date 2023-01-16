import React from "react";
import { StyleSheet, Text } from "react-native";

interface LikesTextProps {
  likeNum: number;
  usersThatLiked: Array<string | undefined>;
}

const LikesText = ({ likeNum, usersThatLiked }: LikesTextProps) => {
  if (usersThatLiked.length > likeNum) {
    return (
      <Text style={[styles.likesText, styles.leftOne]}>
        Liked by <Text style={styles.textWeight}>{usersThatLiked[0]}</Text> and{" "}
        <Text style={styles.textWeight}>others</Text>
      </Text>
    );
  } else if (usersThatLiked.length === likeNum) {
    return (
      <Text style={[styles.likesText, styles.leftTwo]}>
        Liked by <Text style={styles.textWeight}>{usersThatLiked[0]}</Text> and{" "}
        <Text style={styles.textWeight}>{usersThatLiked[1]}</Text>
      </Text>
    );
  } else {
    return (
      <Text style={[styles.likesText, styles.leftThree]}>
        Liked by <Text style={styles.textWeight}>{usersThatLiked[0]}</Text>{" "}
      </Text>
    );
  }
};

export default LikesText;

const styles = StyleSheet.create({
  likesText: {
    fontSize: 16,
    color: "black",
  },
  leftOne: {
    left: 52,
  },
  leftTwo: {
    left: 40,
  },
  leftThree: {
    left: 28,
  },
  textWeight: {
    fontWeight: "bold",
  },
});
