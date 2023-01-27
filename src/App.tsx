import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";

import { StyleSheet } from "react-native";
import TabNavigation from "./navigation/TabNavigation";
import { Provider } from "react-redux";
import store from "./store/posts";

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer theme={theme}>
            <TabNavigation />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
