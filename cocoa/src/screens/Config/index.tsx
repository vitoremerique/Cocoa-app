import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";


export const Config= () => {
  const handleLogout = async () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Config;