import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../../firebase';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('new user made', user);
        // put in logic that stores username and email in a table.
      })
      .catch(err => alert(err.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleSignUp}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={e => {
            navigation.navigate('Login');
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={e => {
            navigation.navigate('Discover');
          }}
        >
          <Text>Discover</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});