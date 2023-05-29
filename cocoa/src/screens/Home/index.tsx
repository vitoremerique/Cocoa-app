import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home(){
  const navigate = useNavigation();  
    return(
      <SafeAreaView style={styles.SafeArea}>
      
      <ScrollView>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>

    <View style = {styles.container}>

      <Text>Home</Text>
    </View>
    <View style = {styles.container}>

      <Text>Home</Text>
    </View>


      </ScrollView>
      
      </SafeAreaView>


    )

}