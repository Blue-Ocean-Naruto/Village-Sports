import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './client/home/index.jsx';
import LogIn from './client/login/index.jsx';
import Discover from './client/discover/index.jsx';

const Stack = createNativeStackNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="discover" component={Discover} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LogIn} />
        {/* Stack all components below */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
