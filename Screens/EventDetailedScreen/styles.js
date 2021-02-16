import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  eventDetailedScreen: {
    backgroundColor: '#fff',
  },
  hostView: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  hostImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#3A6BE8',
    overflow: 'hidden',
  },
  hostText: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  coverImg: {
    width: '100%',
    height: 300,
    opacity: 0.9,
  },
  title: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  aboutView: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  aboutText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A6BE8',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'san-serif',
    fontWeight:"bold"
  },
});
export default styles;
