import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('FirstLogin')}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
}
