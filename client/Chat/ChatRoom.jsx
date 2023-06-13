import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy, doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';

const ChatRoom = ({ route }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  var roomName = route.params.roomName;
  var myUserName = 'MyuserName';
  useEffect(() => {

    const q = query(collection(db, "Chat Room", roomName, "messages"), orderBy("createdAt")); // Replace "messages" with your collection name
    const unsubscribe = onSnapshot(q, snapshot => {
      let messages = [];
      snapshot.docs.forEach(doc => {
        messages.push(doc.data());
      });
      setChatMessages(messages);
    });

    return () => unsubscribe(); // Unsubscribe to changes when the component unmounts
  }, []);

  const onSend = async () => {
    if (message.length > 0) {
      await addDoc(collection(db, "Chat Room", roomName, "messages"), {
        message,
        user_name: 'MyuserName', // Replace with the actual user name
        createdAt: serverTimestamp(),
      });
      setMessage('');  // Clear the input field after the message is sent
    }
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {chatMessages.map((chat, index) => {
          if (chat.user_name === myUserName) {
            return (
              <View key={index} style={styles.myMessageContainer}>
                <Text style={styles.myUserName}>{chat.user_name}</Text>
                <View style={styles.myMessageBubble}>
                  <Text style={styles.myUserMessage}>{chat.message}</Text>
                </View>
              </View>
            );
          } else {
            return (
              <View key={index} style={styles.messageContainer}>
                <Text style={styles.userName}>{chat.user_name}</Text>
                <View style={styles.messageBubble}>
                  <Text style={styles.userMessage}>{chat.message}</Text>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          multiline
          autoFocus
        />
        <Button title="Send" onPress={onSend} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
  },
  messageBubble: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#CEB992',
    borderRadius: 10,
    padding: 10,
  },
  userMessage: {
    marginTop: 5,
  },
  myMessageContainer: {
    alignSelf: 'flex-end',  // Right-align these messages
    marginBottom: 20,
  },
  myUserName: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  myMessageBubble: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#add8e6',  // Light blue background
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
});

export default ChatRoom;