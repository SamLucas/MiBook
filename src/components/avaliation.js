import React, {useState} from 'react';
import {View, Text, StyleSheet, Slider} from 'react-native';
import CheckBox from 'react-native-check-box';

import {Colors, DefaultStyle} from '../config/DefaultStyle';

const pages = ({item}) => {
  const [opcao, setOpcao] = useState([false, false, false, false]);

  function check(id) {
    // console.log(id);
    setOpcao([false, false, false, false]);
    const data = JSON.parse(JSON.stringify(opcao));
    const aux = data.map((ele, index) => {
      if (index == id) {
        return (ele = true);
        console.log(ele, id);
      }
      return (ele = false);
    });

    // console.log(id);
    setOpcao(aux);
  }

  return (
    <View style={DefaultStyle.container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text style={style.card_header_title}>{item.title}</Text>
        </View>
        <View style={style.card_header}>
          {item.answers.map(ele => (
            <CheckBox
              style={[style.checkBox, {backgroundColor: Colors.white}]}
              rightTextStyle={{color: Colors.black}}
              onClick={() => check(ele.id)}
              isChecked={opcao[ele.id]}
              checkBoxColor={Colors.cor_default}
              checkedCheckBoxColor={Colors.cor_default}
              uncheckedCheckBoxColor={Colors.cor_default}
              rightText={ele.title}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

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
    ...DefaultStyle.radius,
    marginRight: 10,
  },
  card_header: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.cor_default,
    ...DefaultStyle.radius,
  },
  card_header_title: {
    fontWeight: 'bold',
    padding: 20,
  },
  checkBox: {
    padding: 15,
    marginTop: 3,
  },
});

module.exports = pages;
