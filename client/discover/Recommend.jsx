import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
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
    <View style={[tw`flex flex-col items-center`]}>
      {leagues.slice(0,3).map(league => (
        <TouchableOpacity key={league.id} style={[tw`flex flex-col justify-between border border-gray-300 p-2 my-5 w-5/6 h-1/2 rounded-lg`]}>
          <Text style={[tw`text-xl`]}>
            {league.name}
          </Text>
          <Text style={[tw`self-start bg-gray-300 m-1 p-1 rounded-md`, {width: 'auto'}]}>
            {league.sport}
          </Text>
          <Image style={[tw`h-2/3`]} source={require('../../assets/VillageSportsLogo.png')}/>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Recommend