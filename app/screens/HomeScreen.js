/* eslint-disable prettier/prettier */
import {COLORS, SIZES} from '../constants'
import React, {useState} from "react";
import { StyleSheet, Text,View, Pressable,Image, Modal,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HomeScreen = ({navigation}) => {
    return(
    <ScrollView>
    <View style = {styles.container}>
        <View style = {styles.title_container}>
            <Icon name = 'home-circle' size={50} color = "#FAEBEFFF"/>
            <Text style= {{
                        fontWeight: 'bold',
                        fontSize: 40,
                        paddingTop: 30,
                        paddingBottom: 30,
                        color: '#FAEBEFFF',
                        }}> Home</Text>
        </View>
        
        <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("DestinationQueue")} style= {styles.option_container} >
                 <Icon name = 'human-queue' size={40}/>
                <Text style ={styles.text_style}>  Destination Queue </Text>
            </Pressable>
        </View>

        <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("DestinationControl")} style= {styles.option_container} >
                 <Icon name = 'human-queue' size={40}/>
                <Text style ={styles.text_style}>  Destination Control </Text>
            </Pressable>
        </View>

        <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("QuizApp")} style = {styles.option_container}>
                 <Icon name = 'nintendo-game-boy' size={40}/>
                <Text style = {styles.text_style}> Learning Assessment</Text>
            </Pressable>
        </View>

        <View style = {styles.button_container}>
            <Pressable style = {styles.option_container}>
                <Icon name = 'qrcode' size={40} />
                <Text style = {styles.text_style}> QR Scan</Text>
            </Pressable>
        </View>

        <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("Bluetooth")} style = {styles.option_container}>
                <Icon name = 'bluetooth' size={40} />
                <Text style = {styles.text_style}> Bluetooth</Text>
            </Pressable>
        </View>

        <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("TourGuide")} style = {styles.option_container}>
                <Icon name = 'transit-detour' size={40} />
                <Text style = {styles.text_style}> Tour Guide</Text>
            </Pressable>
        </View>
        
        <Image
                 source ={require('../assets/images/DottedBG.png')}
                 style = {{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                 }}
                 resizeMode = {'contain'}
                 />

    </View>
    </ScrollView>
    
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    title_container: {
        alignItems: 'center',
        paddingBottom: 17,
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    container: {
        backgroundColor: COLORS.background,
        flex: 1
    },
    option_container:  {
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 14,
        height: 75,
        width: 300,
        backgroundColor: '#6F8695',
        borderColor:'#FAEBEFFF',
        borderWidth: 3,
        flexDirection: 'row'
       
    },
    text_style: {
        color: '#000000',
        fontWeight:'bold',
        fontSize: 20
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        
    
    }
})