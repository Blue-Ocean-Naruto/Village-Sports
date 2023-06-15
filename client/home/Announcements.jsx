import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AnnouncementCard from './AnnouncementCard.jsx';

export default function Announcements({leagueName, announceList}) {
  // This range block will work if you want to filter only announcements that are a week old
  const min = parseInt(new Date().setDate(new Date().getDate() - 7));
  const lastWeek = new Date(min).toUTCString();

  console.log(lastWeek)

  // for dev test purposes, I will set the filter to be no more than 5 minutes old
  // const test = parseInt(Date.now());
  // const min = parseInt(new Date().setMinutes(new Date().getMinutes() - 5));
  // const timeAgo = new Date(test).toUTCString();
  // // change a UTC string to a 'nice date' format to render on the events:
  // // const niceDate = new Date(Date.parse(timeAgo)).toDateString();
  // console.log(timeAgo)

  return (
    <View style={styles.container}>
      <View style={styles.nameBar}>
        <Text style={styles.leagueName}>{leagueName}</Text>
      </View>
      {announceList.filter((announcement) => announcement.createdAt >= lastWeek).map((announcement) => <AnnouncementCard announcement={announcement} key={announcement.id}/>)}
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
    color: '#272838',
    padding: 5,
    fontSize: 16,
    margin: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#CEB992'
  },
  nameBar: {
    borderLeftWidth: 4,
    borderLeftColor: '#DCABDF',
    marginTop: 10
  }
})