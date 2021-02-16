import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    height: 300,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 1,
    marginVertical: 20,
  },
  eventHost: {
    flexDirection: 'row',
    padding: 20,
  },

  title:{
        fontFamily: "sans-serif-medium",
        fontSize: 16,
  },

  eventTime: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c0c0c0',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
    marginVertical: 10,
    height: 40,
  },

  eventAttendees: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#EAE7E7',
  },
  attendeeImg: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    borderWidth: 2,
    borderColor: '#3A6BE8',
    marginHorizontal: 10,
  },

  hostImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 3,
    borderColor: '#3A6BE8',
    overflow: 'hidden',
  },

  eventNameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
  },

  eventMore: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3A6BE8',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  delButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#3A6BE8',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  view: {
    fontFamily: "sans-serif",
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  del: {
    fontSize: 13,
    color: '#3A6BE8',
    fontWeight: 'bold',
  },
});

export default styles;
