/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  VersionCheck,
} from 'react-native';

import {HomeScreen, Quiz} from './screens';
import {DestinationQueue,DestinationControl} from './screens'
import {TourGuide} from './screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
import { Screen } from 'react-native-screens';
import {firebase} from './screens/config';
import{Bluetooth} from './screens';
import {LoadingScreen} from './screens';

//krimika's controller thing:
import {Controller2} from './screens';

import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Header from './screens/Header';

const Stack = createNativeStackNavigator()

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [] );

  if (initializing) return null;
  if (!user){
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "LoadingScreen" component={LoadingScreen}/>
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerTitle: () => <Header name="Login" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'#fff',
            shadowColor: '#000',
            elevation:25
          }
        }} 
        />

        

      <Stack.Screen
         name= "Registration"
         component={Registration}
         options={{
          headerTitle: () => <Header name= "Registration"/>,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25
          }

         }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      
      <Stack.Screen name = "HomeScreen" component={HomeScreen} 
      options={{
        headerTitle: () => <Header name="Home Screen" />,
        headerStyle: {
          height: 150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor:'#6F8695',
          shadowColor: '#000',
          elevation:25
        }
      }} />
        <Stack.Screen name = "TourGuide" component = {TourGuide}/>
        <Stack.Screen name = "DestinationQueue" component = {DestinationQueue}/>
        <Stack.Screen name = "QuizApp" component = {Quiz}/>
        <Stack.Screen name = "Controller2" component = {Controller2} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
