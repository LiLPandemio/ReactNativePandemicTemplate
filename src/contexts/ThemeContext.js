/**
 * This file contains a basic context providing a global state in form of theme so you can update the state everywhere. This get overriden if user has preferences saved. Check App.js on the project root
 */
import React from 'react';                              //Default react import
import { DarkTheme } from '../themes/themes';           //Import the DarkTheme

export const ThemeContext = React.createContext({       //Create a context that will be used to pass the theme to the components
    setTheme: () => { },                                //Create a setTheme function that will be used to set the theme
    Theme: DarkTheme,                                   //Create a Theme object that will contain the theme
});