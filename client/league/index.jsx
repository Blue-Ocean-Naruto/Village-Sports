import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LeagueView from './view.jsx'


  const League = ({route}) => {

    return (
      <LeagueView leagues={route.params.league} />
    );
  };

export default League;



