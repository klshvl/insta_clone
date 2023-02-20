import React from "react";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import TabNavigation from "./AfterAuth/TabNavigation";
import AuthStack from "./BeforeAuth/AuthStack";
import { useAppSelector } from "../hooks";

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FAFAFA",
  },
};

const Navigation = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <NavigationContainer theme={theme}>
      {user?.refreshToken ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
