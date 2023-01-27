import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountMenu, Header } from "../../components";
import { useSelector } from "react-redux";
import { InitialState } from "../../store/posts";
import {
  AccountMenuRefProps,
  MAX_TRANSLATE_Y,
} from "../../components/AccountMenu/AccountMenu";

const AccountScreen = () => {
  const ref = useRef<AccountMenuRefProps>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { posts } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );

  const modalHandler = () => {
    setIsVisible(!isVisible);
    if (isVisible) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(MAX_TRANSLATE_Y);
    }
  };

  return (
    <View style={styles.account}>
      <Header
        header={posts[0].username}
        names={["plus-square-outline", "menu-outline"]}
        onPress={modalHandler}
      />
      <AccountMenu isVisible={isVisible} ref={ref} onPress={modalHandler} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  account: {
    flex: 1,
  },
});
