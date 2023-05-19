import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';


export default function Home(){
  const navigate = useNavigation();  
    return(

        <View style = {styles.container}>

        <Text>Home</Text>



        </View>


    )

}