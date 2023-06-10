import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;