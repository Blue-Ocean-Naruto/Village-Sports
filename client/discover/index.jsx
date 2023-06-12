import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import RenderInterest from './RenderInterest.jsx'
import tw from 'tailwind-react-native-classnames'

const interests = [
  {
    id: 1,
    category: 'Sports',
    items: ['Football', 'American Football', 'Basketball', 'Tennis', 'Baseball', 'Softball', 'Swimming'],
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
    <View style={[tw`flex flex-col flex-1 justify-between`]}>
      <View style={[tw`m-2`]}>
        {interests.map((interest) => (
          <RenderInterest key={interest.id} interest={interest} selected={selected} setSelected={setSelected}/>
          ))}
      </View>
      <Button
        title="Go!"
        onPress={() =>
          navigation.navigate('Recommend')
        }
      />
    </View>
  );
};


export default Discover;