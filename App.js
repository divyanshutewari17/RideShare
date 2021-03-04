import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./screens/SignupScreen"
import LoginScreen from "./screens/LoginScreen"

const Stack = createStackNavigator();
export default function App() {

  //to use custom fonts
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
