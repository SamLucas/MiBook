import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {SvgXml} from 'react-native-svg';

import VacaSvg from '../assets/svg/vaca';

const avaliation = ({item}) => (
  <View style={[style.card, {backgroundColor: item.colors}]}>
    <SvgXml xml={VacaSvg} width={40} height={40} fill={'white'} />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
    paddingTop: 50,
    flexDirection: 'row',
  },
  card: {
    width: 70,
    height: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

module.exports = avaliation;
