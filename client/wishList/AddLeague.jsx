import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddLeague({ navigation, setWishList }) {
  return (
    <View style={styles.container}>
      <Text>Not ready to commit? Save some leagues for later.</Text>
      <Text>Discover Leagues in your Village</Text>
      <View style={styles.card}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
          <Ionicons name="add" size={70} color={'#272838'}/>
          <Text style={styles.addLeague}>Add League</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 15
  },
  card: {
    width: '50%'
  },
  button: {
    backgroundColor: '#FFFFFF50',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    height: '50%',
    justifyContent: 'center'
  },
  addLeague: {
    alignSelf: 'center'
  }
})