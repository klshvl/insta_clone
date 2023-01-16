import React from "react";
import { View } from "react-native";
import InstagramLogo from "../../../assets/icons/InstagramLogo";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "react-native-eva-icons";
import { styles } from "./style";

const ARROW_SIZE = 24;
export const ICONS_SIZE = 32;

const Header = () => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.rootContainer}>
      <View style={styles.iconsContainer}>
        <InstagramLogo />
        <Icon
          name="arrow-ios-downward-outline"
          width={ARROW_SIZE}
          height={ARROW_SIZE}
        />
      </View>
      <View style={styles.iconsContainer}>
        <Icon
          name="plus-square-outline"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          style={styles.icon}
        />
        <Icon
          name="heart-outline"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          style={styles.icon}
        />
        <Icon
          name="message-circle-outline"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          style={styles.icon}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
