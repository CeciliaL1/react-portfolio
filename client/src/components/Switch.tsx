import { ThemeContext } from "../contexts/ThemeContext.ts";
import { ITheme, themes } from "../models/Theme.ts";
import { useContext } from "react";

interface ISwitchProps {
  switchOn: ITheme;
  click: () => void;
}

export const Switch = ({ switchOn, click }: ISwitchProps) => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    return;
  }
  return (
    <button
      onClick={click}
      className="switch-theme"
      style={{ backgroundColor: theme.theme.primaryColor }}
    >
      <i
        className={
          switchOn.name === themes.light.name
            ? "fa-regular fa-sun"
            : "fa-solid fa-moon"
        }
      ></i>
    </button>
  );
};
