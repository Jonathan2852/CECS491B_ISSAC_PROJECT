/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { StyleSheet, Text,View, Pressable,Image, Modal} from "react-native";
import {COLORS, SIZES} from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const TourGuide = ({navigation}) =>{
    const[actionTriggered,setActionTriggered] =  useState(false)
    const[showModal, setShowModal] = useState(false);
    

   

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
                <Pressable onPress={()=>{
                                setShowModal(true)
                                setActionTriggered('FREEROAM')
                                }}
                                style = {styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>

            </View>
          
            <View style = {{paddingBottom: 50 }}></View>

             {/* Creates the second row for free manuel and the question*/}
            <View style = {{flexDirection: 'row'}}>
                <Pressable onPress={()=>navigation.navigate("Controller2")} style ={styles.option_container}>
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
                                setActionTriggered('MANUEL')
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
            <Modal
            animationType = "fade"
            visible = {showModal}>
                {actionTriggered === 'FREEROAM' ? 
                    //    Creates the first view which is the background
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
                                    }}>Free-Roam Navigation</Text>

                                    <Image source ={{uri: 'https://i.guim.co.uk/img/media/6dd47064b1e15e9311d44de75c3e760c3755bd9f/0_0_3000_1801/master/3000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=13bacf77caf682b823d29036cf642b3f'}}
                                        style ={{width: 130, height: 100,borderRadius:30}}/>
                                    <View style ={{paddingBottom: 20 }}></View>
                                    <Text style ={{
                                        textAlign:'left',
                                        color: '#000000',
                                        fontSize: 20,
                                        paddingBottom: 25
                                    }}> Free-roam navigation means that the robot is in full control of itself, it is 
                                    able to freely roam the enviornment and navigate users on itself without the assist
                                    of a user's control. 
                                    </Text>
                                    <View>
                                        <Pressable onPress={()=>{setShowModal(false)}} >
                                            <Icon name = "backspace" size={40} color='red'/>
                                         </Pressable>
                                     </View>
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