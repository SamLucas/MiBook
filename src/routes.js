import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import home from './pages/home';
import vacas from './pages/vaca/index';
import vaca_description from './pages/vaca/description';
import prenha from './pages/lotes/prenha';
import seca from './pages/lotes/seca';
import terco_final from './pages/lotes/terco_final';
import transicao from './pages/lotes/transicao';
import vazia from './pages/lotes/vazia';

const Tabs = createMaterialTopTabNavigator(
  {
    vazia,
    prenha,
    terco_final,
    seca,
    transicao,
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      style: {backgroundColor: 'white'},
      indicatorStyle: {backgroundColor: '#9C27B0'},
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
});

const Container = createAppContainer(
  createSwitchNavigator({
    Stack,
    Tabs,
    home: {
      screen: home,
    },
  }),
);

module.exports = Container;
console.disableYellowBox = true;
