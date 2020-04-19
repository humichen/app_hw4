import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import AlbumScreen from './src/screens/AlbumScreen';

const CustomDrawerContent = ({ ...props }) => {
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
     
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (   
      <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="My Book"
        drawerStyle={{
          width: 304,
          // height: 640,
          backgroundColor: "#ebebeb"
        }}
        drawerContent={props => <CustomDrawerContent {...props}
          laybelStyle={{ color: "#00b49f", fontWeight: "600" }} />}
        drawerContentOptions={{ activeBackgroundColor: "#00b49f", activeTintColor: "#fff",  itemStyle: { marginLeft: 0, marginRight: 0, borderRadius: 0 } }}
      >
        <Drawer.Screen
          name="Home"
          component={AlbumScreen}
          options={{
            drawerIcon: ({focused }) => {
              let iconPath;
              iconPath=focused?require('./src/img/icon_drawer_home_pressed.png'):require('./src/img/icon_drawer_home.png');
              return (
              <Image
                style={styles.menuimg}
                source={iconPath}
              />
              );
             }
          }}
        />
        <Drawer.Screen
          name="My Book"
          component={AlbumScreen}
          options={{
            drawerIcon: ({focused }) => {
              let iconPath;
              iconPath=focused?require('./src/img/icon_drawer_mybook_pressed.png'):require('./src/img/icon_drawer_mybook.png');
              return (
              <Image
                style={styles.menuimg}
                source={iconPath}
              />
              );
             }
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={AlbumScreen}
          options={{
            drawerIcon: ({focused }) => {
              let iconPath;
              iconPath=focused?require('./src/img/icon_drawer_favorites_pressed.png'):require('./src/img/icon_drawer_favorites.png');
              return (
              <Image
                style={styles.menuimg}
                source={iconPath}
              />
              );
             }
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={AlbumScreen}
          options={{
            drawerIcon: ({focused }) => {
              let iconPath;
              iconPath=focused?require('./src/img/icon_drawer_setting_pressed.png'):require('./src/img/icon_drawer_setting.png');
              return (
              <Image
                style={styles.menuimg}
                source={iconPath}
              />
              );
             }
          }}
        />
        <Drawer.Screen
          name="About us"
          component={AlbumScreen}
          options={{
            drawerIcon: ({focused }) => {
              let iconPath;
              iconPath=focused?require('./src/img/icon_drawer_aboutus_pressed.png'):require('./src/img/icon_drawer_aboutus.png');
              return (
              <Image
                style={styles.menuimg}
                source={iconPath}
              />
              );
             }
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
    /* <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === 'Album') {
              iconPath = focused
              ? require('./src/img/icon_bottomnav_home.png'):
              require('./src/img/icon_bottomnav_home.png');
            } else if (route.name === 'Settings') {
              iconPath = focused
              ? require('./src/img/icon_bottomnav_mybook_selected.png'):
              require('./src/img/icon_drawer_mybook.png');
            } else if (route.name == 'Me') {
              iconPath = focused
              ? require('./src/img/icon_bottomnav_favorites.png'):
              require('./src/img/icon_bottomnav_favorites.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 24, height: 24}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#01B49F',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            marginTop: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={AlbumScreen} />
        <Tab.Screen name="My Book" component={AlbumScreen} />
        <Tab.Screen name="Favorites" component={AlbumScreen} />
      </Tab.Navigator> 
    </NavigationContainer> */
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
  layout: {
    backgroundColor: "rgba(184,184,184,0.5)"
  },
  headerStyle: {
    width: 304,
    height: 198,
    backgroundColor: "#00b49f",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    marginTop: -30,
    marginBottom: 8
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
    shadowColor: "#000",
    shadowOffset: { width: 56, height: 0 },
    shadowOpacity: 0.1
  },
  menu: {
    marginTop: 8
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
    marginLeft: 24
  },
  menuimg2: {
    width: 24,
    height: 24,
    marginLeft: 7
  },
  menutext: {
    marginLeft: 32,
    width: 176,
    height: 18,
    fontSize: 14,
    fontWeight: "600",
    color: "#5c5c5c"
  },
  layout: {
    marginTop: 8
  }
});

export default App;