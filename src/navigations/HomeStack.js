import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from "../screens/Home"

const Stack = createStackNavigator();  //Creating the stack navigator.

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerShown={false}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default HomeStack