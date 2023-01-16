import React from "react";
import { View } from "react-native";
import { FollowingsPosts, Header } from "../../components";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <FollowingsPosts />
    </View>
  );
};

export default HomeScreen;
