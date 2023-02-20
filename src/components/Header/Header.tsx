import React from "react";
import { Text, View } from "react-native";
import InstagramLogo from "../../../assets/icons/InstagramLogo";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "react-native-eva-icons";
import { styles } from "./style";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";

const ARROW_SIZE = 24;
export const ICONS_SIZE = 32;

interface HeaderProps {
  header?: string | undefined;
  names: string[];
  onPress?: () => void;
  style?: any;
}

const Header = ({ header, names, onPress, style }: HeaderProps) => {
  const navigation = useNavigation<any>();

  const iconPressHandler = () => {
    names.forEach(name => {
      if (name === "paper-plane-outline") navigation.navigate("Messages");
      if (name === "menu-outline") if (onPress) onPress();
    });
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.rootContainer, style]}>
      <View style={styles.iconsContainer}>
        {header ? (
          <Text style={styles.header}>{header}</Text>
        ) : (
          <InstagramLogo width={139} height={50} />
        )}
        <Icon
          name="arrow-ios-downward-outline"
          width={ARROW_SIZE}
          height={ARROW_SIZE}
        />
      </View>
      <View style={styles.iconsContainer}>
        {names.map(name => (
          <Button onPress={iconPressHandler} key={Math.random()}>
            <Icon
              name={name}
              width={ICONS_SIZE}
              height={ICONS_SIZE}
              style={styles.icon}
            />
          </Button>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Header;
