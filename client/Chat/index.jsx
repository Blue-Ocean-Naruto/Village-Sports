import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';



const ChatSelection = ({ navigation }) => {


  return (
      <LinearView>
        <Text style={styles.title}>
          Messages
        </Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'Softball League' });
            }}>
            <Text style={styles.leagueButtonText}>Softball League</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.teamButtonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'The Hardballs' });
            }}>
            <Text style={styles.buttonText}>The Hardballs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'LCS' });
            }}>
            <Text style={styles.leagueButtonText}>LCS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.teamButtonContainer}
            onPress={() => {
              navigation.navigate('chatRoom', { roomName: 'TSM' });
            }}>
            <Text style={styles.buttonText}>TSM</Text>
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

