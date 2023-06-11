/* This container will give a linear gradient background to whatever you wrap inside of it.
Treat this like a regular <View /> and let this be your top-most wrapper

Downside: the style for your components wrapped in LinearView can't be customized - they're handled within this file's styles.container portion
Solution: You can add another view inside this wrapper and style that view locally OR if there's a more universal config we can change this file.

Example Usage:

import React from 'react;
import { Text, View, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

export default function MyAwesomeLookingPage({ navigation }) {
  return(
    <LinearView>
      <View style={styles.myCustomStyles}>
        <Text>Wow, such gradient</Text>
      </View>
    </LinearView>
  );
}

const styles = StyleSheet.create({
  myCustomStyles: {
    justifyContent: 'flex-end',
  },
});
*/

import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function LinearView ({ children }) {
  return (
    <LinearGradient style={styles.gradient} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#272838',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});