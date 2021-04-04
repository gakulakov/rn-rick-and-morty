import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/reducers/rootReducer";

const Stack = "";

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
