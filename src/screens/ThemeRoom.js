/**
 * This screen is used to switch themes.
 * Inspired by https://betterprogramming.pub/build-an-image-carousel-in-react-native-5ce5d6b58e24
 */
import { Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { LightCandy, DarkCandy, DarkSea, DarkTheme, LightSea, LightTheme, Spotify } from '../themes/themes'
import Carousel from '../components/organisms/Carousel';

// <Button onPress={() => { setTheme(LightCandy) }}>Set theme LightCandy</Button>


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
        <View style={styles.container}>

            <Text style={{ marginTop: 2, }}>
                Select a theme:
            </Text>

            <Carousel
                style='slide'
                items={[{
                    title: 'LightTheme',
                    theme: LightTheme
                }, {
                    title: 'DarkTheme',
                    theme: DarkTheme
                }, {
                    title: 'LightSea',
                    theme: LightSea
                }, {
                    title: 'DarkSea',
                    theme: DarkSea
                }, {
                    title: 'LightCandy',
                    theme: LightCandy
                }, {
                    title: 'DarkCandy',
                    theme: DarkCandy
                }, {
                    title: 'Spotify',
                    theme: Spotify
                }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
});

export default ThemeRoom