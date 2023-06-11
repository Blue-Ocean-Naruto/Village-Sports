// index js

import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './Home.jsx';
import TempProfile from './TempProfile.jsx';
import TempWatchList from './TempWatchList.jsx';
import TempChat from './TempChat.jsx';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-home-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: TempProfile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="person-circle-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    WatchList: {
      screen: TempWatchList,
      navigationOptions: {
        tabBarLabel: "Saved",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="bookmark-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Chat: {
      screen: TempChat,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.tintColor}
          />
        ),
      }
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#DCABDF',

      style: {
        backgroundColor: '#272838',
      },
      indicatorStyle: {
        backgroundColor: '#DCABDF',
      },
    },
  }
);
const Navigator = createAppContainer(TabNavigator);

const HomeScreen = ({navigation}) => {
  return (
    <Navigator>
      <Home />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272838',
    alignItems: 'center',
    justifyContent: 'center',
  },
});