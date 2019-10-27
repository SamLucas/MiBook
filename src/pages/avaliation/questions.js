import React from 'react';
import {View, Text} from 'react-native';

import {Nutricional} from '../../data/question_avaliation';
import ContainerQuestion from '../../components/avaliation';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import LotesStyle from '../lotes/lotesStyle';
import {Colors, DefaultStyle} from '../../config/DefaultStyle';

export default function avaliation({navigation}) {
  return (
    <View style={DefaultStyle.container}>
      <FlatList
        data={Nutricional}
        renderItem={({item}) => <ContainerQuestion item={item} />}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Avaliation')}
        style={LotesStyle.button}>
        <Text style={LotesStyle.button_text}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
