import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login screen"
        onPress={() =>
        navigation.navigate('login')
        }
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272838',
    alignItems: 'center',
    justifyContent: 'center',
  },
});