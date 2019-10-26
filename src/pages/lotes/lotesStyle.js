import {StyleSheet} from 'react-native';
import {Colors} from '../../config/DefaultStyle';

const LoteStyle = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 15,
  },
  description_container: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  description_content: {
    flexDirection: 'row',
  },
  description_content_title: {
    fontWeight: 'bold',
    marginRight: 5,
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
  footer: {
    marginTop: 5,
    opacity: 0.5,
    fontSize: 12,
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: Colors.cor_default,
  },
  button_text: {
    textAlign: 'center',
    color: Colors.white,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  svg: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

module.exports = LoteStyle;
