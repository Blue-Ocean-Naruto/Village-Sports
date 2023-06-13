import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import tw from 'tailwind-react-native-classnames'

const leagues = [
  {
    "id": 1,
    "name": "NorCal Tennis",
    "location": {
      "latitude": 37.42390000000000,
      "longitude": -122.08280000000000
    },
    "sport": "Tennis"
  },
  {
    "id": 2,
    "name": "Golden Gate Premier League",
    "location": {
      "latitude": 37.76680000000000,
      "longitude": -122.45630000000000
    },
    "sport": "Football"
  },
  {
    "id": 3,
    "name": "Oakland FA",
    "location": {
      "latitude": 37.80440000000000,
      "longitude": -122.27110000000000
    },
    "sport": "American Football"
  },
  {
    "id": 4,
    "name": "San Jose Ballers",
    "location": {
      "latitude": 37.33620000000000,
      "longitude": -121.89060000000000
    },
    "sport": "Basketball"
  },
];

const Recommend = () => {

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col items-center justify-around my-2`]}>
          {leagues.slice(0,3).map(league => (
            <TouchableOpacity key={league.id} style={[tw`flex flex-col border border-gray-500 p-2 w-5/6 h-1/3 rounded-lg`]}>
              <Text style={[tw`text-xl text-white`]}>
                {league.name}
              </Text>
              <Text style={[tw`self-start bg-gray-300 my-1 p-1 rounded-lg`, {width: 'auto'}]}>
                {league.sport}
              </Text>
              <Image style={[tw`self-center h-1/2 w-1/3`]} source={require('../../assets/VillageSportsLogo.png')}/>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
})

export default Recommend