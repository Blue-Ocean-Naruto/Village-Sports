import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AnnouncementCard from './AnnouncementCard.jsx';
import OldAnnouncements from './OldAnnouncements.jsx';

export default function Announcements({teamName, announceList}) {
  const [oldAnnounce, setOldAnnounce] = useState([]);
  const [newAnnounce, setNewAnnounce] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  // This range block will work if you want to filter only announcements that are a week old
  const min = parseInt(new Date().setDate(new Date().getDate() - 7));
  const lastWeek = new Date(min).toUTCString();

  // for dev test purposes, I will set the filter to be no more than 5 minutes old
  // const test = parseInt(Date.now());
  // const min = parseInt(new Date().setMinutes(new Date().getMinutes() - 5));
  // const timeAgo = new Date(test).toUTCString();
  // // change a UTC string to a 'nice date' format to render on the events:
  // // const niceDate = new Date(Date.parse(timeAgo)).toDateString();
  // console.log(timeAgo)
  useEffect(() => {
    const oldAnnouncements = announceList.filter((announcement) => {
      return announcement.createdAt === 'Wed, 03 May 2023 22:00:00 GMT';
    })
    const newAnnouncements = announceList.filter((announcement) => announcement.createdAt !== 'Wed, 03 May 2023 22:00:00 GMT');

    if (oldAnnouncements.length === 0) {
      setSeeMore(false);
    }
    setOldAnnounce(oldAnnouncements);
    setNewAnnounce(newAnnouncements);

  }, [announceList])

  return (
    <View style={styles.container}>
      <View style={styles.nameBar}>
        <View style={styles.leagueNameContainer}>
          <Text style={styles.leagueName}>{teamName}</Text>
        </View>
        {oldAnnounce.length > 0 && <TouchableOpacity style={styles.prevAnnounce} onPress={() => setSeeMore(!seeMore)}>
          <Text style={styles.prevAnnounce}>See Previous</Text>
        </TouchableOpacity>}
      </View>
      {newAnnounce.map((announcement) => <AnnouncementCard announcement={announcement} key={announcement.id}/>)}
      {seeMore && oldAnnounce.map((announcement) => <OldAnnouncements announcement={announcement} key={announcement.id}/>)}
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
    marginTop: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row'
  },
  prevAnnounce: {
    color: '#DCABDF',
    textDecorationLine: 'underline',
    alignSelf: 'center'
  }
})