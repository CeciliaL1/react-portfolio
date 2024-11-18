import { createContext } from "react";
import { ITheme, themes } from "../models/Theme";


interface IThemeContext {
    theme: ITheme;
    toggleTheme: ()=> void;
}


export const ThemeContext = createContext<IThemeContext>({
    theme: themes.light,
    toggleTheme: () => {
    }});