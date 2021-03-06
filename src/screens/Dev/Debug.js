//THIS IS A DEBUG SCREEN, THE PURPOSE IS TO TEST THE COMPONENTS. AN EXAMPLE OF HOW TO CHANGE THE THEME IS ALSO HERE.
import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { LightCandy } from '../../themes/themes'
import { Button } from 'react-native-paper'

const Debug = () => {
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
            <Text>Debug</Text>
            <Button onPress={() => { setTheme(LightCandy) }}>Switch theme!</Button>
            <Button onPress={() => { console.log(Theme.themeName) }}>Check Theme Name</Button>
        </View>
    )
}

export default Debug