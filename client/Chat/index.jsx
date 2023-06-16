import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';



const ChatSelection = ({ navigation }) => {


  return (
      <LinearView>
        <Text style={styles.title}>
          Chat Rooms
        </Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'San Jose Ballers' });
            }}>
            <Text style={styles.leagueButtonText}>San Jose Ballers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.teamButtonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'Dunk Dynasty' });
            }}>
            <Text style={styles.buttonText}>Dunk Dynasty</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'Elite eSports League' });
            }}>
            <Text style={styles.leagueButtonText}>Elite eSports League</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.teamButtonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'Nebula Nexus' });
            }}>
            <Text style={styles.buttonText}>Nebula Nexus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'NorCal Tennis' });
            }}>
            <Text style={styles.leagueButtonText}>NorCal Tennis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.teamButtonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'Volley Vipers' });
            }}>
            <Text style={styles.buttonText}>Volley Vipers</Text>
          </TouchableOpacity>
        </View>
      </LinearView>
  );
};

export default ChatSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonContainer: {
    borderWidth: 1,
    backgroundColor: '#CFBA93',  // Button background color
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  teamButtonContainer: {
    borderWidth: 1,
    backgroundColor: '#575552',  // Button background color
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',  // Button text color
    fontSize: 16,
  },
  leagueButtonText: {
    fontSize: 16,
  },
  title: {
    alignSelf: 'flex-start',
    color: 'white',
  }
});

