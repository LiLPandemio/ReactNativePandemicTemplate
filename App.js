//Required by stack navigator
import 'react-native-gesture-handler';

//Basic react native components import
import React, { useEffect, useContext, useMemo } from 'react';
import { View } from "react-native"

//Container for handling gestures
import { NavigationContainer } from '@react-navigation/native';

//Theming libraries and themes
import { Provider as PaperProvider, DefaultTheme, Text, Button } from 'react-native-paper';
import { Spotify, LightTheme, DarkTheme, LightCandy, DarkCandy, LightSea, DarkSea } from './src/themes/themes'

//Contexts import
import ThemeProvider, { ThemeContext } from "./src/contexts/ThemeContext"
import AuthProvider, { AuthContext } from "./src/contexts/AuthContext"

//Navigators import
import AuthStack from './src/navigations/AuthStack';
import HomeStack from './src/navigations/HomeStack';
import DebugStack from './src/navigations/DebugStack';

//Splash screen shown while app is loading authentication status and preferences.
import Splash from "./src/screens/Splash"

import { login, checkTokenStatus } from './src/functions/auth';

const App = () => {
  const isDebugging = false; //Enabling this will redirect the app to the DebugStack.
  const [Theme, setTheme] = React.useState(DarkTheme);                      //Default theme will be DarkTheme, This state will define the app theme.
  const [isLoading, setIsLoading] = React.useState(true);                   //This will define loading status, when it's switched on or off it will show or not the Splash screen
  const [IsLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);         //A context that will define the authentication status, if false, will show auth stack, else will show home stack

  //Loads the token and shows the Splash until app is loaded
  React.useEffect(() => {
    async function checkToken() {
      let isTokenValid = await checkTokenStatus();
      if (isTokenValid) {
        setIsLoading(false);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    };
    checkToken();
  }, [])


  //*Memorize the functions to change the theme dynamically. This could be used anywhere in the project
  const userTheme = React.useMemo(
    () => ({
      setTheme,
      Theme,
    }),
    [setTheme, Theme]
  );
  //*Finish memorizing

  return (
    <ThemeContext.Provider value={userTheme}>{/* Contains the current theme */}
      <NavigationContainer theme={Theme}>{/* Contians the navigation, used to navigate between screens */}
        <AuthContext.Provider value={[IsLoggedIn, setIsLoggedIn]}>{/* Contians the Authentication context, used to define if user is logged in or not */}
          <PaperProvider theme={Theme}>{/* Contians the paper provider, used to theme paper components */}
            {isDebugging ? <DebugStack></DebugStack> : isLoading ? <Splash></Splash> : IsLoggedIn ? <HomeStack></HomeStack> : <AuthStack></AuthStack> /* Triple Ternary expression to control what stack to use or splash */}
          </PaperProvider>
        </AuthContext.Provider>
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}

function ContextedApp({ children }) {
  //With this context you can provide dynamic login stacks and screens.
  return (
    <AuthProvider>
      <App></App>
    </AuthProvider>
  )
}

export default ContextedApp