import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/pages/SplashScreen";
import Start from "./src/pages/Start";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import barraLateralNavigation from "./src/pages/Home/barraLateralNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="splashscreen" component={SplashScreen} /> */}
        <Stack.Screen name="start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="BarraLateralNavigation" component={barraLateralNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
