import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import LoteStyle from '../../pages/lotes/lotesStyle';

export default function avaliation({navigation}) {
  return (
    <View style={DefaultStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Avaliation')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
