import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import LoteStyle from './lotesStyle';
import {Colors, DefaultStyle} from '../../config/DefaultStyle';

export default function lotes() {
  return (
    <View style={DefaultStyle.container}>
      <View>
        <Text style={LoteStyle.title}>Vazia</Text>
        <Text style={[LoteStyle.description, DefaultStyle.margins]}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja
        </Text>
      </View>

      <View style={LoteStyle.card}>
        <View style={LoteStyle.card_header}>
          <Text style={LoteStyle.cod}>Sal:</Text>
          <Text style={LoteStyle.name}>A vontade</Text>
        </View>
      </View>

      <View style={LoteStyle.card}>
        <View style={LoteStyle.card_header}>
          <Text style={LoteStyle.cod}>Concentrado:</Text>
          <Text style={LoteStyle.name}>A vontade</Text>
        </View>
      </View>

      <View style={LoteStyle.card}>
        <View style={LoteStyle.card_header}>
          <Text style={LoteStyle.cod}>Volumoso:</Text>
          <Text style={LoteStyle.name}>A vontade</Text>
        </View>
      </View>

      <TouchableOpacity style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Listar todas</Text>
      </TouchableOpacity>
    </View>
  );
}
