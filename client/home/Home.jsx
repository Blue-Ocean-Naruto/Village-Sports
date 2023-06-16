import React, { useState, useContext, useEffect } from 'react';
import { Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../firebase';


import LeagueCard from './LeagueCard.jsx';
import Announcements from './Announcements.jsx';
import ProfileButton from '../profile/profileButton.jsx'

export default function Home({ navigation }) {
  const [usersLeagues, setUsersLeagues] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const { username } = useContext(UsernameContext);
  const isFocused = useIsFocused();

  function getAnnouncements(leagues) {
    const announce = leagues.map((league) => (
      {
        teamName: league.leagueName,
        announcements: league.teamInfo.announcements
      }
    ));
    setAnnouncements(announce);
  }

  useEffect(() => {
    if(isFocused){
      db.collection('mockusers').where('username', '==', username).get()
      .then((query) => {
        const doc = query.docs[0];
        if (!doc.exists) {
          console.log('Document does not exist');
        } else {
          const data = doc.data();

          const teams = JSON.parse(data.teams); // obj with {league: team, league: team...}
          const userLeagues = Array.from(Object.keys(teams));
          const userLeaguesAndTeams = [];
          // grab the league each user is part of out of db, and find the specific team info
          userLeagues.forEach((leagueName) => {
            db.collection('mockLeagues').where('name', '==', leagueName).get()
              .then((query) => {
                const doc = query.docs[0];
                if (!doc.exists) {
                  console.log('Document does not exits!')
                } else {
                  const data = doc.data();
                  const allTeams = data.teams.map((team) => (JSON.parse(team)))
                  allTeams.forEach((team) => {
                    if (team.name === teams[leagueName]) {
                      userLeaguesAndTeams.push(
                        {
                          leagueName: leagueName,
                          teamInfo: team
                        }
                      )
                    }
                  });
                  setUsersLeagues(userLeaguesAndTeams);
                  return userLeaguesAndTeams;
                }
              })
                .then((leagues) => {
                  getAnnouncements(leagues)
                })
                .catch((err) => console.log(err));
          });
        }
      })
        .catch((err) => (console.log(err)));
    }
  }, [isFocused]);

  return (
    <LinearView>
      <Text style={styles.myLeagues}>My Leagues</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} style={styles.carousel}>
        {usersLeagues.map((league => <LeagueCard league={league} key={league.id}/>))}
      </ScrollView>
        <Text style={styles.myLeagues}>Announcements</Text>
      <ScrollView style={styles.announcementContainer}>
        {announcements.map((announcement, i) => <Announcements teamName={announcement.teamName} announceList={announcement.announcements} key={i}/>)}
      </ScrollView>
      <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Discover')
      }>
        <Text style={styles.discover}>Discover</Text>
      </Pressable>
    </LinearView>
  )
}

const styles = StyleSheet.create({
  myLeagues: {
    color: '#CEB992',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center'
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  button: {
     backgroundColor: '#73937E',
     borderRadius: 20,
     padding: 10,
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 100,
     marginRight: 100
  },
  announcementContainer: {
    backgroundColor: '#D9D9D918',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    height: 160
  },
  discover: {
    color: 'white',
    alignSelf: 'center'
  }
})
