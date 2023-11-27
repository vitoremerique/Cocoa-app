import { View,Text } from "react-native";
import { styles } from "./styles";
import React from "react";
export function Historic({historic}){
    return(
        <View>
            <Text style ={styles.card_title}>{historic.nome}</Text>
            <Text style ={styles.card_title}>Id: {historic.id}</Text>
            <Text style ={styles.card_title}>Descrição {historic.descricao}</Text>
            <Text style ={styles.card_title}>Preço {historic.preco}</Text>
            <Text style ={styles.card_title}>Categoria  {historic.categoria}</Text>

        </View>
    )

}