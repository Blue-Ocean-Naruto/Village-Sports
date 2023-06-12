import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx'

const ChatSelection = ({ navigation }) => {
  return (
    <LinearView>
      <View>
        <Text>This is the chat selection page</Text>
        <Button
          title="Chat Room One"
          onPress={() =>
            navigation.navigate('chatRoom')
          }
        />
      </View>
    </LinearView>
  );
};

export default ChatSelection;
