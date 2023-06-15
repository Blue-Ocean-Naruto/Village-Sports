import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

import LeaguesSaved from '../wishList/LeaguesSaved.jsx';
import { db } from '../../firebase';

// import { mockData } from '../sharedComponents/mockData.js';

export default function TempWatchList({ navigation }) {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const tempArr = [];
    db.collection('mockLeagues').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          tempArr.push(documentSnapshot.data());
        });
        return tempArr;
      })
      .then((leagues) => {
        const endIndex = leagues.length;
        setWishList(leagues.slice(endIndex - 2, endIndex));
      })
      .catch((err) => (console.log(err)));
  }, []);

  return (
    <LinearView>
      <LeaguesSaved navigation={navigation} wishList={wishList} />
    </LinearView>
  )
}