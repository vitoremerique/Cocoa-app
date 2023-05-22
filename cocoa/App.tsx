

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Config from './src/screens/Config';
import {Ionicons} from '@expo/vector-icons'




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
  
      <Tab.Navigator screenOptions={{tabBarShowLabel:false, tabBarActiveTintColor:'#FFA721' ,tabBarStyle:{position:'absolute',
       backgroundColor:'#D9D9D9', borderTopColor:'#FFFF',
       borderTopWidth:0, bottom:14, left:14, right:14, elevation:0,
       borderRadius:4, height:60
       
       }}}>
       
        <Tab.Screen name="Home" component={Home} options={
          {title:'', headerTransparent:true, headerShown:false, tabBarIcon:({color,size, focused})=>
          {
            return <Ionicons name='home' size={size} color={color}/>
          
          

        
        }
          
          }}/>
        
        <Tab.Screen name ="Configuração" component={Config}  options={
          {title:'', headerTransparent:true, headerShown:false , tabBarIcon:({color,size, focused})=>
          {
            return <Ionicons name='settings' size={size} color={color}/>
          
          

        
        }}}/>
        
        
      </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login} options={{title:'', headerTransparent:true, headerShown:false}}/>
    <Stack.Screen name='Register' component={Register} options={{}}/>
    <Stack.Screen name='Home' component={HomeTab} options={{title:'', headerTransparent:true, headerShown:false}}/>

    </Stack.Navigator>

    </NavigationContainer>
    
    
)}


