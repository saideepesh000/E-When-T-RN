import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  email: {
    backgroundColor: '#EDF0F2',
    height: 50,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  password: {
    backgroundColor: '#EDF0F2',

    height: 50,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A6BE8',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'san-serif',
  },
});

export default styles;
