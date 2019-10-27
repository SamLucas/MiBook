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
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function pages({navigation}) {
  return (
    <View style={{backgroundColor: Colors.background}}>
      <View style={{flexDirection: 'row', backgroundColor: 'none'}}>
        <IconMaterialCommunityIcons
          name="keyboard-backspace"
          style={{
            width: 50,
            color: Colors.white,
            position: 'absolute',
            top: 14,
            left: -5,
            paddingVertical: 8,
            textAlign: 'center',
            width: 45,
            height: 45,
            alignSelf: 'center',
            borderRadius: 50,
            zIndex: 54546545646,
            marginHorizontal: 15,
            marginTop: 25,
            fontSize: 25,
            backgroundColor: 'black',
          }}
          onPress={() => navigation.navigate('Stack')}
        />
        <TextInput
          placeholder="Buscar..."
          style={{
            borderRadius: 20,
            marginHorizontal: 20,
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            marginTop: 15,
            marginLeft: -25,
            fontStyle: 'italic',
            position: 'absolute',
            top: 20,
            right: 0,
            width: Dimensions.get('window').width - 80,
            alignSelf: 'center',
            zIndex: 112313213,
          }}
        />
      </View>
      <ScrollView>
        <FlatList
          style={{marginTop: 105}}
          data={Data}
          renderItem={({item}) => <FrindComponent item={item} />}
        />
      </ScrollView>
    </View>
  );
}
