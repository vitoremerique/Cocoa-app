
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker"
import * as MediaLibrary from "expo-media-library"
import { View, Text,  Button, Image, Alert, StatusBar, } from "react-native";
import { uploadPicture } from "../../firebase";







export default function Galery(){
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
   
    try{
    const cameraResp = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality:1,
     
    });
   console.log(cameraResp)
    
    if (!cameraResp.cancelled) {
      
      setImage(cameraResp.uri);
      const img  = image;
      const fileName = img.split("/").pop();
      const uploadResp = await uploadPicture(img, fileName, (v) =>
        console.log(v)
      );
      
      console.log("PASSOOOU"+uploadResp)
    }
  }catch(e){
    
    Alert.alert("problemaaa "+e.message)
    console.log("porrra "+e.message)
  }
  
    
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