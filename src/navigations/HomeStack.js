/**
 * This file contains the stack navigator for the main content. If user is authenticated, this file will be used as main stack, else will be the auth stack
 */
import { Text } from 'react-native-paper';
import { View } from 'react-native' //Basic react native components
import React from 'react' //React import
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; //Import the stack navigator
import Home from "../screens/Home/Home" //Import the home screen for the stack navigator

const Stack = createStackNavigator();  //Creating the stack navigator.

function HomeStack() { //Home stack navigator component
    const defaultOptions = {
        headerShown: false
    }
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerShown={false}
        >
            <Stack.Screen options={defaultOptions} name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default HomeStack