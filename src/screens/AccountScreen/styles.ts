import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 8,
  },
  account: {
    flex: 1,
    paddingHorizontal: 10,
  },
  profileInfoContainer: {
    flexDirection: "row",
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 43,
  },
  profileInfo: {
    flexDirection: "row",
    marginRight: 32,
  },
  infoContainer: {
    alignItems: "center",
  },
  infoMargin: {
    marginRight: 34,
  },
  infoNumbers: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 15.51,
  },
  profileBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "rgb(239, 239, 239)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
  },
  btnWidth: {
    width: width * 0.4,
  },
  btnPaddingHorizontal: {
    paddingHorizontal: 16,
  },
  btnText: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 18,
  },
  addStoryCircle: {
    position: "absolute",
    backgroundColor: "#1d9ce5",
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    bottom: 2,
    right: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  storyHighLights: {
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storyHighLightsBtn: {
    fontWeight: "600",
  },
});
