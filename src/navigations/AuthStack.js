import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from "../screens/Login"

const Stack = createStackNavigator();  //Creating the stack navigator.

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerShown={false}
        >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default AuthStack