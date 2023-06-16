import 'react-native-gesture-handler';
import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderBackButton } from '@react-navigation/elements';

import Login from './client/login/Login.jsx';
import SignUp from './client/login/SignUp.jsx';
import DiscoverDemo from './client/login/discoverDemo/indexDemo.jsx';
import RecommendDemo from './client/login/discoverDemo/RecommendDemo.jsx';

import HomeScreen from './client/home/HomeScreen.jsx';
import Discover from './client/discover/index.jsx';
import League from './client/league/index.jsx';
import Recommend from './client/discover/Recommend.jsx';
import NavStackHeader from './client/sharedComponents/NavStackHeader.jsx';
import LeagueMap from './client/map/Map.jsx';
import ChatSelection from './client/Chat/index.jsx'
import ChatRoom from './client/Chat/ChatRoom.jsx'
import Profile from './client/profile/index.jsx'
import UsernameContext from './client/sharedComponents/UsernameContext.jsx'
import { db } from './firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState(null);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const tempArr = [];
    db.collection('mockLeagues').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          tempArr.push(documentSnapshot.data());
        });
        return tempArr;
      })
      .then((resultArr) => {
        setLeagues(resultArr);
      })
      .catch((err) => (console.log(err)));
  }, []);

  return (

    <UsernameContext.Provider value={{username, setUsername, leagues, setLeagues}}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            !username ? (
              <>
                <Stack.Screen name="Login" component={Login} initialParams={{ setUser: setUsername }} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} initialParams={{ setUser: setUsername }} options={{ headerShown: false }} />
                <Stack.Screen name="Discover" component={DiscoverDemo} options={{ headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }} />
                <Stack.Screen name="Recommend" component={RecommendDemo} options={{ headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }} />
              </>
            ) : (
              <>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }}/>
                <Stack.Screen name="map" component={LeagueMap} options={({ navigation }) => (
                  {
                    headerTitle: NavStackHeader,
                    headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 },
                    headerLeft: () => (<HeaderBackButton tintColor="white" onPress={() => (navigation.goBack())} />)
                  })} />
                <Stack.Screen name="Discover" component={Discover} options={{ headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }} />
                <Stack.Screen name="League" component={League} options={{ headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }} />
                <Stack.Screen name="Recommend" component={Recommend} options={{ headerTitle: NavStackHeader, headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 } }} />
                <Stack.Screen name="chat" component={ChatSelection} />
                <Stack.Screen name="Profile" component={Profile} initialParams={{ username: "Naruto" }} />
                <Stack.Screen name="chatRoom" component={ChatRoom} options={{ headerTitle: NavStackHeader, headerStyle: { backgroundColor: '#272838', borderBottomWidth: 0 }, headerTintColor: '#D0BF9F' }} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </UsernameContext.Provider>



  );
};

