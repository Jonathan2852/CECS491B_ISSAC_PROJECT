/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';

// function for the entire app
const DestinationQueue = ({navigation}) => {
  const image = {uri: ''}
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState([]);

  /*
  Function that checks ofr invalid user input and alerts them to 
  try again
  */
  const handleSubmit = () => {
    if(!locationName.trim()) {
    alert("Please type in a location!")
    }
    else{
      setLocations([...locations, locationName]);
      setLocationName('');   
    }
  };

  /*
  Function that responds to a user pressing the delete button and will 
  delete the current the latest laction from the queue
  */
  const handleDelete = () => {
    locations.shift()
    setLocations([...locations, locationName]);
  }


  /*
  responsible for layering out the the structure of the apps
  */
  return (
    <View style={styles.container}>
      <ImageBackground /*source = {image} resizeMode = "cover" style = {styles.image}*/>
      <Text style={styles.header}>Destination Queue</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Add Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Name of Location"
          onChangeText={setLocationName}
          value={locationName}
        />

        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View> 

        <View style={styles.Delete_buttonContainer}>
            <TouchableOpacity onPress={handleDelete} style={styles.Delete_button}>
              <Text style={styles.submitButtonText}>Delete</Text>
            </TouchableOpacity>
        </View> 
        {/* <Button
          title = "Navigate to Quiz"
          onPress ={() => navigation.navigate("QuizApp")}
          />

        <Button
          title = "Navigate to Controller"
          onPress ={() => navigation.navigate("Controller")}
          /> */}
          
      </View>
      <ScrollView>
      <View style={styles.queueContainer}>
        <Text style={styles.queueHeader}>Queues of location</Text>
        <View style={styles.locationList}>
          {locations.map((location, index) => (
            <Text key={index} style={styles.location}>{location}</Text>
          ))}
        </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

/*
array of styles that allows for formatting and 
editing the buttons and layout of the screen
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#649bed',
    width: '100%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
    color: ''
  },
  Delete_buttonContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Delete_button: {
    backgroundColor: '#d1717e',
    width: '100%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    color: ''
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color : '#000000',
  },
  formContainer: {
    marginVertical: 20,
  },
  formHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color : '#000000'
  },
  image:{
    width: null,
    height:  null,
    flex:1
    
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#649bed',
    padding: 5,
    alignItems: 'center',
    
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  queueContainer: {
    marginTop: 20,
  },
  queueHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  locationList: {
    marginTop: 10,
  },
  location: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center'
  },
});

export default DestinationQueue;