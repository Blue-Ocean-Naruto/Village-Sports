import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ChatSelection = ({ navigation }) => {
  return (
    <View>
      <Text>This is the chat selection page</Text>
      <Button
        title="Chat Room One"
        onPress={() =>
          navigation.navigate('chatRoom')
        }
      />
    </View>

  );
};

export default ChatSelection;
