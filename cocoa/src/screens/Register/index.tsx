
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from './styles';
export default function Register() {
    
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
         <View style={styles.boxdiv}>
            
            <Text >Nome Completo</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Digite seu nome'
            placeholderTextColor='#B2B2B2'
            />
            
            </View>

            <View style={styles.boxdiv}>
            
            <Text >Email</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Email'
            placeholderTextColor='#B2B2B2'
            />
            
            </View>

            <View style={styles.boxdiv}>
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'/>
          
            </View>

            <View style={styles.boxdiv}>
          <Text>Confirmar senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Confirmar senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'/>
          
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>

              <Text style = {styles.BottonRegister}>Registrar</Text>

            </TouchableOpacity>

            



      </View>
      
    );
  }