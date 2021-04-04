import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { api_charapters } from "../api/api_charapters";
import { Card } from "../components/Card";
import { addData } from "../redux/slice/slice";

export const FirstScreen = () => {
  const data = useSelector((state) => state.main.data);
  const favorites = useSelector((state) => state.main.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    api_charapters().then((res) => dispatch(addData(res.results)));
  }, [])


  console.log(favorites);
  const cardGenerate = ({item}) => <Card data={item} />

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 30 }}>Rick And Morty</Text>
      <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={cardGenerate} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
});
