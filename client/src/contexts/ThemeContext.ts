import { createContext, useContext } from "react";
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


export const useTheme = () => {
    const context = useContext(ThemeContext);
    
   
    if (context === defaultThemeContext) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
};