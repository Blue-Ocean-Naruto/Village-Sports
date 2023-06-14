import React, {useState}from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LeagueView = ({ leagues, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <Text style={tw`text-center text-white text-2xl`}>{leagues.name}</Text>
        <Image
          style={{ width: '75%', height: '15%', margin: '5%' }}
          source={{ uri: `${leagues.picture}` }}
        />
        <View>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>
          navigation.navigate('chat')}>
            <Text style={tw`border-b border-gray-300 py-2 text-center text-white`}>Chat/Join League</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={tw`border-b border-gray-300 py-2 text-center text-white`}>Add to Saved Leagues</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#FFFFFF50', borderRadius: '10', padding: '5%' }} >
            <Text style={tw`text-center text-white text-lg`}>League Details</Text>
            <Text style={{ color: 'white', fontSize: 18 }} >Name: {leagues.name}</Text>
            <Text style={{ color: 'white', fontSize: 18 }} >Teams:</Text>
            {leagues.teams.map((team) => (
              <View key={team.name}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                  color: 'white', marginLeft: 30, elevation: 10,
                  backgroundColor: "#FFFFFF55",
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  margin: 10
                }
                }>
                  <Text style={{
                  fontSize: 13,
                  color: "#fff",
                  fontWeight: "bold",
                  alignSelf: "center",
                  textTransform: "uppercase",
                  paddingVertical: 10
                  }}>{team.name}</Text>
              </TouchableOpacity>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{fontSize:18, padding:10,alignSelf: 'flex-start'}}>Team Members:</Text>
          {team.members.map((member)=>(
            <Text key={member} style={styles.modalText}>{member}</Text>
            ))}
            <Text style={{fontSize:18, padding:10,alignSelf: 'flex-start'}}>Team Event Dates:</Text>
            {team.events.map((event)=>(
            <Text key={event.time} style={styles.modalText}>{event.date}</Text>
            ))}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
              </View>
            ))}
        </View>
      </View>
    </SafeAreaView>
    </LinearGradient >
  )

}

export default LeagueView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: -350,
    padding: 16

  },
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#FFFFFF50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: 300
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#CEB992',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});