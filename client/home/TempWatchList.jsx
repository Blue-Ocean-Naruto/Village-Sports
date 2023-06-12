import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TempWatchList() {
  return (
    <View style={styles.container}>
      <Text>Temp Saved Leagues/Watchlist Screen!</Text>
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