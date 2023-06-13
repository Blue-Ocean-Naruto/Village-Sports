import React, { useState } from 'react';
import { Button, Image, TouchableOpacity, Text, View, TextInput } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx'


const Profile = ({UserID, LoginID}) => {
  const dummyUserInfo = {
    username: "Naruto Uzamaki",
    leagues: ["Squad 7", "Frog Lovers Coalition", "Uzumaki Clan", "Jinchuriki"],
    profilepic: "https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1943&q=80"
}
const dummyUserInfoOther = {
  username: "Tobi",
  leagues: ["Akatsuki", "Anti-Uchiha Coalition", "Squad 7", "Edgybois"],
  profilepic: "https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
}
  const [same, setSame] = useState(true)
  const [update, setUpdate] = useState(false)
  const [data, setData] =useState(dummyUserInfo)


function changeData(){
  if(data==dummyUserInfo){
    setData(dummyUserInfoOther)
    console.log(data)
  } else{
    setData(dummyUserInfo)
  }
  setSame(!same)
}
// The information has to come from somewhere- Either Firebase or passed as a prop
function updater(){
  setUpdate(!update)
}
function moveToLeague(league){
  console.log("moved to this league",league)
}
// Check if the UserID matches who the person is currently logged in as with a query to Firebase
  return (
    <LinearView children={
    <View >
      <Image source={{
        uri:data.profilepic
      }} style={{
        height: 75,
        width: 75,
        borderRadius:75
      }}/>
    <Button title="change data for demo" onPress={changeData}/>
    <Text>{same?"Your Profile":data.username +"'s Profile"}</Text>
    {same && !update && <Button onPress={updater} title="Update"/>}
    {same && update && <Button onPress={updater} title="Cancel Update"/>}
    <Text>Leagues:</Text>
    {dummyUserInfo.length > 0 ? <Text>Not Part of Any Leagues. A Rogue Ninja, Perhaps?</Text> : data.leagues.map((league)=>{
      return (
      <TouchableOpacity key={league} onPress={() => moveToLeague(league)}>
      <Text>
        {league}
      </Text>
    </TouchableOpacity>
      )
    })}
   {update && <TextInput placeholder="what you'd Like to be called"/>}
   {update && <Button title="Submit Change"/>}
   {update && <TextInput placeholder="Some other Value we could Change"/>}
   {update && <Button title="Submit Change"/>}
    </View>
    }/>
  );
};

export default Profile