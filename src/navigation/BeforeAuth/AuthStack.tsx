import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, SignupScreen } from "../../screens";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
