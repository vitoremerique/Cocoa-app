import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import path from 'path'
export default function Galery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão para acessar a galeria é necessária.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
   
    
    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
    console.log(result.uri)
    
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert('Selecione uma imagem antes de enviar.');
      return;
    }
    const imageName = selectedImage.split('/').pop()
    
    const formData = new FormData();
    
    formData.append('file', JSON.parse(JSON.stringify({
      uri: se,
      name: '2023-11-04-123905.jpg',
      type: 'image/jpg',
    })));

    console.log(formData)
    

    try {
      const response = await axios.post('http://localhost:8080/files', formData.get, {
        headers: {
          
          'Content-Type': 'multipart/form-data'
        },
      });

      console.log('Resposta da API:', response.data);
      Alert.alert('Upload realizado com sucesso!');
    } catch (error) {
      console.error('Erro no upload:', error);
      Alert.alert('Erro no upload. Tente novamente.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Imagem Selecionada:</Text>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}

      <TouchableOpacity onPress={pickImage}>
        <Text>Escolher Imagem</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={uploadImage}>
        <Text>Enviar Imagem</Text>
      </TouchableOpacity>
    </View>
  );
};


