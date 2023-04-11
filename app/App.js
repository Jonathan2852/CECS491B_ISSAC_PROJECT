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
  View,
  StyleSheet,
} from 'react-native';
import {Quiz} from './screens';
import {DestinationQueue} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
import { Screen } from 'react-native-screens';

//krimika's controller thing:
import {Controller} from './screens';



const Stack = createNativeStackNavigator()
/*returning the quiz layout and functionality*/
const App = () => {
  
  return (
    <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name = "DestinationQueue" component = {DestinationQueue}/>
      <Stack.Screen name = "QuizApp" component = {Quiz} />
      <Stack.Screen name = "Controller" component = {Controller} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  testing: {
      fontFamily: 'RobotoCondensed-Light',
      fontSize: 50,
  }
});


export default App;
