import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import { Button } from "../../components";

interface DeleteCommentsProps {
  onPress: () => void;
}

const DeleteCommentsButton = ({ onPress }: DeleteCommentsProps) => {
  return (
    <Button onPress={onPress} style={styles.deleteOnSwipe}>
      <Icon name="trash-outline" width={28} height={28} fill={"white"} />
    </Button>
  );
};

export default DeleteCommentsButton;

const styles = StyleSheet.create({
  deleteOnSwipe: {
    backgroundColor: "#ff5252",
    width: 52,
    justifyContent: "center",
    alignItems: "center",
  },
});
