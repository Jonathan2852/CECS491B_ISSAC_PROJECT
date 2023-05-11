/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {COLORS, SIZES} from '../constants'
import React, {useState} from "react";
import { Pressable, StyleSheet, Text,View, Modal, Image, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Bluetooth = ({navigation}) => {
    const[actionTriggered,setActionTriggered] =  useState(false)
    const[showModal, setShowModal] = useState(false);
    const image = {uri: 'https://raw.githubusercontent.com/daxile6/CECS491B_ISSAC_PROJECT/main/app/assets/images/genericbackground.png'}

    return(
        <View style = {styles.container}>
            <ImageBackground source={image}  style = {styles.backGroundImage}>

            <View>
                <Text style={styles.heading}>Choose a device to connect:</Text>
            </View>

            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        Steven's Airpods
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        wireless controller
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        Krimika's Airpods
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        Krimika's Iphone(2)
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        JoeyJax
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        iphone
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        xcontroller3782
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>
            <View style={styles.button}> 
        
                <Pressable onPress={()=>{
                        setShowModal(true)
                        setActionTriggered('FREEROAM')}}>

                    <Text style={styles.deviceName}>
                        pscontroller
                        <Icon name ='information-outline' size={20}/>
                    
                    </Text>
            
                </Pressable>
            </View>

            <Modal
                animationType = "fade"
                visible = {showModal}>
                    {actionTriggered === 'FREEROAM' ? 
                        //    Creates the first view which is the background
                            <View style = {{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={styles.connectedFont}>
                                Your device has been successfully connected!
                            </Text>
                            <View>
                                        <Pressable onPress={()=>{setShowModal(false)}} >
                                            <Icon name = "backspace" size={40} color='black' padding={40}/>
                                        </Pressable>
                                    </View>
                            </View>:
                        actionTriggered === 'MANUEL' ?
                        <View style = {{
                            flex: 1,
                            backgroundColor: COLORS.background,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            
                           
                        </View>:
                            null }
                </Modal>
            </ImageBackground>
        </View>
        

    )


}

export default Bluetooth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 25, 
        paddingBottom: 20,
        color: '#bacfd9',
        padding: 20,
    },
    button:{
        height: 60,
        width: 385,
        borderWidth: 1.5,
        justifyContent: 'center',
        paddingLeft: 15,
        marginLeft: 12.5,
        marginBottom: 10,
        borderColor: '#bacfd9',
        borderRadius: 18,

    },
    deviceName:{
        fontSize: 20,
        color: '#bacfd9',
    },
    connectedFont:{
        fontSize: 40,
        alignContent: 'center',
        paddingTop: 250,
        color: '#000000',
    },
    backGroundImage: {
        flex: 1,
    },
})