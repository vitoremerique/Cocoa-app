import cocoa from './../Imagens/cocoa.jpg';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';



export default function Login() {
  
const navigation = useNavigation();
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Cocoa app</Text>

          <Image style={styles.logo} source={cocoa} />
          
          <View style={styles.boxdiv}>
            
          <Text >Email</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite seu email'
          placeholderTextColor='#B2B2B2'
          />
          
          </View>

            <View >
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          placeholderTextColor='#B2B2B2'/>
          
            </View>

                <View>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
         <Text style={styles.bottonInput}>Login</Text>
          </TouchableOpacity>
          
                </View>

                    <View>
             <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text style={styles.NotRegister}>Não possuo cadastro</Text>
            </TouchableOpacity> 
            
                    
                    </View>

                        <View>
            <TouchableOpacity>
            <Text style={styles.NotRegister}>Esqueci minha senha</Text>
            </TouchableOpacity>
                        </View>
    </View>
  )
}