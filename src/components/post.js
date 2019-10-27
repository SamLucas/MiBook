import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LoteStyle from '../pages/lotes/lotesStyle';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

import Imagess from '../assets/images/01.png';

export default function components() {
  const caminho = '../assets/images/';
  const name_foto = '01.png';

  return (
    <View style={{marginVertical: 5}}>
      <View style={style.card_header}>
        <IconMaterialCommunityIcons
          name="account-circle-outline"
          style={style.icon}
        />
        <Text style={{fontSize: 16, marginTop: 2, fontWeight: 'bold'}}>
          Username teste
        </Text>
      </View>
      <Image
        source={require('../assets/images/01.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width + 30,
        }}
      />
      <View style={style.card_footer}>
        <IconMaterialCommunityIcons name="heart-outline" style={style.icon} />
        <IconMaterialCommunityIcons
          name="heart-broken-outline"
          style={style.icon}
        />
        <IconMaterialCommunityIcons
          name="comment-text-multiple-outline"
          style={style.icon}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  icon: {fontSize: 25, paddingRight: 15},
  card_header: {
    flexDirection: 'row',
    borderTopWidth: 0.4,
    padding: 15,
    borderColor: 'gray',
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    backgroundColor: Colors.white,
  },
  card_footer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 15,
    backgroundColor: Colors.white,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
  },
});
