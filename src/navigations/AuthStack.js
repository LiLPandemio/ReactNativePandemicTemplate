import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from "../screens/Login"
import ThemeRoom from '../screens/ThemeRoom';

const Stack = createStackNavigator();  //Creating the stack navigator.

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerShown={false}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ThemeRoom" component={ThemeRoom} />
        </Stack.Navigator>
    );
}

export default AuthStack