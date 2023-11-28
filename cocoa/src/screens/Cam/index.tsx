
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker"

import { View, Text,  Button, Image, Alert, StatusBar, } from "react-native";








export default function Cam(){
  const [image, setImage] = useState("");
  
 
  
  const [permission,requestPermission] = ImagePicker.useCameraPermissions();

  if(permission?.status !== ImagePicker.PermissionStatus.GRANTED){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{alignSelf:'center'}}>Permissão não autorizada!</Text>
        <StatusBar style="auto"/>
        <Button title="Pedir permissão " onPress={requestPermission}/>
      </View>
    )
  }

  

  const takePhoto = async()=>{
   
   
    
  }
  
 

  // const takePicture =async()=> 
  //  try{ 
  //   if(cameraResp){
  //       const data = await camera.takePictureAsync(null)
  //       setImage(data.uri)
  //       console.log(data)  
  //       const [uri] = data
  //       const fileName = uri.split('/').pop();

  //      const upload =  await uploadPicture(data.uri,fileName,(v)=>{
  //       console.log(v);
  //      });
  //       console.log(upload)

  //   }}catch(e){
  //     Alert.alert("Error uploading Image "+ e.message)
  //   }
  // }

 

  
  return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{alignSelf:'center'}}>Permitido</Text>
        <StatusBar style="auto"/>
        <Button title="Tirar foto" onPress={takePhoto}/>
            </View>
          
  )
}