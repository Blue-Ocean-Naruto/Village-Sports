import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SavedLeagueCard from './SavedLeagueCard.jsx';

export default function LeaguesSaved({ navigation, wishList }) {
  return (
    <View style={styles.container}>
      {wishList.map((league) => (
        <SavedLeagueCard navigation={navigation} league={league} key={league.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 15,
  },
});
