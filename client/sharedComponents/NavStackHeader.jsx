/* This component can't really be shared per se, since not all nav bars will have the same buttons or lack of buttons, but this may be a good reference for how you code your own custom header

Right now it looks like this:
------------------------------------------
  <logo>  Your Village
------------------------------------------

but after changing the text to your screen's name, you could also add an icon or other clickable
------------------------------------------
  <logo>  Your ScreenName            ///  <- Like a triple bar thinggy
------------------------------------------
*/

import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function NavStackHeader () {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/VillageSportsLogo.png')}
        contentFit='contain'
      />
      <Text style={styles.text}>Your Village</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 40,
    zIndex: 999,
    marginRight: 20,
  },
  text: {
    color: '#fff'
  }
})