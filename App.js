import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './client/login/Login.jsx';
import SignUp from './client/login/SignUp.jsx';

import HomeScreen from './client/home/HomeScreen.jsx';
import Discover from './client/discover/index.jsx';
import League from './client/league/index.jsx';
import Recommend from './client/discover/Recommend.jsx';
import NavStackHeader from './client/sharedComponents/NavStackHeader.jsx';
import LeagueMap from './client/map/Map.jsx';
import ChatSelection from './client/Chat/index.jsx'
import ChatRoom from './client/Chat/ChatRoom.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !isSignedIn ? (
            <>
              <Stack.Screen name="Login" component={Login} initialParams={{ login: setIsSignedIn }} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}}}/>
              <Stack.Screen name="map" component={LeagueMap} />
              <Stack.Screen name="Discover" component={Discover} />
              <Stack.Screen name="Recommend" component={Recommend} options={{headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}}}/>
              <Stack.Screen name="chat" component={ChatSelection} />
              <Stack.Screen name="chatRoom" component={ChatRoom} options={{headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0}, headerTintColor: '#D0BF9F'}}/>
            </>
          )
        }
      </Stack.Navigator >
    </NavigationContainer >
  );
};

