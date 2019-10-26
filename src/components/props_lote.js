import React from 'react';
import {View} from 'react-native';

import LoteStyle from './lotesStyle';

export default function components() {
  return (
    <View style={LoteStyle.card}>
      <View style={LoteStyle.card_header}>
        <Text style={LoteStyle.cod}>Concentrado:</Text>
        <Text style={LoteStyle.name}>A vontade</Text>
      </View>
    </View>
  );
}
