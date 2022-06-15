import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import SuperIcon from "../atoms/SuperIcon"
import { useNavigation } from '@react-navigation/native'

const ThemeChangeButtonCircle = (props) => {
    const newScreen = props.navigateTo; //Get the new screen name.
    const navigation = useNavigation(); //Object used to navigate to a new location.
    return (
        <TouchableRipple borderless onPress={() => { navigation.navigate(newScreen); /* Navigating to newScreen */ }} style={style.ButtonDesign}>
            <SuperIcon size={48} name={"color-palette"} type={"ionicon"} />
        </TouchableRipple>
    )
}

const style = StyleSheet.create(
    {
        ButtonDesign: {
            width: 50,
            height: 50,
            borderRadius: 48,
        }
    }
)

export default ThemeChangeButtonCircle