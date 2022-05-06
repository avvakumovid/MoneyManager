import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./../screens/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import style from "./../styles/styles";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default Navigator;
