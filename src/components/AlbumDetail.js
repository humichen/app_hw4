import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button,TouchableHighlight} from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <TouchableOpacity 
            onPress={() => {}} style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]} underlayColor={"#f0f0f0"} activeOpacity={0.6}
          >
            <View style={styles.thumbnailborderStyle}>
               <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
            </View>
           
          <View style={styles.headerContentStyle}>
            <Text style={styles.titleStyle}>{album.title}</Text>
            <Text style={styles.artistStyle}>{album.artist}</Text>
            <Text style={styles.wordStyle}>{album.description}</Text>
            <ProgressBar progress={album.width} style={styles.lineStyle} color={'#70b4a1'}/>
            <TouchableHighlight onPress={() =>{} }underlayColor={album.statusunderlayColor} style={{marginTop:album.statusmarginTop,width:album.statuswidth,height:album.statusheight,borderRadius:3,justifyContent:"center"}}>
              <Text style={{color:album.statuscolor,fontWeight:album.statusweight,fontSize:12}}>{album.status}</Text>
            </TouchableHighlight>
            {/* <Text style={styles.statusStyle}>{album.status}</Text>
            <Image
              style={styles.statusimgStyle}
              source={{
                uri:album.statusimg
              }}
            /> */}
          </View>
          </TouchableOpacity>
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 140,
    width: 93,
  },
  thumbnailborderStyle:{
    height: 146,
    width: 99,
    padding:3,
    borderWidth:0.5,
    borderColor:"#d1d1d1",
    shadowColor:"#40000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
  },
  headerContentStyle: {
    flexDirection: "column",
    paddingLeft: 24
  },
  cardContainerStyle: {
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor:"#fff"
  },
  cardSectionStyle: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    backgroundColor: "#f8f8f8",
    // borderColor: "#ddd",
    // borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  },
  wordStyle:{
    width:194,
    height:30,
    fontSize:12,
    color:"#b1b1b1",
    marginTop:11,
  },
  titleStyle:{
    width:200,
    height:22,
    fontSize:18,
    color:"#2e2e2e",
    fontWeight:"600",
    marginTop:16,
  },
  artistStyle:{
    width:194,
    height:18,
    fontSize:14,
    color:"#717171",
    marginTop:11
  },
  lineStyle:{
    backgroundColor:"#c3c3c3",
    width:194,
    height:3,
    marginTop:10,
    borderRadius:1.5
  },
  statusStyle:{
    marginTop:9,
    color:"#b1b1b1",
    fontSize:12,
    width:178,
    height:16
  },
  statusimgStyle:{
    marginTop:6,
    width:82,
    height:21
  }
});

export default AlbumDetail;
