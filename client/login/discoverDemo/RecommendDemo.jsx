import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mockData } from '../../sharedComponents/mockData.js';

import tw from 'tailwind-react-native-classnames'

const Recommend = ({route, navigation}) => {
  const { leagues } = mockData;
  const [rec, setRec] = useState(leagues);
  const { selected } = route.params

  useEffect(() => {
    if (selected.length) {
      const filteredLeagues = leagues.filter(league =>
        selected.includes(league.sport)
        )
        setRec(filteredLeagues)
      }
  }, [route])

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col flex-1 justify-between h-1/4`]}>
          <View style={[tw`h-1/4`]}>

            {rec.slice(0,3).map(league => (
              <TouchableOpacity key={league.id} onPress={() => navigation.navigate('SignUp', {league: league})} style={[styles.round, tw`self-center border border-gray-500 p-2 w-5/6 my-1`]}>
                <Text style={[tw`text-xl text-white`]}>
                  {league.name}
                </Text>
                <Text style={[styles.goldBackground, styles.round, tw`self-start my-1 p-1`, {width: 'auto'}]}>
                  {league.sport}
                </Text>
                <Image style={[tw`self-center h-2/3 w-5/6 mb-5`]} source={{uri: league.picture}}/>
              </TouchableOpacity>
            ))}
            <Button
              title="Back"
              onPress={() =>
                navigation.navigate('Discover', {rec: rec})
              }
              />

          </View>
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
  goldBackground: {
    backgroundColor: '#CEB992',
  },
  button: {
    backgroundColor: '#73937E',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100
 },
 round: {
  borderRadius: 10
 }
})

export default Recommend