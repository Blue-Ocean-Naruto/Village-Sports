import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './client/login/Login.jsx';
import SignUp from './client/login/SignUp.jsx';

import HomeScreen from './client/home/HomeScreen.jsx';
import Discover from './client/discover/index.jsx';
import Recommend from './client/discover/Recommend.jsx';
import NavStackHeader from './client/sharedComponents/NavStackHeader.jsx';
import LeagueMap from './client/map/Map.jsx';
import ChatSelection from './client/Chat/index.jsx';
import ChatRoom from './client/Chat/ChatRoom.jsx';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="map" component={LeagueMap} options={{headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}}}/>
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Recommend" component={Recommend} />
        <Stack.Screen name="chat" component={ChatSelection} />
        <Stack.Screen name="chatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

