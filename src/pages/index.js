import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LoteStyle from './lotes/lotesStyle';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Drawer from 'react-native-drawer';

import Post from '../components/post';
import Data from '../data/post';
import Friend from '../pages/friends';

export default function pages() {
  const [drawer, setDrawer] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView>
        <TextInput
          style={style.textinput}
          placeholder={'No que vc esta pensando...'}
        />
        <FlatList data={Data} renderItem={() => <Post />} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  textinput: {
    marginTop: 15,
    marginBottom: 8,
    marginHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 30,
    fontStyle: 'italic',
  },
});
