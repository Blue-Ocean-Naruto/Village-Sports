import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

import LeaguesSaved from '../wishList/LeaguesSaved.jsx';
// import { db } from '../../firebase';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';
// import { mockData } from '../sharedComponents/mockData.js';

export default function TempWatchList({ navigation }) {
  const { leagues } = useContext(UsernameContext);
  const wishList = leagues.slice(leagues.length - 2, leagues.length);

  return (
    <LinearView>
      <LeaguesSaved navigation={navigation} wishList={wishList} />
    </LinearView>
  );
}