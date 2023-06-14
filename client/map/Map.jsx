import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CustomMarker from './CustomMarker.jsx';
import LeagueCard from './LeagueCard.jsx';
import { mockData } from '../sharedComponents/mockData.js';

export default function LeagueMap({ navigation, route }) {
  const [displayID, setDisplayID] = useState('');
  const [location, setLocation] = useState({
    // latitude: 37.6052256618502,
    // longitude: -122.19287374222353,
    latitude: 37.91789984098183,
    longitude: -109.695925503991,
  });

  const { rec } = route.params;

  function findCurrentLeague(currentID) {
    for (let i = 0; i < rec.length; i++) {
      if (rec[i].id === currentID) {
        return rec[i];
      }
    }
    return '';
  }

  const currentLeague = findCurrentLeague(displayID);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync()
      .then(({ status }) => {
        if (status === 'granted') {
          return Location.getCurrentPositionAsync();
        }
      })
      .then(({ coords }) => {
        console.log(coords);
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      })
      .catch((err) => (console.log(err)));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {rec.map((league) => (
          <CustomMarker
            key={league.id}
            league={league}
            displayID={displayID}
            setDisplayID={setDisplayID}
          />
        ))}
      </MapView>
      {currentLeague ? <LeagueCard currentLeague={currentLeague} navigation={navigation} /> : null}
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
