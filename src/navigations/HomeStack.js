import { Text } from 'react-native-paper';
import { View } from 'react-native' //Basic react native components
import React from 'react' //React import
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; //Import the stack navigator
import Home from "../screens/Home" //Import the home screen for the stack navigator

const Stack = createStackNavigator();  //Creating the stack navigator.

function HomeStack() { //Home stack navigator component
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