import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

export default function vazia({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Stack')}>
      <Text>teste</Text>
    </TouchableOpacity>
  );
}
