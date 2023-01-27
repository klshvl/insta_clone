import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommentsScreen, HomeScreen, MessagesScreen } from "../screens";
import { Icon } from "react-native-eva-icons";

export type RootStackParamsList = {
  Home: undefined;
  // Comments: string[];
  Comments: Post;
  Messages: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerRight: () => (
            <Icon name="paper-plane-outline" width={28} height={28} />
          ),
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
