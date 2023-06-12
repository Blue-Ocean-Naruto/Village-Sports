import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

function CustomMarker({ league, currentLeague, setCurrentLeague }) {
  const [markerColor, setMarkerColor] = useState('black');
  function pressHandler() {
    setMarkerColor(markerColor === 'black' ? 'red' : 'black');
    console.log(currentLeague);
    setCurrentLeague(currentLeague ? '' : league);
  }

  return (
    <Marker
      coordinate={{
        latitude: league.location.latitude,
        longitude: league.location.longitude,
      }}
      opacity={1}
      onPress={pressHandler}
    >
      <Ionicons name="ios-location-sharp" size={28} color={markerColor} />
    </Marker>
  );
}

export default CustomMarker;
