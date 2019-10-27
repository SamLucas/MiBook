import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import VacaAmbiental from '../../assets/svg/vaca_ambiental.svg';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import LoteStyle from '../../pages/lotes/lotesStyle';

export default function avaliation({navigation}) {
  return (
    <View style={DefaultStyle.container}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> */}
      {/* <View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={[
          LoteStyle.button,
          // {width: Dimensions.get('window').width / 2 - 25},
        ]}>
        {/* <VacaAmbiental width="100" height="100" /> */}
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
      {/* </View> */}
      {/* // <View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={[
          LoteStyle.button,
          // {width: Dimensions.get('window').width / 2 - 25},
        ]}>
        <Text style={LoteStyle.button_text}>Comportamental</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationQuestion')}
        style={LoteStyle.button}>
        <Text style={LoteStyle.button_text}>Pscologica</Text>
      </TouchableOpacity>
      {/* </View> */}
      {/* // </View> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('AvaliationHome')}
        style={LoteStyle.button_white}>
        <Text style={LoteStyle.button_text_white}>Score Total</Text>
      </TouchableOpacity>
    </View>
  );
}
