import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, TouchableOpacity} from 'react-native';

export default function({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('FirstLogin')}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
}
