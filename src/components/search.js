import React from 'react';

import {View, TextInput, Text} from 'react-native';

import {Colors, DefaultStyle} from '../config/DefaultStyle';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const components = ({navigation}) => (
  <>
    <TextInput
      placeholder="O que você está procurando?"
      autoCorrect={false}
      autoCompleteType={'off'}
      style={{
        paddingVertical: 20,
        paddingLeft: 60,
        paddingRight: 20,
        fontStyle: 'italic',
      }}
    />
    <IconMaterialCommunityIcons
      name="keyboard-backspace"
      onPress={() => navigation.navigate('Stack')}
      style={{
        position: 'absolute',
        left: 20,
        top: 22,
        color: Colors.black,
        zIndex: 123132132132131321321,
        fontSize: 20,
      }}
    />
    <View style={DefaultStyle.container}>
      <Text
        style={{textAlign: 'center', marginVertical: 40, fontWeight: 'bold'}}>
        Nenhum resultado encontrado.
      </Text>
    </View>
  </>
);

export default components;
