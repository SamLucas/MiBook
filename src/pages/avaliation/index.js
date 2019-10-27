import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';

import Collapsible from 'react-native-collapsible';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import LoteStyle from '../lotes/lotesStyle';

import Listitens from '../../components/colapsed_vaca';

import Dicas from '../../data/dicas';
import {SvgXml} from 'react-native-svg';

import Certificate from '../../assets/svg/certificate';

export default function avaliation({navigation}) {
  return (
    <ScrollView>
      <View style={DefaultStyle.container}>
        <View style={style.card_container}>
          <Text style={style.title}>65%</Text>
          <View style={style.card_container_description}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Parabéns!</Text>
            <Text style={{marginVertical: 10}}>
              Você faz parte de 56% dos produtores
            </Text>
          </View>
        </View>
        <FlatList
          data={Dicas}
          renderItem={({item}) => (
            <Listitens item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Avaliation')}
          style={LoteStyle.button}>
          <Text style={LoteStyle.button_text}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card_container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 15,
  },
  title: {
    fontSize: 50,
    // width: 100,
    marginVertical: 20,
    color: 'orange',
    textAlign: 'center',
  },
  card_container_description: {
    backgroundColor: Colors.white,
    marginHorizontal: 5,
    padding: 20,
    width: 180,
    borderRadius: 25,
  },
});
