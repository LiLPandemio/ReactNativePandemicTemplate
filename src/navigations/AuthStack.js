/**
 * This file contains the stack navigator for authentication. If user is not authenticated, this file will be used as main stack, else will be the home stack
 */
import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from "../screens/Auth/Login"
import ThemeRoom from '../screens/Demo/ThemeRoom';

const Stack = createStackNavigator();  //Creating the stack navigator.

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerShown={false}
        >
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ title: "Theme picker" }} name="ThemeRoom" component={ThemeRoom} />
        </Stack.Navigator>
    );
}

export default AuthStack