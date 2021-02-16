import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  inputFields: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'san-serif',
  },
  inputFieldsdesc: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'san-serif',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A6BE8',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'san-serif',
  },
});

export default styles;
