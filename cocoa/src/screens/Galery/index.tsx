
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadPicture } from '../../firebase';

let options ={
    
}


export default function ImagePickerExample() {
    const [image, setImage] = useState("");
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        exif:true
      });
  
      
  
      if (!result.cancelled) {
        setImage(result.uri);
        const img  = image;
        const fileName = img.split("/").pop();
        const uploadResp = await uploadPicture(img, fileName, (v) =>
          console.log(v)
        );
        
        console.log("PASSOOOU"+uploadResp)
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom:60 }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }