import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 35,
    borderWidth: 3,
    borderColor: 'red',
    width: '90%',
    height: '15%',
    marginHorizontal: '5%',
    zIndex: 10,
  },
});

function LeagueCard({ currentLeague }) {
  return (
    <View style={styles.card}>
      <Text>{currentLeague.name}</Text>
    </View>
  );
}

export default LeagueCard;
