import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LeagueView from './view.jsx'

const League = ({route, navigation}) => {

  return (
    <LeagueView leagues={route.params.league} navigation={navigation} />
  );
};

export default League;



