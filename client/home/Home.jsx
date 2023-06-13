import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
import { mockData } from '../sharedComponents/mockData.js';

import LeagueCard from './LeagueCard.jsx';

export default function Home({ navigation }) {
  return (
    <LinearView>
      <Text style={styles.myLeagues}>My Leagues</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} style={styles.carousel}>
        {mockData.leagues.map((league => <LeagueCard league={league} key={league.id}/>))}
      </ScrollView>
      <Text style={styles.myLeagues}>Announcements</Text>
      <Pressable style={styles.button} onPress={() =>
          navigation.navigate('login')
      }>
        <Text style={styles.discover}>Discover</Text>
      </Pressable>
    </LinearView>
  )
}

const styles = StyleSheet.create({
  myLeagues: {
    color: '#CEB992',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'center'
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  button: {
     backgroundColor: '#73937E',
     borderRadius: 20,
     padding: 10,
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 100,
     marginRight: 100
  },
  discover: {
    color: 'white',
    alignSelf: 'center'
  }
})
