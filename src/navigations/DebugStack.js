/**
 * This file contains the stack navigator for debugging purposes. if debug mode is enabled you will use this stack by default. Check App.js to change this.
 */
import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Debug from "../screens/Dev/Debug"

const Stack = createStackNavigator();  //Creating the stack navigator.

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Debug"
            headerShown={false}
        >
            <Stack.Screen name="Debug" component={Debug} />
        </Stack.Navigator>
    );
}

export default AuthStack