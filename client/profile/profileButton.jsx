import React, { useState } from 'react';
import { Button, Image, TouchableOpacity, Text, View, TextInput } from 'react-native';

function ProfileButton({navigation, username, component}){

  return (
  <TouchableOpacity onPress={()=>{
    console.log("navigated to with argument", username)
    navigation.navigate('Profile',{ username })
  }}>
  {component}
  </TouchableOpacity>)
}
export default ProfileButton