import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';

export default function pages() {
  return (
    <View style={DefaultStyle.container}>
      <View style={style.card}>
        <Text style={style.cod}>Mimosa</Text>
        <Text style={style.descriptions}>askjdasd asdkasjld</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: Colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.success,
  },
  cod: {
    fontWeight: 'bold',
  },
  descriptions: {
    opacity: 0.7,
  },
});
