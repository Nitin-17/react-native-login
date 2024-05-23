import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store/reduxStore.js";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
        {/* <AppStack /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
  title: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  heading: {
    fontSize: 28,
    color: "#66a80f",
    fontWeight: "bold",
  },
  createAccountBtn: {
    backgroundColor: "#5c940d",
    width: "70%",
    padding: 10,
    borderRadius: 8,
  },
  createAccountText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
