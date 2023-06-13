import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

export default function Home({ navigation }) {
  return (
    <LinearView>
      <Text style={{color: '#fff'}}>Home Screen</Text>
      <Button
        title="Goes to map"
        onPress={() =>
          navigation.navigate('map')
        }
      />
    </LinearView>
  )
}
