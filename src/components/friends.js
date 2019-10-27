import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const friend = ({item}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <IconMaterialCommunityIcons
            name="account-circle-outline"
            style={style.icon}
          />
          <Text style={{fontSize: 14, marginVertical: 12}}>{item.title}</Text>
          <Text
            style={{fontSize: 80, position: 'absolute', right: 20, top: -52}}>
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
  },
});

module.exports = friend;
