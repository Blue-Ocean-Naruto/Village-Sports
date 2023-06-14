import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function EventInfo({ event }) {
  return (
    <View>
      <Text style={styles.eventName}>{event.name}</Text>
      <View style={styles.eventInfo}>
        <Ionicons name="calendar-sharp" size={25} color={'#272838'}/>
        <View style={styles.dateInfo}>
          <Text style={styles.dateText}>{event.location}</Text>
          <Text style={styles.dateText}>{event.date}</Text>
          <Text style={styles.dateText}>{event.time}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  eventName: {
    fontSize: 8,
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
    fontSize: 8,
    color: '#272838',
    marginLeft: 5
  }
})