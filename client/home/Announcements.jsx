import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AnnouncementCard from './AnnouncementCard.jsx';

export default function Announcements({leagueName, announceList}) {
  return (
    <View style={styles.container}>
      <Text style={styles.leagueName}>{leagueName}</Text>
      {announceList.map((announcement) => <AnnouncementCard announcement={announcement} key={announcement.id}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CEB992',
    borderRadius: 10
  },
  leagueName: {
    color: 'white',
    backgroundColor: '#272838',
    padding: 12,
    fontSize: 14,
    margin: 10,
    alignSelf: 'flex-end'
  }
})