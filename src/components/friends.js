import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const friend = ({item}) => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            backgroundColor: Colors.white,
            marginBottom: 5,
          }}>
          {/* <IconMaterialCommunityIcons
            name="account-circle-outline"
            style={style.icon}
          /> */}
          <Image source={{uri: item.photo_profile}} style={style.icon} />
          <Text style={{fontSize: 14, marginVertical: 18}}>{item.title}</Text>
          <Text
            style={{
              fontSize: 80,
              position: 'absolute',
              right: 20,
              top: -46,
              color: item.color,
            }}>
            .
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    fontSize: 40,
    paddingHorizontal: 10,
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 5,
  },
});

module.exports = friend;
