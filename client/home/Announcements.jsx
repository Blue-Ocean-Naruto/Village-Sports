import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AnnouncementCard from './AnnouncementCard.jsx';

export default function Announcements({leagueName, announceList}) {
  return (
    <View style={styles.container}>
      <View style={styles.nameBar}>
        <Text style={styles.leagueName}>{leagueName}</Text>
      </View>
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
    color: '#CEB992',
    padding: 5,
    fontSize: 16,
    margin: 10,
    alignSelf: 'flex-start',
  },
  nameBar: {
    borderLeftWidth: 4,
    borderLeftColor: '#DCABDF',
    marginTop: 10
  }
})