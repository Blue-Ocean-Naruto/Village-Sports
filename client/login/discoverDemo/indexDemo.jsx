import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, SafeAreaView } from 'react-native';
import RenderInterest from './RenderInterestDemo.jsx'
import tw from 'tailwind-react-native-classnames'
import { LinearGradient } from 'expo-linear-gradient';

const interests = [
  {
    id: 1,
    category: 'Sports',
    items: ['Football', 'American Football', 'Basketball', 'Hockey', 'Tennis', 'Baseball', 'Softball', 'Swimming'],
  },
  {
    id: 2,
    category: 'Games',
    items: ['Video Games', 'Board Games', 'Chess', 'Puzzles'],
  },
  {
    id: 3,
    category: 'Art',
    items: ['Painting', 'Drawing', 'Photography', 'Sculpture'],
  },
];


const Discover = ({navigation}) => {
  const [selected, setSelected] = useState([]);

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col flex-1 justify-between`]}>
          <View style={[tw`m-2`]}>
            {interests.map((interest) => (
              <RenderInterest key={interest.id} interest={interest} selected={selected} setSelected={setSelected}/>
              ))}
          </View>
            <TouchableOpacity style={[styles.button]} onPress={() =>navigation.navigate('Recommend', {selected: selected})}>
              <Text style={[tw`text-white self-center`]}>Go!</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  goldBackground: {
    backgroundColor: '#CEB992',
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
})

export default Discover;