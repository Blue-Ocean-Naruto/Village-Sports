import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SavedLeagueCard from './SavedLeagueCard.jsx';
import AddLeagueCard from './AddLeagueCard.jsx';

export default function LeaguesSaved({ navigation, wishList }) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {wishList.map((league) => (
          <SavedLeagueCard navigation={navigation} league={league} key={league.id} />
        ))}
        <AddLeagueCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 15,
    paddingBottom: 70,
  },
});
