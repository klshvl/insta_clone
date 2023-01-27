import React from "react";
import { View } from "react-native";

import { FollowingsPosts, Header } from "../../components";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        names={["plus-square-outline", "heart-outline", "paper-plane-outline"]}
      />
      <FollowingsPosts />
    </View>
  );
};

export default HomeScreen;
