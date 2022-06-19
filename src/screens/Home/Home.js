//Main components
import React, { useContext, useState, Component } from 'react' //React import
import { View } from 'react-native'

//Main styling library
import { useTheme, BottomNavigation, Text, Button } from 'react-native-paper'

//Easier way to use Icons
import SuperIcon from '../../components/atoms/SuperIcon'

import Template from '../Demo/Template';
import { useRoute, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthProvider, { AuthContext } from '../../contexts/AuthContext';


const Home = () => { //Template screen component
    return (
        <View style={{ flex: 1 }}>
            <MyNavigator></MyNavigator>
        </View>
    )
}

const DemoDummyScreen = () => {
    const [IsLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);
    return (
        <View>
            <Text>This is a dummy screen!</Text>
            <Button onPress={() => { setIsLoggedIn(false) }}>Log out!</Button>
        </View>
    )
}

const Tab = createBottomTabNavigator();
function MyNavigator() {
    const theme = useTheme()
    const screenOptions = {
        activeTintColor: theme.colors.primary,
        inactiveTintColor: '#cfcfcf',
        style: {
            height: 60,
            position: 'absolute',
            bottom: 15,
            left: 10,
            right: 10,
            padding: 5,
            paddingBottom: 7.5,
            borderRadius: 5,
            elevation: 4,
        },
        labelStyle: {
            fontSize: 12
        }
    }
    return (
        <Tab.Navigator tabBarShowLabel={false} screenOptions={screenOptions}>
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({ focused }) => (<SuperIcon color={focused ? theme.colors.primary : theme.colors.disabled} type="Entypo" name="circular-graph" size={22} />), }} name="Stories" component={Template} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({ focused }) => (<SuperIcon color={focused ? theme.colors.primary : theme.colors.disabled} type="Ionicons" name="chatbox" size={22} />), }} name="Chats" component={Template} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({ focused }) => (<SuperIcon color={focused ? theme.colors.primary : theme.colors.disabled} type="Feather" name="settings" size={22} />), }} name="Settings" component={DemoDummyScreen} />
        </Tab.Navigator>
    );
}

export default Home //Export the component to be used in the app