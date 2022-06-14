import React from 'react';
import { DarkTheme } from '../themes/themes';

export const ThemeContext = React.createContext({
    setTheme: () => { },
    Theme: DarkTheme,
});