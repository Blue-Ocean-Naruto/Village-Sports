import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0gh8sNqiC00c7JhBxPtSrb1eq9QtFflg",
  authDomain: "village-sports-chat.firebaseapp.com",
  projectId: "village-sports-chat",
  storageBucket: "village-sports-chat.appspot.com",
  messagingSenderId: "135126543320",
  appId: "1:135126543320:web:a0362d70e674d2f831a0ad",
  measurementId: "G-Y3F8NFB8CP"
}

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const ChatRoom1 = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // console.log(chatMessages)

  useEffect(() => {

    const q = query(collection(firestore, "Chat Room", "room1", "messages"), orderBy("createdAt")); // Replace "messages" with your collection name
    const unsubscribe = onSnapshot(q, snapshot => {
      let messages = [];
      snapshot.docs.forEach(doc => {
        messages.push(doc.data());
      });
      setChatMessages(messages);
    });

    return () => unsubscribe(); // Unsubscribe to changes when the component unmounts
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {chatMessages.map((chat, index) => (
          <Text key={index}>
            <Text >{chat.user_name}</Text>
            <Text >{chat.message}</Text>
          </Text>
        ))}
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
        <Button title="Send" />
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
});

export default ChatRoom1;