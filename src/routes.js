import React, {useState} from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import index from './pages/';
import avaliation_index from './pages/avaliation';
import avaliation from './pages/avaliation/avaliation';
import avaliation_questions from './pages/avaliation/questions';

import Friends from './pages/friends';
import Profile from './pages/profile';

const Stack = createStackNavigator({
  Home: {
    screen: index,
    navigationOptions: ({navigation}) => ({
      title: 'MiBook',
      tabBarVisible: false,
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerLeft: (
        <IconMaterialCommunityIcons
          name="menu"
          onPress={() => navigation.navigate('Profile')}
          style={{fontSize: 22, marginLeft: 15}}
        />
      ),
      headerRight: (
        <IconMaterialCommunityIcons
          name="bell-outline"
          style={{fontSize: 22, marginRight: 15}}
        />
      ),
    }),
  },
  AvaliationHome: {
    screen: avaliation_index,
    navigationOptions: () => ({
      title: 'Avaliação',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
  AvaliationQuestion: {
    screen: avaliation_questions,
    navigationOptions: () => ({
      title: 'Questões',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
  Avaliation: {
    screen: avaliation,
    navigationOptions: () => ({
      title: 'Categorias da avaliação',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
});

const Container = createAppContainer(
  createSwitchNavigator({
    Friends,
    Stack,
    Profile,
  }),
);

module.exports = Container;
console.disableYellowBox = true;
