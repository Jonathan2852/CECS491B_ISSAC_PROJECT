/* eslint-disable react-native/no-inline-styles */
//The overall purpose of this file is to created joy sticks for the robot.
//These joysticks allow the bot to move from one destination to the next
// In order for this to be successful any device with bluetooth is able to control the bot.

import React from 'react';
import {Button, Text, View} from 'react-native';
import AxisPad from 'react-native-axis-pad';

//A class App is then defined, which extends the React.Component class and serves as the main component of the app.
//In the constructor, the state of the component is set to {gamepad: 'Not connected. Try pressing a key'}.
export default class Controller extends React.Component {
  constructor() {
    super();
    this.state = {gamepad: 'Not connected. Try pressing a key'};
  }
  //This method returns a view with two instances of the AxisPad component, each with its own event handler for the onValue event.
  //This event is triggered whenever the user moves the axis pad, and it provides the x and y values, which are between -1 and 1. These values are logged to the console whenever the event is triggered.
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}>
          <AxisPad
            resetOnRelease={true}
            autoCenter={true}
            onValue={({x, y}) => {
              // values are between -1 and 1
              console.log(x, y);
            }}
          />
          <AxisPad
            resetOnRelease={true}
            autoCenter={true}
            onValue={({x, y}) => {
              // values are between -1 and 1
              console.log(x, y);
            }}
          />
        </View>
        <Button
          title="Controller"
          onPress={() => {
            this.props.navigation.navigate('Controller'); //#FIXME!
          }}
        />
      </View>
    );
  }
}
