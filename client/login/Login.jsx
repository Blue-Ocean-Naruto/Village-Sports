import React, { useState, useEffect, useContext } from 'react';
import { Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { db, auth } from '../../firebase';
import LinearView from '../sharedComponents/LinearView.jsx';
import Logo from '../../assets/VillageSportsLogo.png';
import { useRoute } from '@react-navigation/native';

const Login = ({navigation, route}) => {
  /**
   * Seeding function
   */

  // const mockNames = ['sharkieOWO','sharkieUWU','Fred','Joe','Bob','Sally','Ole','Mart','Jesus','Kieran','Amy','Alex','Rachel','Maggie','Karen','Jessica','Yolanda','Maria','William','Matt','James','Alexander','Kelvin','Van','Ian','Mack','Michael','Matthew','Matias','Anders','Bose','Albert','Maxwell','Ludwig','Paul','Nate','Chris','Duane','Cap','Tony','Tucker','Milo','Max','Xavier','Caleb','Silas','Asher','Benji','Tyrone','Dan','Michelle','Finn','Troy','Chad','Damian','Sahid','Chad','Chadius','Chadd','David','Ryan','Tyler','Chris','Thomas','Josh','Dota','Fox','Chen','Mag','Sandy','Jamal','Andrew','Angelica','Shannon','Peter','Jay','MJ','Erving','Colby','Shaqira','Spud','Ron','Meta','Patrick','Larry','Dennis']

  // const seedDB = () => {
  //   for (let i = 2; i < mockNames.length; i++) {
  //     const currentName = mockNames[i];
  //     db.collection('mockusers').add({
  //       id: i,
  //       username: currentName,
  //       info: '{ "about_me":"lorem ipsum", "sobriquet":"more lorem ipsum",   "interests":"random stuff", "level":"genin" }',
  //       profile_pic: 'https://images.unsplash.com/photo-1685195154261-c8167ca7f88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
  //       teams: '{"Elite eSports League (EEL)":"Nebula Nexus (LoL)"}',
  //       wishlist: [],
  //     })
  //   }
  // }

  /**
   * Seeding Function
   */


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = route.params;

  const getUsernameByEmail = async (email) => {
    try {
      const querySnapshot = await db.collection('usernames').where('email', '==', email).get();

      if (!querySnapshot.empty) {
        const document = querySnapshot.docs[0]
        const userData = document.data();
        const username = userData.username;
        setUser(username);
        console.log('username is', username);
      } else {
        console.error('Error querying user data:', error);
      }
    } catch (error) {
      console.error('Error querying user data:', error);
    }
  }

  const handleLogin = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        getUsernameByEmail(email);
      })
      .catch(err => alert(err.message))
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
              onPress={handleLogin}
              style={styles.loginButton}
            >
              <Text
                style={styles.loginText}
              >Login</Text>
            </TouchableOpacity>
          </View>

          <View
            style={styles.signUpContainer}
          >
            <Text
              style={styles.signUpText}
            >Don't have an account? </Text>
            <TouchableOpacity
              onPress={e => {
                navigation.navigate('SignUp');
              }}
            >
              <Text
                style={styles.goToSignUp}
              >Sign Up</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={seedDB}
            >
              <Text>Seed DB</Text>
            </TouchableOpacity> */}

          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearView>
  );
};
export default Login;

const styles = StyleSheet.create({
  bigContainer: {
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
  loginButton: {
    backgroundColor: '#CEB992',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    minWidth: '100%',
  },
  loginText: {
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#FFFFFF60',
  },
  goToSignUp: {
    color: 'white',
    textDecorationLine: 'underline'
  }
});
