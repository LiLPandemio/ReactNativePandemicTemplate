import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Debug from "../screens/Debug"

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