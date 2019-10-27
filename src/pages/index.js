import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LoteStyle from './lotes/lotesStyle';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Drawer from 'react-native-drawer';

import IconFeather from 'react-native-vector-icons/Feather';

import Post from '../components/post';
import Data from '../data/post';
import Friend from '../pages/friends';

export default function pages({navigation}) {
  const [drawer, setDrawer] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            style={style.textinput}
            placeholder={'No que vc esta pensando...'}
          />
          <IconFeather
            name="users"
            onPress={() => navigation.navigate('Friends')}
            style={{
              fontSize: 28,
              color: Colors.black,
              paddingTop: 28,
              paddingHorizontal: 15,
            }}
          />
          <IconFeather
            name="search"
            onPress={() => navigation.navigate('Search')}
            style={{
              fontSize: 28,
              color: Colors.black,
              paddingTop: 28,
              width: 40,
            }}
          />
        </View>
        <FlatList data={Data} renderItem={({item}) => <Post item={item} />} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  textinput: {
    marginTop: 15,
    marginBottom: 8,
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 30,
    fontStyle: 'italic',
  },
});
