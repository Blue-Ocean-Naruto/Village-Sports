import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
// import { createMaterialTopTabNavigator } from "react-navigation-tabs";
// import { createAppContainer } from "react-navigation";
// import Ionicons from '@expo/vector-icons/Ionicons';

import LinearView from '../sharedComponents/LinearView.jsx';

import Home from './Home.jsx';
import TempProfile from './TempProfile.jsx';
import TempWatchList from './TempWatchList.jsx';
import TempChat from './TempChat.jsx';


const HomeScreen = ({navigation}) => {
  return (
    <LinearView style={styles.container}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </LinearView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'right',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;

