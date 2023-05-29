
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library"
import { View, Text, TouchableOpacity } from "react-native";


export default function Galery(){
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type,setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode);
  const cameraRef = useRef(null);

  useEffect(()=>{
      (async () =>{
          MediaLibrary.requestPermissionsAsync();
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
      })();
  },[])

  return (
      <View style={styles.container}>
            
          <Camera 
          style={styles.camera} 
          type={type}
          flashMode={flash}
          ref={cameraRef}/>

          

      </View>

  )
}