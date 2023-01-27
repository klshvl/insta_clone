import React, { useCallback, useImperativeHandle } from "react";
import { View, Modal, Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import Button from "../Button";
import AccountMenuList from "./AccountMenuList";

type AccountScreenMenuProps = {
  isVisible: boolean;
  onPress: () => void;
};
export type AccountMenuRefProps = {
  scrollTo: (destination: number) => void;
};

const { height } = Dimensions.get("window");
export const MAX_TRANSLATE_Y = -height * 0.78;

const LIST = [
  { iconName: "settings-2-outline", title: "Settings" },
  { iconName: "clock-outline", title: "Your activity" },
  { iconName: "archive-outline", title: "Archive" },
  { iconName: "grid-outline", title: "QR code" },
  { iconName: "bookmark-outline", title: "Saved" },
  { iconName: "checkmark-square-outline", title: "Digital collectibles" },
  { iconName: "list-outline", title: "Close friends" },
  { iconName: "star-outline", title: "Favourites" },
  { iconName: "activity-outline", title: "COVID-19 Information Center" },
];

const AccountScreenMenu = React.forwardRef<
  AccountMenuRefProps,
  AccountScreenMenuProps
>(({ isVisible, onPress }, ref) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const scrollTo = useCallback(
    (destination: number) => {
      "worklet";
      translateY.value = withTiming(destination);
    },
    [translateY],
  );

  useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]);

  const gesture = Gesture.Pan()
    .onStart(() => (context.value = { y: translateY.value }))
    .onUpdate(
      event => (
        (translateY.value = event.translationY + context.value.y),
        (translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y))
      ),
    )
    .onEnd(() => {
      if (-translateY.value > height / 4) {
        scrollTo(MAX_TRANSLATE_Y);
      } else {
        scrollTo(0);
        runOnJS(onPress)();
      }
    });

  const rAccountMenuStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const navigation = useNavigation<any>();

  const listPressHandler = () => {
    LIST.forEach(list => {
      if (list.iconName === "bookmark-outline") {
        navigation.navigate("Saved");
        onPress();
      }
    });
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <Button style={styles.transparent} onPress={onPress}>
        <View />
      </Button>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.menuContainer, rAccountMenuStyle]}>
          <View style={styles.bar} />
          {LIST.map(list => (
            <AccountMenuList
              key={Math.random()}
              name={list.iconName}
              title={list.title}
              onPress={listPressHandler}
            />
          ))}
        </Animated.View>
      </GestureDetector>
    </Modal>
  );
});

export default AccountScreenMenu;

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: "#030101ef",
    flex: 1,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    // backgroundColor: "#1d1c1c",
    backgroundColor: "white",
    height: height * 0.78,
    width: "100%",
    borderRadius: 24,
    position: "absolute",
    top: height,
  },
  bar: {
    width: 46,
    height: 4,
    backgroundColor: "#4b4a4a",
    alignSelf: "center",
    marginVertical: 16,
    borderRadius: 24,
  },
});
