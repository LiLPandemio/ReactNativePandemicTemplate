import { Text, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native' //Basic react native components
import React, { useContext, useState } from 'react' //React import
import ThemeChangeButtonCircle from '../../components/organisms/ThemeChangeButtonCircle';
import AuthProvider, { AuthContext } from '../../contexts/AuthContext';


const Login = () => { //Template screen component
    const [IsLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);
    return (
        <KeyboardAvoidingView style={{ height: "100%" }}>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <Image style={styles.Logo} source={require('../../assets/images/logo.png')} ></Image>
                    <TextInput mode={"outlined"} style={styles.TextInput} label={"Username"}></TextInput>
                    <TextInput mode={"outlined"} style={styles.TextInput} label={"Password"}></TextInput>
                    <Button style={{ marginTop: 5 }} onPress={() => { }} mode='contained'>Login</Button>
                    <Button style={{ marginTop: 5 }} onPress={() => { setIsLoggedIn(true) }} mode='contained'>Debug force login</Button>
                    <Button style={{ marginTop: 5 }} onPress={() => { }} mode='outlined'>Forgot password</Button>
                    <ThemeChangeButtonCircle navigateTo={"ThemeRoom"}></ThemeChangeButtonCircle>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create(
    {
        Container: {
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            width: "100%",
            height: "85%",
        },
        Screen: {
            alignItems: 'flex-end',
            flex: 1,
            width: "100%",
            padding: 15
        },
        TextInput: {
            width: "100%",
        },
        Logo: {
            width: "100%",
            height: 100,
            resizeMode: 'contain',
            borderRadius: 5,
            marginBottom: 10
        }
    }
)
export default Login //Export the component to be used in the app