import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import albumData from "./src/json/albums.json";
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={AlbumScreen} 
          options={{
          //   headerLeft: () =>
          //   <TouchableOpacity
          //   onPress={() => navigation.navigate('Drawer')}
          // >
          //   {/* <Image
          //     style={}
          //     source={{
          //       uri:
          //     }}
          //   /> */}
          //   </TouchableOpacity>,
            title: albumData.albumTitle,
            headerStyle:{
              backgroundColor:"#00b49f"
            },
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20,
              color:"#fff"
            }, 
          }}
        />
        <Stack.Screen 
          name="Drawer" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#4F9DEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },  
           })}
        />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;