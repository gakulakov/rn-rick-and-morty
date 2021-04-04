import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../redux/slice/slice";

export const Card = ({ data }) => {
  const favorites = useSelector((state) => state.main.favorites);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() =>
        favorites.find((i) => i.id === data.id)
          ? null
          : dispatch(addFavorites(data))
      }
      onLongPress={() => dispatch(removeFavorites(data.id))}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: data.image,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 25 }}>{data.name}</Text>
          <Text>Status: {data.status}</Text>
          <Text style={{ maxWidth: "100%" }}>Species: {data.species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 25,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "100%",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
  },
});
