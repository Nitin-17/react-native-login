import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../components/OnBoarding";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={OnBoarding}
        name="OnBoarding"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={SignUp} name="SignUp" />
    </Stack.Navigator>
  );
};

export default AuthStack;
