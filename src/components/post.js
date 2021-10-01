import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { Colors, DefaultStyle } from '../config/DefaultStyle';
import LoteStyle from '../pages/lotes/lotesStyle';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const post = ({ item }) => {
  // const caminho = '../assets/images/01.png';

  return (
    <View style={{ marginVertical: 5 }}>
      <View style={style.card_header}>
        {/* <IconMaterialCommunityIcons
          name="account-circle-outline"
          style={style.icon}
        /> */}
        <Image source={{ uri: item.photo_profile }} style={style.image_profile} />
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.username}</Text>
      </View>
      <Image
        source={{
          uri: item.name_image,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width + 5,
        }}
      />
      <View style={style.card_footer}>
        <IconMaterialCommunityIcons name="heart-outline" style={style.icon} />
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 5,
            marginLeft: -15,
            marginRight: 15,
            paddingTop: 5,
          }}>
          {item.like}
        </Text>
        <IconMaterialCommunityIcons
          name="heart-broken-outline"
          style={style.icon}
        />
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 5,
            marginLeft: -15,
            paddingTop: 5,
            marginRight: 15,
          }}>
          {item.dlike}
        </Text>
        <IconMaterialCommunityIcons
          name="comment-text-multiple-outline"
          style={style.icon}
        />
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 5,
            marginLeft: -15,
            marginRight: 15,
            paddingTop: 5,
          }}>
          {item.comments}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  icon: { fontSize: 25, paddingRight: 15, color: "black" },
  image_profile: {
    fontSize: 25,
    paddingRight: 15,
    borderRadius: 50,
    width: 25,
    height: 25,
    marginRight: 10,
  },
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

module.exports = post;
