import {StyleSheet} from 'react-native';
import {Colors} from '../../config/DefaultStyle';

const LoteStyle = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 15,
  },
  description: {
    opacity: 0.6,
    textAlign: 'justify',
    marginVertical: 15,
  },
  card: {
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginVertical: 10,
  },
  card_header: {
    flexDirection: 'row',
  },
  cod: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
  descriptions: {
    opacity: 0.7,
  },
  footer: {
    marginTop: 5,
    opacity: 0.5,
    fontSize: 12,
  },
  button: {
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: Colors.cor_default,
  },
  button_text: {
    textAlign: 'center',
  },
});

module.exports = LoteStyle;
