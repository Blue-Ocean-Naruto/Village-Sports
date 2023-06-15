import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy, doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import LinearView from '../sharedComponents/LinearView.jsx'
import UsernameContext from '../sharedComponents/UsernameContext.jsx'

const ChatRoom = ({ navigation, route }) => {
  const [username, setUsername] = useContext(UsernameContext);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  var roomName = route.params.roomName;

  const scrollViewRef = useRef();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.roomName,
    });
  }, [route.params.roomName]);
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

  useLayoutEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 0)
  }, [chatMessages]);

  const onSend = async () => {
    if (message.length > 0) {
      await addDoc(collection(db, "Chat Room", roomName, "messages"), {
        message,
        user_name: username, // Replace with the actual user name
        createdAt: serverTimestamp(),
      });
      setMessage('');  // Clear the input field after the message is sent
    }
  };
  return (
    <LinearView>
      <View style={styles.container}>
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.chatContainer}>
          {chatMessages.map((chat, index) => {
            if (chat.user_name === username) {
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
          })
          }
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="#FBE7AB"
            multiline
            autoFocus
          />
          <Button title="Send" onPress={onSend} color="#FBE7AB" />
        </KeyboardAvoidingView>
      </View>
    </LinearView>
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
    // borderColor: 'gray',
    padding: 10,
  },
  input: {
    flex: 1,
    color: '#FBE7AB',
    marginRight: 10,
    borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'left',
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
    color: 'white',
  },
  messageBubble: {
    borderWidth: 1,
    // borderColor: '#ddd',
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
    color: 'white',
    alignSelf: 'flex-end',
  },
  myMessageBubble: {
    borderWidth: 1,
    // borderColor: '#ddd',
    backgroundColor: '#add8e6',  // Light blue background
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
});

export default ChatRoom;
