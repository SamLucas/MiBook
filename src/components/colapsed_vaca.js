import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LotesStyle from '../pages/lotes/lotesStyle';

const listintens = ({item, navigation}) => {
  const [colapsed, setColapsed] = useState(true);
  return (
    <View style={LotesStyle.card}>
      <TouchableOpacity onPress={() => setColapsed(!colapsed)}>
        <View style={LotesStyle.card_header}>
          {/* <Text style={LotesStyle.cod}>{item.cod}</Text> */}
          <Text style={style.name}>{item.title} - 80%</Text>
        </View>
        <Text style={style.footer}>Clique para mostrar mais detalhes</Text>
      </TouchableOpacity>
      <Collapsible collapsed={colapsed} style={style.colapsed}>
        {item.tips.map(ele => (
          <View style={style.colapsed_container}>
            {/* <Text style={style.colapsed_title}>{ele.title}:</Text> */}
            <Text style={style.colapsed_description}>- {ele.title}</Text>
          </View>
        ))}
        {/* <TouchableOpacity
          style={LotesStyle.button}
          onPress={() => navigation.navigate('VacaDescription')}>
          <Text style={LotesStyle.button_text}>Detalhes</Text>
        </TouchableOpacity> */}
      </Collapsible>
    </View>
  );
};

const style = StyleSheet.create({
  colapsed: {
    paddingTop: 20,
    backgroundColor: Colors.white,
    padding: 10,
  },
  colapsed_container: {
    flexDirection: 'row',
    paddingVertical: 1,
  },
  colapsed_title: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
  footer: {
    opacity: 0.6,
    fontSize: 13,
  },
});

module.exports = listintens;
