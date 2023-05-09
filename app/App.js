/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import{Bluetooth} from './screens';

//krimika's controller thing:
import {Controller2} from './screens';

const Stack = createNativeStackNavigator()
/*returning the quiz layout and functionality*/
const App = () => {
  
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name = "HomeScreen"
          component={HomeScreen}
        
          />
        <Stack.Screen
          name = "TourGuide"
          component = {TourGuide}
          />
          
        <Stack.Screen
          name = "DestinationQueue"
          component = {DestinationQueue}

        />
        <Stack.Screen
          name = "QuizApp"
          component = {Quiz}
        />

        <Stack.Screen
          name = "DestinationControl"
          component = {DestinationControl}
        />
        
        <Stack.Screen 
          name = "Controller2"
          component = {Controller2} />

        <Stack.Screen 
          name = "Bluetooth"
          component = {Bluetooth} />
      </Stack.Navigator>
    </NavigationContainer>

    
    // <Quiz/>
    // <DestinationQueue/>
  );
}



export default App;
