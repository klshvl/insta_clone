import React from "react";
import { Pressable, PressableProps, Text, TextStyle } from "react-native";

type ButtonProps = PressableProps & {
  children: React.ReactNode | string;
  textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({ textStyle, children, ...props }) => {
  return (
    <Pressable {...props}>
      {typeof children === "string" ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;
