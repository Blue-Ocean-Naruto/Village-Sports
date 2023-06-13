import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EventInfo from './EventInfo.jsx';

export default function LeagueCard({ league }) {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.leagueName}>{league.name}</Text>
      </View>
      <Text style={styles.teamName}>{league.teams[0].name}</Text>

      <ScrollView style={styles.infoCard}>
        {league.teams[0].events.map((event, i) => <EventInfo event={event} key={i}/>)}
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
    marginRight: 7
  },
  leagueName: {
    color: 'white',
    backgroundColor: '#272838',
    height: 30,
    width: 125,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 10,
    marginBottom: 5
  },
  teamName: {
    color: '#CEB992',
    fontSize: 12,
    display: 'flex',
    alignSelf: 'center',
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