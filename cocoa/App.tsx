

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import {Home} from './src/screens/Home';
import Config from './src/screens/Config';
import {Ionicons} from '@expo/vector-icons'
import Galery from './src/screens/Galery';
import Cam from './src/screens/Cam';





const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



function HomeTab() {
  return (
  
      <Tab.Navigator screenOptions={{tabBarShowLabel:false, tabBarActiveTintColor:'#FFA721' ,tabBarStyle:{position:'absolute',
       backgroundColor:'#D9D9D9', borderTopColor:'#FFFF',
       borderTopWidth:0, bottom:0, left:0, right:0, elevation:0,
       borderRadius:4, height:60
       
       }}}>
       
        <Tab.Screen name="Homee" component={Home} options={
          {title:'', headerTransparent:true, headerShown:false, tabBarIcon:({color,size, focused})=>
          {
            return <Ionicons name='home' size={size} color={color}/>
          }}}/>


        <Tab.Screen name ="Camera" component={Cam}  options={
          {title:'', headerTransparent:true, headerShown:false , tabBarIcon:({color,size, focused})=>
          {
            return <Ionicons name='camera' size={size} color={color}/>
        }}}/>

        <Tab.Screen name ="Galeria" component={Galery}  options={
          {title:'', headerTransparent:true, headerShown:false , tabBarIcon:({color,size, focused})=>
          {
            return <Ionicons name='images' size={size} color={color}/>
        }}}/>
        
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

    <Stack.Navigator initialRouteName='Login'>
    {/* <Stack.Screen name='Home' component={HomeTab} options={{title:'', headerTransparent:true, headerShown:false}}/> */}
    <Stack.Screen name="Login" component={Login} options={{title:'', headerTransparent:true, headerShown:false}}/>
    
    <Stack.Screen name='Register' component={Register} options={{headerTransparent:true, headerShown:true, gestureEnabled:true}}/>

    
    
    

    </Stack.Navigator>
    

    </NavigationContainer>
    
    
)}


