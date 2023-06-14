import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddLeague({ navigation, wishList }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
          <View style={styles.cardHeader}>
            <Ionicons name="bookmark" size={25} color={'#DCABDF'} style={{alignSelf: 'flex-end'}}/>
            <Text style={styles.headerText}>League Name</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source={{uri: wishList.leagues[0].picture}} />
          </View>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
          <View style={styles.cardHeader}>
            <Ionicons name="bookmark" size={25} color={'#DCABDF'} style={{alignSelf: 'flex-end'}}/>
            <Text style={styles.headerText}>League Name</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
          <View style={styles.cardHeader}>
            <Ionicons name="bookmark" size={25} color={'#DCABDF'} style={{alignSelf: 'flex-end'}}/>
            <Text style={styles.headerText}>League Name</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 15
  },
  card: {
    width: '45%',
    height: '33%',
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: '#D9D9D918',
    borderRadius: 10
  },
  imgContainer: {
    // backgroundColor: 'blue',
    height: '200%',
    borderRadius: 10
  },
  cardHeader: {
    flex: 1,
    alignContent: 'center',
    position: 'absolute',
    height: '40%',
    width: '100%',
    marginLeft: 10,
    justifyContent: 'center'
  },
  headerText: {
    alignSelf: 'flex-start',
    justifySelf: 'center',
    position: 'absolute',
    padding: 5,
    color: '#FFF'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    height: '50%',
    justifyContent: 'flex-start'
  }
})