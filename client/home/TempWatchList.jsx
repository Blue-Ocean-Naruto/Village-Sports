import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

import AddLeague from '../wishList/AddLeague.jsx';
import LeaguesSaved from '../wishList/LeaguesSaved.jsx';

export default function TempWatchList({ navigation }) {
  // temporarily rendering with a useState. Will implement Firebase and change logic after styling is set
  const [wishList, setWishList] = useState({});
  return (
    <LinearView>
      {JSON.stringify(wishList) === '{}' ? <AddLeague navigation={navigation} setWishList={setWishList}/> : <LeaguesSaved wishList={wishList}/>}
    </LinearView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});