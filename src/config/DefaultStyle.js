import {StyleSheet} from 'react-native';

const Colors = {
  background_v1: '#B0C4DE',
  background_v2: '#F0FFFF',
  background: '#F0FFFF',
  white: 'white',
  success: '#32CD32',
  warning: '#FFFF00',
  danger: '#FF0000',
  cor_default: '#120a8f',
};

const DefaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  radius: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  margins: {marginHorizontal: 20},
  radius_full: {
    borderRadius: 5,
  },
});

module.exports = {DefaultStyle, Colors};