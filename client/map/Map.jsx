import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import CustomMarker from './CustomMarker.jsx';
import LeagueCard from './LeagueCard.jsx';

const sampleLeagues = [
  {
    id: 1,
    name: 'NorCal Tennis',
    address: '1920 N Loop Rd, Alameda, CA 94502',
    logo: 'https://i.ibb.co/VNrMfDs/istockphoto-1206838436-2048x2048.jpg',
    location: {
      latitude: 37.432651143406794,
      longitude: -122.14180448244987,
    },
    sport: 'Tennis',
  },
  {
    id: 2,
    name: 'Golden Gate Premier League',
    address: 'Golden Gate Bridge, San Francisco, CA',
    logo: 'https://i.ibb.co/Jk5VNqm/football-logos-2023-design-template-ba96ccb6c8645a69c9eef50607d84d34-screen.jpg',
    location: {
      latitude: 37.7579909751779,
      longitude: -122.42724888291282,
    },
    sport: 'Football',
  },
];

export default function LeagueMap() {
  const [displayID, setDisplayID] = useState('');

  function findCurrentLeague(currentID) {
    for (let i = 0; i < sampleLeagues.length; i++) {
      if (sampleLeagues[i].id === currentID) {
        return sampleLeagues[i];
      }
    }
    return '';
  }

  const currentLeague = findCurrentLeague(displayID);

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
            key={league.id}
            league={league}
            displayID={displayID}
            setDisplayID={setDisplayID}
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
