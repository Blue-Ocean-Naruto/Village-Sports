import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const RenderInterest = ({interest, selected, setSelected}) => {
  const [show, setShow] = useState(false)

  const toggleInterest = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <View key={interest.id}>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>{interest.category}</Text>
      </TouchableOpacity>
      {show &&
        interest.items.map((item) => (
          <TouchableOpacity key={item}onPress={() => toggleInterest(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default RenderInterest