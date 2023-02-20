import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen, PostsSavedScreen } from "../../screens";

export type AccountStackParamsList = {
  Account: undefined;
  Saved: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParamsList>();

const AccountStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Saved" component={PostsSavedScreen} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigation;
