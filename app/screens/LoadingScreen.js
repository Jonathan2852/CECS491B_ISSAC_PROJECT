/* eslint-disable prettier/prettier */
import React from "react";
import{ View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = ({navigation}) => {

    const image = {uri: 'https://raw.githubusercontent.com/daxile6/CECS491B_ISSAC_PROJECT/main/app/assets/images/nanobot_homepage_2.png'}

    return(
        <View style={styles.container}>
            <ImageBackground source = {image} resizeMode = "cover" style = {styles.image}>

            <View style = {styles.button_container}>
            <Pressable onPress={()=>navigation.navigate("HomeScreen")} style= {styles.option_container} >
                <Text style ={styles.text_style}> Click here to Begin </Text>
            </Pressable>
        </View>
        
            </ImageBackground>
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image:{
        width: null,
        height:  null,
        flex:1,
        
      },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    text_style: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 20,
        fontFamily: 'Geo-Regular', //FIXME
    },
});
export default LoadingScreen;