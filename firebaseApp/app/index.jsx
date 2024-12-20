import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

import HomeScreen from "../components/Home";
import LoginScreen from "../components/Login";
import SignUpScreen from "../components/SignUp";
import ChatWithSeller from "../components/chat";
import EditProfileScreen from "../components/Account";
import PlaceOrderScreen from "../components/items";

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Chat" component={ChatWithSeller} />
      <Stack.Screen name="Account" component={EditProfileScreen} />
      <Stack.Screen name="Shopping" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
}
