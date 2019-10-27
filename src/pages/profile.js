import React from 'react';

import {View, Text, Image} from 'react-native';

import {DefaultStyle, Colors} from '../config/DefaultStyle';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';

const Option = [
  {
    title: 'Perfil',
    icon: 'playlist-check',
  },
  {
    title: 'Avaliação',
    icon: 'file-document-edit-outline',
  },
  {
    title: 'Logout',
    icon: 'logout',
  },
];
const pages = () => (
  <View style={{flex: 1, backgroundColor: Colors.background}}>
    <View style={{backgroundColor: Colors.black, flexDirection: 'row'}}>
      {/* <IconMaterialCommunityIcons
        name="account-circle-outline"
        style={{
          color: 'white',
          fontSize: 120,
          marginTop: 50,
          marginBottom: -40,
          zIndex: 1321231,
        }}
      /> */}
      <Image
        source={require('../assets/images/01.jpg')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 80,
          marginHorizontal: 15,
          borderWidth: 2,
          borderColor: 'black',
          marginTop: 50,
          marginBottom: -40,

          zIndex: 1321231,
        }}
      />
      <View style={{marginTop: 80, marginBottom: 10}}>
        <Text style={{fontSize: 18, color: Colors.white}}>Samuel lucas</Text>
        <Text style={{fontSize: 15, color: Colors.white, fontStyle: 'italic'}}>
          samuellucas0603@gmail.com
        </Text>
      </View>
    </View>

    <FlatList
      data={Option}
      style={{marginTop: 40}}
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 15,
            paddingVertical: 20,
            flexDirection: 'row',
            marginBottom: 1,
          }}>
          <IconMaterialCommunityIcons
            name={item.icon}
            style={{paddingVertical: 5, paddingHorizontal: 20, fontSize: 15}}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      )}
    />
  </View>
);

export default pages;
