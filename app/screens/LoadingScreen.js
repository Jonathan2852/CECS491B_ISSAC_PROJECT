/* eslint-disable prettier/prettier */
import React from "react";
import{ ImageBackground, StyleSheet, View, Text, Pressable } from 'react-native';

const LoadingScreen = ({navigation}) => {

    const image = {uri: 'https://raw.githubusercontent.com/daxile6/CECS491B_ISSAC_PROJECT/main/app/assets/images/LoadingPage_image.png'}

    return(
        /* Returns a screen that prompts the user to continue*/
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.button_container}>
                    <Pressable onPress={() => navigation.navigate("Login")} style={styles.option_container}>
                        <Text style={styles.text_style}> Click Here to Begin </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

/* style sheet that styles the loading screen*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#000000'
    },
    image: {
        flex: 1.05,
        width: '100%',
        height: '100%',
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    option_container: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#00000090', // Transparent black color
    },
    text_style: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 20,
        fontFamily: 'Geo-Regular', //FIXME
        justifyContent: 'flex-end'
    },
});

export default LoadingScreen;
