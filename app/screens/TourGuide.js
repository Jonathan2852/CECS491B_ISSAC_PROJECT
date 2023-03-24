import React, {useState} from "react";
import { StyleSheet, Text,View, Pressable,Image, Modal} from "react-native";
import {COLORS, SIZES} from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'

const TourGuide = ({navigation}) =>{
    const[showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

   

    return(
        <View style = {styles.container}>
            {/* Creates the title */}
            <View style= {styles.title_container}>
                <Text style= {{
                    fontWeight: 'bold',
                    fontSize: 40,
                    paddingTop: 30,
                    paddingBottom: 30,
                    color: '#FAEBEFFF',
                    }}>Tour Guide Options</Text>
            </View>
            {/* Creates the view for the direction */}
            <View style ={{
                alignItems: 'center',
                paddingBottom: 15,
                borderColor: '#FFFFFF',
                borderWidth: 3,
                borderRadius: 6,
                backgroundColor: '#C3E3EB',
                width: 400,
                marginLeft: 7
                

            }}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>Choose any of the following options to manuever the robot.</Text>
            </View>

            {/* Spacing for the buttons */}
            <View style = {{paddingBottom: 40 }}></View>
            
            {/* Creates the first row for free roam and the question */}
            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Icon name = 'robot' size={40} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 10,
                        color: '#FAEBEFFF'

                    }}> Free-Roam</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable style ={styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>

            </View>
          
            <View style = {{paddingBottom: 50 }}></View>

             {/* Creates the second row for free manuel and the question*/}
            <View style = {{flexDirection: 'row'}}>
                <Pressable onPress={()=>navigation.navigate("Controller")} style ={styles.option_container}>
                <Icon name = 'controller-classic' size={50} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#FAEBEFFF',
                        padding: 10

                    }}> Manuel      </Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable onPress={()=>{
                                setShowModal(true)
                                }} 
                                style ={styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
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
        width: 280,
        backgroundColor: '#6F8695',
        flexDirection:'row',
        borderColor:'#FAEBEFFF',
        borderWidth: 2,
        marginLeft: 10
    }, 
    help_container: {
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#FAEBEFFF',
        borderWidth: 2,
        borderRadius: 14,
        height: 100,
        width: 100,
        backgroundColor: '#D4AF37'
    }
})