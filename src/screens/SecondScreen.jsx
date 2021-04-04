import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import {
  decrement,
  increment,
  addPost,
  removePost,
} from "../redux/slice/slice";


export const SecondScreen = () => {
  const favorites = useSelector((state) => state.main.favorites);
  const dispatch = useDispatch();


  const generatePosts = favorites.map((i) => (
    <Card data={i} key={i.id} />
  ));


  return (
    <ScrollView style={styles.container}>
     {generatePosts}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
