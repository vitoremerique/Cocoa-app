import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { getAuth, signOut } from "firebase/auth";

export const Config= () => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out!");
      // Redirecione para a tela de login ou para qualquer outra tela desejada
    } catch (error) {
      console.log(error);
      alert("Sign out failed: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Config;