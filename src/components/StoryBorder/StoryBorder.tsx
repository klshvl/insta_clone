import React, { useMemo } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { styles as style1 } from "../StoryProfile/styles";
import { styles as style2 } from "../Post/styles";

interface StoryBorderProps {
  item: Post;
  styleVariants: "profiles" | "post";
  children: React.ReactNode;
  index: number;
}

const gradient = [
  "#C13584",
  "#E1306C",
  "#FD1D1D",
  "#F56040",
  "#F77737",
  "#FCAF45",
  "#FFDC80",
];

const StoryBorder = ({
  item,
  styleVariants,
  children,
  index,
}: StoryBorderProps) => {
  // const gradient = useMemo(
  //   () =>
  //     index === 0
  //       ? ["#fff", "#fff"]
  //       : [
  //           "#C13584",
  //           "#E1306C",
  //           "#FD1D1D",
  //           "#F56040",
  //           "#F77737",
  //           "#FCAF45",
  //           "#FFDC80",
  //         ],
  //   [item],
  // );

  return (
    <View style={style2.userInfo}>
      <LinearGradient
        colors={gradient}
        style={
          styleVariants === "profiles"
            ? style1.profileBorder
            : style2.profileBorder
        }>
        <View
          style={
            styleVariants === "profiles"
              ? style1.profileContainer
              : style2.profileContainer
          }>
          {children}
        </View>
      </LinearGradient>
      {/* <Text style={styleVariants === "profiles" ? null : style2.username}>
        {item.username}
      </Text> */}
    </View>
  );
};

export default StoryBorder;
