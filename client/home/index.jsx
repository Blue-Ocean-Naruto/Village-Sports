import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('login')
        }
      />
      <Button
        title="Go to ChatSelection"
        onPress={() =>
          navigation.navigate('chat')
        }
      />
    </View>
  );
};

export default HomeScreen;