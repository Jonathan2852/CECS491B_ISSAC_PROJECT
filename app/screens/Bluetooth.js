/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {COLORS, SIZES} from '../constants'
import React, {useState} from "react";
import { Pressable, StyleSheet, Text,View, Modal, Image} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Bluetooth = ({navigation}) => {
    const[actionTriggered,setActionTriggered] =  useState(false)
    const[showModal, setShowModal] = useState(false);
    return(
        <View>

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
                        {/* //Creates the second view which is the white one */}
                        <View style = {{
                            backgroundColor: COLORS.white,
                            width: '90%',
                            borderRadius: 20,
                            padding: 20,
                            alignItems: 'center'
                            }}>
                                <Text style ={{
                                    fontSize:30,
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    paddingBottom: 20
                                }}>Manuel Navigation</Text>

                                <Image source ={{uri: 'https://cdn.windowsreport.com/wp-content/uploads/2019/05/xbox-controller-goes-to-player-2-on-pc.jpg'}}
                                    style ={{width: 200, height: 140,borderRadius:30}}/>
                                <View style ={{paddingBottom: 20 }}></View>
                                <Text style ={{
                                    textAlign:'left',
                                    color: '#000000',
                                    fontSize: 20,
                                    paddingBottom: 25
                                }}> Manuel navigation allows the user to gain full control of the robot, manuevring the 
                                robot wherever the user desires.
                                </Text>
                                <View>
                                    <Pressable onPress={()=>{setShowModal(false)}} >
                                        <Icon name = "backspace" size={40} color='red'/>
                                     </Pressable>
                                 </View>
                        </View>
                        </View>:
                        null }
            </Modal>
                
        </View>
        

    )


}

export default Bluetooth;

const styles = StyleSheet.create({
    heading: {
        fontSize: 25, 
        paddingBottom: 20,
        color: '#000000'
    },
    button:{
        height: 60,
        width: 385,
        borderWidth: 1.5,
        justifyContent: 'center',
        paddingLeft: 15,
        marginLeft: 12.5,
        marginBottom: 10,
    },
    deviceName:{
        fontSize: 20,
        color: '#000000',
    },
    connectedFont:{
        fontSize: 40,
        alignContent: 'center',
        paddingTop: 250,
        color: '#000000',
    },
})