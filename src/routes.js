import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {Colors} from './config/DefaultStyle';

import vacas from './pages/vaca/index';
import vaca_description from './pages/vaca/description';
import prenha from './pages/lotes/prenha';
import seca from './pages/lotes/seca';
import terco_final from './pages/lotes/terco_final';
import transicao from './pages/lotes/transicao';
import vazia from './pages/lotes/vazia';

const Tabs = createMaterialTopTabNavigator(
  {
    Vazia: {
      screen: vazia,
      navigationOptions: () => ({
        title: 'Vazia',
      }),
    },
    Prenha: {
      screen: prenha,
      navigationOptions: () => ({
        title: 'Prenha',
      }),
    },
    TercoFinal: {
      screen: terco_final,
      navigationOptions: () => ({
        title: 'Lac. Final',
      }),
    },
    Seca: {
      screen: seca,
      navigationOptions: () => ({
        title: 'Seca',
      }),
    },
    Transicao: {
      screen: transicao,
      navigationOptions: () => ({
        title: 'Transição',
      }),
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      style: {backgroundColor: 'white'},
      indicatorStyle: {backgroundColor: Colors.cor_default},
    },
  },
);

const Stack = createStackNavigator({
  Vacas: {
    screen: vacas,
  },
  VacaDescription: {
    screen: vaca_description,
  },
  Home: {
    screen: Tabs,
    navigationOptions: () => ({
      title: 'Hackaton',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {backgroundColor: 'transparent'},
    }),
  },
});

const Container = createAppContainer(
  createSwitchNavigator({
    Stack,
  }),
);

module.exports = Container;
console.disableYellowBox = true;
