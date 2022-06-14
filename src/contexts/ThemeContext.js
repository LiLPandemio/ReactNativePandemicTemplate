import React from 'react';                              //Default react import
import { DarkTheme } from '../themes/themes';           //Import the DarkTheme

export const ThemeContext = React.createContext({       //Create a context that will be used to pass the theme to the components
    setTheme: () => { },                                //Create a setTheme function that will be used to set the theme
    Theme: DarkTheme,                                   //Create a Theme object that will contain the theme
});