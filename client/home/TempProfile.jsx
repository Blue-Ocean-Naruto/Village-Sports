import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TempProfile() {
  return (
    <View style={styles.container}>
      <Text>Temp Profile Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});