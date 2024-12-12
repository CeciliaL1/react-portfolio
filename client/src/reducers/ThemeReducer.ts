import { ITheme } from "../models/Theme.ts";


export enum ActionType {
    TOGGLED = 'TOGGLED',
}


export interface IActionTheme {
    type: ActionType;
    payload: ITheme;
}

export const ThemeReducer = (theme: ITheme, action: IActionTheme): ITheme => {
    switch (action.type) {
        case ActionType.TOGGLED:
            return action.payload;
        default:
            return theme;
    }
};
