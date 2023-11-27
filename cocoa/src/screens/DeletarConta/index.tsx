
import { View,Text, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from './styles';
import {  useState } from "react";
import axios from "axios";
import React from "react";



export default function DeletarConta() {
  const [name, SetName]= useState("");
  const [email,SetEmail]= useState("");
  const [password,SetPassword] = useState("");
  



  const navigation = useNavigation();
  const ConfirmarExclusao = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/user", {
        data: {
          name: name,
          email: email,
          password: password
        }
      });
  
      console.log(response.data);
      alert("Conta deletada com sucesso");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Erro:", error);
      console.error(error);
      alert("Falha ao excluir conta: " + error.message);
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
            keyboardType="name-phone-pad"
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
            keyboardType="email-address"
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

            <TouchableOpacity onPress={()=> ConfirmarExclusao()}>

              <Text style = {styles.BottonRegister}>Confirmar</Text>

            </TouchableOpacity>

           

            



      </View>
      
    );
  }