import axios from 'axios';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const CloudFunctionExample = () => {
    const [responseData, setResponseData] = useState(null);

    const handleSendRequest = async () => {
        try {
            const requestData = {
                // Your data here...
            };
            const response = await axios.post(
                'https://us-central1-491B-finalDatabase.cloudfunctions.net/function',
                requestData
            );
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <Button title="Send Request" onPress={handleSendRequest} />
            {responseData && (
                <View>
                    <Text>Response Data:</Text>
                    <Text>{JSON.stringify(responseData)}</Text>
                </View>
            )}
        </View>
    );
};

export default CloudFunctionExample;
































// // main.js
// import { sendDataToCloudFunction } from './index';

// const requestData = {
//     simulationData: {
//         // This is where you could include data from Webots, such as position and orientation of objects in the simulation
//         robotPosition: {
//             x: 1,
//             y: 2,
//             z: 3
//         },
//         objectPosition: {
//             x: 4,
//             y: 5,
//             z: 6
//         }
//     },
//     userData: {
//         // This is where you could include data from the user, such as their name or preferences
//         userName: "Jack Green",
//         userPreferences: {
//             colorScheme: "dark",
//             language: "English"
//         }
//     }
// };

// sendDataToCloudFunction(requestData);
