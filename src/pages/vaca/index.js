import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';

export default function index() {
  const [colapsed, setColapsed] = useState(true);
  return (
    <View style={DefaultStyle.container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text style={style.cod}>#13215</Text>
          <Text style={style.name}>Bulgária</Text>
        </View>
        <Text style={style.footer} onPress={() => setColapsed(!colapsed)}>
          Mostrar mais detalhes
        </Text>
      </View>
      <Collapsible collapsed={colapsed} style={style.colapsed}>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Nome:</Text>
          <Text style={style.colapsed_description}>Bulgária</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Estágio:</Text>
          <Text style={style.colapsed_description}>Vaca em lactação</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Produção Média:</Text>
          <Text style={style.colapsed_description}>20 Litros</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Peso do animal:</Text>
          <Text style={style.colapsed_description}>200 Kg</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Raça</Text>
          <Text style={style.colapsed_description}>Holandês</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Data do parto</Text>
          <Text style={style.colapsed_description}>04/10/2019</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Data do cobertura</Text>
          <Text style={style.colapsed_description}>24/07/2019</Text>
        </View>
        <View style={style.colapsed_container}>
          <Text style={style.colapsed_title}>Data prevista do parto</Text>
          <Text style={style.colapsed_description}>01/05/2020</Text>
        </View>
      </Collapsible>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  card_header: {
    flexDirection: 'row',
  },
  cod: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
  descriptions: {
    opacity: 0.7,
  },
  footer: {
    marginTop: 5,
    opacity: 0.5,
    fontSize: 12,
  },
  colapsed: {
    ...DefaultStyle.margins,
    backgroundColor: Colors.white,
    padding: 10,
    marginTop: -5,
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
