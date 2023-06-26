
import { View,Text, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import { StackRouter, useNavigation } from "@react-navigation/native";
import {styles} from './styles';
import { useEffect, useState } from "react";
import axios from "axios";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [name, SetName]= useState("");
  const [email,SetEmail]= useState("");
  const [password,SetPassword] = useState("");
  
  const auth = FIREBASE_AUTH
  const db = FIREBASE_DB

  const navigation = useNavigation();

const SighUp = async()=>{
  
  try {
    const  response = await createUserWithEmailAndPassword(auth,email, password)
    addDoc(collection(db,"Users"),{
      email:email,
      name:name,
      password:password
    })
    console.log(response)
    
    navigation.navigate("Home")
   
    
  } catch (error:any) {
    console.log(error)
    alert("Sigh in failed: "+ error.message)
  }
}




//   const handleFormSubmit = async () => {
//     try {
//       fetch('http://192.168.0.101:19001/users', {
//   method: 'POST',
//   body: JSON.stringify({
    
//     Nome: name,
//     email:email,
//     password:password,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })

//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   navigation.navigate('Login')
  
//     } catch (error) {
//       console.error(error); // Trate possíveis erros na requisição
     
//     }
   
//   };





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

            <TouchableOpacity onPress={()=> SighUp()}>

              <Text style = {styles.BottonRegister}>Registrar</Text>

            </TouchableOpacity>

           

            



      </View>
      
    );
  }


