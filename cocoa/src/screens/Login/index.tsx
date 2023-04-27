import cocoa from './../Imagens/cocoa.jpg';
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {styles} from './styles';


export default function Login() {
  function onPress(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Cocoa app</Text>

          <Image style={styles.logo} source={cocoa} />
          
          <View style={styles.boxdiv}>
            
          <Text >Email</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite seu email'/>
          </View>

            <View >
          <Text>Senha</Text>
          <TextInput
          style ={styles.inputBox}
          placeholder='Digite sua senha'
          secureTextEntry={true}/>
          
            </View>

                <View>
          <TouchableOpacity>
         <Text style={styles.bottonInput}>Login</Text>
          </TouchableOpacity>
          
                </View>

                    <View>
            <TouchableOpacity>
            <Text style={styles.NotRegister}>Não possuo cadastro</Text>
            </TouchableOpacity>
                    </View>

                        <View>
            <TouchableOpacity>
            <Text style={styles.NotRegister}>Esqueci minha senha</Text>
            </TouchableOpacity>
                        </View>
    </View>
  );
}