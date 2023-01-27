import { View, ViewProps } from "react-native";
import React from "react";
import { styles } from "./styles";

type ItemSeparatorProps = ViewProps;

const ItemSeparator = ({ style }: ItemSeparatorProps) => {
  return <View style={[styles.separator, style]} />;
};

export default ItemSeparator;
