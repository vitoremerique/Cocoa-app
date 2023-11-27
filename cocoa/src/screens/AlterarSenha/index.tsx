import React, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


export const AlterarSenha = ()=>{

  const [nome, SetNome]= useState("");
  const [senhaAntiga,SetAntiga]= useState("");
  const [novaSenha,SetSenhaNova] = useState("");
  const navigation = useNavigation();
  const Salvar = async () => {
    try {
  
    console.log("name:", nome);
    console.log("senhaAntiga:", senhaAntiga);
    console.log("senhaNova:", novaSenha);
      
  
      const response = await axios.put("http://localhost:8080/user", {
        nome: nome,
        senhaAntiga: senhaAntiga,
        novaSenha: novaSenha
      });
  
      console.log(response.data); 
  
      alert("Alterado com sucesso")
  
      navigation.navigate("Homee");
    } catch (error) {
      console.log("Erro:", error);
      console.error(error);
      alert("Sign in failed: " + error.message);
    }
  };

return (
    <View style={styles.container}>
         <View style={styles.boxdiv}>
            
            <Text >Nome do usuário</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Digite seu nome'
            placeholderTextColor='#B2B2B2'
            keyboardType="name-phone-pad"
            value={nome}
            onChangeText={text=>SetNome(text)}
            />
            
            </View>

            <View style={styles.boxdiv}>
            
            <Text >Senha atual</Text>
            <TextInput
            style ={styles.inputBox}
            placeholder='Digite sua senha atual'
            placeholderTextColor='#B2B2B2'
            value={senhaAntiga}
            onChangeText={text=>SetAntiga(text)}
            
            />
            
            </View>

            <View style={styles.boxdiv}>
          <Text>Nova Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua nova senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'
          value={novaSenha}
          onChangeText={text=>SetSenhaNova(text)}
          
          />
          
            </View>

            <TouchableOpacity onPress={()=> Salvar()}>

              <Text style = {styles.BottonRegister}>Salvar</Text>

            </TouchableOpacity>

           

            



      </View>
);
}
