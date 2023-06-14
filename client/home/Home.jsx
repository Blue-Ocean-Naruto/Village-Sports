import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
import { mockData } from '../sharedComponents/mockData.js';

import LeagueCard from './LeagueCard.jsx';
import Announcements from './Announcements.jsx';

const announcements = mockData.leagues.map((league) => (
  {
    teamName: league.teams[0].name,
    announcements: league.teams[0].announcements
  }
));

export default function Home({ navigation }) {

  return (
    <LinearView>
      <Text style={styles.myLeagues}>My Leagues</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} style={styles.carousel}>
        {mockData.leagues.map((league => <LeagueCard league={league} key={league.id}/>))}
      </ScrollView>
      <Text style={styles.myLeagues}>Announcements</Text>
      <ScrollView style={styles.announcementContainer}>
        {announcements.map((announcement, i) => <Announcements leagueName={announcement.teamName} announceList={announcement.announcements} key={i}/>)}
      </ScrollView>
      <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Discover')
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
    fontWeight: 'bold',
    marginTop: 15,
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
  announcementContainer: {
    backgroundColor: '#D9D9D918',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    padding: 5,
    height: 150
  },
  discover: {
    color: 'white',
    alignSelf: 'center'
  }
})
