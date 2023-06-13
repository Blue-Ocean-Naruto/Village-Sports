import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnnouncementCard({ announcement }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{announcement.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#DCABDF',
    margin: 10,
    marginLeft: 20
  },
  text: {
    marginLeft: 10,
    color: '#CEB992'
  }
})