import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('login')
      }
    />
  );
};

export default HomeScreen;