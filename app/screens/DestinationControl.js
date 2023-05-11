/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { StyleSheet, Text,View, Pressable,Image, Modal, ScrollView, ImageBackground} from "react-native";
import {COLORS, SIZES} from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DestinationControl = ({navigation}) =>{
    const[actionTriggered,setActionTriggered] =  useState(false)
    const[showModal, setShowModal] = useState(false);
    const image = {uri: 'https://raw.githubusercontent.com/daxile6/CECS491B_ISSAC_PROJECT/main/app/assets/images/genericbackground.png'}

    return (
    <View style = {styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        
            {/* Creates the title */}
            <View style= {styles.title_container}>
                <Text style= {{
                    fontWeight: 'bold',
                    fontSize: 40,
                    paddingTop: 30,
                    paddingBottom: 30,
                    color: '#FAEBEFFF',
                    }}>Destination Control</Text>
            </View>
            {/* Creates the view for the direction */}
            <View style ={{
                // alignItems: 'center',
                // paddingBottom: 15,
                // borderColor: '#FFFFFF',
                // borderWidth: 3,
                // borderRadius: 6,
                // backgroundColor: '#C3E3EB',
                // width: 400,
                // marginLeft: 7
                

            }}>
                {/* <Text style={{color: '#000000', fontWeight: 'bold'}}>Choose any of the following location to direct the bot.</Text> */}
            </View>

            {/* Spacing for the buttons */}
            <View style = {{paddingBottom: 40 }}></View>
            
            <ScrollView>
            {/* Creates the first row for free roam and the question */}
            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Icon name = 'fish' size={50} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 10,
                        color: '#FAEBEFFF'

                    }}> Aquarium </Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable onPress={()=>{
                                setShowModal(true)
                                setActionTriggered('AQUARIUM')
                                }}
                                style = {styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>

            </View>
          
            <View style = {{paddingBottom: 50 }}></View>
            
            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Icon name = 'school' size={38} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 10,
                        color: '#FAEBEFFF'

                    }}>Academy Center</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable onPress={()=>{
                                setShowModal(true)
                                setActionTriggered('ACADEMYCENTER')
                                }}
                                style = {styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>

            </View>
          
            <View style = {{paddingBottom: 50 }}></View>

            <View style ={{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                    <Icon name = 'theater' size={40} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 10,
                        color: '#FAEBEFFF'

                    }}>Theatre Center </Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable onPress={()=>{
                                setShowModal(true)
                                setActionTriggered('THEATRECENTER')
                                }}
                                style = {styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>

            </View>
          
            <View style = {{paddingBottom: 50 }}></View>

             {/* Creates the second row for free manuel and the question*/}
            <View style = {{flexDirection: 'row'}}>
                <Pressable style ={styles.option_container}>
                <Icon name = 'google-downasaur' size={40} color="#000000"/>
                    <Text style = {{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#FAEBEFFF',
                        padding: 10

                    }}>Dinosaur Exhibit</Text>
                </Pressable>
                <View style = {{paddingRight: 10 }}></View>
                <Pressable onPress={()=>{
                                setShowModal(true)
                                setActionTriggered('DINOSAUR')
                                }} 
                                style ={styles.help_container}>
                    <Icon name = 'help-box' size ={50} color = '#000000'/>
                </Pressable>
            </View>
            </ScrollView>

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
                {actionTriggered === 'AQUARIUM' ? 
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
                                    }}>Aquarium</Text>

                                    <Image source ={{uri: 'https://www.frostscience.org/wp-content/uploads/2020/05/Untitled-design-22.jpg'}}
                                        style ={{width: 300, height: 200,borderRadius:30}}/>
                                    <View style ={{paddingBottom: 20 }}></View>
                                    <Text style ={{
                                        textAlign:'left',
                                        color: '#000000',
                                        fontSize: 20,
                                        paddingBottom: 25
                                    }}> The Aquarium offers full access to see all types of fishes! 
                                    </Text>
                                    <View>
                                        <Pressable onPress={()=>{setShowModal(false)}} >
                                            <Icon name = "backspace" size={40} color='red'/>
                                         </Pressable>
                                     </View>
                            </View>
                        </View>:
                    actionTriggered === 'ACADEMYCENTER' ?
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
                                }}>ACADEMY CENTER</Text>

                                <Image source ={{uri: 'https://www.calacademy.org/sites/default/files/styles/manual_crop_large_1920x970/public/assets/images/exhibits/col_2000x1333_aerial-tiger-viewer.jpg?itok=phZNx4H7&c=56ed275173a0287dd056682c9bdc26c1'}}
                                    style ={{width: 300, height: 200,borderRadius:30}}/>
                                <View style ={{paddingBottom: 20 }}></View>
                                <Text style ={{
                                    textAlign:'left',
                                    color: '#000000',
                                    fontSize: 20,
                                    paddingBottom: 25
                                }}> This center offers kids a chance to get full on experience of the museum.
                                </Text>
                                <View>
                                    <Pressable onPress={()=>{setShowModal(false)}} >
                                        <Icon name = "backspace" size={40} color='red'/>
                                     </Pressable>
                                 </View>
                        </View>
                        </View>:
                        actionTriggered === 'THEATRECENTER' ?
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
                                    }}>Theatre CENTER</Text>
    
                                    <Image source ={{uri: 'https://eventective-media.azureedge.net/2391337_lg.jpg'}}
                                        style ={{width: 300, height: 200,borderRadius:30}}/>
                                    <View style ={{paddingBottom: 20 }}></View>
                                    <Text style ={{
                                        textAlign:'left',
                                        color: '#000000',
                                        fontSize: 20,
                                        paddingBottom: 25
                                    }}> This center allows kids to see the animal in live action.
                                    </Text>
                                    <View>
                                        <Pressable onPress={()=>{setShowModal(false)}} >
                                            <Icon name = "backspace" size={40} color='red'/>
                                         </Pressable>
                                     </View>
                            </View>
                            </View>:
                            actionTriggered === 'DINOSAUR' ?
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
                                        }}>Dinosaur Exhibit</Text>
        
                                        <Image source ={{uri: 'https://www.ioes.ucla.edu/wp-content/uploads/nhmla_pic.jpg'}}
                                            style ={{width: 300, height: 200,borderRadius:30}}/>
                                        <View style ={{paddingBottom: 20 }}></View>
                                        <Text style ={{
                                            textAlign:'left',
                                            color: '#000000',
                                            fontSize: 20,
                                            paddingBottom: 25
                                        }}> This center allows kids to see fossils.
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
            
        </ImageBackground>                                   
        </View>
    

        
    )

}
export default DestinationControl;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex:1
    },
    title_container: {
        alignItems: 'center',
        paddingTop: 40,
        
    },
    option_container:  {
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 14,
        height: 70,
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
        height: 70,
        width: 100,
        backgroundColor: '#D4AF37'
    },
    image: {
        flex: 1.05,
        width: '100%',
        height: '100%',
    },
})
    




