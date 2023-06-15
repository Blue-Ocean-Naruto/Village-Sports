import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TeamList from './TeamList.jsx';

export default function SavedLeagueCard({ navigation, league }) {
  return (
    <View style={styles.card}>
      <ScrollView style={styles.scroll}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('League', { league })}>
          <View style={styles.buttonHeader}>
            <Ionicons name="bookmark" size={25} color={'#DCABDF'} style={{alignSelf: 'flex-end'}}/>
            <Text style={styles.headerText}>{league.name}</Text>
          </View>
          <Image style={styles.image} source={{ uri: league.picture }} />
        </Pressable>
        <TeamList teams={league.teams} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: '25%',
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: '#D9D9D918',
    borderRadius: 10,
    zIndex: 1,
  },
  scroll: {
  },
  image: {
    flex: 2,
    borderRadius: 10,
    zIndex: 2,
  },
  buttonHeader: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 5,
  },
  headerText: {
    position: 'absolute',
    padding: 5,
    width: '85%',
    color: '#FFF'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    height: 150,
    justifyContent: 'flex-start',
  },
});
