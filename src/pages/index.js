import React from 'react';
import {View} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LoteStyle from './lotes/lotesStyle';
import {FlatList} from 'react-native-gesture-handler';

import Post from '../components/post';
import Data from '../data/post';

export default function pages() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <FlatList data={Data} renderItem={() => <Post />} />
    </View>
  );
}
