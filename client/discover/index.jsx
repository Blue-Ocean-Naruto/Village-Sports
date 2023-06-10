import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RenderInterest from './RenderInterest.jsx'

const interests = [
  {
    id: 1,
    category: 'Sports',
    items: ['Football', 'American Football', 'Basketball', 'Tennis'],
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


const Discover = () => {
  const [selected, setSelected] = useState([]);

  return (
    <View>
      {interests.map((interest) => (
        <RenderInterest interest={interest} selected={selected} setSelected={setSelected}/>
      ))}
    </View>
  );
};


export default Discover;