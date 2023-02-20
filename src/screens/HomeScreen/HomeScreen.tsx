import React from "react";
import { View, StyleSheet } from "react-native";

import { FollowingsPosts } from "../../components";
import { InstagramLogo } from "../../../assets/icons";
import { Icon } from "react-native-eva-icons";
import { RootStackParamsList } from "../../navigation/AfterAuth/HomeStackNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const navigateToMessagesScreen = () => navigation.navigate("Messages");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <InstagramLogo width={139} height={50} />
          <Icon name="arrow-ios-downward-outline" width={24} height={24} />
        </View>
        <View style={styles.iconsContainer}>
          <Icon
            name="plus-square-outline"
            width={32}
            height={32}
            style={styles.iconMargin}
          />
          <Icon
            name="heart-outline"
            width={32}
            height={32}
            style={styles.iconMargin}
          />
          <Icon
            name="paper-plane-outline"
            width={32}
            height={32}
            onPress={navigateToMessagesScreen}
          />
        </View>
      </View>
      <FollowingsPosts />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 8,
  },
});
