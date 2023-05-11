/* eslint-disable prettier/prettier */
import {COLORS, SIZES} from '../constants'
import React, {useState} from "react";
import { StyleSheet, Text,View, Pressable,Image, Modal,ScrollView, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HomeScreen = ({navigation}) => {

    const image = {uri: 'https://raw.githubusercontent.com/daxile6/CECS491B_ISSAC_PROJECT/main/app/assets/images/image.png'}
    return(
    /*creates the view for the home screen*/
    <View style = {styles.container}>
            <ImageBackground source={image} resizeMode='cover' style = {styles.backGroundImage}>

            <View style = {styles.title_container}>
            </View>

                 {/* Buttton for the destination Queue feature */}
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("DestinationQueue")} style={styles.option_container}>
                        <Text style={styles.text_style}> Destination Queue </Text>
                    </Pressable>
                </View>

                {/* Button for the destination control feature */}
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("DestinationControl")} style={styles.option_container}>
                        <Text style={styles.text_style}> Destination Control </Text>
                    </Pressable>
                </View>

                {/* Button for the learning assesment feature */}
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("QuizApp")} style={styles.option_container}>
                        <Text style={styles.text_style}> Learning Assessment </Text>
                    </Pressable>
                </View>

                {/* buttton for the qr scanner feature */}
                <View style={styles.button_container}>
                    <Pressable style={styles.option_container}>
                        <Text style={styles.text_style}> QR Scanner </Text>
                    </Pressable>
                </View>

                {/* button for the bluetooth feature */}
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("Bluetooth")} style={styles.option_container}>
                        <Text style={styles.text_style}> Connect Bluetooth </Text>
                    </Pressable>
                </View>

                {/* button for the controls feature */}
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("TourGuide")} style={styles.option_container}>
                        <Text style={styles.text_style}> Controls </Text>
                    </Pressable>
                </View>
  
        {/* <View style = {styles.button_container}>
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
        </View> */}
        
        
    </ImageBackground>
    </View>
    
    /* </ScrollView> */

    
    )

}

export default HomeScreen

// styles sheet  that styles the features of the buttons
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#000000'
    },
    title_container: {
        alignItems: 'center',
        paddingBottom: 170,
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    backGroundImage: {
        flex: 1.05,
        width: '100%',
        height: '100%',
    },
    option_container:  {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#7ca3bf',
        opacity: 0.5
       
    },
    text_style: {
        color: '#fff',
        fontWeight:'bold',
        fontSize: 20
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    }

})