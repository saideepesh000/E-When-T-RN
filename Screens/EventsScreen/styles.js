import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E5E5E5',
    padding: 8,
  },
  createbtn:{
    borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       position: 'absolute',                                          
       bottom: 20,                                                    
       right: 10,
       height:70,
       backgroundColor:'#3A6BE8',
       borderRadius:100,
  }
});

export default styles;

