import React, { useState } from 'react';
import { Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { db, auth } from '../../firebase';
import LinearView from '../sharedComponents/LinearView.jsx';
import Logo from '../../assets/VillageSportsLogo.png';

const SignUp = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = route.params;

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection('usernames').add({
            email: email,
            username: username,
          })
            .then(() => {
              setUser(username);
              console.log('user data saved successfull!');
            })
            .catch(err => alert(err.message));
      })
      .catch(err => alert(err.message));
  }

  return (
    <LinearView>
      <View style={styles.bigContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View>
            <Image
              style={styles.logo}
              source={Logo}
            />
          </View>

          <View
            style={styles.inputContainer}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="white"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.signUpButton}
            >
              <Text
                style={styles.signUpText}
              >Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View
            style={styles.loginContainer}
          >
            <Text
              style={styles.goTologinText}
            >Already have an account? </Text>
            <TouchableOpacity
              onPress={e => {
                navigation.navigate('Login');
              }}
            >
              <Text
                style={styles.goToLogin}
              >Login</Text>
            </TouchableOpacity>
          </View>

          <View
            style={styles.discoverContainer}
          >
            <TouchableOpacity
              style={styles.discoverButton}
              onPress={e => {
                navigation.navigate('Discover');
              }}
            >
              <Text
                style={styles.discoverText}
              >Discover</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearView>
  );
};
export default SignUp;

const styles = StyleSheet.create(
  {bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    backgroundColor: '#FFFFFF30',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    minWidth: '100%',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#CEB992',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    minWidth: '100%',
  },
  signUpText: {
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  goTologinText: {
    color: '#FFFFFF60',
  },
  goToLogin: {
    color: 'white',
    textDecorationLine: 'underline'
  },
  discoverContainer: {

  },
  discoverButton: {
    backgroundColor: '#73937E',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginTop: 40,
    minWidth: '50%',
  },
  discoverText: {
    textAlign: 'center',
  }
});

