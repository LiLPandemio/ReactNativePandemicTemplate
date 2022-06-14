import merge from 'deepmerge';

import {DarkTheme as NavigationDarkTheme,DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper';

//Mixing libraries
export const Spotify = merge(PaperDarkTheme, NavigationDarkTheme);
export const LightTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
export const DarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
export const LightCandy = merge(PaperDefaultTheme, NavigationDefaultTheme);
export const DarkCandy = merge(PaperDarkTheme, NavigationDarkTheme);
export const LightSea = merge(PaperDefaultTheme, NavigationDefaultTheme);
export const DarkSea = merge(PaperDarkTheme, NavigationDarkTheme);

//Custimizing light theme
LightTheme.themeName = "Classic Light"
LightTheme.colors.disabled = '#888';
LightTheme.roundness = 20;
LightTheme.colors.primary = '#a84848';
LightTheme.colors.text = '#000';
LightTheme.colors.secondary = '#a84848';
LightTheme.colors.background = '#dddf';
LightTheme.colors.widgetBG = '#ffff';
LightTheme.colors.ok = '#34803d';
LightTheme.colors.error = '#a84848';
LightTheme.colors.warning = '#cfcfcfff';
LightTheme.colors.info = '#cfcfcfff';
LightTheme.colors.lightText = '#cfcfcfff';
LightTheme.colors.leftChatBubbleBG = '#b887e633';

//Custimizing dark theme
DarkTheme.themeName = "Classic Dark"
DarkTheme.colors.disabled = '#888';
DarkTheme.roundness = 20;
DarkTheme.colors.primary = '#a84848';
DarkTheme.colors.text = '#fff';
DarkTheme.colors.secondary = '#5700a8';
DarkTheme.colors.background = '#292929ff';
DarkTheme.colors.widgetBG = '#1f1f1f';
DarkTheme.colors.ok = '#34803d';
DarkTheme.colors.error = '#a84848';
DarkTheme.colors.warning = '#ffcd6c';
DarkTheme.colors.info = '#31639c';
DarkTheme.colors.lightText = '#cfcfcfff';
DarkTheme.colors.leftChatBubbleBG = '#ffffff88';

//Light Candy theme
LightCandy.themeName = "Light Candy";
LightCandy.colors.disabled = '#888';
LightCandy.roundness = 20;
LightCandy.colors.primary = '#ea899a';
LightCandy.colors.text = '#000';
LightCandy.colors.secondary = '#ea899a';
LightCandy.colors.background = '#dddf';
LightCandy.colors.widgetBG = '#ffff';
LightCandy.colors.ok = '#34803d';
LightCandy.colors.error = '#a84848';
LightCandy.colors.warning = '#cfcfcfff';
LightCandy.colors.info = '#cfcfcfff';
LightCandy.colors.lightText = '#cfcfcfff';
LightCandy.colors.leftChatBubbleBG = '#b887e633';

//Dark Candy theme
DarkCandy.themeName = "Dark candy"
DarkCandy.colors.disabled = '#888';
DarkCandy.roundness = 20;
DarkCandy.colors.primary = '#ea899a';
DarkCandy.colors.text = '#fff';
DarkCandy.colors.secondary = '#5700a8';
DarkCandy.colors.background = '#292929ff';
DarkCandy.colors.widgetBG = '#1f1f1f';
DarkCandy.colors.ok = '#34803d';
DarkCandy.colors.error = '#a84848';
DarkCandy.colors.warning = '#ffcd6c';
DarkCandy.colors.info = '#31639c';
DarkCandy.colors.lightText = '#cfcfcfff';
DarkCandy.colors.leftChatBubbleBG = '#ffffff88';

//Light Candy theme
LightSea.themeName = "Light sea"
LightSea.colors.disabled = '#888';
LightSea.roundness = 20;
LightSea.colors.primary = '#2d567c';
LightSea.colors.text = '#000';
LightSea.colors.secondary = '#2d567c';
LightSea.colors.background = '#dddf';
LightSea.colors.widgetBG = '#ffff';
LightSea.colors.ok = '#34803d';
LightSea.colors.error = '#2d567c';
LightSea.colors.warning = '#cfcfcfff';
LightSea.colors.info = '#cfcfcfff';
LightSea.colors.lightText = '#cfcfcfff';
LightSea.colors.leftChatBubbleBG = '#b887e633';

//Dark Candy theme
DarkSea.themeName = "Dark sea"
DarkSea.colors.disabled = '#888';
DarkSea.roundness = 20;
DarkSea.colors.primary = '#2d567c';
DarkSea.colors.text = '#fff';
DarkSea.colors.secondary = '#5700a8';
DarkSea.colors.background = '#292929ff';
DarkSea.colors.widgetBG = '#1f1f1f';
DarkSea.colors.ok = '#34803d';
DarkSea.colors.error = '#a84848';
DarkSea.colors.warning = '#ffcd6c';
DarkSea.colors.info = '#31639c';
DarkSea.colors.lightText = '#cfcfcfff';
DarkSea.colors.leftChatBubbleBG = '#ffffff88';

//Dark Candy theme
Spotify.themeName = "Spotify"
Spotify.colors.disabled = '#888';
Spotify.roundness = 20;
Spotify.padding = 10;
Spotify.colors.primary = '#34803d';
Spotify.colors.text = '#fff';
Spotify.colors.secondary = '#5700a8';
Spotify.colors.background = '#292929ff';
Spotify.colors.widgetBG = '#1f1f1f';
Spotify.colors.ok = '#34803d';
Spotify.colors.error = '#a84848';
Spotify.colors.warning = '#ffcd6c';
Spotify.colors.info = '#31639c';
Spotify.colors.lightText = '#cfcfcfff';
Spotify.colors.leftChatBubbleBG = '#ffffff88';
