import React from "react";
import {Button, StyleSheet, Text,View, Pressable} from "react-native";
import {COLORS, SIZES} from '../constants'

const TourGuide = ({navigation}) =>{
    return(
        <View>
            <View style= {styles.title_container}>
                <Text style= {{
                    fontWeight: 'bold',
                    fontSize: 30,
                    paddingBottom: 30
                    }}>Tour Guide Options</Text>
            </View>
            <View style ={{
                alignItems: 'center',
                paddingBottom: 15,
                borderColor: '000000',
                borderWidth: 3,
                borderRadius: 14

            }}>
                <Text>Choose any of the following options to manuever the robot.</Text>
            </View>

            <View style = {{paddingBottom: 40 }}></View>
            
            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontColor: '000000',
                        fontWeight: 'bold',
                        padding: 10

                    }}> Free-Roam</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable style ={styles.help_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontColor: '000000',
                        fontWeight: 'bold',
                    }}> Help</Text>
                </Pressable>

            </View>
            
            <View style = {{paddingBottom: 50 }}></View>

            <View style = {{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontColor: '000000',
                        fontWeight: 'bold'

                    }}> Manuel</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable style ={styles.help_container}>
                    <Text style = {{
                        fontSize: 30,
                        fontColor: '000000',
                        fontWeight: 'bold',
                    }}> Help</Text>
                </Pressable>
            </View>

        
        

        </View>
  
    )
}

export default TourGuide;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background
    },
    title_container: {
        alignItems: 'center',
        
    },
    option_container:  {
        alignItems:'center',
        justifyContent: 'center',
        borderColor: '000000',
        borderWidth: 3,
        borderRadius: 14,
        height: 100,
        width: 300
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