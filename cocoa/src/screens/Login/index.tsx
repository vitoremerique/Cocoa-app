import cocoa from './../Imagens/cocoa.jpg';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { HomeTab } from '../../../App';
import axios from 'axios';
import { requestCameraPermissionsAsync } from 'expo-image-picker';



export default function Login() {
  const [name,setName] = useState("");
  const [password,setSenha] = useState("");

  

  
const navigation = useNavigation();
const navigationHome = useNavigation(); 

const SighIn = async()=>{
  
  try {
    
     
    const response = await axios.post("http://localhost:8080/login", {
      name,
      password
    })

    console.log('Alõ', response.data);

    if (response.status === 200) {
      console.log('Login bem-sucedido', response.data);
      navigationHome.navigate("Home")
    } else {
      console.error('Erro no login', response.status);
    }
  
   setName("")
   setSenha("")
    
    
  }
    
   catch (error:any) {
    console.log(error)
    alert("Sigh in failed: "+ error.message)
  }
}
  
  
  return (
    
    <View style={styles.container}>
      
    
      <Text style={styles.text1}>Cocoa app</Text>

          <Image style={styles.logo} source={cocoa} />
          
          <View style={styles.boxdiv}>
            
            
          <Text >Username</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite seu nome'
          placeholderTextColor='#B2B2B2'
          value={name}
          onChangeText={text=>setName(text)}
          
          
          />
          
          </View>

            <View >
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'
          value={password}
          onChangeText={text=>setSenha(text)}
        />
          
            </View>

                <View>
          <TouchableOpacity onPress={()=> SighIn()} >
         <Text style={styles.bottonInput}>Login</Text>
          </TouchableOpacity>
          
                </View>

                    <View>
             <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text style={styles.NotRegister}>Não possuo cadastro</Text>
            </TouchableOpacity> 
            
                    
                    </View>

                            

                       
                        
    </View>
  )
}