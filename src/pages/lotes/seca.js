import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import Vaca from '../../assets/svg/vaca';

import DadosSeca from '../../data/lotes/seca';

import LoteStyle from './lotesStyle';
import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

const itensflat = item => (
  <View style={LoteStyle.card}>
    <View style={LoteStyle.card_header}>
      <Text style={LoteStyle.cod}>{item.title}:</Text>
      <Text style={LoteStyle.name}>{item.value}</Text>
    </View>
  </View>
);

export default function seca({navigation}) {
  return (
    <ScrollView>
      <View style={DefaultStyle.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: Colors.white,
            ...DefaultStyle.margins,
            ...DefaultStyle.radius_full,
            padding: 20,
          }}>
          <View>
            <SvgXml
              xml={Vaca}
              fill={Colors.cor_default}
              width="100"
              height="100"
              style={LoteStyle.svg}
            />
          </View>

          <View>
            <Text style={LoteStyle.title}>Seca</Text>
            <View style={LoteStyle.description_container}>
              <View style={LoteStyle.description_content}>
                <Text style={LoteStyle.description_content_title}>
                  Media de produção:
                </Text>
                <Text>25</Text>
              </View>
              <View style={LoteStyle.description_content}>
                <Text style={LoteStyle.description_content_title}>
                  Qtde de animais:
                </Text>
                <Text>25</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={[DefaultStyle.title_session, {marginHorizontal: 15}]}>
          Nutrição
        </Text>

        <FlatList data={DadosSeca} renderItem={({item}) => itensflat(item)} />

        <TouchableOpacity
          style={LoteStyle.button}
          onPress={() => navigation.navigate('Vacas')}>
          <Text style={LoteStyle.button_text}>Listar todas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
