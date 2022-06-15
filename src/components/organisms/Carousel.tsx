import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Button, Text, FAB } from 'react-native-paper';
import { LightCandy, DarkCandy, DarkSea, DarkTheme, LightSea, LightTheme, Spotify } from '../../themes/themes'
import { ThemeContext } from '../../contexts/ThemeContext';

const Slide = (props: any) => {

    const { setTheme, Theme } = React.useContext(ThemeContext);
    const preferences = React.useMemo(
        () => ({
            setTheme,
            Theme,
        }),
        [setTheme, Theme]
    );

    const { title, theme } = props;

    return (
        <View style={{ backgroundColor: theme.colors.background, ...styles.slide }}>
            <Text theme={theme} style={{ ...styles.slideText }}>
                {title}
            </Text>
            <Button style={{ marginTop: 5 }} onPress={() => { }} mode='text' theme={theme}>Normal Button</Button>
            <Button style={{ marginTop: 5 }} onPress={() => { }} mode='outlined' theme={theme}>Outlined Button</Button>
            <Button style={{ marginTop: 5 }} onPress={() => { }} mode='contained' theme={theme}>Outlined Button</Button>
            <FAB
                theme={theme}
                icon="check"
                style={styles.fab}
                onPress={() => { setTheme(theme) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: '#4448',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#fcfcfc00',
        shadowOpacity: 1,
        marginTop: 10,
        height: '90%',
        shadowOffset: {
            width: 0,
            height: 5
        },
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    bullets: {
        position: 'absolute',
        marginLeft: "auto",
        marginRight: "auto",
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
        margin: 5,
        borderRadius: 10,
        left: 0, right: 0, bottom: -45, justifyContent: 'center', alignItems: 'center'
    },
    bullet: {
        paddingHorizontal: 5,
        fontSize: 20,
    },
    slide: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 10,
        flexBasis: '100%',
        flex: 1,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        height: "100%",
    },
    slideText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 20,
    },
});

export const Carousel = (props: any) => {

    const { setTheme, Theme } = React.useContext(ThemeContext);
    const preferences = React.useMemo(
        () => ({
            setTheme,
            Theme,
        }),
        [setTheme, Theme]
    );

    const { items, style } = props;
    const itemsPerInterval = props.itemsPerInterval === undefined
        ? 1
        : props.itemsPerInterval;

    const [interval, setInterval] = React.useState(1);
    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);

    const init = (width: number) => {
        // initialise width
        setWidth(width);
        // initialise total intervals
        const totalItems = items.length;
        setIntervals(Math.ceil(totalItems / itemsPerInterval));
    }

    const getInterval = (offset: any) => {
        for (let i = 1; i <= intervals; i++) {
            if (offset + 1 < (width / intervals) * i) {
                return i;
            }
            if (i == intervals) {
                return i;
            }
        }
    }

    let bullets = [];
    for (let i = 1; i <= intervals; i++) {
        bullets.push(
            <Text
                key={i}
                style={{
                    color: Theme.colors.primary,
                    ...styles.bullet,
                    opacity: interval === i ? 0.5 : 0.1
                }}
            >
                &bull;
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h) => init(w)}
                onScroll={data => {
                    setWidth(data.nativeEvent.contentSize.width);
                    setInterval(getInterval(data.nativeEvent.contentOffset.x));
                }}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast"
            >
                {items.map((item: any, index: number, theme: object) => {
                    return (
                        <Slide
                            key={index}
                            title={item.title}
                            theme={item.theme}
                        />
                    );
                })}
            </ScrollView>
            <View style={{ backgroundColor: Theme.colors.background, ...styles.bullets }}>
                {bullets}
            </View>
        </View>
    )
}

export default Carousel;