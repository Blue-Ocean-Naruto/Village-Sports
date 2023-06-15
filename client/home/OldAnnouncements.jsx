import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OldAnnouncements({ announcement }) {
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
    borderLeftWidth: 2,
    borderLeftColor: '#DCABDF',
    borderRadius: 10,
    margin: 10,
    marginLeft: 20,
    padding: 5
  },
  dateText: {
    color: '#CEB992',
    alignSelf: 'flex-end',
    fontStyle: 'italic',
    fontSize: 10
  },
  text: {
    marginLeft: 10,
    color: '#CEB992',
    padding: 10
  }
})