import React from 'react';

import {View, Text, Image, StatusBar} from 'react-native';

import {DefaultStyle, Colors} from '../config/DefaultStyle';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Option = [
  {
    title: 'Perfil',
    action: 'AvaliationHome',
    icon: 'playlist-check',
  },
  {
    title: 'Avaliação',
    action: 'AvaliationHome',
    icon: 'file-document-edit-outline',
  },
  {
    title: 'Logout',
    action: 'AvaliationHome',
    icon: 'logout',
  },
];
const pages = ({navigation}) => (
  <View style={{flex: 1, backgroundColor: Colors.background}}>
    <StatusBar backgroundColor={Colors.black} />
    <IconMaterialCommunityIcons
      name="keyboard-backspace"
      style={{
        position: 'absolute',
        right: 15,
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingVertical: 5,
        // backgroundColor: 'red',
        top: 15,
        color: Colors.white,
        zIndex: 54546545646,
        fontSize: 20,
      }}
      onPress={() => navigation.navigate('Stack')}
    />
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
        <TouchableOpacity
          onPress={() => navigation.navigate(item.action)}
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
        </TouchableOpacity>
      )}
    />
  </View>
);

export default pages;
