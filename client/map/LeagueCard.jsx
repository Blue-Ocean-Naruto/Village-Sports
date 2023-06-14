import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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
    borderColor: '#272838',
    borderRadius: 5,
    width: '90%',
    height: '15%',
    marginHorizontal: '5%',
    zIndex: 10,
  },
  logo: {
    width: 66,
    height: 58,
    marginRight: 8,
    borderRadius: 5,
  },
  textContainer: {
    width: '60%',
  },
  text: {
    fontSize: 10,
  },
  header: {
    fontSize: 10,
    fontWeight: '700',
  },
  button: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    height: 20,
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: '#3457D5',
  },
});

function LeagueCard({ navigation, currentLeague }) {
  return (
    <View style={styles.card}>
      <Image style={styles.logo} source={{
          uri: currentLeague.picture,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={styles.header}>League: </Text>
          {currentLeague.name}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.header}>Type: </Text>
          {currentLeague.sport}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.header}>Address: </Text>
          {currentLeague.address}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => (navigation.navigate('League', { league: currentLeague }))}>
        <Text style={styles.buttonText}>More details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LeagueCard;
