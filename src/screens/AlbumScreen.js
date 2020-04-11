import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    backgroundColor:"#f8f8f8"
  }
});

export default AlbumScreen;