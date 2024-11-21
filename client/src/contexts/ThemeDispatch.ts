import { createContext, Dispatch } from "react";
import { ITheme } from "../models/Theme";
import { ActionType } from "../reducers/ThemeReducer";

interface IActionTheme {
    type: ActionType;
    payload: ITheme;
}


export const ThemeDispatch = createContext<Dispatch<IActionTheme> | undefined>(undefined)