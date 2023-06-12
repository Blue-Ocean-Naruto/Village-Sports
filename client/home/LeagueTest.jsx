import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
// import PagerView from 'react-native-pager-view';

import Ionicons from '@expo/vector-icons/Ionicons';
import { mockData } from '../sharedComponents/mockData.js';

export default function LeagueTest({navigation}) {
  console.log(mockData);
  return (
    <LinearView>
      <View style={styles.container}>
        <Text style={styles.leagueName}>League Name</Text>
        <Text style={styles.teamName}>Team Name</Text>
        <View style={styles.infoCard}>
          <Text style={styles.eventName}>Event Name</Text>
          <View style={styles.eventInfo}>
            <Ionicons name="calendar-sharp" size={25} color={'#272838'}/>
            <View style={styles.dateInfo}>
              <Text style={styles.dateText}>LOCATION</Text>
              <Text style={styles.dateText}>DATE</Text>
            </View>
          </View>
          <Text style={styles.eventName}>Event Name</Text>
          <View style={styles.eventInfo}>
            <Ionicons name="calendar-sharp" size={25} color={'#272838'}/>
            <View style={styles.dateInfo}>
              <Text style={styles.dateText}>LOCATION</Text>
              <Text style={styles.dateText}>DATE</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    height: 200,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.2)',
    filter: 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.8))'
  },
  leagueName: {
    color: 'white',
    backgroundColor: '#272838',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginBottom: 5
  },
  teamName: {
    color: '#CEB992',
    fontSize: 14,
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
  },
  eventName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#272838'
  },
  eventInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#272838'
  },
  dateInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  dateText: {
    fontSize: 12,
    color: '#272838',
    marginLeft: 5
  }
})