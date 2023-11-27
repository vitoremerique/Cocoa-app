import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";



export const Config= () => {
  
  const navigation = useNavigation();
  const handleLogout = async () => {
    navigation.navigate("Login")
  };

  const handleAlter = async () => {
    navigation.navigate("AlterarSenha")
  };

  const handleDelete = async () => {
    navigation.navigate("DeletarConta")
  };


  return (
    <View style={styles.container}> 
     <View style={styles.buttons}>
     
      <Button title="Logout" onPress={handleLogout} />

     </View>

     <View style={styles.buttons}>
     
     <Button title="Alterar dados" onPress={handleAlter}></Button>

     </View>

     <View style={styles.buttons}>
     
     <Button title="Excluir conta" onPress={handleDelete}></Button>

     </View>
      
     
    </View>
  );
};

export default Config;