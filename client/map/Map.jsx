import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import CustomMarker from './CustomMarker.jsx';
import LeagueCard from './LeagueCard.jsx';

const sampleLeagues = [
  {
    "id": 1,
    "name": "NorCal Tennis",
    "location": {
      "latitude": 37.432651143406794,
      "longitude": -122.14180448244987,
    },
    "sport": "Tennis"
  },
];

export default function LeagueMap() {
  const [currentLeague, setCurrentLeague] = useState('');

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.6052256618502,
          longitude: -122.19287374222353,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {sampleLeagues.map((league) => (
          <CustomMarker
            league={league}
            currentLeague={currentLeague}
            setCurrentLeague={setCurrentLeague}
          />
        ))}
      </MapView>
      {currentLeague ? <LeagueCard currentLeague={currentLeague} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
