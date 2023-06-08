import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./pages/Home";
import { ProfileScreen } from "./pages/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{ title: "Profile Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
