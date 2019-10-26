import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import Listitens from '../../components/colapsed_vaca';

import VacaData from '../../data/vaca';

const umitem = {
  cod: '#13215',
  name: 'Bulgária',
  details: [
    {title: 'Nome', value: 'Bulgária'},
    {title: 'Estágio', value: 'Vaca em lactação'},
    {title: 'Produção Média', value: '20 Litros'},
    {title: 'Peso do animal', value: '200 Kg'},
    {title: 'Raça', value: 'Holandês'},
    {title: 'Data do parto', value: '04/10/2019'},
    {title: 'Data do cobertura', value: '24/07/2019'},
    {title: 'Data prevista do parto', value: '01/05/2020'},
  ],
};

export default function index() {
  return (
    <View style={DefaultStyle.container}>
      {/* <Listitens item={umitem} /> */}
      <FlatList
        data={VacaData}
        renderItem={({item}) => <Listitens item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
