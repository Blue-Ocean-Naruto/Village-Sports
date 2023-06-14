import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames'

const RenderInterest = ({ interest, selected, setSelected}) => {
  const [show, setShow] = useState(false)

  const toggleInterest = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <View style={tw`border-b border-gray-300 py-2`}>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text style={[tw`text-xl text-white`]}>{interest.category}</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row flex-wrap`}>
      {show &&
        interest.items.map((item) => (
          <TouchableOpacity key={item} onPress={() => toggleInterest(item)}>
            <Text style={[styles.goldBackground, tw`m-1 p-1 ${selected.includes(item) && 'bg-gray-600'}`]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goldBackground: {
    backgroundColor: '#CEB992',
    borderRadius:10
  },
});

export default RenderInterest