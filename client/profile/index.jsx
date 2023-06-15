import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, TouchableOpacity, Text, View, TextInput } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx'
import { mockData } from "../sharedComponents/mockData.js"
import { useIsFocused } from '@react-navigation/native'
import { db } from '../../firebase.js';
import UsernameContext from '../sharedComponents/UsernameContext.jsx'

const Profile = ({route, navigation}) => {
console.log("This is our route value", route)
  const isFocused = useIsFocused()
  const [same, setSame] = useState(false)
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState({username:'', info:{sobriquet:'', level:'', about_me:'', interests:''}, profile_pic:'', teams:{}})
  const [sobriquet, setSobriquet] = useState('')
  const [about, setAbout] = useState('')
  const [level, setLevel] = useState('')
  const [interests, setInterests] = useState('')
  const self = useContext(UsernameContext).username;

useEffect(() => {
  if(isFocused){
    console.log(route.params)
    let person;
    if (route.params === undefined) {
      person = self
      setSame(true)
    } else {
      person = route.params.username;
    }
    const users = db.collection('mockusers')
    console.log()
    users.where('username', '==', person).get().then((query)=> {
      let doc = query.docs[0]
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        let data = doc.data()
        let profileData= {
          id:data.id,
          info:JSON.parse(data.info),
          profile_pic:data.profile_pic,
          username:data.username,
          teams:JSON.parse(data.teams)
        }
        console.log(profileData)
        setData(profileData)
      }
    })
  }
}, [isFocused])

// step 1: get user data from firebase based on the ID which is passed as an argument.

// Check to see if the Login and Profile ID are the same.

// We don't want to normally be able to update the info. Only when we click on the update button does it take us to the update mode.
function updater(){
  setUpdate(!update)
}
// We'd like to be able to see the leagues which our person is in. On clicking, this should take us to the league page which reflects the league this person is in.

function controlState(stateSetter){
  return (text)=>{
    stateSetter(text)
  }
}
function submitChange(state,setState){
  return ()=>{
    console.log(state)
    setState('')
  }
}

  return (
    <LinearView children={
      <>
      {/**Highest Level --- Title */}
  <View style={{flex:1}}>
      <Text style={{
        color: '#CEB992',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 5,
        alignSelf: 'center'}}>
          {same?"Your Profile":data.username +"'s Profile"}
      </Text>
  </View>

      {/**Second Highest --- Picture and Name: */}
  <View style={{
      flex:2,
      flexDirection:"row",
      justifyContent:"space-around"}}>
      <Image source={{
              uri:data.profile_pic
            }} style={{
              height: 80,
              width: 80,
              borderRadius:75,
              marginTop:10,
            }}/>
      <View style={{
        width:180,
        alignContent:'center'
      }}>
        <Text style={{
          marginTop:10,
          color:'white',
          alignSelf:'center'
        }}>Name: {data.username}</Text>
        {!update && <Text style={{
          fontSize:9,
          color:'white',
          alignSelf:'center'
        }}>Sobriquet: {data.info.sobriquet}</Text>}
         {update && same && <TextInput value={sobriquet} placeholder={data.info.sobriquet} onChangeText={controlState(setSobriquet)} style={{
          fontSize:9,
          color:'white',
          alignSelf:'center'
         }}/>}
         {sobriquet !== '' &&update && same && <TouchableOpacity onPress={submitChange(sobriquet,setSobriquet)} style={{alignSelf:'center'}}>
          <Text style={{color:'#CEB992', fontSize:8, alignSelf:'center'}}>Submit Change</Text>
      </TouchableOpacity>}

      </View>
  </View >

      {/**Body --- About me, League, and Infos */}
  <View style={{
      flex:5,
      flexDirection:"column",
    }}>
    <Text style={{
    color: '#CEB992',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 5,
    marginRight:2,
    alignSelf: 'center'
  }}>About {same? "Me" : data.username }</Text>
      {!update && <Text>{data.info.about_me!==''? data.info.about_me: "This ninja remains silent. Who knows what secrets they hold?"}</Text>}
   {update && same && <TextInput value={about} onChangeText={controlState(setAbout)} placeholder={data.info.about_me}/>}
   {about !=='' && update && same && <TouchableOpacity onPress={submitChange(about,setAbout)} >
          <Text style={{color:'#CEB992', fontSize:8, marginTop:2, alignSelf:'center'}}>Submit Change</Text>
      </TouchableOpacity>}
   <Text style={{
    color: '#CEB992',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 5,
    marginRight:2,
    alignSelf: 'center'
  }}>Interests:</Text>
  {!update && <Text>{data.info.interests!==''? data.info.interests: "This ninja remains silent. Perhaps they have no interests"}</Text>}
   {update && same && <TextInput value={interests} onChangeText={controlState(setInterests)} placeholder={data.info.interests}/>}
   {interests !=='' && update && same && <TouchableOpacity onPress={submitChange(interests,setInterests)} >
          <Text style={{color:'#CEB992', fontSize:8, marginTop:2, alignSelf:'center'}}>Submit Change</Text>
      </TouchableOpacity>}
        <Text style={{
    color: '#CEB992',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 5,
    marginRight:2,
    alignSelf: 'center'
  }}>Level:</Text>
  {!update && <Text>{data.info.level!==''? data.info.level: "This ninja remains silent. Perhaps they are embarassed about their level"}</Text>}
   {update && same && <TextInput value={level} onChangeText={controlState(setLevel)}placeholder={data.info.level}/>}
   {level !=='' && update && same && <TouchableOpacity onPress={submitChange(level,setLevel)} >
          <Text style={{color:'#CEB992', fontSize:8, marginTop:2, alignSelf:'center'}}>Submit Change</Text>
      </TouchableOpacity>}

   {!same && <View style={{
      flex:2,
      alignItems:'center'}}>
      <Text style={{
    color: '#CEB992',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 5,
    marginRight:2,
    alignSelf: 'center'
  }}>Leagues:</Text>
        {Object.values(data.teams) > 0 ? <Text>Not Part of Any Leagues. A Rogue Ninja, Perhaps?</Text> : Object.values(data.teams).map((team)=>{
         return (
         <TouchableOpacity key={team} onPress={() => moveToLeague(team)}>
         <Text>
            {team}
          </Text>
        </TouchableOpacity>
      )
    })}
    </View>}

  </View>

      {/**Bottom Level --- Navigation */}
    <View style={{flex:2, flexDirection:'row', justifyContent:'space-around'}}>

      {same && <TouchableOpacity onPress={updater} >
          <Text style={{color:'#CEB992', fontSize:12, marginTop:2, alignSelf:'center'}}>{update?"Cancel Update":"Update"}</Text>
      </TouchableOpacity>}
     </View>
     </>
    }/>
  );
};

export default Profile
