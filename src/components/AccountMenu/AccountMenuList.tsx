import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-eva-icons";

import ItemSeparator from "../ItemSeparator";
import Button from "../Button";

interface AccountMenuListProps {
  name: string;
  title: string;
  onPress: () => void;
}

const AccountMenuList = ({ name, title, onPress }: AccountMenuListProps) => {
  return (
    <Button onPress={onPress}>
      <View style={styles.list}>
        <Icon name={name} width={36} height={36} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <ItemSeparator style={styles.separator} />
    </Button>
  );
};

export default AccountMenuList;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginLeft: 12,
  },
  separator: {
    width: "85%",
    alignSelf: "flex-end",
  },
});
