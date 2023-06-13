import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mockData } from '../sharedComponents/mockData.js';

import tw from 'tailwind-react-native-classnames'

const Recommend = () => {
  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col items-center justify-around my-2`]}>
          {mockData.leagues.slice(0,3).map(league => (
            <TouchableOpacity key={league.id} style={[tw`flex flex-col border border-gray-500 p-2 w-5/6 h-1/3 rounded-lg`]}>
              <Text style={[tw`text-xl text-white`]}>
                {league.name}
              </Text>
              <Text style={[tw`self-start bg-gray-300 my-1 p-1 rounded-lg`, {width: 'auto'}]}>
                {league.sport}
              </Text>
              <Image style={[tw`self-center h-2/3 w-2/3`]} source={{uri: league.picture}}/>
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