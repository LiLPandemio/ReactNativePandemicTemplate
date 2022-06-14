import { View, Text } from 'react-native'
import React from 'react'
import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * Use this function to log in.
 * @returns True or False
 */
export async function login(username, password) {
    /**
     * Type here your login logic. This is a placeholder function!
     */
    return false;
}

/**
 * Use this function to check the token status.
 * @returns True or False
 */
export async function checkTokenStatus() {
    /**
     * Type here your login logic. This is a placeholder function!
     */
    return false
}

export async function getToken() {
    const session = await EncryptedStorage.getItem("user_session");
    if (session !== undefined && session !== null) {
        //SESION HAS A TOKEN!, PROCEED TO VERIFY IT
        const sesdata = JSON.parse(session);
        let token = sesdata.token;
        return token;
    } else {
        return "NOT_FOUND"
    }
}

export async function saveToken(token) {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                token: token,
            })
        );

        // Token saved succesfully
    } catch (error) {
        // Error on saving token
    }
}

export async function removeToken() {
    try {
        await EncryptedStorage.removeItem("user_session");
        // Token removed succesfully
    } catch (error) {
        // Error on removing token
    }
}

export default login