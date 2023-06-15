import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddLeagueCard({ navigation }) {
  return (
    <View style={styles.card}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
        <Ionicons name="add" size={70} color={'#FFFFFF75'} style={{alignSelf: 'center'}}/>
        <Text style={styles.addLeague}>Add League</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 189,
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: '#D9D9D918',
    borderRadius: 10,
    zIndex: 1,
  },
  text: {
    color: '#CEB992',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18
  },
  button: {
    backgroundColor: '#D9D9D918',
    borderRadius: 10,
    padding: 10,
    height: '100%',
    justifyContent: 'center'
  },
  addLeague: {
    alignSelf: 'center',
    color: '#FFF',
  },
});
