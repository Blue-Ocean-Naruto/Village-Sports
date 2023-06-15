import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function TeamList({ teams }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Teams in the league</Text>
      {teams.map((team, i) => (
        <Text key={i} style={styles.teamInfo}>{`\u2022 ${team.name}`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-start',
  },
  headerText: {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 12,
  },
  teamInfo: {
    color: '#FFF',
    fontSize: 12,
  },
});
