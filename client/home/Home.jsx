import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
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
      <Button
        title="Goes to Login; Change to Discover"
        onPress={() =>
          navigation.navigate('login')
        }
      />
    </LinearView>
  )
}

const styles = StyleSheet.create({
  myLeagues: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'center'
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  }
})
