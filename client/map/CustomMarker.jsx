import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

function CustomMarker({ league, displayID, setDisplayID }) {
  const [markerColor, setMarkerColor] = useState('black');
  function pressHandler() {
    setDisplayID(displayID === league.id ? '' : league.id);
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
      <Ionicons name="ios-location-sharp" size={28} color={displayID === league.id ? 'red' : 'black'} />
    </Marker>
  );
}

export default CustomMarker;
