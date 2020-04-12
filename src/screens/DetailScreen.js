import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';



const DetailScreen = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.headerStyle}>
        <Image
          style={styles.userimg}
          source={{
            uri: "https://github.com/humichen/app_hw4/blob/master/src/img/img_user_photo.png?raw=true"
          }}
        />
        <View style={styles.userinfowitharrowlayout}>
          <View style={styles.userinfolayout}>
            <Text style={styles.userinfo}>GamexHCI</Text>
            <Text style={styles.userinfo}>gdlab2017@gmail.com</Text>
          </View>
          <Image
            style={styles.userarrow}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/btn_down_arrow.png?raw=true"
            }}
          />
        </View>
      </View>
      <View style={styles.menulayout}>
        <View style={styles.menu}>
          <View style={styles.menubox}>
            <Image
              style={styles.menuimg}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_home.png?raw=true"
              }}
            />
            <Text style={styles.menutext}>Home</Text>
          </View>
          <View style={styles.menubox}>
            <Image
              style={styles.menuimg}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_mybook.png?raw=true"
              }}
            />
            <Text style={styles.menutext}>My Book</Text>
          </View>
          <View style={styles.menubox}>
            <Image
              style={styles.menuimg}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_favorites.png?raw=true"
              }}
            />
            <Text style={styles.menutext}>Favorites</Text>
          </View>
          <View style={styles.menubox}>
            <Image
              style={styles.menuimg}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_setting.png?raw=true"
              }}
            />
            <Text style={styles.menutext}>Settings</Text>
          </View>
          <View style={styles.menubox}>
            <Image
              style={styles.menuimg}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_aboutus.png?raw=true"
              }}
            />
            <Text style={styles.menutext}>About us</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  layout:{
    // backgroundColor:"rgba(184,184,184,0.5)"
  },
  headerStyle: {
    width: 304,
    height: 168,
    backgroundColor: "#00b49f",
    shadowColor:"#000",
    shadowOffset:{width: 56, height: 0},
    shadowOpacity:0.1
  },
  userimg: {
    width: 70,
    height: 70,
    marginTop: 37,
    marginLeft: 13
  },
  userinfowitharrowlayout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userinfo: {
    width: 230,
    height: 15,
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 5,
    marginLeft: 16
  },
  userarrow: {
    width: 24,
    height: 24,
    marginLeft: 18
  },
  menulayout: {
    width: 304,
    height: 640,
    backgroundColor: "#ebebeb",
    shadowColor:"#000",
    shadowOffset:{width: 56, height: 0},
    shadowOpacity:0.1
  },
  menu:{
    marginTop:8
  },
  menubox: {
    flexDirection: "row",
    height: 56,
    width: 304,
    alignItems: "center",
    // backgroundColor:"#000"
  },
  menuimg: {
    width: 24,
    height: 24,
    marginLeft:24
  },
  menutext:{
    marginLeft:32,
    width:176,
    height:18,
    fontSize:14,
    fontWeight:"600",
    color:"#5c5c5c"
  }
});

export default DetailScreen;
