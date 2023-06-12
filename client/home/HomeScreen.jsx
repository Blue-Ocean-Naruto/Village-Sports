import React from 'react';
import { Text, Button, View } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import ChatSelection from '../Chat/index.jsx'

import LinearView from '../sharedComponents/LinearView.jsx';
import LogIn from '../login/Login.jsx';
import Home from './Home.jsx';
import TempProfile from './TempProfile.jsx';
import TempWatchList from './TempWatchList.jsx';
import TempChat from './TempChat.jsx';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LogIn} />
    </Stack.Navigator>
  );
}
const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: '#DCABDF',
      tabBarInactiveTintColor: '#CEB992',
      tabBarStyle: {
        backgroundColor: '#272838',
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#DCABDF',
      }
    }}>
      <Tab.Screen name="Home2" component={HomeStack} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-home-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Profile" component={TempProfile} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="person-circle-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Saved" component={TempWatchList} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="bookmark-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Chat" component={ChatSelection} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
    </Tab.Navigator>
  );
};
export default HomeScreen;