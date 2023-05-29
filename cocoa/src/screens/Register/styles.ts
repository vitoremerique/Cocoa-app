import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:25,
        
    },
    inputBox: {
      backgroundColor: '#292D32',
      height: 50,
      color: '#FFFFFF',
      
      padding: 10,
      borderRadius: 8,
      fontSize: 13,
      width:300,
      marginTop:5, 
      borderWidth: 1,
      borderColor:'#C3BBBB',
  },
  boxdiv:{
    margin:10,
    justifyContent:'space-around'
  },
  BottonRegister:{
    backgroundColor:'#FFA721',
    height:30,
    width:75,
    padding:5,
    textAlign:'center',
    textAlignVertical:'center',
    marginTop:75,
    borderRadius: 6,
    borderWidth: 1,
    borderColor:'#EDEDED'
  }

})