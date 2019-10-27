import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import Listitens from '../../components/colapsed_vaca';

import VacaData from '../../data/vaca';

export default function index({navigation}) {
  return (
    <View style={DefaultStyle.container}>
      {/* <Listitens item={umitem} /> */}
      <FlatList
        data={VacaData}
        renderItem={({item}) => (
          <Listitens item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
