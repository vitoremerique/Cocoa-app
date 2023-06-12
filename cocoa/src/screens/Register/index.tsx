
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from './styles';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, SetName]= useState();
  const [email,SetEmail]= useState();
  const [password,SetPassword] = useState();
  const [Confirm_Password, SetConfirmPass] = useState();  
  const navigation = useNavigation();


  const handleFormSubmit = async () => {
    try {
      fetch('http://192.168.0.101:19001/users', {
  method: 'POST',
  body: JSON.stringify({
    Nome: name,
    email:email,
    password:password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  .then((json) => console.log(json));
    } catch (error) {
      console.error(error); // Trate possíveis erros na requisição
      reportError(error)
      
    }
  };




  

  





    return (
      <View style={styles.container}>
         <View style={styles.boxdiv}>
            
            <Text >Nome Completo</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Digite seu nome'
            placeholderTextColor='#B2B2B2'
            value={name}
            onChangeText={text=>SetName(text)}
            />
            
            </View>

            <View style={styles.boxdiv}>
            
            <Text >Email</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Email'
            placeholderTextColor='#B2B2B2'
            value={email}
            onChangeText={text=>SetEmail(text)}
            />
            
            </View>

            <View style={styles.boxdiv}>
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'
          value={password}
          onChangeText={text=>SetPassword(text)}
          />
          
            </View>

            <View style={styles.boxdiv}>
          <Text>Confirmar senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Confirmar senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'
          value={Confirm_Password}
          onChangeText={text=>SetConfirmPass(text)}
            />
          
            </View>

            <TouchableOpacity onPress={()=> handleFormSubmit()}>

              <Text style = {styles.BottonRegister}>Registrar</Text>

            </TouchableOpacity>

            



      </View>
      
    );
  }


