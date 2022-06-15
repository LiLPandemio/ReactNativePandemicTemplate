import { Text } from 'react-native-paper';
import { View } from 'react-native' //Basic react native components
import React, { useContext } from 'react' //React import
import ThemeChangeButtonCircle from '../components/organisms/ThemeChangeButtonCircle';
const Login = () => { //Template screen component
    return (
        <View>
            <ThemeChangeButtonCircle navigateTo={"ThemeRoom"}></ThemeChangeButtonCircle>
        </View>
    )
}

export default Login //Export the component to be used in the app