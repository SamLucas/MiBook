import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';

export default function pages() {
  return (
    <View style={DefaultStyle.container}>
      <View style={style.card}>
        <Text>Prenha</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
