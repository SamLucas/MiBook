import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import LoteStyle from './lotesStyle';
import {Colors, DefaultStyle} from '../../config/DefaultStyle';

export default function lotes() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={LoteStyle.title}>Transição</Text>

      <View style={LoteStyle.description_container}>
        <View style={LoteStyle.description_content}>
          <Text style={LoteStyle.description_content_title}>
            Quantidade de animais:
          </Text>
          <Text>25</Text>
        </View>
        <View style={LoteStyle.description_content}>
          <Text style={LoteStyle.description_content_title}>
            Media de produção:
          </Text>
          <Text>25</Text>
        </View>
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
