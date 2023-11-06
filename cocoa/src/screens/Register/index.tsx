
import { View,Text, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import { StackRouter, useNavigation } from "@react-navigation/native";
import {styles} from './styles';
import { useEffect, useState } from "react";
import axios from "axios";



export default function Register() {
  const [name, SetName]= useState("");
  const [email,SetEmail]= useState("");
  const [password,SetPassword] = useState("");
  



  const navigation = useNavigation();

// const SighUp = async()=>{
  
//   try {
//     const response = axios.post("http://localhost:8080/user",{name:name, email:email, password:password})
    
//     console.log(response)
//     console.log((await response).data)
    
    
//     navigation.navigate("Login")
   
    
//   } catch (error:any) {
//     console.log(error)
//     alert("Sigh in failed: "+ error.message)
//   }
// }


const SighUp = async () => {
  try {

    console.log("name:", name);
console.log("email:", email);
console.log("password:", password);

    const response = await axios.post("http://192.168.0.103:8080/user", {
      name: name,
      email: email,
      password: password
    });

    console.log(response.data); 

    navigation.navigate("Login");
  } catch (error) {
    console.log("Erro:", error);
    console.error(error);
    alert("Sign in failed: " + error.message);
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

            <TouchableOpacity onPress={()=> SighUp()}>

              <Text style = {styles.BottonRegister}>Registrar</Text>

            </TouchableOpacity>

           

            



      </View>
      
    );
  }