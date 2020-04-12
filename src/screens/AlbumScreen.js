import React from "react";
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.top}></View>
      <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image 
            style={styles.menuStyle}
            source={{ uri: "https://github.com/humichen/app_hw4/blob/master/src/img/btn_navbar_mobile.png?raw=true" }} 
            />
          </TouchableOpacity>
          <Text style={styles.headertitleStyle}>{albumData.albumTitle}</Text>
          <TouchableOpacity onPress={() => {}}>
             <Image 
          style={styles.searchStyle} 
          source={{ uri:"https://github.com/humichen/app_hw4/blob/master/src/img/btn_search.png?raw=true"}} 
          /> 
            </TouchableOpacity>
          
      </View>

      <FlatList
        data={albumData.albumList}
        renderItem={({ item }) =>
          <AlbumDetail
            album={item}
            navigation={navigation}
          />}
        keyExtractor={item => item.title}
      />
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_bottomnav_home.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_bottomnav_mybook_selected.png?raw=true"
            }}
          />
          <Text style={styles.selecttext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_bottomnav_favorites.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top:{
    width:360,
    height:24,
    backgroundColor:"#00b49f"
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  headerStyle:{
    width:360,
    height:56,
    backgroundColor:"#00b49f",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  menuStyle: {
    width: 40,
    height: 40,
    marginLeft: 8,
    marginTop:8
  },
  searchStyle: {
    width: 40,
    height: 40,
    marginRight: 8,
    marginTop:8
  },
  headertitleStyle: {
    fontWeight: '400',
    fontSize: 20,
    color: "#fff",
    width:240,
    height:25,
    marginTop:14.3,
    textAlign:"center"
  },
  bar: {
    borderTopColor: "#d1d1d1",
    borderTopWidth: 1,
    flexDirection: "row"
  },
  barbox: {
    width: 120,
    height: 56,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  menuicon: {
    width: 24,
    height: 24
  },
  notselecttext: {
    width: 96,
    height: 18,
    fontSize: 12,
    color: "#818181",
    fontWeight: "800",
    textAlign: "center"
  },
  selecttext: {
    width: 96,
    height: 18,
    fontSize: 14,
    color: "#00b49f",
    fontWeight: "800",
    textAlign: "center"
  }
});

export default AlbumScreen;