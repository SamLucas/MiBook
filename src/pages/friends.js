import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Data from '../data/friends';
import FrindComponent from '../components/friends';

import {Colors, DefaultStyle} from '../config/DefaultStyle';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function pages() {
  return (
    <View style={{backgroundColor: Colors.background}}>
      <TextInput
        placeholder="Buscar..."
        style={{
          borderRadius: 20,
          marginHorizontal: 20,
          backgroundColor: Colors.white,
          paddingHorizontal: 20,
          fontStyle: 'italic',
          position: 'absolute',
          top: 20,
          width: Dimensions.get('window').width - 30,
          alignSelf: 'center',
          zIndex: 112313213,
        }}
      />
      <ScrollView>
        <FlatList
          style={{marginTop: 85}}
          data={Data}
          renderItem={({item}) => <FrindComponent item={item} />}
        />
      </ScrollView>
    </View>
  );
}
