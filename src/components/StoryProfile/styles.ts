import { StyleSheet } from "react-native";

const PROFILE_BORDER_SIZE = 85;
const PROFILE_CONTAINER_SIZE = 78;
const PROFILE_SIZE = 70;
const ADD_STORY_CIRCLE_SIZE = 32;

export const styles = StyleSheet.create({
  profileBorder: {
    width: PROFILE_BORDER_SIZE,
    height: PROFILE_BORDER_SIZE,
    borderRadius: PROFILE_BORDER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    backgroundColor: "white",
    width: PROFILE_CONTAINER_SIZE,
    height: PROFILE_CONTAINER_SIZE,
    borderRadius: PROFILE_CONTAINER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    width: PROFILE_SIZE,
    height: PROFILE_SIZE,
    borderRadius: PROFILE_SIZE / 2,
  },
  addStoryCircle: {
    position: "absolute",
    backgroundColor: "#1d9ce5",
    width: ADD_STORY_CIRCLE_SIZE,
    height: ADD_STORY_CIRCLE_SIZE,
    borderRadius: 32 / 2,
    borderWidth: 4,
    borderColor: "white",
    bottom: 35,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
