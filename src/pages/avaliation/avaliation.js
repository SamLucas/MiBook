import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import LoteStyle from '../../pages/lotes/lotesStyle';

export default function avaliation({navigation}) {
  return (
    <View style={DefaultStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Sanitária</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Nutricional</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Ambiental</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Comportamental</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Pscologica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationHome')}
        style={LoteStyle.button_white}>
        <Text style={LoteStyle.button_text_white}>Score Total</Text>
      </TouchableOpacity>
    </View>
  );
}
