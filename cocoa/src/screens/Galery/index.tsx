
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

let options ={
    
}


export default function ImagePickerExample() {
    const [image, setImage] = useState("");
  
    const pickImage = async () => {
     
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom:60 }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }