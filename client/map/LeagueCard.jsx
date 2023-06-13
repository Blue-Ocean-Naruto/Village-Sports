import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 35,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    width: '90%',
    height: '15%',
    marginHorizontal: '5%',
    zIndex: 10,
  },
  logo: {
    width: 66,
    height: 58,
    left: 0,
  },
  text: {
    fontSize: 10,
  },
});

function LeagueCard({ currentLeague }) {
  return (
    <View style={styles.card}>
      <Image style={styles.logo} source={{
          uri: currentLeague.logo,
        }}
      />
      <View>
        <Text style={styles.text}>League: {currentLeague.name}</Text>
        <Text style={styles.text}>Type: {currentLeague.sport}</Text>
        <Text style={styles.text}>Address: {currentLeague.address}</Text>
      </View>
    </View>
  );
}

export default LeagueCard;
