import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EventInfo from './EventInfo.jsx';

export default function LeagueCard({ league }) {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.leagueName}>{league.leagueName}</Text>
      </View>
      <Text style={styles.teamName}>{league.teamInfo.name}</Text>

      <ScrollView style={styles.infoCard}>
        {league.teamInfo.events.map((event, i) => <EventInfo event={event} key={i}/>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    height: 225,
    width: 175,
    backgroundColor: '#D9D9D918',
    marginRight: 7
  },
  leagueName: {
    color: 'white',
    backgroundColor: '#272838',
    width: '100%',
    display: 'flex',
    fontSize: 14,
    marginBottom: 5,
    padding: 5
  },
  teamName: {
    color: '#CEB992',
    fontSize: 14,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  infoCard: {
    border: '2px groove #9B7C43',
    borderRadius: 8,
    backgroundColor: 'rgba(206, 185, 146, 0.8)',
    padding: 10,
    marginBottom: 8
  }
});