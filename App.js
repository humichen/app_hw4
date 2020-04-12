import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import AlbumScreen from './src/screens/AlbumScreen';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
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
            <Text style={styles.userinfo2}>gdlab2017@gmail.com</Text>
          </View>
          <Image
            style={styles.userarrow}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/btn_down_arrow.png?raw=true"
            }}
          />
        </View>
      </View>
      <View style={styles.menubox}>
          <Image
            style={styles.menuimg}
            source={{
              uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_home.png?raw=true"
            }}
          />
          <Text style={styles.menutext}>Home</Text>
        </View>
      <DrawerItemList {...props} style={{width:304,height:54,backgroundColor:"#00b49f"}}/>

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
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();

const App =()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          width: 304,
          // height: 640,
          backgroundColor: "#ebebeb"
        }}
        drawerContent={props => <CustomDrawerContent {...props}
        laybelStyle={{ color: "#00b49f", fontWeight: "600"}} />}
        drawerContentOptions={{activeBackgroundColor:"#00b49f",activeTintColor:"#fff",inactiveBackgroundColor:"#ebebeb",inactiveTintColor:"#5c5c5c"}}
      >
        <Drawer.Screen
          name="My Book"
          component={AlbumScreen}
          options={{
            drawerIcon:({})=>(
              <Image
              style={styles.menuimg2}
              source={{
                uri: "https://github.com/humichen/app_hw4/blob/master/src/img/icon_drawer_mybook_pressed.png?raw=true"
              }}
            />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuStyle: {
    width: 40,
    height: 40,
    marginLeft: 8
  },
  searchStyle: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  headertitleStyle: {
    fontWeight: '400',
    fontSize: 20,
    color: "#fff"
  },
  layout:{
    backgroundColor:"rgba(184,184,184,0.5)"
  },
  headerStyle: {
    width: 304,
    height: 198,
    backgroundColor: "#00b49f",
    shadowColor:"#000",
    shadowOffset:{width: 2, height: 0},
    shadowOpacity:0.1,
    marginTop:-30,
    marginBottom:8
  },
  userimg: {
    width: 70,
    height: 70,
    marginTop: 67,
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
  userinfo2: {
    width: 230,
    height: 18,
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
  menuimg2: {
    width: 24,
    height: 24,
    marginLeft:7
  },
  menutext:{
    marginLeft:32,
    width:176,
    height:18,
    fontSize:14,
    fontWeight:"600",
    color:"#5c5c5c"
  },
  layout:{
    marginTop:8
  }
});

export default App;