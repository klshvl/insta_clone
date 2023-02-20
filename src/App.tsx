import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./store/posts";
import Navigation from "./navigation";

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
