import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import { useAppSelector } from "../../hooks";

const UserStory = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.profileImg}
        source={
          user?.photoURL
            ? { uri: user.photoURL }
            : require("../../../assets/images/defaultProfile.svg.png")
        }
      />
      <Text>Your story</Text>
      <View style={styles.addStoryCircle}>
        <Icon
          name="plus-outline"
          width={16}
          height={16}
          fill="white"
          stroke="white"
        />
      </View>
    </View>
  );
};

export default UserStory;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 8,
    marginBottom: 16,
  },
  addStoryCircle: {
    position: "absolute",
    backgroundColor: "#1d9ce5",
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    borderWidth: 4,
    borderColor: "#FAFAFA",
    bottom: 22,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
