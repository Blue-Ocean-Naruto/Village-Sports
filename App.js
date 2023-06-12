import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './client/home/HomeScreen.jsx';
import LogIn from './client/login/index.jsx';
import Discover from './client/discover/index.jsx';
import Recommend from './client/discover/Recommend.jsx';
import NavStackHeader from './client/sharedComponents/NavStackHeader.jsx';
import LeagueMap from './client/map/Map.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}}}/>
        <Stack.Screen name="login" component={LogIn} /> */}
        <Stack.Screen name="map" component={LeagueMap} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Recommend" component={Recommend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

