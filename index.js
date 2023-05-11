/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
//import * as functions from 'firebase-functions';
//import axios from 'axios';
//import { sendDataToCloudFunction } from './index';

// Call the function to send data to the Cloud Function
//sendDataToCloudFunction();

AppRegistry.registerComponent(appName, () => App);


// export const sendDataToCloudFunction = (data) => {
//     const cloudFunctionEndpoint = 'https://us-central1-491B-finalDatabase.cloudfunctions.net/Function';
//     axios.post(cloudFunctionEndpoint, data)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// };