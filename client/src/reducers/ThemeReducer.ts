import { ITheme } from "../models/Theme";


export interface IActionTheme {
    type: ActionType;
    payload: ITheme; 
};

export enum ActionType {
    TOGGLED,
}


export const ThemeReducer = (theme: ITheme, action: IActionTheme):ITheme => {

    if (action.type === ActionType.TOGGLED) {

        return action.payload
    }
    return theme
}