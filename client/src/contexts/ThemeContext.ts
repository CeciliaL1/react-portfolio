import { createContext } from "react";
import { ITheme, themes } from "../models/Theme";


interface IThemeContext {
    theme: ITheme;
    toggleTheme: () => void;
}


const defaultThemeContext: IThemeContext = {
    theme: themes.light,
    toggleTheme: () => {},
};


export const ThemeContext = createContext<IThemeContext>(defaultThemeContext);
