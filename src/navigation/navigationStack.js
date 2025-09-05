import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../pages/Start";
import Login from "../pages/Login";
const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
