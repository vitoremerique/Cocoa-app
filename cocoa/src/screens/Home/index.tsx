import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import {Historic} from './../../components/Historic';

export function Home() {

  const [ historic, setHistoric ] = useState([]);


  const getHistoric = async () => {
    try {
      const response = await fetch(
        'http://192.168.0.101:19001/produtos',
      );
      const json = await response.json();
      
      setHistoric(json);
    } catch (error) {
      console.error(error);
    }
    
  };

  // const getListHistoric = ()=>{
  //   fetch('http://192.168.0.101:19001/produtos',{
  //     method:"GET"
  //   }).then(res=>{
  //     return res.json();
  //   }).then(res=>{
  //     console.log(res);
  //     if(res){
  //       var respo = res.data;
  //       setHistoric(respo.data)
  //     }
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // }

 
useEffect(()=>{
// getListHistoric()
getHistoric()}
,)

return (
  // <View style={styles.container}>
  //   <SafeAreaView>
  //   <Text style={styles.title}>Histórico</Text>

  //   <ScrollView style={styles.product_list}>
  //     {historic.map((item, index) => {
  //         return (
  //             <View key={index} style={styles.card}>
  //                 <Historic historic={item} />
  //             </View>
  //         );
  //     })}
  //   </ScrollView>   
  //      </SafeAreaView>
  // </View>


  <View>
    
      <Text>a</Text>
    
  </View>
);
}


