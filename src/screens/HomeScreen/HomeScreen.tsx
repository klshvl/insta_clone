import React from "react";
import { View } from "react-native";
import { FollowingsPosts, Header } from "../../components";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FollowingsPosts />
    </View>
  );
};

export default HomeScreen;
