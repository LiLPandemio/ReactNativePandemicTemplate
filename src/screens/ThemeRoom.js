/**
 * This screen is used to switch themes.
 * Inspired by https://betterprogramming.pub/build-an-image-carousel-in-react-native-5ce5d6b58e24
 */
import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'

import { ThemeContext } from '../contexts/ThemeContext'
import { LightCandy } from '../themes/themes'



const ThemeRoom = () => {

    const { setTheme, Theme } = React.useContext(ThemeContext);
    const preferences = React.useMemo(
        () => ({
            setTheme,
            Theme,
        }),
        [setTheme, Theme]
    );

    return (
        <View>
            <Text>ThemeRoom</Text>
        </View>
    )
}

export default ThemeRoom