import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnnouncementCard({ announcement }) {
  const prettyDate = new Date(Date.parse(announcement.createdAt)).toDateString();
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{prettyDate}</Text>
      <Text style={styles.text}>{announcement.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272838',
    margin: 10,
    marginLeft: 20,
    padding: 8,
    borderRadius: 10
  },
  dateText: {
    color: '#FFF',
    alignSelf: 'flex-end',
    fontStyle: 'italic',
    fontSize: 10
  },
  text: {
    marginLeft: 10,
    color: '#FFF',
    padding: 10
  }
})