import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text  } from 'react-native';
import tw from 'tailwind-react-native-classnames'
const LeagueView = ({leagues}) => {
  leagues = leagues[0];
  return (
    <View style={tw`border-b border-gray-300 py-2`}>
        <Text style={tw`border-b border-gray-300 py-2 text-center`}>{leagues.name}</Text>
        <TouchableOpacity>
        <Text style={tw`border-b border-gray-300 py-2 text-center`}>Chat/Join League</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={tw`border-b border-gray-300 py-2 text-center`}>Add to Saved Leagues</Text>
        </TouchableOpacity>
    <View style={tw `bg-blue-500`}>
      <Text stykes={tw `bg-black text-center`}>League Details</Text>
      <Text stykes={tw `bg-black text-center`}>{leagues.sport}</Text>
    </View>
    </View>
  )

}

export default LeagueView;