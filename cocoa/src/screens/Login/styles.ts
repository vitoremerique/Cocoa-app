import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
      
    },
    text1:{
      width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        margin:100,
      
    },
    inputBox: {
      backgroundColor: '#292D32',
      height: 32,
      color: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      placeHolder: 'Vamos ver',
      fontSize: 13,
      placeholderTextColor: '#FFFFFF',
      width:300,
      borderWidth: 1,
      borderColor:'#C3BBBB'
  },
  bottonInput:{
    backgroundColor:'#FFA721',
    height:19,
    width:70,
    textAlign:'center',
    
    marginTop:75,
    borderRadius: 6,
    borderWidth: 1,
      borderColor:'#EDEDED'
  },
  boxdiv:{
    margin:30,
    justifyContent:'space-around'
  },
  NotRegister:{
    textDecorationLine:'underline',
    color:'#000000',
    marginTop:10
  },
  forgetpass:{
    textDecorationLine:'underline',
    color:'#000000',
    marginTop:10
  },
  logo: {
    width: 66,
    height: 58,
  }
  });
  