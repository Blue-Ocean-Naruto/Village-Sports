import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './client/Home/index.jsx';
import LogIn from './client/Login/index.jsx';
import ChatSelection from './client/Chat/index.jsx'
import ChatRoom1 from './client/Chat/ChatRoom.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="chat" component={ChatSelection} />
        <Stack.Screen name="chatRoom" component={ChatRoom1} />
        {/* Stack all components below */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
