import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LeagueView from './components/view.jsx'

const League = () => {

  const leagues = [
    {
      "id": 1,
      "name": "NorCal Tennis",
      "location": {
        "latitude": 37.42390000000000,
        "longitude": -122.08280000000000
      },
      "sport": "Tennis"
    },
    {
      "id": 2,
      "name": "Golden Gate Premier League",
      "location": {
        "latitude": 37.76680000000000,
        "longitude": -122.45630000000000
      },
      "sport": "Football"
    },
    {
      "id": 3,
      "name": "Oakland FA",
      "location": {
        "latitude": 37.80440000000000,
        "longitude": -122.27110000000000
      },
      "sport": "American Football"
    },
    {
      "id": 4,
      "name": "San Jose Ballers",
      "location": {
        "latitude": 37.33620000000000,
        "longitude": -121.89060000000000
      },
      "sport": "Basketball"
    },
  ];
  return (
    <LeagueView leagues={leagues}/>
  );
};

export default League;