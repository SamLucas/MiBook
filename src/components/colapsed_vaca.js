import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import LotesStyle from '../pages/lotes/lotesStyle';

const listintens = ({item}) => {
  const [colapsed, setColapsed] = useState(true);
  return (
    <View style={LotesStyle.card}>
      <TouchableOpacity onPress={() => setColapsed(!colapsed)}>
        <View style={LotesStyle.card_header}>
          <Text style={LotesStyle.cod}>{item.cod}</Text>
          <Text style={style.name}>{item.name}</Text>
        </View>
        <Text style={style.footer}>Mostrar mais detalhes</Text>
      </TouchableOpacity>
      <Collapsible collapsed={colapsed} style={style.colapsed}>
        {item.details.map(ele => (
          <View style={style.colapsed_container}>
            <Text style={style.colapsed_title}>{ele.title}:</Text>
            <Text style={style.colapsed_description}>{ele.value}</Text>
          </View>
        ))}
        <TouchableOpacity style={LotesStyle.button}>
          <Text style={LotesStyle.button_text}>Detalhes</Text>
        </TouchableOpacity>
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
});

module.exports = listintens;
