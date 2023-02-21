import { StyleSheet } from "react-native";

const PROFILE_IMAGE_SIZE = 32;
const PROFILE_BORDER_SIZE = 40;
const PROFILE_CONTAINER_SIZE = 36;

export const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  profileBorder: {
    width: PROFILE_BORDER_SIZE,
    height: PROFILE_BORDER_SIZE,
    borderRadius: PROFILE_BORDER_SIZE / 2,
    marginRight: 10,
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
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 18,
  },
  postImage: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  heartImage: {
    width: 100,
    height: 100,
  },
});
