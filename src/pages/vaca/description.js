import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CheckBox from 'react-native-check-box';
import Carousel from 'react-native-snap-carousel';

import {Colors, DefaultStyle} from '../../config/DefaultStyle';
import {sliderWidth, itemWidth} from '../../config/size_carrousel';

import Score from '../../data/score';
import {ScrollView} from 'react-native-gesture-handler';

export default function vaca() {
  const score_card = item => (
    // console.log(item.min);
    // <CheckBox
    //   style={style.checkBox}
    //   onClick={() => {
    //     console.log('aksdjkl');
    //   }}
    //   isChecked={() => console.log('aksdjkl')}
    //   rightText={item.min}
    // />
    <View style={style.card_score}>
      <View style={[style.card_score_color, {backgroundColor: item.colors}]} />
      <Text>
        {item.min} - {item.max}
      </Text>
    </View>
  );
  return (
    <ScrollView>
      <View style={DefaultStyle.container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_title}>Score</Text>
          </View>
          <View>
            <FlatList data={Score} renderItem={({item}) => score_card(item)} />
          </View>
        </View>

        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_title}>Sanidade</Text>
          </View>
          <View>
            <CheckBox
              style={style.checkBox}
              onClick={() => {
                console.log('aksdjkl');
              }}
              isChecked={() => console.log('aksdjkl')}
              rightText={'Vacinação'}
            />
            <CheckBox
              style={style.checkBox}
              onClick={() => {
                console.log('aksdjkl');
              }}
              isChecked={() => console.log('aksdjkl')}
              rightText={'Controle parasitario'}
            />
            <CheckBox
              style={style.checkBox}
              onClick={() => {
                console.log('aksdjkl');
              }}
              isChecked={() => console.log('aksdjkl')}
              rightText={'Casqueamento'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card: {
    paddingVertical: 10,
  },
  card_score: {
    padding: 20,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  card_score_color: {
    width: 25,
    height: 25,
    ...DefaultStyle.radius_full,
    marginRight: 10,
  },
  card_header: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.success,
    ...DefaultStyle.radius,
  },
  card_header_title: {
    fontWeight: 'bold',
    padding: 20,
  },
  checkBox: {
    backgroundColor: Colors.white,
    padding: 15,
    marginTop: 3,
  },
});
