import cocoa from './../Imagens/cocoa.jpg';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
  const [email,setEmail] = useState();
  const [senha,setSenha] = useState();
  const [leading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH

  
const navigation = useNavigation();

const SighIn = async()=>{
  setLoading(true)
  try {
    const  response = await signInWithEmailAndPassword(auth, email, senha)
    
    navigation.navigate('Home')
    
  } catch (error:any) {
    console.log(error)
    alert("Sigh in failed: "+ error.message)
  }finally{
    setLoading(false)
  }
}
  
  
  return (
    
    <View style={styles.container}>
      
    
      <Text style={styles.text1}>Cocoa app</Text>

          <Image style={styles.logo} source={cocoa} />
          
          <View style={styles.boxdiv}>
            
            
          <Text >Email</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite seu email'
          placeholderTextColor='#B2B2B2'
          value={email}
          onChangeText={text=>setEmail(text)}
          keyboardType='email-address'
          
          />
          
          </View>

            <View >
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'
          value={senha}
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

                        <View>
            <TouchableOpacity>
            <Text style={styles.NotRegister}>Esqueci minha senha</Text>
            </TouchableOpacity>
                        </View>

                       
                        
    </View>
  )
}