import React from "react";
import {Button, StyleSheet, Text,View, Pressable,Image} from "react-native";
import {COLORS, SIZES} from '../constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TourGuide = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            {/* Creates the title */}
            <View style= {styles.title_container}>
                <Text style= {{
                    fontWeight: 'bold',
                    fontSize: 30,
                    paddingBottom: 30,
                    color: '#FAEBEFFF'
                    }}>Tour Guide Options</Text>
            </View>
            {/* Creates the view for the direction */}
            <View style ={{
                alignItems: 'center',
                paddingBottom: 15,
                borderColor: '000000',
                borderWidth: 3,
                borderRadius: 14

            }}>
                <Text style={{color: '#FAEBEFFF'}}>Choose any of the following options to manuever the robot.</Text>
            </View>

            {/* Spacing for the buttons */}
            <View style = {{paddingBottom: 40 }}></View>
            
            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    {/* <Icon name = 'add-box' size={20}/> */}
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 10,
                        color: '#FAEBEFFF'

                    }}> Free-Roam</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable style ={styles.help_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000000'
                    }}> Help</Text>
                </Pressable>

            </View>
            
            <View style = {{paddingBottom: 50 }}></View>

            <View style = {{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000000'

                    }}> Manuel</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable style ={styles.help_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000000'
                    }}> Help</Text>
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
  
    )
}

export default TourGuide;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex:1
    },
    title_container: {
        alignItems: 'center',
        
    },
    option_container:  {
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 14,
        height: 100,
        width: 300,
        backgroundColor: '#6F8695'
    },
    help_container: {
        alignItems:'center',
        justifyContent: 'center',
        borderColor: '000000',
        borderWidth: 3,
        borderRadius: 14,
        height: 100,
        width: 100
    }
})