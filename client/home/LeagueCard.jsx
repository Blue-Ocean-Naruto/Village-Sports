import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EventInfo from './EventInfo.jsx';

export default function LeagueCard({ league }) {
  return (
    <View style={styles.container}>
      <Text style={styles.leagueName}>{league.name}</Text>
      <Text style={styles.teamName}>{league.teams[0].name}</Text>

      <ScrollView style={styles.infoCard}>
        {league.teams[0].events.map((event) => <EventInfo event={event} key={event.id}/>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    height: 200,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.2)',
    filter: 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.8))',
    marginRight: 5
  },
  leagueName: {
    color: 'white',
    backgroundColor: '#272838',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    marginBottom: 5
  },
  teamName: {
    color: '#CEB992',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  infoCard: {
    border: '2px groove #9B7C43',
    borderRadius: 8,
    height: 125,
    backgroundColor: 'rgba(206, 185, 146, 0.8)',
    padding: 5
  }
});